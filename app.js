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
            if (el.dataset.i18nTarget === 'aria-label') {
                el.setAttribute('aria-label', translations[lang][key]);
            } else if (el.tagName === 'INPUT' && el.dataset.i18nTarget === 'placeholder') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Hide overlay if it exists
    const overlay = document.getElementById('languageOverlay');
    if (overlay) {
        overlay.classList.add('fade-out');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }
    
    document.body.style.overflow = '';
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

document.addEventListener('DOMContentLoaded', () => {

    // Language i18n Logic
    const savedLang = localStorage.getItem('selectedLanguage');
    const overlay = document.getElementById('languageOverlay');
    
    if (savedLang) {
        setLanguage(savedLang);
        if (overlay) overlay.style.display = 'none';
    } else {
        if (overlay) {
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

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
        } else if (action === 'open-recipe') {
            toggleRecipeModal(target.dataset.recipe);
        } else if (action === 'open-lesson') {
            toggleLessonModal(target.dataset.lesson);
        } else if (action === 'close-recipe') {
            toggleRecipeModal();
        } else if (action === 'close-lesson') {
            toggleLessonModal();
        } else if (action === 'close-member') {
            closeMemberModal();
        } else if (action === 'switch-member-tab') {
            switchTab(target.dataset.tab);
        } else if (action === 'member-login') {
            loginWith(target.dataset.provider);
        } else if (action === 'member-register') {
            registerWith(target.dataset.provider);
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

    document.getElementById('loginForm')?.addEventListener('submit', handleEmailLogin);
    document.getElementById('registerForm')?.addEventListener('submit', handleEmailRegister);

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
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200) closeNavigationMenu();
    });

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

    // 3. Close modal when clicking the overlay background
    const modal = document.getElementById('memberModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeMemberModal();
        });
    }

    // 4. Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMemberModal();
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
