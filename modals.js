function toggleRecipeModal(type) {
    const modal = document.getElementById('recipeModal');
    if (!modal) return;
    const isHidden = modal.classList.contains('hidden');
    
    if (isHidden) {
        if (type) {
            modal.dataset.currentRecipe = type;
            loadRecipeData(type);
        }
        modal.classList.remove('hidden');
        document.body.classList.add('overlay-active');
        document.body.style.overflow = 'hidden'; // Ensure main body doesn't scroll
    } else {
        modal.classList.add('hidden');
        document.body.classList.remove('overlay-active');
        document.body.style.overflow = '';
    }
}

function loadRecipeData(type) {
    const lang = localStorage.getItem('selectedLanguage') || 'zh';
    const data = window.translations[lang];
    
    const badge = document.getElementById('recipeBadge');
    const title = document.getElementById('recipeTitle');
    const img = document.getElementById('recipeImage');
    const ingredients = document.getElementById('recipeIngredients');
    const steps = document.getElementById('recipeSteps');

    if (type === 'home') {
        badge.innerText = data['recipe-home-badge'];
        title.innerText = data['recipe-home-title'];
        img.src = 'assets/recipes/recipe_egg_portrait.jpg';
        img.alt = data['recipe-home-image-alt'];
        ingredients.innerHTML = data['recipe-home-ingredients'];
        steps.innerHTML = data['recipe-home-steps'];
    } else if (type === 'chef') {
        badge.innerText = data['recipe-chef-badge'];
        title.innerText = data['recipe-chef-title'];
        img.src = 'assets/recipes/recipe_collagen_soup.jpg';
        img.alt = data['recipe-chef-image-alt'];
        ingredients.innerHTML = data['recipe-chef-ingredients'];
        steps.innerHTML = data['recipe-chef-steps'];
    }
}

/* =============================================
   Lesson Modal Functions
   ============================================= */

function toggleLessonModal(lessonId) {
    const modal = document.getElementById('lessonModal');
    if (!modal) return;
    
    const isHidden = modal.classList.contains('hidden');
    
    if (isHidden) {
        if (lessonId) {
            modal.dataset.currentLesson = lessonId;
            loadLessonData(lessonId);
            modal.classList.remove('hidden');
            document.body.classList.add('overlay-active');
            document.body.style.overflow = 'hidden';
        }
    } else {
        modal.classList.add('hidden');
        document.body.classList.remove('overlay-active');
        document.body.style.overflow = '';
    }
}

function loadLessonData(id) {
    // Static academy hubs declare their own language so a localized lesson
    // never falls back to a visitor's previous site-language preference.
    const lang = document.documentElement.dataset.lessonLanguage || localStorage.getItem('selectedLanguage') || 'zh';
    const data = window.translations[lang];
    
    // Elements in the lesson modal
    const title = document.getElementById('lessonModalTitle');
    const subtitle = document.getElementById('lessonModalSubtitle');
    const lead = document.getElementById('lessonModalLead');
    const grid = document.getElementById('lessonModalGrid');
    const quote = document.getElementById('lessonModalQuote');
    const fallback = window.translations.zh;
    const get = (key) => data[key] || fallback[key] || '';

    const lessonNum = id.split('-')[1];
    const keyPrefix = `beautology-l${lessonNum}`;

    title.innerText = get('beautology-lesson-' + lessonNum);
    subtitle.innerText = get(`${keyPrefix}-subtitle`);
    lead.innerText = get(`${keyPrefix}-desc`);
    if (lessonNum === '5') {
        const rows = [1, 2, 3, 4, 5, 6, 7].map((row) => `
            <tr>
                <th scope="row">${get(`${keyPrefix}-row${row}-context`)}</th>
                <td>${get(`${keyPrefix}-row${row}-amount`)}</td>
                <td>${get(`${keyPrefix}-row${row}-duration`)}</td>
                <td>${get(`${keyPrefix}-row${row}-next`)}</td>
            </tr>
        `).join('');
        grid.innerHTML = `
            <div class="lesson-article full-width lesson-safety-note">
                <h4>${get(`${keyPrefix}-safety-title`)}</h4>
                <p>${get(`${keyPrefix}-safety-text`)}</p>
            </div>
            <div class="lesson-article full-width lesson-table-wrap">
                <table class="lesson-table">
                    <thead><tr><th>${get(`${keyPrefix}-table-context`)}</th><th>${get(`${keyPrefix}-table-amount`)}</th><th>${get(`${keyPrefix}-table-duration`)}</th><th>${get(`${keyPrefix}-table-next`)}</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
            <div class="lesson-article full-width">
                <a class="editorial-link" href="https://lin.ee/Zq3SQVo" target="_blank" rel="noopener noreferrer">${get(`${keyPrefix}-cta`)}</a>
            </div>
        `;
    } else {
        grid.innerHTML = `
        <div class="lesson-article">
            <h4>${get(`${keyPrefix}-s1-title`)}</h4>
            <p>${get(`${keyPrefix}-s1-text`)}</p>
        </div>
        <div class="lesson-article">
            <h4>${get(`${keyPrefix}-s2-title`)}</h4>
            <p>${get(`${keyPrefix}-s2-text`)}</p>
        </div>
        <div class="lesson-article full-width">
            <h4>${get(`${keyPrefix}-s3-title`)}</h4>
            <p>${get(`${keyPrefix}-s3-text`)}</p>
        </div>
    `;
    }
    quote.innerText = lessonNum === '1'
        ? get('beautology-footer-quote')
        : get(`${keyPrefix}-quote`);

    if (lessonNum === '6') {
        grid.insertAdjacentHTML('beforeend', `
            <div class="lesson-article full-width">
                <a class="editorial-link" href="https://lin.ee/Zq3SQVo" target="_blank" rel="noopener noreferrer">${get('beautology-l6-cta')}</a>
            </div>
        `);
    }
}
