// app.js

const translations = {
    'zh-TW': {
        'nav_home': '首頁',
        'nav_about': '品牌理念',
        'nav_product': '滴養之道',
        'nav_plans': '訂購方案',
        'nav_login': '會員登入',
        'nav_order': '輕鬆訂購',
        'hero_title': '澄韻 滴養之道',
        'hero_subtitle': '頂級烏骨雞滴雞精，傳承自然本味，為您注入每日活力。',
        'hero_explore': '探索產品',
        'hero_brand': '了解品牌',
        'intro_title': '創辦人的話',
        'intro_text': '我們深信，最好的保養來自於純粹與堅持。澄花堂走遍山林，嚴選頂級烏骨雞，遵循古法滴煉，只為了將最精華的一滴，呈獻給懂得照顧自己的您。希望透過這份溫潤，陪伴您度過每一個需要力量的時刻。',
        'intro_caption_title': '澄 花 堂 的 真 心 話',
        'intro_caption_subtitle': '【 和 您 一 起 守 護 健 康 】',
        'story_title': '滴養之道',
        'story_slogan': '「一滴滴，皆是一步步。」',
        'story_subtitle': '"Every drop is a step forward." / "ひとしずくは、一歩一歩。"',
        'story_item_title': '滴養之道 | The Path of Essence',
        'story_item_text': '在澄花堂，我們相信真正的養生沒有捷徑。每一包滴雞精的誕生，都是在「滴養之道」上的扎實前行。堅持十二小時無水慢火滴萃，這不只是物理上的濃縮，更是職人靈魂的沉澱。每一步都要踏得穩健，才能換來那一滴滴溫潤的「元気」與「豐盈」。',
        'features_title': '醫師嚴選 滴養體驗',
        'features_subtitle': '隨時隨地，補充元氣',
        'feature1_badge': 'Point 1',
        'feature1_title': '澄韻 原味烏骨雞',
        'feature1_text': '典雅紫藤花紋設計，結合環保提把，不僅是滋補聖品，更是傳遞心意的最高誠意。',
        'feature2_badge': 'Point 2',
        'feature2_title': '澄潤 膠原古早雞',
        'feature2_text': '採用食品級高溫殺菌鋁箔包裝，鎖住每一滴營養，常溫保存，撕開即飲，隨時補充。',
        'feature3_badge': 'Point 3',
        'feature3_title': '澄韻 原味烏骨雞',
        'feature3_text': '零膽固醇、零脂肪、無添加防腐劑。完整營養標示，通過多項SGS檢驗，讓您喝得安心。',
        'feature4_badge': 'Point 4',
        'feature4_title': '澄潤 膠原古早雞',
        'feature4_text': '嚴選優質烏骨雞，12小時慢火滴煉，萃取小分子胺基酸，口感溫潤不腥，滴滴精華。',
        'pricing_title': '選擇適合您的方案',
        'per_box': '/盒',
        'plan1_name': '純粹體驗組',
        'plan1_feat1': '澄韻烏骨雞滴雞精 1盒 (8包)',
        'plan1_feat2': '首購免運費',
        'plan1_feat3': '新會員專屬購物金 $100',
        'plan1_feat4': '專屬健康諮詢',
        'plan1_feat5': '定期配送優惠',
        'plan_btn': '立即體驗',
        'per_4box': '/4盒',
        'plan2_name': 'VIP養生方案',
        'plan2_feat1': '澄韻烏骨雞滴雞精 4盒 (32包)',
        'plan2_feat2': '終身免運費',
        'plan2_feat3': '每月紅利點數雙倍送',
        'plan2_feat4': '節日VIP專屬神秘禮物',
        'plan2_feat5': '營養師一對一線上諮詢',
        'plan_btn_vip': '選擇 VIP 方案',
        'process_title': '三步驟，輕鬆享受養生之旅',
        'process_step1_title': '聯絡我們',
        'process_step1_text': '加入官方 LINE，隨時為您服務！',
        'process_step2_title': '輕鬆訂購',
        'process_step2_text': '選擇方案，宅配到府最安心！',
        'process_step3_title': '安心保證',
        'process_step3_text': '嚴格把關，帶給您最純粹的健康。',
        'cta_btn': '即刻諮詢',
        'footer_title': '澄花堂選品',
        'footer_subtitle': '讓您的養生之旅更精彩',
        'modal_login_tab': '會員登入',
        'modal_register_tab': '立即註冊',
        'modal_login_lead': '歡迎回來！以下方式快速登入'
    },
    'ja': {
        'nav_home': 'ホーム',
        'nav_about': 'ブランド理念',
        'nav_product': '滴養之道',
        'nav_plans': 'プラン',
        'nav_login': 'ログイン',
        'nav_order': '注文する',
        'hero_title': '澄韻 滴養之道',
        'hero_subtitle': '最高級のブラッキーチキンのエッセンス。伝統の味をそのままに、毎日の活力を届けます。',
        'hero_explore': '製品を見る',
        'hero_brand': 'ブランドを知る',
        'intro_title': '創業者より',
        'intro_text': '最高のケアは純粋さとこだわりから生まれると信じています。澄花堂は山々を巡り、厳選されたブラッキーチキンを古法で抽出しました。自分自身を大切にするあなたに、最高の一滴を。',
        'intro_caption_title': '澄花堂の真心を込めて',
        'intro_caption_subtitle': '【 あなたの健康を共に守ります 】',
        'story_title': '滴養之道',
        'story_slogan': '「ひとしずくは、一歩一歩。」',
        'story_subtitle': '"Every drop is a step forward." / "ひとしずくは、一歩一歩。"',
        'story_item_title': '滴養之道 | The Path of Essence',
        'story_item_text': '澄花堂では、真の養生に近道はないと考えています。一包のエッセンスが誕生するまでには、12時間の独自の抽出プロセスがあります。それは物理的な濃縮だけでなく、職人の魂の沈澱でもあります。一歩一歩確実に進むことで、温かな「元気」と「豊かさ」を届けます。',
        'features_title': '医師厳選 滴養体験',
        'features_subtitle': 'いつでもどこでも、元気をチャージ',
        'feature1_badge': 'ポイント 1',
        'feature1_title': '澄韻 オリジナル・ブラッキー',
        'feature1_text': '優雅な藤の花のデザインとエコなパッケージ。滋養だけでなく、心を伝える最高の贈り物です。',
        'feature2_badge': 'ポイント 2',
        'feature2_title': '澄潤 コラーゲン・チキン',
        'feature2_text': '食品レベルの高温殺菌アルミパックを採用。栄養を閉じ込め、常温保存が可能。いつでも手軽に飲めます。',
        'feature3_badge': 'ポイント 3',
        'feature3_title': '澄韻 オリジナル・ブラッキー',
        'feature3_text': 'コレステロールゼロ、脂質ゼロ、保存料無添加。SGS検査をクリアし、安心してお召し上がりいただけます。',
        'feature4_badge': 'ポイント 4',
        'feature4_title': '澄潤 コラーゲン・チキン',
        'feature4_text': '厳選されたチキンを12時間じっくり抽出。アミノ酸を豊富に含み、滑らかで飲みやすい味わいです。',
        'pricing_title': 'あなたにぴったりのプランを',
        'per_box': '/箱',
        'plan1_name': '体験セット',
        'plan1_feat1': '澄韻ブラッキーチキンエッセンス 1箱 (8包)',
        'plan1_feat2': '初回送料無料',
        'plan1_feat3': '新規会員ポイント $100',
        'plan1_feat4': '健康相談',
        'plan1_feat5': '定期便割引',
        'plan_btn': '今すぐ体験',
        'per_4box': '/4箱',
        'plan2_name': 'VIP養生プラン',
        'plan2_feat1': '澄韻ブラッキーチキンエッセンス 4箱 (32包)',
        'plan2_feat2': '送料無料',
        'plan2_feat3': '毎月ポイント2倍',
        'plan2_feat4': 'VIP限定ギフト',
        'plan2_feat5': '管理栄養士による個別相談',
        'plan_btn_vip': 'VIPプランを選択',
        'process_title': '3ステップで始める健康習慣',
        'process_step1_title': 'お問い合わせ',
        'process_step1_text': '公式LINEでいつでもご相談ください。',
        'process_step2_title': '簡単注文',
        'process_step2_text': 'プランを選んで宅配便で安心お届け。',
        'process_step3_title': '安心保証',
        'process_step3_text': '徹底した品質管理で、純粋な健康を。',
        'cta_btn': '今すぐ相談',
        'footer_title': '澄花堂選品',
        'footer_subtitle': 'あなたの健康な旅をもっと輝かしく',
        'modal_login_tab': 'ログイン',
        'modal_register_tab': '新規登録',
        'modal_login_lead': 'お帰りなさい！'
    },
    'en': {
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_product': 'Essence',
        'nav_plans': 'Plans',
        'nav_login': 'Login',
        'nav_order': 'Order Now',
        'hero_title': 'The Path of Essence',
        'hero_subtitle': 'Premium Silkie Chicken Essence, preserving natural flavor to inject daily vitality into your life.',
        'hero_explore': 'Explore Products',
        'hero_brand': 'Brand Story',
        'intro_title': 'From Our Founder',
        'intro_text': 'We believe the best care comes from purity and persistence. Sumikado travels through mountains to select the finest Silkie chickens, following ancient methods to present you with the very essence of wellness.',
        'intro_caption_title': 'Heartfelt Words from Sumikado',
        'intro_caption_subtitle': '[ Guarding Your Health Together ]',
        'story_title': 'The Path of Essence',
        'story_slogan': '"Every drop is a step forward."',
        'story_subtitle': '"Every drop is a step forward." / "ひとしずくは、一歩一歩。"',
        'story_item_title': 'The Path of Essence | Essence of Life',
        'story_item_text': 'At Sumikado, we believe there are no shortcuts to true wellness. Every pouch of chicken essence is a result of steady progress. With 12 hours of water-free slow extraction, it is not just physical concentration, but the precipitate of the craftsman\'s soul.',
        'features_title': 'Doctor-Selected Experience',
        'features_subtitle': 'Replenish Energy Anytime, Anywhere',
        'feature1_badge': 'Point 1',
        'feature1_title': 'Original Silkie Essence',
        'feature1_text': 'Elegant wisteria pattern design with eco-friendly handle. Not just a supplement, but the highest sincerity of care.',
        'feature2_badge': 'Point 2',
        'feature2_title': 'Collagen Chicken Essence',
        'feature2_text': 'Food-grade high-temperature sterilized foil packaging locks in nutrition. Room temperature storage for on-the-go health.',
        'feature3_badge': 'Point 3',
        'feature3_title': 'Original Silkie Essence',
        'feature3_text': 'Zero cholesterol, zero fat, no preservatives. Full nutritional labeling and SGS tested for your peace of mind.',
        'feature4_badge': 'Point 4',
        'feature4_title': 'Collagen Chicken Essence',
        'feature4_text': 'Superior chicken, slow-dripped for 12 hours to extract small molecule amino acids. Smooth and refreshing taste.',
        'pricing_title': 'Choose Your Plan',
        'per_box': '/Box',
        'plan1_name': 'Trial Set',
        'plan1_feat1': '1 Box of Silkie Chicken Essence (8 pouches)',
        'plan1_feat2': 'Free shipping on first order',
        'plan1_feat3': 'New member credits $100',
        'plan1_feat4': 'Health consultation',
        'plan1_feat5': 'Subscription discount',
        'plan_btn': 'Try Now',
        'per_4box': '/4 Boxes',
        'plan2_name': 'VIP Wellness Plan',
        'plan2_feat1': '4 Boxes of Silkie Chicken Essence (32 pouches)',
        'plan2_feat2': 'Free shipping always',
        'plan2_feat3': 'Double bonus points monthly',
        'plan2_feat4': 'Exclusive VIP gifts',
        'plan2_feat5': '1-on-1 nutritional consultation',
        'plan_btn_vip': 'Select VIP Plan',
        'process_title': 'Health in 3 Simple Steps',
        'process_step1_title': 'Contact Us',
        'process_step1_text': 'Join our official LINE for support anytime!',
        'process_step2_title': 'Easy Ordering',
        'process_step2_text': 'Choose a plan and have it delivered safely.',
        'process_step3_title': 'Quality Gurantee',
        'process_step3_text': 'Strict quality control for your pure health.',
        'cta_btn': 'Inquire Now',
        'footer_title': 'Sumikado Selection',
        'footer_subtitle': 'Enhance Your Wellness Journey',
        'modal_login_tab': 'Login',
        'modal_register_tab': 'Register',
        'modal_login_lead': 'Welcome Back!'
    }
};

