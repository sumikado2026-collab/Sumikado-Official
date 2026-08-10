const fs = require('fs');
const path = require('path');
const vm = require('vm');

const siteRoot = path.resolve(__dirname, '..');
const failures = [];

function requireFile(relativePath) {
    const absolutePath = path.join(siteRoot, relativePath);
    if (!fs.existsSync(absolutePath)) {
        failures.push(`Missing file: ${relativePath}`);
    }
    return absolutePath;
}

function checkJavaScript(relativePath) {
    const absolutePath = requireFile(relativePath);
    if (!fs.existsSync(absolutePath)) return;

    try {
        new vm.Script(fs.readFileSync(absolutePath, 'utf8'), { filename: relativePath });
    } catch (error) {
        failures.push(`JavaScript syntax error in ${relativePath}: ${error.message}`);
    }
}

function checkLocalReference(reference) {
    if (/^(https?:|#|data:|mailto:|javascript:)/i.test(reference)) return;
    requireFile(reference.split(/[?#]/)[0]);
}

function collectReferences(contents, pattern) {
    return [...contents.matchAll(pattern)].map((match) => match[1]);
}

const htmlPages = [
    'index.html',
    'science.html',
    'kitchen.html',
    'beautology.html',
    'academy-fatigue.html',
    'academy-lactation.html',
    'academy-yin-fire.html',
    'academy-fatigue-en.html',
    'academy-lactation-en.html',
    'academy-yin-fire-en.html',
    'academy-fatigue-ja.html',
    'academy-lactation-ja.html',
    'academy-yin-fire-ja.html'
];
const articlePages = htmlPages.filter((relativePath) => relativePath.startsWith('academy-'));
const stylePath = requireFile('style.css');
let translationData = null;

['translations.js', 'modals.js', 'app.js', 'academy.js'].forEach(checkJavaScript);
const robotsPath = requireFile('robots.txt');
const sitemapPath = requireFile('sitemap.xml');

const translationPath = path.join(siteRoot, 'translations.js');
if (fs.existsSync(translationPath)) {
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync(translationPath, 'utf8'), sandbox, { filename: 'translations.js' });
    translationData = sandbox.window.translations;
}

htmlPages.forEach((relativePath) => {
    const htmlPath = requireFile(relativePath);
    if (!fs.existsSync(htmlPath)) return;
    const html = fs.readFileSync(htmlPath, 'utf8');
    collectReferences(html, /(?:src|href)=["']([^"']+)["']/g).forEach(checkLocalReference);
    if (translationData) {
        const keys = collectReferences(html, /data-i18n=["']([^"']+)["']/g);
        Object.keys(translationData).forEach((language) => {
            keys.forEach((key) => {
                if (!(key in translationData[language])) {
                    failures.push(`Missing ${language} translation for ${key} in ${relativePath}`);
                }
            });
        });
    }
});

articlePages.forEach((relativePath) => {
    const absolutePath = path.join(siteRoot, relativePath);
    if (!fs.existsSync(absolutePath)) return;
    const html = fs.readFileSync(absolutePath, 'utf8');
    const headings = html.match(/<h1\b/gi) || [];

    const jsonLd = html.match(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);

    if (!/<article\b/i.test(html)) failures.push(`Missing article landmark in ${relativePath}`);
    if (headings.length !== 1) failures.push(`Expected one H1 in ${relativePath}, found ${headings.length}`);
    if (!/<meta\s+name=["']description["']/i.test(html)) failures.push(`Missing description meta in ${relativePath}`);
    if (!/<link\s+rel=["']canonical["']/i.test(html)) failures.push(`Missing canonical URL in ${relativePath}`);
    if (!jsonLd) {
        failures.push(`Missing Article JSON-LD in ${relativePath}`);
    } else {
        try {
            const structuredData = JSON.parse(jsonLd[1]);
            if (structuredData['@type'] !== 'Article') failures.push(`Expected Article JSON-LD in ${relativePath}`);
        } catch (error) {
            failures.push(`Invalid Article JSON-LD in ${relativePath}: ${error.message}`);
        }
    }
    if (!/<html\s+lang=["'][^"']+["']/i.test(html)) failures.push(`Missing document language in ${relativePath}`);
    if (!/academy-sources/i.test(html)) failures.push(`Missing visible source section in ${relativePath}`);
    if ((html.match(/hreflang=/gi) || []).length < 4) failures.push(`Missing complete hreflang set in ${relativePath}`);
});

if (fs.existsSync(robotsPath)) {
    const robots = fs.readFileSync(robotsPath, 'utf8');
    if (!/Sitemap:\s*https:\/\/www\.sumikado-official\.com\/sitemap\.xml/i.test(robots)) {
        failures.push('robots.txt does not declare the production sitemap');
    }
}

if (fs.existsSync(sitemapPath)) {
    const sitemap = fs.readFileSync(sitemapPath, 'utf8');
    articlePages.forEach((relativePath) => {
        if (!sitemap.includes(`https://www.sumikado-official.com/${relativePath}`)) {
            failures.push(`Sitemap is missing ${relativePath}`);
        }
    });
}

const wrongAcademyName = String.fromCodePoint(0x7f8e, 0x9e97, 0x5b78, 0x5802);
htmlPages.forEach((relativePath) => {
    const absolutePath = path.join(siteRoot, relativePath);
    if (fs.existsSync(absolutePath) && fs.readFileSync(absolutePath, 'utf8').includes(wrongAcademyName)) {
        failures.push(`Wrong academy name found in ${relativePath}`);
    }
});

if (fs.existsSync(stylePath)) {
    const stylesheet = fs.readFileSync(stylePath, 'utf8');
    collectReferences(stylesheet, /@import\s+url\(["']?([^"')]+)["']?\)/g).forEach(checkLocalReference);
}

['modals.js'].forEach((relativePath) => {
    const absolutePath = path.join(siteRoot, relativePath);
    if (!fs.existsSync(absolutePath)) return;
    collectReferences(fs.readFileSync(absolutePath, 'utf8'), /['"](assets\/[^'"]+)['"]/g).forEach(checkLocalReference);
});

if (failures.length) {
    console.error('Website validation failed:');
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
}

console.log('Website validation passed.');
