// app.js

const translations = {
    'zh': {
        'nav-home': '首頁',
        'nav-about': '品牌理念',
        'nav-product': '滴養之道',
        'nav-beautology': '美力學堂',
        'nav-science': '滴雞精科學',

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
        'feature-1-text': '典雅紫藤花紋設計，珍藏台灣窗花文化。澄花堂的理念是守護並傳承珍貴的台灣寶藏，讓滋補聖品同時成為文化的載體。',
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
        `,
        'beautology-badge': '美力學堂',
        'beautology-title': '🌸 HANA 醫師的美力學堂',
        'beautology-intro-quote': '—— 美力，是氣血盈滿後的自然溢出 ——',
        'beautology-intro-title': '▋ 什麼是「美力」？',
        'beautology-intro-text': '這是一門結合了美麗 (Beauty) 與 生命力 (Vitality) 的平衡學問。在漢方醫學的視角下，外在的乾枯往往源於內在的「陰虛」與「氣弱」。真正的美，不應只是表象的塗抹，而是深層生理機能盈滿後的自然綻放。',
        'beautology-exp-title': '▋ 三巡四子：從損耗到重生的實證',
        'beautology-exp-text': '我曾懷孕三巡、喜得四子。在經歷過孕育生命帶來的精血損耗與極度疲憊後，我仍選擇一邊育兒、一邊迅速重返職場。那段哺乳期帶來的精力耗竭，以及青春流逝的真實感，深刻地驅使我投入「漢方滋養與母乳」的深度研究。我比誰都清楚，從懷孕到哺乳這段神聖卻艱辛的過程，女性需要的不是大負擔的進補，而是「精微物質」的精準運行。',
        'beautology-advocate-title': '▋ 我的美力主張：氣血雙補，精微修復',
        'beautology-advocate-text': '我深信，女性體質最重要的 Reset（重開機） 機會就在產後。<br><strong>精微物質：</strong> 透過小分子胜肽與礦物質，繞過消化負擔，直達細胞修復。<br><strong>氣血雙補：</strong> 補氣以支撐育兒體力，養血以潤澤枯竭底蘊。',
        'beautology-lesson-1-title': '第一課：🔬 漢醫新語：滴養之道的醫學實證',
        'beautology-lesson-1-subtitle': '—— 從母乳研究到氣血重建的精微邏輯 ——',
        'beautology-lesson-1-desc': '在「美力學堂」中，我提到了女性產後的 Reset（重開機）。身為漢醫碩士，我深究漢方典籍與現代營養學，發現「氣血雙補」不只是口號，而是有著嚴密的微量元素與生理運作邏輯。',
        'beautology-l1-s1-title': '1. 乳汁為血所化：母乳補給的深層科學',
        'beautology-l1-s1-text': '漢醫理論認為：「乳汁者，其源出於脾胃，其化在於肝，實則氣血所化也。」對於產後與哺乳期的女性，身體面臨的是極大的能量挪用。<br><strong>脾胃為後天之本：</strong> 我們選用台灣原生古早雞，其溫中益氣的特性，能強化脾胃運化。當「中氣」充足，攝取的營養才能轉化為質優量足的乳汁。<br><strong>滋陰養血的「黑金」：</strong> 烏骨雞入肝、腎經，富含高於一般雞種 2-3 倍的鐵 (Fe) 與 鋅 (Zn)。不僅能修復母體損耗，更能透過乳汁傳遞給寶寶。',
        'beautology-l1-s2-title': '2. 精微物質的運行：小分子胜肽的力量',
        'beautology-l1-s2-text': '為什麼我強調「精微修復」？產後脾胃虛弱，大魚大肉往往造成消化負擔（中醫所謂的「虛不受補」）。<br><strong>小分子轉換：</strong> 透過恆溫滴製技術，將大分子的蛋白質轉化為游離胺基酸與膠原胜肽。<br><strong>生物利用率：</strong> 這些精微物質能繞過繁瑣消化，直達細胞修復底層，達成「補而不燥、潤而不膩」的最高調養境界。',
        'beautology-l1-s3-title': '3. 澄韻與澄潤：內在美力的雙重應援',
        'beautology-l1-s3-text': '根據我的研究與三次分娩的實證，我將這份專業轉化為兩款精準處方：<br><strong>【澄韻｜元氣之雫】：</strong> 以古早雞為主，側重「益氣」。適合產前衝刺體力、產後補足中氣。<br><strong>【澄潤｜飲用美容液】：</strong> 以烏骨雞為主，側重「滋陰」。添加膠原蛋白，針對產後氣色暗沈與結構修復。',
        'beautology-footer-quote': '「我的研究初衷很簡單：用最科學的漢方邏輯，守護每一位正在孕育生命、或在職場與家庭間奔波的女性。」 —— HANA 醫師',
        'beautology-next-lessons-title': '即將上線內容',
        'beautology-lesson-2': '第二課：環境養土論——為什麼「澄韻」是孕育的根基？',
        'beautology-lesson-3': '第三課：黑金聖品的滋陰學——烏骨雞與妳的飲用美容液。',
        'beautology-lesson-4': '第四課：Reset 關鍵 60 天——漢醫碩士的產後調養計畫',
    },
    'ja': {
        'nav-home': 'トップ',
        'nav-about': 'ブランド理念',
        'nav-product': '滴養之道',
        'nav-beautology': '美力学堂',
        'nav-science': '滴鶏精科学',

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
        `,
        'beautology-badge': '美力學堂',
        'beautology-title': '🌸 HANA医師の美力學堂',
        'beautology-intro-quote': '—— 美力とは、気血が満ち溢れた後の自然な輝き ——',
        'beautology-intro-title': '▋ 「美力」とは？',
        'beautology-intro-text': '美しさ (Beauty) と生命力 (Vitality) を融合させた、調和の学問。外見の乾きは、内側の「陰虛」と「気弱」に起因します。真の美しさは、深層の生理機能が満たされてこそ、自然に溢れ出すものです。',
        'beautology-exp-title': '▋ 母としての経験：消耗から再生への実証',
        'beautology-exp-text': '3度の出産で4人の子を授かりました。命を育むことによる精血の消耗と、極度の疲弊を経験しながらも、育児と仕事の両立を選択しました。その過程で「漢方滴養と母乳」の深い研究に没頭。女性の心身を守るには、負担の大きい補給ではなく「精微物質」による精密な修復が必要であることを確信しました。',
        'beautology-advocate-title': '▋ 私の美力主張：気血双補、精微修復',
        'beautology-advocate-text': '産後は、女性の体質をReset（再起動）する最大の機会です。<br><strong>精微物質：</strong> 小分子ペプチドとミネラルが、消化の負担なく細胞を直接修復。<br><strong>気血双補：</strong> 気を補い育児の体力を支え、血を養い枯渇した内側を潤します。',
        'beautology-lesson-1-title': '第1回：🔬 漢医新語：滴養之道（テキヨウノミチ）の医学的実証',
        'beautology-lesson-1-subtitle': '—— 母乳研究から気血再建への精微ロジック ——',
        'beautology-lesson-1-desc': '漢医修士として、古典と現代栄養学を深く探究しました。「気血双補」は単なるスローガンではなく、厳密な微量元素と生理機能のメカニズムに基づいています。',
        'beautology-l1-s1-title': '1. 乳汁は血から成る：母乳補給の科学',
        'beautology-l1-s1-text': '漢医理論では「乳汁は脾胃に源を発し、肝で化し、実は気血の変化したものである」とされます。産後の女性には、莫大なエネルギーの転用が必要です。台湾自生鶏（古早鶏）は脾胃を強め、烏骨鶏（黒金）は2〜3倍の鉄分と亜鉛を含み、母体の消耗を補い、質の高い母乳を育みます。',
        'beautology-l1-s2-title': '2. 精微物質の運行：小分子ペプチドの力',
        'beautology-l1-s2-text': '産後の弱った脾胃には、重い食事はかえって負担（虛不受補）となります。恒温抽出法によりタンパク質を遊離アミノ酸とコラーゲンペプチドへ変換。これら「精微物質」は、消化のプロセスを飛び越えて細胞の修復現場へ直行し、潤いを与えます。',
        'beautology-l1-s3-title': '3. 澄韻と澄潤：内なる美力の二重サポート',
        'beautology-l1-s3-text': '実証データに基づき、2種類の処方を開発しました。<br><strong>【澄韻｜元気の雫】：</strong> 古早鶏を主とし「益気」に重点。産前産後の体力維持に。<br><strong>【澄潤｜飲む美容液】：</strong> 烏骨鶏を主とし「滋陰」に重点。コラーゲン配合で産後のくすみと構造の修復に。',
        'beautology-footer-quote': '「科学的な漢方ロジックで、命を育むすべての女性の美力（生命力）を守りたい。」 —— HANA医師',
        'beautology-next-lessons-title': '今後の予定',
        'beautology-lesson-2': '第2回：環境養土論 — なぜ「澄韻」が育みの基礎なのか？',
        'beautology-lesson-3': '第3回：ブラックゴールドの滋陰学 — 烏骨鶏とあなたの飲む美容液。',
        'beautology-lesson-4': '第4回：Reset 鍵となる60日間 — 漢医修士の産後ケア計画',
    },
    'en': {
        'nav-home': 'Home',
        'nav-about': 'Philosophy',
        'nav-product': 'Essence',
        'nav-beautology': 'Vital Beauty',
        'nav-science': 'Science',

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
        `,
        'beautology-badge': 'VITAL BEAUTY',
        'beautology-title': "🌸 Dr. Hana's Vital Beauty",
        'beautology-intro-quote': '— Beauty is the natural overflow of vital energy —',
        'beautology-intro-title': '▋ What is "Vital Beauty"?',
        'beautology-intro-text': 'A discipline combining Beauty and Vitality. In TCM, external dryness stems from internal "Yin Deficiency" and "Qi Weakness". True beauty is the natural radiance that blossoms once deep physiological functions are fully restored.',
        'beautology-exp-title': '▋ Three Pregnancies, Four Children: Evidence of Rebirth',
        'beautology-exp-text': 'Having raised four children through three pregnancies, I experienced profound exhaustion and nutrient depletion. Choosing to return to professional life quickly, I delved into "TCM Nourishment & Lactation". I learned that mothers need precision "micro-substances" rather than heavy, burdensome supplements.',
        'beautology-advocate-title': '▋ My Advocacy: Qi-Blood Dual Support & Micro-Repair',
        'beautology-advocate-text': 'Postpartum is the most critical "Reset" for a woman\'s body.<br><strong>Micro-substances:</strong> Small molecule peptides and minerals bypass digestive strain, repairing cells directly.<br><strong>Dual Support:</strong> Tonifying Qi sustains stamina for motherhood; nourishing Blood restores the depleted soul.',
        'beautology-lesson-1-title': 'Lesson 1: 🔬 Modern TCM: Medical Evidence of Essence',
        'beautology-lesson-1-subtitle': '— From Lactation Research to Cellular Reconstruction —',
        'beautology-lesson-1-desc': 'As a TCM Master, I analyzed classical texts and modern nutrition. "Dual Tonification of Qi and Blood" is not just a slogan; it is a systematic logic of micronutrients and physiological operation.',
        'beautology-l1-s1-title': '1. Milk is Blood Transformed: The Science of Motherhood',
        'beautology-l1-s1-text': 'TCM states: "Milk originates from the spleen and stomach, is transformed by the liver, and is essentially the product of Qi and Blood." For nursing mothers, local ancient breed chickens enhance spleen energy, while Silkie chickens provide 2-3x more Iron (Fe) and Zinc (Zn) to repair the mother and nourish the child through milk.',
        'beautology-l1-s2-title': '2. Micro-substances: The Power of Small Molecule Peptides',
        'beautology-l1-s2-text': 'Why "Micro-repair"? A weak postpartum digestion cannot handle heavy meals (Deficiency Resistance). Our low-heat extraction transforms protein into free amino acids and collagen peptides. These micro-substances bypass complex digestion to repair cells directly, achieving nourishment without irritation.',
        'beautology-l1-s3-title': '3. Double Support: Nourishing Inner Beauty',
        'beautology-l1-s3-text': 'Based on three successful births, I formulated two precise treatments:<br><strong>【Cheng Yun | Essence of Qi】：</strong> Focuses on "Qi" for stamina during and after pregnancy.<br><strong>【Cheng Run | Drinkable Beauty Liquid】：</strong> Focuses on "Yin" with added collagen for structural repair and radiance.',
        'beautology-footer-quote': '"My research began with a simple goal: to safeguard every woman navigating motherhood and professional life using scientific TCM logic." —— Dr. HANA',
        'beautology-next-lessons-title': 'Upcoming Lectures',
        'beautology-lesson-2': 'Lesson 2: Soil Theory — Why "Cheng Yun" is the Foundation of Life.',
        'beautology-lesson-3': 'Lesson 3: The Yin Science of Silkie Chicken Essence.',
        'beautology-lesson-4': 'Lesson 4: Reset Key 60 Days — Postpartum Recovery Plan.',
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
