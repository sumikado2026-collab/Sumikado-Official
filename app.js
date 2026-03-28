// app.js

const translations = {
    'zh': {
        'nav-home': '首頁',
        'nav-about': '品牌理念',
        'nav-product': '滴養之道',

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
        'feature-1-text': '典雅紫藤花紋設計，珍藏台灣窗花文化。澄花堂的理念是守護並傳承這份珍貴的台灣寶藏，讓滋補聖品同時成為文化的載體。',
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
        'process-title': '滴雞精科學 | The Science of Essence',
        'science-method-title': '古法滴煉 ‧ 蒸汽不回流',
        'science-method-desc': '堅持 12 小時慢火萃取，利用蒸氣孔洞原理將精華滴出。過程中不添加一滴水，且通過兩道脫油技術，去脂除腥，保留純粹小分子營養。',
        'science-chicken-title': '雞種科學分析：烏骨雞 vs. 原生雞',
        'science-chicken-desc': '不同雞種蘊含著不同的營養密度。根據國家檢驗數據，烏骨雞在微量元素與肌肽含量上，有著顯著的領先。',
        'science-chicken-comparison': `
            <div class="comparison-row"><strong>烏骨雞 (Silkie)</strong>：含天然黑色素及更高濃度的支鏈胺基酸 (BCAA)，適合藥膳滋補。</div>
            <div class="comparison-row"><strong>台灣原生土雞 (Native)</strong>：肉質紮實、風味甘醇，含豐富均衡的膠原蛋白與胜肽。</div>
            <div class="comparison-row"><strong>一般肉雞 (Broiler)</strong>：養殖期短、營養密度較低，常需添加調味料或水分。</div>
        `,
        'science-benefits-title': '科研成分與健康益處',
        'science-benefit-1': '<strong>高效抗疲勞</strong>：顯著增加體內肝醣儲存，提升運動與耐力表現。',
        'science-benefit-2': '<strong>快速修復</strong>：小分子胺基酸能在短時間內吸收，適合術後或體虛調養。',
        'science-benefit-3': '<strong>彈力支撐</strong>：富含豐富膠原胜肽，支持肌膚彈性與關節潤滑。',
        'btn-consult': '了解更多科研細節',
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
        'kitchen-event-requirements': `
            <li>1. 需包含「澄花堂」滴雞精系列產品</li>
            <li>2. 需提供詳細食材清單、步驟與完成品特寫</li>
            <li>3. 私房食譜經採納刊登，即獲贈「面膜」乙盒（5片入）</li>
        `,
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
        'feature-1-text': '優雅な藤の花のデザイン。台灣の「窓格子（窗花）」文化を大切にし、貴重な台灣の宝を守り受け継ぐことが澄花堂の理念です。',
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
        'process-title': '精のエッセンスの科学 | The Science of Essence',
        'science-method-title': '古法蒸留 ‧ 完全無添加水分',
        'science-method-desc': '12時間の低温抽出により、一滴の水も加えずに純粋な成分を抽出。独自の技術で脂質と臭みを除去し、小分子栄養をそのまま凝縮。',
        'science-chicken-title': '鶏種の科学分析：烏骨鶏 vs 本地鶏',
        'science-chicken-desc': '鶏の品種によって栄養密度が異なります。国家機関のデータによると、烏骨鶏は微量元素とカルノシン含有量で優れています。',
        'science-chicken-comparison': `
            <div class="comparison-row"><strong>烏骨鶏 (Silkie)</strong>：天然メラニンと高濃度のBCAAを含み、薬食同源の代表格です。</div>
            <div class="comparison-row"><strong>台灣本地土鶏 (Native)</strong>：肉質が堅実で、豊富かつバランスの良いコラーゲンとペプチドを含みます。</div>
            <div class="comparison-row"><strong>若鶏 (Broiler)</strong>：飼育期間が短く栄養密度が低いため、添加物等が必要になる場合があります。</div>
        `,
        'science-benefits-title': '科学的成分と健康へのメリット',
        'science-benefit-1': '<strong>抗疲労効果</strong>：体内のグリコーゲン貯蔵量を増やし、瞬発力と持久力をサポート。',
        'science-benefit-2': '<strong>急速修復</strong>：小分子アミノ酸が短時間で吸収され、術後や体質改善に最適。',
        'science-benefit-3': '<strong>弾力サポート</strong>：豊富なコラーゲンペプチドが肌のハリと関節の滑らかさを保ちます。',
        'btn-consult': '科学的詳細をもっと知る',
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
        'kitchen-event-requirements': `
            <li>1. 澄花堂チキンエッセンス製品を使用すること</li>
            <li>2. 詳細なレシピ、手順、完成品写真を送付</li>
            <li>3. 採用・掲載につき「パック」1枚（5枚入）をプレゼント</li>
        `,
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
        'feature-1-text': "Elegant wisteria pattern preserving Taiwan's window grille culture. Sumikado's philosophy is to guard and pass on these precious Taiwanese treasures.",
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
        'process-title': 'The Science of Essence',
        'science-method-title': '12-Hour Waterless Steam Extraction',
        'science-method-desc': 'We adhere to a 12-hour slow extraction method with zero water added. Double fat-removal technology ensures a pure, nutrient-dense extract rich in small-molecule peptides.',
        'science-chicken-title': 'Chicken Breed Science: Silkie vs. Native',
        'science-chicken-desc': 'Nutritional density varies by breed. National lab tests show that Silkie chickens excel in BCAA and Carnosine content over common breeds.',
        'science-chicken-comparison': `
            <div class="comparison-row"><strong>Silkie (Black-bone)</strong>: Rich in melanin and concentrated BCAA, the ultimate medicinal choice.</div>
            <div class="comparison-row"><strong>Native Indigenous</strong>: Firm texture, sweet flavor, balanced collagen, and highly bioavailable peptides.</div>
            <div class="comparison-row"><strong>Common Broiler</strong>: Short growth cycle, lower nutrient density, often diluted or flavored.</div>
        `,
        'science-benefits-title': 'Bioactive Components & Health Benefits',
        'science-benefit-1': '<strong>Anti-Fatigue</strong>: Increases glycogen storage for enhanced physical endurance and recovery.',
        'science-benefit-2': '<strong>Rapid Absorption</strong>: Small-molecule amino acids are absorbed quickly to nourish weak systems.',
        'science-benefit-3': '<strong>Elasticity Support</strong>: Rich collagen peptides support skin firmness and joint health.',
        'btn-consult': 'Discover More Science',
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
        'kitchen-event-requirements': `
            <li>1. Must include Sumikado Chicken Essence products</li>
            <li>2. Provide detailed ingredients, steps, and dish photos</li>
            <li>3. Receive one box of "Mask" (5pcs) upon publication</li>
        `,
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
