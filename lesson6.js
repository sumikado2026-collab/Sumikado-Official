document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.teaser-list');
    if (!list || list.querySelector('[data-lesson="lesson-6"]')) return;

    const item = document.createElement('div');
    item.className = 'teaser-item';
    item.dataset.action = 'open-lesson';
    item.dataset.lesson = 'lesson-6';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.innerHTML = '<div class="teaser-info"><span class="lesson-num">Lesson 06</span><span data-i18n="beautology-lesson-6">第六課：體重控制與抗老化，為什麼醫美要從內在管理開始？</span></div>';
    list.appendChild(item);

    const lang = localStorage.getItem('selectedLanguage') || 'zh';
    if (typeof setLanguage === 'function') setLanguage(lang);
});
