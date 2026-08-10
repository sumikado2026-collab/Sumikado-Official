// Translation data is loaded by translations.js before this behavior module.
const translations = window.translations;

function setLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang;
    localStorage.setItem('selectedLanguage', lang);
    
    // Update active class in dropdown menu
    const dropdownLinks = document.querySelectorAll('.lang-dropdown-content a');
    dropdownLinks.forEach(link => {
        if (link.dataset.language === lang) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            const target = el.dataset.i18nTarget;
            if (target) {
                el.setAttribute(target, translations[lang][key]);
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    const page = document.body.dataset.page;
    const pageTitle = translations[lang]?.[`page-${page}-title`];
    const pageDescription = translations[lang]?.[`page-${page}-desc`];
    if (pageTitle) document.title = pageTitle;
    if (pageDescription) document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription);

    document.querySelectorAll('.nav-brand').forEach((brand) => {
        brand.setAttribute('aria-label', translations[lang]['brand-home-label']);
        brand.querySelector('img')?.setAttribute('alt', translations[lang]['brand-logo-alt']);
    });
    document.querySelectorAll('.modal-close').forEach((button) => {
        button.setAttribute('aria-label', translations[lang]['modal-close']);
    });
    document.querySelectorAll('.teaser-item .status').forEach((status) => {
        status.textContent = translations[lang]['coming-soon'];
    });

    // Keep the primary story order consistent across every page: PRODUCTS → BRAND CONCEPTS.
    const nav = document.getElementById('navLinks');
    const productsLink = nav?.querySelector('[data-i18n="nav-product"]')?.parentElement;
    const conceptsLink = nav?.querySelector('[data-i18n="nav-about"]')?.parentElement;
    if (nav && productsLink && conceptsLink) nav.insertBefore(productsLink, conceptsLink);

    const recipeModal = document.getElementById('recipeModal');
    if (recipeModal && !recipeModal.classList.contains('hidden') && recipeModal.dataset.currentRecipe) {
        loadRecipeData(recipeModal.dataset.currentRecipe);
    }
    const lessonModal = document.getElementById('lessonModal');
    if (lessonModal && !lessonModal.classList.contains('hidden') && lessonModal.dataset.currentLesson) {
        loadLessonData(lessonModal.dataset.currentLesson);
    }

    setProductFeatureVideoLanguage(lang);

    closeLanguageMenu();
    closeNavigationMenu();
}

function closeNavigationMenu() {
    document.getElementById('navLinks')?.classList.remove('is-open');
    document.querySelector('[data-action="toggle-nav"]')?.setAttribute('aria-expanded', 'false');
}

function toggleNavigationMenu() {
    const menu = document.getElementById('navLinks');
    const toggle = document.querySelector('[data-action="toggle-nav"]');
    if (!menu || !toggle) return;

    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    closeLanguageMenu();
}

function closeLanguageMenu() {
    document.querySelector('.lang-dropdown')?.classList.remove('is-open');
    document.getElementById('langSelectBtn')?.setAttribute('aria-expanded', 'false');
}

function toggleLanguageMenu() {
    const dropdown = document.querySelector('.lang-dropdown');
    const toggle = document.getElementById('langSelectBtn');
    if (!dropdown || !toggle) return;

    const isOpen = dropdown.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) closeNavigationMenu();
}

let heroCarouselIndex = 0;
let heroCarouselTimer = null;

function showHeroCarouselSlide(index) {
    const carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
    const dots = Array.from(carousel.querySelectorAll('[data-carousel-index]'));
    if (!slides.length) return;

    heroCarouselIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === heroCarouselIndex;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
    });
    dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === heroCarouselIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-current', String(isActive));
    });
}

function stopHeroCarousel() {
    if (heroCarouselTimer) clearInterval(heroCarouselTimer);
    heroCarouselTimer = null;
}

