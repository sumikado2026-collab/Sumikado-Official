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

const htmlPages = ['index.html', 'science.html', 'kitchen.html', 'beautology.html'];
const stylePath = requireFile('style.css');
let translationData = null;

['translations.js', 'modals.js', 'app.js'].forEach(checkJavaScript);

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
