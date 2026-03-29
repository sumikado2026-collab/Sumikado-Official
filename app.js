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
        'founder-title': '品牌精神',
        'founder-text': '源於漢方涵養與三十年西醫實證，澄花堂以醫師的嚴謹眼光，親自嚴選每一份純粹。猶如母親般的細膩呵護，我們將大地溫潤精華擷取為優雅的元氣補給。在台灣窗花的印記下，與您一同守護健康初心。',
        'founder-caption': '澄 花 堂 ‧ 品牌精神',
        'founder-sub': '【 醫 師 嚴 選 ‧ 母 親 呵 護 】',
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
        'plan-1-feat-1': '1盒 經典滴養 (8入) NT$1,680',
        'plan-1-feat-2': '3盒超值組 NT$4,280',
        'plan-1-feat-3': '新會員專屬購物金 $100',
        'plan-1-feat-4': '專屬健康諮詢',
        'plan-1-feat-5': '定期配送優惠',
        'btn-experience': '立即體驗',
        'plan-2-name': '澄潤 系列',
        'plan-2-amount': '1,880',
        'plan-2-period': '/盒',
        'plan-2-feat-1': '1盒 膠原滋補 (8入) NT$1,880',
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
        'kitchen-home-title': '澄花家廚',
        'kitchen-home-desc': `
            有父親澄雄的穩妥，有母親芳代子的馨香。<br><br>
            廚房是家中最溫暖的場所。以父母之名，收藏歲月的馨香。<br>
            我們以「澄花食譜」為名，復刻家常點滴，與您分享愛與傳承的真味。
        `,
        'kitchen-master-title': '名廚旨味',
        'kitchen-master-desc': `
            沁養潤澤，餘韻悠長。<br><br>
            指尖的倒影，是工匠之心的探尋。<br>
            我們將名廚的私房祕技領入您的餐桌，與您共嘗生命的清鮮與厚重。
        `,
        'kitchen-btn-home': '歡迎回家 &rarr;',
        'kitchen-btn-enter': '進入教室 &rarr;',
        'kitchen-event-title': '澄芳選',
        'kitchen-event-desc': '民間高手 ‧ 私藏風味的選拔。尋找藏在日常裡的味覺實踐者。在這裡，每個人都是品味的策展人。您的私房祕技，是澄花堂最珍貴的收藏!',
        'reward-badge': '🎁 選味獎勵',
        'kitchen-event-requirements': `
            <li>1. 需包含「澄花堂」滴雞精系列產品</li>
            <li>2. 需提供詳細食材清單、步驟與完成品特寫</li>
            <li>3. 私房食譜經採納刊登，即獲贈「面膜」乙盒（5片入）</li>
        `,
        'kitchen-btn-submit': '立即投稿',
        'recipe-home-badge': '澄花家廚 #01',
        'recipe-home-title': '滴雞精柔滑蒸蛋',
        'recipe-home-ingredients': `
            <li>澄花堂滴雞精 1包 (60ml)</li>
            <li>雞蛋 2顆</li>
            <li>溫水 140ml</li>
            <li>鹽 少許</li>
            <li>鮮香菇薄片/鮭魚卵 (裝飾)</li>
        `,
        'recipe-home-steps': `
            <li>將雞蛋均勻打散，加入滴雞精、溫水與少許鹽拌勻。</li>
            <li>進行兩次過篩，去除氣泡與雜質。</li>
            <li>中火蒸 8-10 分鐘後快速開蓋。</li>
            <li>鋪上香菇薄片，續蒸 3 分鐘，灑上鮭魚卵裝飾即可。</li>
        `,
        'recipe-chef-badge': '名廚旨趣 #01',
        'recipe-chef-title': '日式膠原雞湯鍋',
        'recipe-chef-ingredients': `
            <li>澄花堂澄潤膠原滴雞精 2包</li>
            <li>嫩雞腿肉 切塊 300g</li>
            <li>大白菜/昆布高湯 800ml</li>
            <li>鮮香菇、豆腐、季節野菜</li>
            <li>橙醋或胡麻醬 (沾醬)</li>
        `,
        'recipe-chef-steps': `
            <li>將切塊烏骨雞汆燙去血水備用。</li>
            <li>於昆布高湯中加入雞塊燉煮 15 分鐘至軟嫩。</li>
            <li>加入野菜、豆腐與香菇。</li>
            <li>起鍋前倒入兩包滴雞精，鎖住營養，讓湯頭風味深邃回甘。</li>
        `
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
        'founder-title': 'ブランド精神',
        'founder-text': '漢方の叡智と三十年にわたる西洋医学の臨床経験を礎に、澄花堂は医師の厳格な視点で真の純粋さを吟味します。母親のような細やかな慈愛を込め、大地の精華を優雅な活力へと昇華させました。台湾の伝統的な窓飾りに守護の願いを込めて、皆様の健康な日々に寄り添います。',
        'founder-caption': '澄花堂 ‧ ブランド精神',
        'founder-sub': '【 医師の厳選 ‧ 母の慈しみ 】',
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
        'plan-1-feat-1': '1箱 經典セット (8入) 1,680円',
        'plan-1-feat-2': '3箱セット特価 4,280円',
        'plan-1-feat-3': '新規会員特典 $100',
        'plan-1-feat-4': '健康相談サポート',
        'plan-1-feat-5': '定期配送割引',
        'btn-experience': '今すぐ試す',
        'plan-2-name': '澄潤（Chengrun）',
        'plan-2-amount': '1,880',
        'plan-2-period': '/箱',
        'plan-2-feat-1': '1箱 膠原セット (8入) 1,880円',
        'plan-2-feat-2': '3箱セット特価 4,780円',
        'plan-2-feat-3': '毎月ポイント2倍',
        'plan-2-feat-4': 'VIP限定ギフト',
        'plan-2-feat-5': '栄養士オンライン相談',
        'btn-vip': 'W効果の滴養',
        'process-title': 'チキンエッセンスの科学',
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
        'footer-brand': '澄花堂選品',
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
        'kitchen-home-title': '澄花レシピ',
        'kitchen-home-desc': `
            父・澄雄（すみお）の穏やかさと、母・芳代子（かよこ）の馨しさを込めて。<br><br>
            キッチンは家庭で最も温かな場所であり、兩親の名を冠したこの場所には、歲月の香りが秘められています。<br>
            私たちは「澄花レシピ」を通じて、愛と継承の真の味を分かち合います。
        `,
        'kitchen-master-title': '名廚旨味',
        'kitchen-master-desc': `
            沁み渡る潤い、悠久に続く余韻。<br><br>
            職人の指先から生まれる、繊細で深みのある料理の哲学。<br>
            巨匠たちの私的な味の極みをあなたの食卓へ。澄み渡る生命の喜びを分かち合いましょう。
        `,
        'kitchen-btn-home': 'おかえりなさい &rarr;',
        'kitchen-btn-enter': '教室に入る &rarr;',
        'kitchen-event-title': '澄芳の綴り',
        'kitchen-event-desc': '民間達人による秘蔵の味わい選抜。日常に潜む味覚の実踐者を探しています。誰もが品味のキュレーターです！',
        'reward-badge': '🎁 選味リワード',
        'kitchen-event-requirements': `
            <li>1. 澄花堂チキンエッセンス製品を使用すること</li>
            <li>2. 詳細なレシピ、手順、完成品写真を送付</li>
            <li>3. 採用・掲載につき「パック」1枚（5枚入）をプレゼント</li>
        `,
        'kitchen-btn-submit': '今すぐ投稿',
        'recipe-home-badge': '澄花レシピ #01',
        'recipe-home-title': 'チキンエッセンスの滑らか茶碗蒸し',
        'recipe-home-ingredients': `
            <li>澄花堂チキンエッセンス 1包 (60ml)</li>
            <li>卵 2個</li>
            <li>ぬるま湯 140ml</li>
            <li>塩 少々</li>
            <li>しいたけスライス/いくら (トッピング)</li>
        `,
        'recipe-home-steps': `
            <li>卵を溶きほぐし、チキンエッセンス、ぬるま湯、塩を加えて混ぜます。</li>
            <li>2回濾（こ）して、気泡や不純物を取り除きます。</li>
            <li>中火で 8〜10 分蒸した後、素早く蓋を開けます。</li>
            <li>しいたけをのせ、さらに 3 分蒸し、いくらを飾れば完成です。</li>
        `,
        'recipe-chef-badge': '名廚旨趣 #01',
        'recipe-chef-title': '日系コラーゲン鶏白湯鍋',
        'recipe-chef-ingredients': `
            <li>澄花堂澄潤コラーゲンチキンエッセンス 2包</li>
            <li>若鶏の切り身 300g</li>
            <li>昆布だし 800ml</li>
            <li>しいたけ、豆腐、季節の野菜</li>
            <li>ポン酢または胡麻だれ (お好みで)</li>
        `,
        'recipe-chef-steps': `
            <li>鶏肉を湯通しして余分な油と血分を除きます。</li>
            <li>昆布だしで鶏肉を 15 分ほど煮込み、柔らかくします。</li>
            <li>野菜、豆腐、しいたけを加えます。</li>
            <li>食べる直前にチキンエッセンスを注ぎ、風味と栄養を閉じ込めます。</li>
        `
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
        'founder-title': 'Brand Spirit',
        'founder-text': "Founded on three decades of medical expertise, Sumikado selects only the purest essentials with a physician's rigor and a mother's tender care. We transform the earth's gentle essence into an elegant source of vitality. Under the icon of the Taiwanese window grille, we guard your wellness with unwavering dedication.",
        'founder-caption': 'Sumikado ‧ Brand Spirit',
        'founder-sub': '[ Doctor Selected ‧ Motherly Care ]',
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
        'plan-1-feat-1': '1 Box Classic (8入) NT$1,680',
        'plan-1-feat-2': '3 Boxes Value NT$4,280',
        'plan-1-feat-3': 'New member bonus $100',
        'plan-1-feat-4': 'Health consultation support',
        'plan-1-feat-5': 'Subscription discount',
        'btn-experience': 'Try Now',
        'plan-2-name': 'Cheng Run Series',
        'plan-2-amount': '1,880',
        'plan-2-period': '/box',
        'plan-2-feat-1': '1 Box Collagen (8入) NT$1,880',
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
        'kitchen-home-title': 'Home Kitchen',
        'kitchen-home-desc': `
            With the steadiness of father Sumio and the fragrance of mother Kayoko.<br><br>
            The kitchen is the warmest place at home, named after our parents, collecting the fragrance of years.<br>
            We recreate home routines in "Sumikado Recipes," sharing true tastes of love and legacy.
        `,
        'kitchen-master-title': "Chef's Interest",
        'kitchen-master-desc': `
            Moisturizing and nourishing, with a long-lasting aftertaste.<br><br>
            Capturing reflections from fingers, exploring the heart of craftsmen.<br>
            Bringing master secrets to your home, savoring the clear and deep meanings of life.
        `,
        'kitchen-btn-home': 'Welcome Home &rarr;',
        'kitchen-btn-enter': 'Enter Class &rarr;',
        'kitchen-event-title': 'Curated Tastes',
        'kitchen-event-desc': 'A selection of hidden flavors from local masters. Everyone is a curator of taste here. "Your secret recipe is precious."',
        'reward-badge': '🎁 Selection Reward',
        'kitchen-event-requirements': `
            <li>1. Must include Sumikado Chicken Essence products</li>
            <li>2. Provide detailed ingredients, steps, and dish photos</li>
            <li>3. Receive one box of "Mask" (5pcs) upon publication</li>
        `,
        'kitchen-btn-submit': 'Submit Now',
        'recipe-home-badge': 'Home Kitchen #01',
        'recipe-home-title': 'Silky Essence Steamed Egg',
        'recipe-home-ingredients': `
            <li>Sumikado Chicken Essence 1 pack (60ml)</li>
            <li>Eggs x2</li>
            <li>Warm water 140ml</li>
            <li>A pinch of salt</li>
            <li>Thin Shiitake slices / Salmon Roe (Garnish)</li>
        `,
        'recipe-home-steps': `
            <li>Whisk eggs, then mix in chicken essence, warm water, and salt.</li>
            <li>Sift twice to remove bubbles and impurities.</li>
            <li>Steam on medium heat for 8-10 mins and open the lid.</li>
            <li>Add shiitake slices, steam for 3 mins, then garnish with salmon roe.</li>
        `,
        'recipe-chef-badge': "Chef's Interest #01",
        'recipe-chef-title': 'Japanese Collagen Chicken Soup Pot',
        'recipe-chef-ingredients': `
            <li>Sumikado Collagen Chicken Essence 2 packs</li>
            <li>Chicken thigh chunks 300g</li>
            <li>Kelp stock 800ml</li>
            <li>Shiitake, Tofu, seasonal vegetables</li>
            <li>Ponzu or sesame sauce (for dipping)</li>
        `,
        'recipe-chef-steps': `
            <li>Blanch chicken chunks to remove impurities.</li>
            <li>Simmer chicken in kelp stock for 15 minutes until tender.</li>
            <li>Add vegetables, tofu, and shiitake.</li>
            <li>Pour in chicken essence before serving to lock in nutrition and flavor.</li>
        `
    }
};

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
    const data = translations[lang];
    
    const badge = document.getElementById('recipeBadge');
    const title = document.getElementById('recipeTitle');
    const img = document.getElementById('recipeImage');
    const ingredients = document.getElementById('recipeIngredients');
    const steps = document.getElementById('recipeSteps');

    if (type === 'home') {
        badge.innerText = data['recipe-home-badge'];
        title.innerText = data['recipe-home-title'];
        img.src = 'assets/recipe_egg_portrait.jpg';
        ingredients.innerHTML = data['recipe-home-ingredients'];
        steps.innerHTML = data['recipe-home-steps'];
    } else if (type === 'chef') {
        badge.innerText = data['recipe-chef-badge'];
        title.innerText = data['recipe-chef-title'];
        img.src = 'assets/recipe_collagen_soup.jpg';
        ingredients.innerHTML = data['recipe-chef-ingredients'];
        steps.innerHTML = data['recipe-chef-steps'];
    }
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
