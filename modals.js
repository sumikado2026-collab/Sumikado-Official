function toggleRecipeModal(type) {
    const modal = document.getElementById('recipeModal');
    const isHidden = modal.classList.contains('hidden');
    
    if (isHidden) {
        if (type) {
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
        ingredients.innerHTML = data['recipe-home-ingredients'];
        steps.innerHTML = data['recipe-home-steps'];
    } else if (type === 'chef') {
        badge.innerText = data['recipe-chef-badge'];
        title.innerText = data['recipe-chef-title'];
        img.src = 'assets/recipes/recipe_collagen_soup.jpg';
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
    const lang = localStorage.getItem('selectedLanguage') || 'zh';
    const data = window.translations[lang];
    
    // Elements in the lesson modal
    const title = document.getElementById('lessonModalTitle');
    const subtitle = document.getElementById('lessonModalSubtitle');
    const lead = document.getElementById('lessonModalLead');
    const grid = document.getElementById('lessonModalGrid');
    const quote = document.getElementById('lessonModalQuote');

    if (id === 'lesson-1') {
        title.innerText = data['beautology-lesson-1-title'];
        subtitle.innerText = data['beautology-lesson-1-subtitle'];
        lead.innerText = data['beautology-lesson-1-desc'];
        
        // Build the grid items manually for now or use a dedicated key if complex
        grid.innerHTML = `
            <div class="lesson-article">
                <h4>${data['beautology-l1-s1-title']}</h4>
                <p>${data['beautology-l1-s1-text']}</p>
            </div>
            <div class="lesson-article">
                <h4>${data['beautology-l1-s2-title']}</h4>
                <p>${data['beautology-l1-s2-text']}</p>
            </div>
            <div class="lesson-article full-width">
                <h4>${data['beautology-l1-s3-title']}</h4>
                <p>${data['beautology-l1-s3-text']}</p>
            </div>
        `;
        quote.innerText = data['beautology-footer-quote'];
    } else {
        // Placeholder for Coming Soon lessons
        const lessonNum = id.split('-')[1];
        title.innerText = data['beautology-lesson-' + lessonNum];
        subtitle.innerText = "Coming Soon";
        lead.innerText = "敬請期待";
        grid.innerHTML = `<div class="coming-soon-placeholder"><p>更多精彩內容正在準備中，敬請期待。</p></div>`;
        quote.innerText = "";
    }
}/* =============================================
   Member Modal Functions
   ============================================= */

function openMemberModal(tab) {
    const modal = document.getElementById('memberModal');
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    switchTab(tab || 'login');
}

function closeMemberModal() {
    const modal = document.getElementById('memberModal');
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
}

function switchTab(tab) {
    // Update tab buttons
    document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
    document.getElementById('tabRegister').classList.toggle('active', tab === 'register');
    // Update panels
    document.getElementById('panelLogin').classList.toggle('active', tab === 'login');
    document.getElementById('panelRegister').classList.toggle('active', tab === 'register');
}

/* --- Social Login Helpers --- */
function loginWith(provider) {
    showToast('已開啟登入視窗...');
}

function registerWith(provider) {
    loginWith(provider);
}

/* --- Email Form Handlers --- */
function handleEmailLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    closeMemberModal();
    showToast(`✓ 歡迎回來！已以 ${email} 登入`);
}

function handleEmailRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    closeMemberModal();
    showToast(`🎉 歡迎加入澄花堂，${name}！我們已寄驗證信至 ${email}`);
}

/* --- Toast Notification --- */
function showToast(message) {
    let toast = document.getElementById('memberToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'memberToast';
        toast.className = 'member-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3500);
}
