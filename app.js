// app.js

document.addEventListener('DOMContentLoaded', () => {
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

/* --- Google OAuth --- */
function loginWith(provider) {
    if (provider === 'google') {
        // Replace YOUR_GOOGLE_CLIENT_ID with your actual Google OAuth Client ID
        const clientId = 'YOUR_GOOGLE_CLIENT_ID';
        const redirectUri = encodeURIComponent(window.location.origin + window.location.pathname);
        const scope = encodeURIComponent('openid email profile');
        const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
        const popup = window.open(url, 'Google 登入', 'width=500,height=600,left=400,top=100');
        showToast('已開啟 Google 登入視窗，請完成授權...');
        // In production: listen for postMessage from popup or use Firebase Auth / Google Identity Services SDK
    } else if (provider === 'line') {
        redirectToLine('login');
    }
}

function registerWith(provider) {
    if (provider === 'google') {
        loginWith('google'); // Google OAuth is the same flow for login & register
    } else if (provider === 'line') {
        redirectToLine('register');
    }
}

/* --- LINE OAuth --- */
function redirectToLine(action) {
    // Replace YOUR_LINE_CHANNEL_ID with your actual LINE Login Channel ID
    const channelId = 'YOUR_LINE_CHANNEL_ID';
    const redirectUri = encodeURIComponent(window.location.origin + window.location.pathname);
    const state = encodeURIComponent(action + '_' + Math.random().toString(36).slice(2));
    const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channelId}&redirect_uri=${redirectUri}&state=${state}&scope=profile%20openid%20email`;
    showToast('正在跳轉至 LINE 登入頁面...');
    setTimeout(() => { window.location.href = url; }, 800);
}

/* --- Email Form Handlers --- */
function handleEmailLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    // TODO: Send to your backend authentication endpoint
    closeMemberModal();
    showToast(`✓ 歡迎回來！已以 ${email} 登入`);
}

function handleEmailRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    // TODO: Send to your backend registration endpoint
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
/* --- Language Switcher & i18n --- */

const translations = {
    'tw': {
        'nav.home': '首頁',
        'nav.about': '品牌理念',
        'nav.product': '滴養之道',
        'nav.snow-realm': '雪映之境',
        'nav.plans': '訂購方案',
        'nav.login': '會員登入',
        'nav.register': '立即註冊',
        'hero.title': '澄韻 滴養之道',
        'hero.desc': '頂級烏骨雞滴雞精，傳承自然本味，為您注入每日活力。',
        'hero.btn-explore': '探索產品',
        'hero.btn-about': '了解品牌',
        'intro.founder-title': '創辦人的話',
        'intro.founder-text': '我們深信，最好的保養來自於純粹與堅持。澄花堂走遍山林，嚴選頂級烏骨雞，遵循古法滴煉，只為了將最精華的一滴，呈獻給懂得照顧自己的您。希望透過這份溫潤，陪伴您度過每一個需要力量的時刻。',
        'intro.caption-title': '澄 花 堂 的 真 心 話',
        'intro.caption-subtitle': '【 和 您 一 起 守 護 健 康 】',
        'brand-story.title': '滴養之道 ‧ 雪映之境',
        'brand-story.slogan': '「一滴滴，皆是一步步。」',
        'brand-story.subtitle': '"Every drop is a step forward." / "ひとしずくは、一歩一歩。"',
        'brand-story.path-title': '滴養之道',
        'brand-story.path-desc': '在澄花堂，我們相信真正的養生沒有捷徑。每一包滴雞精的誕生，都是在「滴養之道」上的扎實前行。堅持十二小時無水慢火滴萃，這不只是物理上的濃縮，更是職人靈魂的沉澱。每一步都要踏得穩健，才能換來那一滴滴溫潤的「元気」與「豐盈」。',
        'brand-story.realm-title': '雪映之境',
        'brand-story.realm-desc': '而這條道的終點，是「雪映之境」。這是由台灣在地雪耳與鮮果交織出的純淨理想。沒有繁瑣的添加，只有如初雪映照般清澈的光輝。這份輕盈、天然與純粹，是我們對美好生活最極致的追求。',
        'brand-story.mission-text': '從扎實的「道」到光輝的「境」，澄花堂與您一起，走得慢、走得穩，走向理想的健康境界。',
        'brand-story.jp-mission': '我們直實地走在「滴養之道」上，引導您前往純粹的輝煌「雪映之境」。',
        'features.title': '醫師嚴選 滴養體驗',
        'features.subtitle': '隨時隨地，補充元氣',
        'features.p1.badge': 'Point 1',
        'features.p1.title': '澄韻 原味烏骨雞',
        'features.p1.desc': '典雅紫藤花紋設計，結合環保提把，不僅是滋補聖品，更是傳遞心意的最高誠意。',
        'features.p2.badge': 'Point 2',
        'features.p2.title': '澄潤 膠原古早雞',
        'features.p2.desc': '採用食品級高溫殺菌鋁箔包裝，鎖住每一滴營養，常溫保存，撕開即飲，隨時補充。',
        'features.p3.badge': 'Point 3',
        'features.p3.title': '澄韻 原味烏骨雞',
        'features.p3.desc': '零膽固醇、零脂肪、無添加防腐劑。完整營養標示，通過多項SGS檢驗，讓您喝得安心。',
        'features.p4.badge': 'Point 4',
        'features.p4.title': '澄潤 膠原古早雞',
        'features.p4.desc': '嚴選優質烏骨雞，12小時慢火滴煉，萃取小分子胺基酸，口感溫潤不腥，滴滴精華。',
        'store.title': '🛒 線上官方旗艦店 (Online Store)',
        'store.subtitle': '選擇配送地區，前往對應商城享受便捷購物。',
        'store.tw-title': '台灣地區配送',
        'store.tw-desc': '嚴選台灣在地好禮，快速配送至全台各地。',
        'store.tw-btn': '前往 台灣樂天市場 👉',
        'store.tw-note': '(點擊跳轉台灣樂天)',
        'store.jp-title': '日本地區配送',
        'store.jp-desc': '日本專屬購物入口，輕鬆享受高品質直送服務。',
        'store.jp-btn': '前往 日本楽天市場 👉',
        'store.jp-note': '(點擊跳轉日本樂天)',
        'pricing.title': '選擇適合您的方案',
        'pricing.p1.name': '純粹體驗組',
        'pricing.p1.f1': '澄韻烏骨雞滴雞精 1盒 (8包)',
        'pricing.p1.f2': '首購免運費',
        'pricing.p1.f3': '新會員專屬購物金 $100',
        'pricing.p1.f4': '專屬健康諮詢',
        'pricing.p1.f5': '定期配送優惠',
        'pricing.p1.btn': '立即體驗',
        'pricing.p2.name': 'VIP養生方案',
        'pricing.p2.f1': '澄韻烏骨雞滴雞精 4盒 (32包)',
        'pricing.p2.f2': '終身免運費',
        'pricing.p2.f3': '每月紅利點數雙倍送',
        'pricing.p2.f4': '節日VIP專屬神秘禮物',
        'pricing.p2.btn': '選擇 VIP 方案',
        'process.title': '三步驟，輕鬆享受養生之旅',
        'process.s1.title': '聯絡我們',
        'process.s1.desc': '加入官方 LINE，隨時為您服務！',
        'process.s2.title': '輕鬆訂購',
        'process.s2.desc': '選擇方案，宅配到府最安心！',
        'process.s3.title': '安心保證',
        'process.s3.desc': '嚴格把關，帶給您最純粹的健康。',
        'process.cta': '即刻諮詢',
        'footer.brand': '澄花堂選品',
        'footer.slogan': '讓您的養生之旅更精彩',
        'footer.copyright': '澄花堂選品 Sumikado. All rights reserved.',
        'modal.tab-login': '會員登入',
        'modal.tab-register': '立即註冊',
        'modal.login-lead': '歡迎回來！以下方式快速登入',
        'modal.divider-login': '或以電子郵件登入',
        'modal.label-email': '電子郵件',
        'modal.placeholder-email': 'example@email.com',
        'modal.label-password': '密碼',
        'modal.placeholder-password': '請輸入密碼',
        'modal.btn-login': '登入',
        'modal.register-lead': '加入澄花堂，立享會員優惠',
        'modal.btn-google-reg': '使用 Google 帳號註冊',
        'modal.btn-line-reg': '使用 LINE 帳號註冊',
        'modal.btn-apple-reg': '使用 Apple 帳號註冊',
        'modal.divider-register': '或以電子郵件註冊',
        'modal.label-name': '姓名',
        'modal.placeholder-name': '請輸入姓名',
        'modal.label-reg-password': '密碼',
        'modal.placeholder-reg-password': '至少 8 個字元',
        'modal.btn-register': '立即加入'
    },
    'jp': {
        'nav.home': 'ホーム',
        'nav.about': 'ブランド理念',
        'nav.product': '養生の道',
        'nav.snow-realm': '雪映の境',
        'nav.plans': '注文プラン',
        'nav.login': 'ログイン',
        'nav.register': '新規登録',
        'hero.title': '澄韻 しずくの養生',
        'hero.desc': '最高級の烏骨鶏から抽出した絶品エッセンス。自然の味わいをそのままに、毎日の元気をサポートします。',
        'hero.btn-explore': '商品を見る',
        'hero.btn-about': 'ブランドを知る',
        'intro.founder-title': '創業者メッセージ',
        'intro.founder-text': '私たちは、真の美しさと健康は純粋さとこだわりから生まれると信じています。澄花堂は厳選した烏骨鶏を使い、古来の製法でじっくりと抽出。最高の一滴を、自分を大切にするあなたに届けます。この温もりが、あなたの力強い支えとなることを願っています。',
        'intro.caption-title': '澄花堂のまごころ',
        'intro.caption-subtitle': '【 あなたの健康を共に守ります 】',
        'brand-story.title': 'しずくの養生 ‧ 雪映の境',
        'brand-story.slogan': '「ひとしずくは、一歩一歩の積み重ね。」',
        'brand-story.subtitle': '"Every drop is a step forward." / "ひとしずくは、一歩一歩。"',
        'brand-story.path-title': 'しずくの養生之道',
        'brand-story.path-desc': '澄花堂では、真の養生に近道はないと考えています。一包の滴鶏精は、「養生の道」を真実に歩む証です。12時間の無水抽出こだわりは、単なる濃縮ではなく、職人の魂の結晶です。一歩一歩着実に歩むことで、温かく豊かな「元気」を届けます。',
        'brand-story.realm-title': '雪映の境',
        'brand-story.realm-desc': 'そしてその道の終着地点は「雪映の境」です。台湾産の雪耳と新鮮な果物が織りなす純粋な理想。余計な添加物は一切なく、初雪のような輝きを放ちます。この軽やかさと純粋さこそが、私たちの追求する美しき生活です。',
        'brand-story.mission-text': '着実な「道」から輝かしい「境」へ。澄花堂はあなたと共に、ゆっくりと、確実に、理想の健康へと歩みます。',
        'brand-story.jp-mission': '私たちは実直に「滴養之道」を歩み、純粋な輝き「雪映之境」へとあなたを導きます。',
        'features.title': '医師厳選 養生の体験',
        'features.subtitle': 'いつでもどこでも、元気をチャージ',
        'features.p1.badge': 'ポイント 1',
        'features.p1.title': '澄韻 プレーン烏骨鶏',
        'features.p1.desc': 'エレガントな藤の花のデザインと、環境に優しい持ち手。自分へのご褒美だけでなく、大切な人への贈り物にも最適です。',
        'features.p2.badge': 'ポイント 2',
        'features.p2.title': '澄潤 コラーゲン古早鶏',
        'features.p2.desc': '食品グレードの高温殺菌アルミパック採用。栄養を一滴も逃さず、常温保存が可能。開けてすぐに飲める便利さです。',
        'features.p3.badge': 'ポイント 3',
        'features.p3.title': '澄韻 プレーン烏骨鶏',
        'features.p3.desc': 'コレステロール・脂肪ゼロ、保存料無添加。詳細な栄養表示とSGS検査合格済みで、安心してお召し上がりいただけます。',
        'features.p4.badge': 'ポイント 4',
        'features.p4.title': '澄潤 コラーゲン古早鶏',
        'features.p4.desc': '厳選された烏骨鶏を12時間じっくり抽出。低分子アミノ酸を豊富に含み、臭みのないまろやかな味わいのエッセンスです。',
        'store.title': '🛒 オンライン公式ストア (Online Store)',
        'store.subtitle': '配送地域を選択して、公式ショップでのお買い物をお楽しみください。',
        'store.tw-title': '台湾国内配送',
        'store.tw-desc': '台湾の厳選された商品を、台湾全土へスピーディーにお届けします。',
        'store.tw-btn': '台湾楽天市場へ 👉',
        'store.tw-note': '(台湾楽天へ移動します)',
        'store.jp-title': '日本国内配送',
        'store.jp-desc': '日本専用のショップ入口です。高品質な商品を日本国内へお届けします。',
        'store.jp-btn': '日本楽天市場へ 👉',
        'store.jp-note': '(日本楽天へ移動します)',
        'pricing.title': 'あなたにぴったりのプラン',
        'pricing.p1.name': 'お試し体験セット',
        'pricing.p1.f1': '澄韻 滴鶏精 1箱 (8包入)',
        'pricing.p1.f2': '初回購入送料無料',
        'pricing.p1.f3': '新規会員登録で100円クーポン',
        'pricing.p1.f4': '専門健康相談',
        'pricing.p1.f5': '定期購入割引',
        'pricing.p1.btn': '今すぐ試す',
        'pricing.p2.name': 'VIP養生プラン',
        'pricing.p2.f1': '澄韻 滴鶏精 4箱 (32包入)',
        'pricing.p2.f2': 'ずっと送料無料',
        'pricing.p2.f3': '毎月ポイント2倍',
        'pricing.p2.f4': 'VIP限定ホリデーギフト',
        'pricing.p2.btn': 'VIPプランを選択',
        'process.title': 'シンプルな3ステップで始める養生習慣',
        'process.s1.title': 'お問い合わせ',
        'process.s1.desc': '公式LINEでお気軽にご相談ください！',
        'process.s2.title': 'かんたん注文',
        'process.s2.desc': 'プランを選んで、ご自宅にお届け！',
        'process.s3.title': '安心の品質保証',
        'process.s3.desc': '厳格な品質管理で、純粋な健康を届けます。',
        'process.cta': '今すぐ相談',
        'footer.brand': '澄花堂セレクション',
        'footer.slogan': 'あなたの健康習慣をより豊かに',
        'footer.copyright': '澄花堂セレクション Sumikado. All rights reserved.',
        'modal.tab-login': 'ログイン',
        'modal.tab-register': '新規登録',
        'modal.login-lead': 'お帰りなさい！以下の方法でログインできます',
        'modal.divider-login': 'またはメールアドレスでログイン',
        'modal.label-email': 'メールアドレス',
        'modal.placeholder-email': 'example@email.jp',
        'modal.label-password': 'パスワード',
        'modal.placeholder-password': 'パスワードを入力してください',
        'modal.btn-login': 'ログイン',
        'modal.register-lead': '澄花堂に参加して、限定特典を受け取ろう',
        'modal.btn-google-reg': 'Googleで登録',
        'modal.btn-line-reg': 'LINEで登録',
        'modal.btn-apple-reg': 'Appleで登録',
        'modal.divider-register': 'またはメールアドレスで登録',
        'modal.label-name': 'お名前',
        'modal.placeholder-name': 'お名前を入力してください',
        'modal.label-reg-password': 'パスワード',
        'modal.placeholder-reg-password': '8文字以上のパスワード',
        'modal.btn-register': '登録する'
    },
    'en': {
        'nav.home': 'Home',
        'nav.about': 'Philosophy',
        'nav.product': 'Path of Essence',
        'nav.snow-realm': 'Snowy Realm',
        'nav.plans': 'Pricing Plans',
        'nav.login': 'Login',
        'nav.register': 'Register',
        'hero.title': 'SUMIKADO - Essence of Vitality',
        'hero.desc': 'Premium Black-Bone Chicken essence, preserving pure natural flavors to energize your everyday life.',
        'hero.btn-explore': 'Explore Products',
        'hero.btn-about': 'About Us',
        'intro.founder-title': "Founder's Message",
        'intro.founder-text': 'We believe that the best care comes from purity and persistence. Sumikado selects premium black-bone chickens and follows ancient extraction methods to deliver the finest essence to you. We hope this warmth accompanies you through every moment where strength is needed.',
        'intro.caption-title': "Sumikado's Promise",
        'intro.caption-subtitle': '【 Guarding Your Health Together 】',
        'brand-story.title': 'The Path of Essence ‧ The Realm of Purity',
        'brand-story.slogan': '"Every drop is a step forward."',
        'brand-story.subtitle': '"Every drop is a step forward." / "ひとしずくは、一歩一歩。"',
        'brand-story.path-title': 'The Path of Essence',
        'brand-story.path-desc': 'At Sumikado, we believe there are no shortcuts to true health. The birth of every pack of chicken essence is a solid step forward on "The Path of Essence." With 12 hours of slow extraction without water, it is not just physical concentration; it is the crystallization of a craftsman\'s soul. Every steady step brings you the warmth of vitality and abundance.',
        'brand-story.realm-title': 'The Realm of Purity',
        'brand-story.realm-desc': 'The end of this path is "The Realm of Purity." This is the ideal purity woven from local Taiwanese snow fungus and fresh fruits. No complicated additives, only a clarity that shines like the first snow. This lightness and purity are our ultimate pursuit of a better life.',
        'brand-story.mission-text': 'From the solid "Path" to the radiant "Realm," Sumikado walks with you, slow and steady, towards the ideal state of health.',
        'brand-story.jp-mission': 'We walk truthfully on the path of essence, guiding you to the radiant realm of purity.',
        'features.title': 'Doctor Selected Essence Experience',
        'features.subtitle': 'Energy Boost Anytime, Anywhere',
        'features.p1.badge': 'Point 1',
        'features.p1.title': 'Original Black-Bone Chicken',
        'features.p1.desc': 'Elegant wisteria patterns with an eco-friendly handle. More than a health supplement, it is the ultimate expression of heart-felt sincerity.',
        'features.p2.badge': 'Point 2',
        'features.p2.title': 'Collagen Ancient Chicken',
        'features.p2.desc': 'Using food-grade high-temperature sterilized foil packaging to lock in every drop of nutrition. Store at room temperature and drink anytime.',
        'features.p3.badge': 'Point 3',
        'features.p3.title': 'Original Black-Bone Chicken',
        'features.p3.desc': 'Zero cholesterol, zero fat, and no added preservatives. Complete nutritional labeling and SGS certified for your peace of mind.',
        'features.p4.badge': 'Point 4',
        'features.p4.title': 'Collagen Ancient Chicken',
        'features.p4.desc': 'Carefully selected premium black-bone chicken, extracted for 12 hours. Rich in small-molecule amino acids with a smooth, savory taste.',
        'store.title': '🛒 Official Online Store',
        'store.subtitle': 'Choose your shipping region and enjoy convenient shopping at our official stores.',
        'store.tw-title': 'Shipping to Taiwan',
        'store.tw-desc': 'Carefully selected Taiwanese gifts, fast shipping across Taiwan.',
        'store.tw-btn': 'Go to Rakuten Taiwan 👉',
        'store.tw-note': '(Redirects to Rakuten Taiwan)',
        'store.jp-title': 'Shipping to Japan',
        'store.jp-desc': 'Exclusive shopping portal for Japan. Enjoy high-quality products delivered directly to you.',
        'store.jp-btn': 'Go to Rakuten Japan 👉',
        'store.jp-note': '(Redirects to Rakuten Japan)',
        'pricing.title': 'Choose the Perfect Plan for You',
        'pricing.p1.name': 'Pure Experience Set',
        'pricing.p1.f1': 'Black-Bone Chicken Essence 1 Box (8 packs)',
        'pricing.p1.f2': 'Free Shipping on First Order',
        'pricing.p1.f3': '$100 Credit for New Members',
        'pricing.p1.f4': 'Exclusive Health Consultation',
        'pricing.p1.f5': 'Recurring Subscription Discount',
        'pricing.p1.btn': 'Try Now',
        'pricing.p2.name': 'VIP Vitality Plan',
        'pricing.p2.f1': 'Black-Bone Chicken Essence 4 Boxes (32 packs)',
        'pricing.p2.f2': 'Lifetime Free Shipping',
        'pricing.p2.f3': 'Double Reward Points Monthly',
        'pricing.p2.f4': 'Exclusive Holiday VIP Gifts',
        'pricing.p2.btn': 'Choose VIP Plan',
        'process.title': '3 Easy Steps to Wellness Journey',
        'process.s1.title': 'Contact Us',
        'process.s1.desc': 'Join our official LINE for 24/7 support!',
        'process.s2.title': 'Easy Ordering',
        'process.s2.desc': 'Pick a plan and enjoy secure home delivery!',
        'process.s3.title': 'Peace of Mind',
        'process.s3.desc': 'Strict quality control for the purest health essence.',
        'process.cta': 'Consult Now',
        'footer.brand': 'Sumikado Selection',
        'footer.slogan': 'Enlightening Your Wellness Journey',
        'footer.copyright': 'Sumikado Selection. All rights reserved.',
        'modal.tab-login': 'Login',
        'modal.tab-register': 'Register',
        'modal.login-lead': 'Welcome back! Quick login options below',
        'modal.divider-login': 'Or login with email',
        'modal.label-email': 'Email Address',
        'modal.placeholder-email': 'example@email.com',
        'modal.label-password': 'Password',
        'modal.placeholder-password': 'Enter password',
        'modal.btn-login': 'Login',
        'modal.register-lead': 'Join Sumikado for exclusive member benefits',
        'modal.btn-google-reg': 'Register with Google',
        'modal.btn-line-reg': 'Register with LINE',
        'modal.btn-apple-reg': 'Register with Apple',
        'modal.divider-register': 'Or register with email',
        'modal.label-name': 'Full Name',
        'modal.placeholder-name': 'Enter your name',
        'modal.label-reg-password': 'Password',
        'modal.placeholder-reg-password': 'At least 8 characters',
        'modal.btn-register': 'Join Now'
    }
};

function setLanguage(lang) {
    // 1. Update localStorage
    localStorage.setItem('preferredLang', lang);

    // 2. Update button states
    const btns = document.querySelectorAll('.lang-btn');
    btns.forEach(btn => {
        const onClickAttr = btn.getAttribute('onclick');
        if (onClickAttr) {
            btn.classList.toggle('active', onClickAttr.includes(`'${lang}'`));
        }
    });

    // 3. Update Text Content (data-i18n)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Keep original icons/checks if present in pricing list
            const checkIcon = el.querySelector('.check');
            const crossIcon = el.querySelector('.cross');
            
            if (checkIcon || crossIcon) {
                const iconHtml = (checkIcon || crossIcon).outerHTML;
                el.innerHTML = iconHtml + ' ' + translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // 4. Update Placeholders (data-i18n-placeholder)
    const inputs = document.querySelectorAll('[data-i18n-placeholder]');
    inputs.forEach(input => {
        const key = input.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            input.placeholder = translations[lang][key];
        }
    });

    // 5. Special logic for sections
    if (lang === 'jp') {
        const storeSection = document.getElementById('online-store');
        if (storeSection) storeSection.scrollIntoView({ behavior: 'smooth' });
    }

    // 6. Handle Overlay
    const overlay = document.getElementById('languageOverlay');
    if (overlay) {
        overlay.classList.remove('is-visible');
        document.body.classList.remove('no-scroll');
    }

    // 7. Feedback
    const langNames = { 'tw': '繁體中文', 'jp': '日本語', 'en': 'English' };
    showToast(`✓ ${langNames[lang]} Loaded`);
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang');
    const overlay = document.getElementById('languageOverlay');

    if (savedLang) {
        setLanguage(savedLang);
        if (overlay) overlay.classList.remove('is-visible');
    } else {
        // First visit: Show overlay and prevent scroll
        if (overlay) {
            overlay.classList.add('is-visible');
            document.body.classList.add('no-scroll');
        }
        // Default to 'tw' internally but don't save yet
        setLanguage('tw');
        localStorage.removeItem('preferredLang'); // Ensure it's not saved until user clicks
    }
});