let currentLang = localStorage.getItem('sumikado_lang') || null;

document.addEventListener('DOMContentLoaded', () => {
    // Check if language is already set
    const overlay = document.getElementById('languageOverlay');
    if (currentLang && overlay) {
        overlay.classList.add('hide');
        setLanguage(currentLang);
    } else if (overlay) {
        document.body.classList.add('locked');
        initOverlaySelect();
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
   Language Selection & i18n Functions
   ============================================= */

function initOverlaySelect() {
    const customSelect = document.querySelector('.custom-select');
    const selectBtn = document.getElementById('overlayLangBtn');
    
    selectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        customSelect.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        customSelect.classList.remove('active');
    });
}

function selectOverlayLang(lang) {
    const selectBtn = document.getElementById('overlayLangBtn');
    const langNames = {
        'zh-TW': '繁體中文 / Traditional Chinese',
        'ja': '日本語 / Japanese',
        'en': 'English'
    };
    selectBtn.querySelector('span').textContent = langNames[lang];
    window.tempLangSelection = lang;
    document.querySelector('.custom-select').classList.remove('active');
}

function enterSite() {
    const lang = window.tempLangSelection || 'zh-TW';
    localStorage.setItem('sumikado_lang', lang);
    currentLang = lang;
    
    const overlay = document.getElementById('languageOverlay');
    overlay.classList.add('hide');
    document.body.classList.remove('locked');
    
    setLanguage(lang);
}

function changeLanguage(lang) {
    localStorage.setItem('sumikado_lang', lang);
    currentLang = lang;
    setLanguage(lang);
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // If the element has children (like icons/svg), we only update the text node
            if (el.children.length > 0 && Array.from(el.childNodes).some(n => n.nodeType === 3)) {
              // Handle elements with SVG icons (like checkmarks or svg)
              const textNode = Array.from(el.childNodes).find(n => n.nodeType === 3);
              if (textNode) textNode.textContent = ' ' + translations[lang][key];
            } else {
              el.textContent = translations[lang][key];
            }
        }
    });

    // Update navbar language selector UI
    const langIcons = { 'zh-TW': '🇹🇼', 'ja': '🇯🇵', 'en': '🇺🇸' };
    const langNames = { 'zh-TW': '繁體中文', 'ja': '日本語', 'en': 'English' };
    
    document.getElementById('currentLangIcon').textContent = langIcons[lang] || '🌐';
    document.getElementById('currentLangText').textContent = langNames[lang];
    
    // Update document lang attribute
    document.documentElement.lang = lang;
}

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
    const msg = currentLang === 'en' ? 'Opening login window...' : (currentLang === 'ja' ? 'ログインウィンドウを開いています...' : '已開啟登入視窗...');
    showToast(msg);
}

function registerWith(provider) {
    loginWith(provider);
}

/* --- Email Form Handlers --- */
function handleEmailLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    closeMemberModal();
    const msg = currentLang === 'en' ? `Welcome back, ${email}!` : (currentLang === 'ja' ? `お帰りなさい、${email}さん！` : `✓ 歡迎回來！已以 ${email} 登入`);
    showToast(msg);
}

function handleEmailRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    closeMemberModal();
    const msg = currentLang === 'en' ? `Welcome, ${name}! Verification email sent to ${email}` : (currentLang === 'ja' ? `ようこそ、${name}さん！${email}に確認メールを送信しました。` : `🎉 歡迎加入澄花堂，${name}！我們已寄驗證信至 ${email}`);
    showToast(msg);
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