function startHeroCarousel() {
    const carousel = document.querySelector('[data-carousel]');
    if (!carousel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    stopHeroCarousel();
    heroCarouselTimer = setInterval(() => showHeroCarouselSlide(heroCarouselIndex + 1), 5000);
}

function setupProductRailProgress() {
    const rail = document.querySelector('.product-editorial-list');
    const progress = document.querySelector('[data-product-rail-progress]');
    const controls = progress ? Array.from(progress.querySelectorAll('[data-product-rail-index]')) : [];
    const previousButton = document.querySelector('[data-action="product-rail-prev"]');
    const nextButton = document.querySelector('[data-action="product-rail-next"]');
    if (!rail || !progress || !controls.length) return;

    const getActiveIndex = () => {
        const overflow = rail.scrollWidth - rail.clientWidth;
        if (overflow <= 1) return 0;
        return Math.round((rail.scrollLeft / overflow) * (controls.length - 1));
    };

    const goToIndex = (index) => {
        const overflow = rail.scrollWidth - rail.clientWidth;
        const targetIndex = Math.max(0, Math.min(controls.length - 1, index));
        rail.scrollTo({ left: overflow * (targetIndex / (controls.length - 1)), behavior: 'smooth' });
    };

    const update = () => {
        const overflow = rail.scrollWidth - rail.clientWidth;
        const isScrollable = overflow > 1;
        progress.classList.toggle('is-scrollable', isScrollable);
        if (!isScrollable) return;

        const activeIndex = getActiveIndex();

        controls.forEach((control, index) => {
            const isActive = index === activeIndex;
            control.classList.toggle('is-active', isActive);
            control.setAttribute('aria-current', String(isActive));
        });

        if (previousButton) previousButton.disabled = activeIndex === 0;
        if (nextButton) nextButton.disabled = activeIndex === controls.length - 1;
    };

    controls.forEach((control) => {
        control.addEventListener('click', () => {
            goToIndex(Number(control.dataset.productRailIndex));
        });
    });

    previousButton?.addEventListener('click', () => goToIndex(getActiveIndex() - 1));
    nextButton?.addEventListener('click', () => goToIndex(getActiveIndex() + 1));

    rail.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.requestAnimationFrame(update);
}

function playProductFeatureVideo(video) {
    video.muted = true;
    video.play().catch(() => {
        // Native controls remain available if a browser blocks autoplay.
    });
}

function setProductFeatureVideoLanguage(lang) {
    document.querySelectorAll('.product-feature-video').forEach((video) => {
        const source = video.querySelector('source');
        const nextSource = lang === 'ja' ? video.dataset.videoSourceJa : video.dataset.videoSourceDefault;
        if (!source || !nextSource || source.getAttribute('src') === nextSource) return;

        video.pause();
        source.setAttribute('src', nextSource);
        video.load();
    });
}

function setupProductFeatureVideos() {
    document.querySelectorAll('.product-feature-video').forEach((video) => {
        video.muted = true;
        video.addEventListener('loadeddata', () => playProductFeatureVideo(video));
        if (video.readyState >= HTMLMediaElement.HAVE_METADATA) playProductFeatureVideo(video);
        video.load();
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // Language i18n Logic
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = navigator.language.toLowerCase();
    const initialLang = savedLang || (browserLang.startsWith('ja') ? 'ja' : browserLang.startsWith('en') ? 'en' : 'zh');
    setLanguage(initialLang);

    // Central interaction wiring. HTML declares data-action; behavior stays here.
    document.addEventListener('click', (e) => {
        if (e.target.closest('#navLinks a')) closeNavigationMenu();
        if (!e.target.closest('.lang-dropdown')) closeLanguageMenu();
        if (!e.target.closest('.nav-container')) closeNavigationMenu();

        const target = e.target.closest('[data-action]');
        if (!target) return;

        const action = target.dataset.action;
        if (action === 'set-language') {
            e.preventDefault();
            setLanguage(target.dataset.language);
        } else if (action === 'toggle-language-menu') {
            e.preventDefault();
            toggleLanguageMenu();
        } else if (action === 'toggle-nav') {
            e.preventDefault();
            toggleNavigationMenu();
        } else if (action === 'carousel-prev') {
            showHeroCarouselSlide(heroCarouselIndex - 1);
            startHeroCarousel();
        } else if (action === 'carousel-next') {
            showHeroCarouselSlide(heroCarouselIndex + 1);
            startHeroCarousel();
        } else if (action === 'carousel-go') {
            showHeroCarouselSlide(Number(target.dataset.carouselIndex));
            startHeroCarousel();
        } else if (action === 'open-recipe') {
            toggleRecipeModal(target.dataset.recipe);
        } else if (action === 'open-lesson') {
            toggleLessonModal(target.dataset.lesson);
        } else if (action === 'close-recipe') {
            toggleRecipeModal();
        } else if (action === 'close-lesson') {
            toggleLessonModal();
        }
    });

    document.querySelectorAll('[data-action="open-lesson"]').forEach((item) => {
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
    });

    ['recipeModal', 'lessonModal'].forEach((id) => {
        const modal = document.getElementById(id);
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target !== modal) return;
                id === 'recipeModal' ? toggleRecipeModal() : toggleLessonModal();
            });
        }
    });

    // 1. Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    window.addEventListener('resize', closeNavigationMenu);

    // 2. Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up-scroll, .fade-in-scroll');
    animatedElements.forEach(el => observer.observe(el));

    setupProductRailProgress();
    setupProductFeatureVideos();

    const heroCarousel = document.querySelector('[data-carousel]');
    if (heroCarousel) {
        showHeroCarouselSlide(0);
        startHeroCarousel();
        heroCarousel.querySelector('[data-action="carousel-prev"]')?.addEventListener('click', (e) => {
            e.stopPropagation();
            showHeroCarouselSlide(heroCarouselIndex - 1);
            startHeroCarousel();
        });
        heroCarousel.querySelector('[data-action="carousel-next"]')?.addEventListener('click', (e) => {
            e.stopPropagation();
            showHeroCarouselSlide(heroCarouselIndex + 1);
            startHeroCarousel();
        });
        heroCarousel.addEventListener('mouseenter', stopHeroCarousel);
        heroCarousel.addEventListener('mouseleave', startHeroCarousel);
        heroCarousel.addEventListener('focusin', stopHeroCarousel);
        heroCarousel.addEventListener('focusout', (e) => {
            if (!heroCarousel.contains(e.relatedTarget)) startHeroCarousel();
        });
    }

    // 3. Close open menus and content modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNavigationMenu();
            closeLanguageMenu();
            if (!document.getElementById('recipeModal')?.classList.contains('hidden')) {
                toggleRecipeModal();
            }
            if (!document.getElementById('lessonModal')?.classList.contains('hidden')) {
                toggleLessonModal();
            }
        }
    });
});
