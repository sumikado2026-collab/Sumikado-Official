// app.js

const translations = {
    'zh': {
        'nav-home': '首頁',
        'nav-about': '品牌理念',
        'nav-product': '滴養之道',
        'nav-plans': '訂購方案',
        'btn-login': '會員登入',
        'btn-order': '輕鬆訂購',
        'hero-title': '澄韻 滴養之道',
        'hero-desc': '頂級烏骨雞滴雞精，傳承自然本味，為您注入每日活力。',
        'hero-explore': '探索產品',
        'hero-learn': '了解品牌',
        'founder-title': '創辦人的話',
        'founder-text': '我們深信，最好的保養來自於純粹與堅持。澄花堂走遍山林，嚴選頂級烏骨雞，遵循古法滴煉，只為了將最精華的一滴，呈獻給懂得照顧自己的您。希望透過這份溫潤，陪伴您度過每一個需要力量的時刻。',
        'founder-caption': '澄 花 堂 的 真 心 話',
        'founder-sub': '【 和 您 一 起 守 護 健 康 】',
        'brand-story-title': '滴養之道',
        'brand-story-slogan': '「一滴滴，皆是一步步。」',
        'brand-story-item-title': '滴養之道',
        'brand-story-item-text': '在澄花堂，我們相信真正的養生沒有捷徑。每一包滴雞精的誕生，都是在「滴養之道」上的扎實前行。堅持十二小時無水慢火滴萃，這不只是物理上的濃縮，更是職人靈魂的沉澱。每一步都要踏得穩健，才能換來那一滴滴溫潤的「元気」與「豐盈」。',
        'brand-footer-text': '澄花堂與您一起，走得慢、走得穩，走向理想的健康境界。',
        'feature-title': '醫師嚴選 滴養體驗',
        'feature-subtitle': '隨時隨地，補充元氣',
        'feature-1-title': '澄韻 原味烏骨雞',
        'feature-1-text': '典雅紫藤花紋設計，結合環保提把，不僅是滋補聖品，更是傳遞心意的最高誠意。',
        'feature-2-title': '澄潤 膠原古早雞',
        'feature-2-text': '採用食品級高溫殺菌鋁箔包裝，鎖住每一滴營養，常溫保存，撕開即飲，隨時補充。',
        'feature-3-title': '澄韻 原味烏骨雞',
        'feature-3-text': '零膽固醇、零脂肪、無添加防腐劑。完整營養標示，通過多項SGS檢驗，讓您喝得安心。',
        'feature-4-title': '澄潤 膠原古早雞',
        'feature-4-text': '嚴選優質烏骨雞，12小時慢火滴煉，萃取小分子胺基酸，口感溫潤不腥，滴滴精華。',
        'pricing-title': '選擇適合您的方案',
        'plan-1-name': '純粹體驗組',
        'plan-1-feat-1': '澄韻烏骨雞滴雞精 1盒 (8包)',
        'plan-1-feat-2': '首購免運費',
        'plan-1-feat-3': '新會員專屬購物金 $100',
        'plan-1-feat-4': '專屬健康諮詢',
        'plan-1-feat-5': '定期配送優惠',
        'btn-experience': '立即體驗',
        'plan-2-name': 'VIP養生方案',
        'plan-2-feat-1': '澄韻烏骨雞滴雞精 4盒 (32包)',
        'plan-2-feat-2': '終身免運費',
        'plan-2-feat-3': '每月紅利點數雙倍送',
        'plan-2-feat-4': '節日VIP專屬神秘禮物',
        'plan-2-feat-5': '營養師一對一線上諮詢',
        'btn-vip': '選擇 VIP 方案',
        'process-title': '三步驟，輕鬆享受養生之旅',
        'process-contact-title': '聯絡我們',
        'process-contact-desc': '加入官方 LINE，隨時為您服務！',
        'process-order-title': '輕鬆訂購',
        'process-order-desc': '選擇方案，宅配到府最安心！',
        'process-promise-title': '安心保證',
        'process-promise-desc': '嚴格把關，帶給您最純粹的健康。',
        'btn-consult': '即刻諮詢',
        'footer-brand': '澄花堂選品',
        'footer-slogan': '讓您的養生之旅更精彩',
        'footer-copy': '&copy; 2026 澄花堂選品 Sumikado. All rights reserved.',
        'modal-login-tab': '會員登入',
        'modal-register-tab': '立即註冊',
        'modal-login-lead': '歡迎回來！以下方式快速登入',
        'modal-register-lead': '加入澄花堂，立享會員優惠',
        'nav-language': '語言選擇'
    },
    'ja': {
        'nav-home': 'トップ',
        'nav-about': 'ブランド理念',
        'nav-product': '滴養之道',
        'nav-plans': '注文プラン',
        'btn-login': 'ログイン',
        'btn-order': 'お得な注文',
        'hero-title': '澄韻 滴養之道',
        'hero-desc': '究極の烏骨鶏チキンエッセンス。自然本来の味を継承し、毎日の活力を。',
        'hero-explore': '製品を見る',
        'hero-learn': 'ブランドを知る',
        'founder-title': '創設者の言葉',
        'founder-text': '究極のケアは純粋さとこだわりから生まれると信じています。澄花堂は山々を巡り、最高の烏骨鶏を厳選し、伝統的な方法で一滴一滴抽出しました。自分を大切にするあなたに、最高の一滴を。',
        'founder-caption': '澄花堂の真心の言葉',
        'founder-sub': '【 あなたと一緒に健康を守る 】',
        'brand-story-title': '滴養之道',
        'brand-story-slogan': '「ひとしずくは、一歩一歩。」',
        'brand-story-item-title': '滴養之道',
        'brand-story-item-text': '澄花堂では、真の健康に近道はないと信じています。チキンエッセンスの一滴一滴は、「滴養之道」を着実に歩んだ結果です。12時間の無水抽出は、単なる濃縮ではなく、職人の魂の結晶です。',
        'brand-footer-text': '私たちは實直に「滴養之道」を歩み、あなたを導きます。',
        'feature-title': '医師厳選 滴養体験',
        'feature-subtitle': 'いつでもどこでも、元気をチャージ',
        'feature-1-title': '澄韻 オリジナル烏骨鶏',
        'feature-1-text': '優雅な藤の花のデザイン。環境に優しいハンドル付きで、最高のご贈答品です。',
        'feature-2-title': '澄潤 コラーゲン古早鶏',
        'feature-2-text': '食品グレードの高温殺菌アルミパック。常温保存可能で、いつでも手輕に飲めます。',
        'feature-3-title': '澄韻 オリジナル烏骨鶏',
        'feature-3-text': 'コレステロールゼロ、脂肪ゼロ、保存料無添加。SGS検査済みの安心品質。',
        'feature-4-title': '澄潤 コラーゲン古早鶏',
        'feature-4-text': '厳選された烏骨鶏。12時間の低温抽出で、豊潤で臭みのない精華を抽出。',
        'pricing-title': 'あなたに最適なプラン',
        'plan-1-name': 'トライアルセット',
        'plan-1-feat-1': '烏骨鶏チキンエッセンス 1箱 (8包)',
        'plan-1-feat-2': '初回送料無料',
        'plan-1-feat-3': '新規会員特典 $100',
        'plan-1-feat-4': '健康相談サポート',
        'plan-1-feat-5': '定期配送割引',
        'btn-experience': '今すぐ試す',
        'plan-2-name': 'VIP養生プラン',
        'plan-2-feat-1': '烏骨鶏チキンエッセンス 4箱 (32包)',
        'plan-2-feat-2': '永久送料無料',
        'plan-2-feat-3': '毎月ポイント2倍',
        'plan-2-feat-4': 'VIP限定ギフト',
        'plan-2-feat-5': '栄養士オンライン相談',
        'btn-vip': 'VIPプランを選択',
        'process-title': '3ステップで始める健康習慣',
        'process-contact-title': 'お問い合わせ',
        'process-contact-desc': '公式LINEでいつでもご相談ください。',
        'process-order-title': 'お得な注文',
        'process-order-desc': 'プランを選んで、自宅で受け取るだけ。',
        'process-promise-title': '安心保証',
        'process-promise-desc': '厳選された品質で、純粋な健康をお届けします。',
        'btn-consult': '今すぐ相談',
        'footer-brand': '澄花堂',
        'footer-slogan': 'あなたの健康の旅をより豊かに',
        'footer-copy': '&copy; 2026 Sumikado. All rights reserved.',
        'modal-login-tab': 'ログイン',
        'modal-register-tab': '新規登録',
        'modal-login-lead': 'お帰りなさい！',
        'modal-register-lead': 'Sumikadoの会員になりませんか？',
        'nav-language': '言語選択'
    },
    'en': {
        'nav-home': 'Home',
        'nav-about': 'Philosophy',
        'nav-product': 'Essence',
        'nav-plans': 'Plans',
        'btn-login': 'Member Login',
        'btn-order': 'Easy Order',
        'hero-title': 'The Path of Essence',
        'hero-desc': 'Premium Silkie Chicken Essence. Inheriting natural purity to inject daily vitality into your life.',
        'hero-explore': 'Explore Products',
        'hero-learn': 'Learn More',
        'founder-title': "Founder's Message",
        'founder-text': 'We believe true care comes from purity and persistence. Sumikado travels through mountains to select the finest Silkie chickens, using ancient methods to extract every drop of essence for you.',
        'founder-caption': 'Heartfelt Words from Sumikado',
        'founder-sub': '[ Guarding Your Health Together ]',
        'brand-story-title': 'The Way of Nourishment',
        'brand-story-slogan': '"Every drop is a step forward."',
        'brand-story-item-title': 'The Path of Essence',
        'brand-story-item-text': 'At Sumikado, we believe there are no shortcuts to true health. Each pack is born from persistent progress on "The Path of Essence". 12 hours of waterless extraction is the crystallization of craftsmanship.',
        'brand-footer-text': 'Slowly and steadily, we walk towards an ideal state of health with you.',
        'feature-title': 'Doctor Selected Essence',
        'feature-subtitle': 'Replenish your energy anytime, anywhere.',
        'feature-1-title': 'Sumiyun Original Silkie',
        'feature-1-text': 'Elegant wisteria pattern with eco-friendly handle. The ultimate sincere gift for health conscious users.',
        'feature-2-title': 'Sumijun Collagen Chicken',
        'feature-2-text': 'Food-grade high-temperature sterilized aluminum foil. Room temperature storage, drink anytime.',
        'feature-3-title': 'Sumiyun Original Silkie',
        'feature-3-text': 'Zero cholesterol, zero fat, no preservatives. SGS tested and certified for complete peace of mind.',
        'feature-4-title': 'Sumijun Collagen Chicken',
        'feature-4-text': 'Strictly selected Silkie chickens. 12-hour extraction of small-molecule amino acids. Smooth taste.',
        'pricing-title': 'Choose the Plan for You',
        'plan-1-name': 'Trial Experience Set',
        'plan-1-feat-1': 'Silkie Chicken Essence 1 Box (8 packs)',
        'plan-1-feat-2': 'First order free shipping',
        'plan-1-feat-3': 'New member bonus $100',
        'plan-1-feat-4': 'Health consultation support',
        'plan-1-feat-5': 'Subscription discount',
        'btn-experience': 'Try Now',
        'plan-2-name': 'VIP Wellness Plan',
        'plan-2-feat-1': 'Silkie Chicken Essence 4 Boxes (32 packs)',
        'plan-2-feat-2': 'Lifetime free shipping',
        'plan-2-feat-3': 'Double reward points monthly',
        'plan-2-feat-4': 'Exclusive VIP holiday gift',
        'plan-2-feat-5': '1-on-1 nutritionist consultation',
        'btn-vip': 'Select VIP Plan',
        'process-title': '3 Steps to a Healthier Journey',
        'process-contact-title': 'Contact Us',
        'process-contact-desc': 'Join our official LINE for support anytime!',
        'process-order-title': 'Easy Ordering',
        'process-order-desc': 'Pick a plan and get it delivered to your door.',
        'process-promise-title': 'Quality Guarantee',
        'process-promise-desc': 'Strict quality control for pure health.',
        'btn-consult': 'Consult Now',
        'footer-brand': 'Sumikado Selection',
        'footer-slogan': 'Making your wellness journey spectacular.',
        'footer-copy': '&copy; 2026 Sumikado Selection. All rights reserved.',
        'modal-login-tab': 'Login',
        'modal-register-tab': 'Register',
        'modal-login-lead': 'Welcome back!',
        'modal-register-lead': 'Join Sumikado for exclusive benefits.',
        'nav-language': 'Language'
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang;
    localStorage.setItem('selectedLanguage', lang);
    
    // Update active class in dropdown menu
    const dropdownLinks = document.querySelectorAll('.lang-dropdown-content a');
    dropdownLinks.forEach(link => {
        if (link.getAttribute('onclick') === `setLanguage('${lang}')`) {
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
            if (el.tagName === 'INPUT' && el.type === 'placeholder') {
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

    // 1. Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
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
        if (e.key === 'Escape') closeMemberModal();
    });
});


/* =============================================
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
