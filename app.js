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
        'feature-1-title': '窗花美學',
        'feature-1-text': '典雅紫藤花紋設計，結合環保提把，不僅是滋補聖品，更是傳遞心意的最高誠意。',
        'feature-2-title': '豐彈美力',
        'feature-2-text': '採用食品級高溫殺菌鋁箔包裝，鎖住每一滴營養，常溫保存，撕開即飲，隨時補充。',
        'feature-3-title': '頂級食養',
        'feature-3-text': '零膽固醇、零脂肪、無添加防腐劑。完整營養標示，通過多項SGS檢驗，讓您喝得安心。',
        'feature-4-title': '元氣滿滿',
        'feature-4-text': '嚴選優質烏骨雞，12小時慢火滴煉，萃取小分子胺基酸，口感溫潤不腥，滴滴精華。',
        'pricing-title': '選擇適合您的方案',
        'plan-1-name': '澄韻 系列',
        'plan-1-amount': '1,680',
        'plan-1-period': '/盒',
        'plan-1-feat-1': '1盒 經典滴養 NT$1,680',
        'plan-1-feat-2': '3盒超值組 NT$4,280',
        'plan-1-feat-3': '新會員專屬購物金 $100',
        'plan-1-feat-4': '專屬健康諮詢',
        'plan-1-feat-5': '定期配送優惠',
        'btn-experience': '立即體驗',
        'plan-2-name': '澄潤 系列',
        'plan-2-amount': '1,880',
        'plan-2-period': '/盒',
        'plan-2-feat-1': '1盒 膠原滋補 NT$1,880',
        'plan-2-feat-2': '3盒超值組 NT$4,780',
        'plan-2-feat-3': '每月紅利點數雙倍送',
        'plan-2-feat-4': '節日VIP專屬神秘禮物',
        'plan-2-feat-5': '營養師一對一線上諮詢',
        'btn-vip': '雙效滴養',
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
        'nav-language': '語言選擇',
        'nav-kitchen': '澄花堂廚房',
        'kitchen-badge': 'SUMIKADŌ KITCHEN',
        'kitchen-title': '澄花堂 ‧ 廚房',
        'kitchen-subtitle': '在這裡，每一滴精華都能化作餐桌上的溫暖與美力。',
        'kitchen-recipe-title': '澄花堂 ‧ 貼心食譜',
        'kitchen-recipe-desc': '職人研發，讓滴雞精成為料理的靈魂。從茶油炊飯到嫩滑蒸蛋，讓「食」成為一種「養」。',
        'kitchen-btn-view': '探索食譜 &rarr;',
        'kitchen-chef-title': '名廚教室 ‧ Master Class',
        'kitchen-chef-desc': '台日名廚 ‧ 演繹日常的極致。邀請專業職人以「澄花堂」為墨，揮灑出具備儀式感與深度的美力料理。',
        'kitchen-btn-class': '進入教室 &rarr;',
        'kitchen-event-title': '澄花選味 ‧ Curated Tastes',
        'kitchen-event-desc': '民間高手 ‧ 私藏風味的選拔。尋找藏在日常裡的味覺實踐者。在這裡，每個人都是品味的策展人。「您的私房祕技，是澄花堂最珍貴的收藏。」',
        'reward-badge': '🎁 選味獎勵',
        'kitchen-event-rule': '凡私房食譜經採納刊登，即獲贈「澄花堂極致修護面膜」一盒（5片入 / 價值$680）。',
        'kitchen-btn-submit': '立即投稿',
        'recipe-badge': '名廚教室 #01',
        'recipe-title': '滴雞精柔滑蒸蛋',
        'recipe-ingredients-title': '食材清單 (一人份)',
        'recipe-ingredients-list': `
            <li>澄花堂滴雞精 1包 (60ml)</li>
            <li>雞蛋 2顆</li>
            <li>溫水 100ml</li>
            <li>鹽 少許</li>
            <li>鮮香菇 / 蔥花或鮭魚卵</li>
        `,
        'recipe-steps-title': '製作步驟',
        'recipe-step-1': '將雞蛋均勻打散，加入滴雞精、溫水與少許鹽拌勻。',
        'recipe-step-2': '進行兩次過篩，去除氣泡與雜質，這是口感「極致柔滑」的關鍵。',
        'recipe-step-3': '輕輕橫鋪鮮香菇薄片在蛋液上。',
        'recipe-step-4': '中火蒸 10-12 分鐘，完成後再撒上蔥花或鮭魚卵即可。'
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
        'feature-1-title': '窓飾り美学',
        'feature-1-text': '優雅な藤の花のデザイン。環境に優しいハンドル付きで、最高のご贈答品です。',
        'feature-2-title': '彈力と美しさ',
        'feature-2-text': '食品グレードの高温殺菌アルミパック。常温保存可能で、いつでも手輕に飲めます。',
        'feature-3-title': '究極の食養',
        'feature-3-text': 'コレステロールゼロ、脂肪ゼロ、保存料無添加。SGS検査済みの安心品質。',
        'feature-4-title': '元気いっぱい',
        'feature-4-text': '厳選された烏骨鶏。12時間の低温抽出で、豊潤で臭みのない精華を抽出。',
        'pricing-title': 'あなたに最適なプラン',
        'plan-1-name': '澄韻（Chengyun）',
        'plan-1-amount': '1,680',
        'plan-1-period': '/箱',
        'plan-1-feat-1': '1箱 經典セット 1,680円',
        'plan-1-feat-2': '3箱セット特価 4,280円',
        'plan-1-feat-3': '新規会員特典 $100',
        'plan-1-feat-4': '健康相談サポート',
        'plan-1-feat-5': '定期配送割引',
        'btn-experience': '今すぐ試す',
        'plan-2-name': '澄潤（Chengrun）',
        'plan-2-amount': '1,880',
        'plan-2-period': '/箱',
        'plan-2-feat-1': '1箱 膠原セット 1,880円',
        'plan-2-feat-2': '3箱セット特価 4,780円',
        'plan-2-feat-3': '毎月ポイント2倍',
        'plan-2-feat-4': 'VIP限定ギフト',
        'plan-2-feat-5': '栄養士オンライン相談',
        'btn-vip': 'W効果の滴養',
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
        'nav-language': '言語選択',
        'nav-kitchen': '澄花堂キッチン',
        'kitchen-badge': 'SUMIKADŌ KITCHEN',
        'kitchen-title': '澄花堂 ‧ キッチン',
        'kitchen-subtitle': '一滴の精華が、食卓のぬくもりと美しさに変わる場所。',
        'kitchen-recipe-title': '澄花堂 ‧ 真心のレシピ',
        'kitchen-recipe-desc': '職人が考案した、チキンエッセンスを料理の主役にするレシピ。日常の食事を「養生」へ。',
        'kitchen-btn-view': 'レシピを見る &rarr;',
        'kitchen-chef-title': '名匠教室 ‧ Master Class',
        'kitchen-chef-desc': '日台の名匠が日常の極致を演繹。プロの職人が「澄花堂」を墨とし、儀式感と深みのある美力料理を描き出します。',
        'kitchen-btn-class': '教室に入る &rarr;',
        'kitchen-event-title': '澄花選味 ‧ Curated Tastes',
        'kitchen-event-desc': '民間達人による秘蔵の味わい選抜。日常に潜む味覚の実践者を探しています。誰もが品味のキュレーターです。',
        'reward-badge': '🎁 選味リワード',
        'kitchen-event-rule': 'レシピが採用・掲載されると、「極致リペアマスク」1箱（5枚入 / 680円相当）をプレゼント。',
        'kitchen-btn-submit': '今すぐ投稿',
        'recipe-badge': '名匠教室 #01',
        'recipe-title': 'チキンエッセンスの滑らか茶碗蒸し',
        'recipe-ingredients-title': '材料 (1人分)',
        'recipe-ingredients-list': `
            <li>澄花堂チキンエッセンス 1包 (60ml)</li>
            <li>卵 2個</li>
            <li>ぬるま湯 100ml</li>
            <li>塩 少々</li>
            <li>しいたけ / ネギまたはいくら</li>
        `,
        'recipe-steps-title': '作り方',
        'recipe-step-1': '卵を溶きほぐし、チキンエッセンス、ぬるま湯、塩を加えて混ぜ合わせます。',
        'recipe-step-2': '2回濾（こ）して、気泡や不純物を取り除きます。これが「極上の滑らかさ」の秘訣です。',
        'recipe-step-3': '薄切りにしたしいたけを卵液の上にそっと並べます。',
        'recipe-step-4': '中火で10〜12分蒸し、最後にネギやいくらを添えれば完成です。'
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
        'feature-1-title': 'Window Grille Aesthetics',
        'feature-1-text': 'Elegant wisteria pattern with eco-friendly handle. The ultimate sincere gift for health conscious users.',
        'feature-2-title': 'Bouncy & Beautiful',
        'feature-2-text': 'Food-grade high-temperature sterilized aluminum foil. Room temperature storage, drink anytime.',
        'feature-3-title': 'Top-tier Nourishment',
        'feature-3-text': 'Zero cholesterol, zero fat, no preservatives. SGS tested and certified for complete peace of mind.',
        'feature-4-title': 'Full of Vitality',
        'feature-4-text': 'Strictly selected Silkie chickens. 12-hour extraction of small-molecule amino acids. Smooth taste.',
        'pricing-title': 'Choose the Plan for You',
        'plan-1-name': 'Cheng Yun Series',
        'plan-1-amount': '1,680',
        'plan-1-period': '/box',
        'plan-1-feat-1': '1 Box Classic NT$1,680',
        'plan-1-feat-2': '3 Boxes Value NT$4,280',
        'plan-1-feat-3': 'New member bonus $100',
        'plan-1-feat-4': 'Health consultation support',
        'plan-1-feat-5': 'Subscription discount',
        'btn-experience': 'Try Now',
        'plan-2-name': 'Cheng Run Series',
        'plan-2-amount': '1,880',
        'plan-2-period': '/box',
        'plan-2-feat-1': '1 Box Collagen NT$1,880',
        'plan-2-feat-2': '3 Boxes Value NT$4,780',
        'plan-2-feat-3': 'Double reward points monthly',
        'plan-2-feat-4': 'Exclusive VIP holiday gift',
        'plan-2-feat-5': '1-on-1 nutritionist consultation',
        'btn-vip': 'Dual Essence',
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
        'nav-language': 'Language',
        'nav-kitchen': 'Kitchen',
        'kitchen-badge': 'SUMIKADŌ KITCHEN',
        'kitchen-title': 'Sumikado Kitchen',
        'kitchen-subtitle': 'Where every drop of essence transforms into warmth and beauty on your table.',
        'kitchen-recipe-title': 'Sumikado Recipes',
        'kitchen-recipe-desc': 'Chef-crafted recipes using chicken essence as the soul of your dishes. Elevate eating to nourishing.',
        'kitchen-btn-view': 'Explore Recipes &rarr;',
        'kitchen-chef-title': 'Master Class',
        'kitchen-chef-desc': 'TW & JP culinary masters performing the pinnacle of daily life. Inviting professionals to create ritualistic and deep beauty-dishes with Sumikado.',
        'kitchen-btn-class': 'Enter Class &rarr;',
        'kitchen-event-title': 'Curated Tastes',
        'kitchen-event-desc': 'A selection of hidden flavors from local masters. Everyone is a curator of taste here. "Your secret recipe is precious."',
        'reward-badge': '🎁 Selection Reward',
        'kitchen-event-rule': 'Win a box of Sumikado Premium Repair Masks (5pcs / Value $680) when your recipe is published.',
        'kitchen-btn-submit': 'Submit Now',
        'recipe-badge': 'MASTER CLASS #01',
        'recipe-title': 'Silky Essence Steamed Egg',
        'recipe-ingredients-title': 'Ingredients (1 Serving)',
        'recipe-ingredients-list': `
            <li>Sumikado Chicken Essence (60ml) x1</li>
            <li>Eggs x2</li>
            <li>Warm water 100ml</li>
            <li>A pinch of salt</li>
            <li>Shiitake / Chives or Salmon Roe</li>
        `,
        'recipe-steps-title': 'Instructions',
        'recipe-step-1': 'Whisk eggs, then mix in chicken essence, warm water, and salt.',
        'recipe-step-2': 'Sift twice to remove bubbles and impurities for a silky smooth texture.',
        'recipe-step-3': 'Gently place thin slices of shiitake mushroom on the egg mixture.',
        'recipe-step-4': 'Steam on medium heat for 10-12 mins, then garnish with chives or salmon roe.'
    }
};

function toggleRecipeModal() {
    const modal = document.getElementById('recipeModal');
    modal.classList.toggle('hidden');
    document.body.classList.toggle('overlay-active');
}

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
