// games.js
// HomePlay 遊戲資料精簡版
// 之後若要更完整，可以在每個遊戲物件裡加入 materials / steps / benefits 等欄位

window.GAMES = [
    // =====================
    // 2–3 歲：10 個遊戲
    // =====================
    {
        id: "game_2_3_01",
        title: "顏色小豆豆分類盤",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sensory", "logic"],
        cost_min: 0,
        cost_max: 80,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "用彩色豆子或珠珠放進分類盤，讓孩子照顏色分類，訓練顏色認知與手眼協調。",
        hero_image_url: "/images/games/2_3_01.jpg",
        tags: ["顏色認知", "感覺統合", "精細動作"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "不同顏色的小豆豆、珠珠或鈕扣數十顆（避免可吞大小，需家長全程陪同）",
            "有分隔的小盤子或製冰盒",
            "小夾子或湯匙"
        ],
        steps: [
            "在分隔盤的每個格子裡貼上一個顏色的標籤或色紙。",
            "將所有混在一起的豆豆放在一個大碗裡。",
            "請孩子使用夾子或湯匙，將豆豆依照顏色放進對應的格子。",
            "家長在旁鼓勵並複誦顏色名稱。",
        ],
        benefits: [
            "訓練精細動作與手部小肌肉。",
            "建立基礎的顏色辨識與分類邏輯。",
            "提升專注力與耐心。"
        ],
        extensions: [
            "將豆豆改為不同形狀的積木或玩具，練習形狀分類。",
            "設置一個計時器，讓孩子挑戰在時間內完成。",
        ],
        likes_count: 55,
        favorites_count: 15,
        completed_count: 12,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_02",
        title: "紙箱隧道小爬行",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sports", "sensory"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 10,
        summary: "利用大紙箱排成隧道，讓孩子爬行穿越，練習大肌肉與空間感。",
        hero_image_url: "/images/games/2_3_02.jpg",
        tags: ["大肌肉發展", "空間感", "探索"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "中大尺寸紙箱 2–4 個（例如宅配箱）",
          "安全膠帶或紙膠帶 1 卷",
          "軟墊、地墊或毛毯數條（鋪在地上防滑）",
          "小玩偶或小球 1–2 個（放在終點當驚喜）"
        ],
        steps: [
          "在客廳或走廊鋪上軟墊，將紙箱排成一條直線或彎曲的隧道，用膠帶固定接縫讓箱子不易倒塌。",
          "請孩子先站在隧道入口，讓他看見終點有小玩偶或小球作為「寶物」。",
          "家長先示範半跪或爬行進隧道，讓孩子看到「原來可以這樣玩」。",
          "邀請孩子用手腳慢慢爬行穿越，過程中可以說「小火車進隧道囉」、「小兔子鑽洞囉」。",
          "爬完後一起在隧道外拍拍手，並可以再改變隧道方向或增加箱子長度。"
        ],
        benefits: [
          "促進肩膀、手臂、腿部等大肌肉發展。",
          "透過空間穿越，幫助建立前後、內外等空間概念。",
          "在安全環境中滿足探索與冒險的需求，增強自信心。"
        ],
        extensions: [
          "在隧道中間貼上彩色貼紙，請孩子邊爬邊找特定顏色。",
          "播放音樂，讓孩子聽到音樂開始就進隧道，音樂停止就停下來，變成節奏遊戲。"
        ],
        likes_count: 24,
        favorites_count: 9,
        completed_count: 4,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_2_3_03",
        title: "黏土壓印小手手",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sensory", "art"],
        cost_min: 50,
        cost_max: 150,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "用安全黏土捏平後，讓孩子壓出手印、腳印或玩具印記，體驗觸覺與形狀變化。",
        hero_image_url: "/images/games/2_3_03.jpg",
        tags: ["觸覺刺激", "自我認知", "手部肌力"],
        flags: {
          requires_purchase: true,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "medium",
          need_freezer: false
        },
        materials: [
          "安全無毒黏土或超輕黏土數塊（顏色可依喜好）",
          "厚紙板或塑膠墊 1–2 張（當作底板）",
          "小玩具／積木／葉子等可壓印的小物數件",
          "濕紙巾或小毛巾（方便擦手）"
        ],
        steps: [
          "將黏土放在厚紙板上，和孩子一起用手掌壓平，變成一塊「軟軟的小地板」。",
          "請孩子將手掌輕輕壓在黏土上，再慢慢拿起來，一起觀察小手的形狀與紋路。",
          "可以試著壓腳印（需大人扶好），或拿小玩具、積木、葉子等在黏土上壓出不同圖案。",
          "一邊壓印，一邊描述：「這是你的手手」、「這個是星星形狀」讓孩子連結語言。",
          "完成後可以拍照留念，再把黏土搓回去，下次換其他顏色與圖案。"
        ],
        benefits: [
          "給予手掌與手指豐富的觸覺與壓力刺激，促進感覺統合。",
          "讓孩子透過觀察自己的手形與腳形，增加身體自我認知。",
          "在壓、捏、搓的過程中訓練手部肌力與精細動作。"
        ],
        extensions: [
          "用不同顏色黏土做出彩虹手印，認識顏色與順序。",
          "大一點時可以加上牙籤畫線條、點點，創作更多圖案。"
        ],
        likes_count: 29,
        favorites_count: 13,
        completed_count: 7,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_2_3_04",
        title: "寶寶音樂敲敲樂",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["music", "sensory"],
        cost_min: 0,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "用鍋子、湯匙、罐子等家用品，讓孩子敲出不同聲音，體驗節奏與音高差異。",
        hero_image_url: "/images/games/2_3_04.jpg",
        tags: ["聽覺刺激", "節奏感", "探索"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "medium",
          need_freezer: false
        },
        materials: [
          "不同大小的塑膠碗、金屬鍋、塑膠杯數個",
          "木湯匙、塑膠湯匙或小木槌 1–2 支",
          "裝不同水量的玻璃瓶或塑膠瓶 2–3 個（視年齡安全使用）"
        ],
        steps: [
          "將各種碗、鍋、杯子排在桌上或地墊上，介紹給孩子：「這是小鼓隊。」",
          "示範用木湯匙輕輕敲擊不同容器，讓孩子聽聽看聲音有什麼不一樣（高／低、響／小）。",
          "把敲擊權交給孩子，提醒只敲器材不要敲人，讓他自由敲出屬於自己的「音樂」。",
          "家長可以用手拍或口中數拍子，陪孩子一起打出簡單節奏，如「一二、一二三」。",
          "結束時一起收拾器材，說聲「小鼓隊謝謝你」，建立活動的開始與結束感。"
        ],
        benefits: [
          "提供豐富聽覺刺激，讓孩子感受不同音色與音量。",
          "培養基本節奏感與聽覺注意力。",
          "透過主動敲擊與控制力道，練習手部協調與自我控制。"
        ],
        extensions: [
          "搭配喜歡的兒歌，一邊播放一邊跟節拍敲擊。",
          "用不同材質（木、金屬、塑膠）的物品，讓孩子猜「哪一個聲音是剛剛那個」。"
        ],
        likes_count: 22,
        favorites_count: 8,
        completed_count: 4,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_2_3_05",
        title: "襪子手偶說故事",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["language", "creative"],
        cost_min: 0,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "用舊襪子畫出眼睛和嘴巴，變成手偶，一邊操作一邊說簡單的小故事。",
        hero_image_url: "/images/games/2_3_05.jpg",
        tags: ["語言刺激", "想像力", "情緒表達"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "乾淨的舊襪子 1–2 雙（避免太厚、太小不好操作）",
          "安全可水洗彩色筆 1–2 支，或圓形貼紙、毛球貼紙等裝飾",
          "簡單紙膠帶或小圓貼紙（做臉部表情）"
        ],
        steps: [
          "和孩子一起選一雙乾淨的舊襪子，說明要把它變成「會說話的小朋友」。",
          "戴上襪子在手上，示範用彩色筆或貼紙畫出眼睛、嘴巴，可以請孩子決定表情是開心還是生氣。",
          "完成後，用手操作襪子手偶，說一句簡單問候：「你好，我是襪子寶寶。」",
          "鼓勵孩子也戴上手偶，試著回答或跟手偶對話，例如：「你今天吃了什麼？」。",
          "可以演一小段日常情境，如「去公園」、「睡覺前」，讓孩子透過手偶表達感受。"
        ],
        benefits: [
          "透過角色扮演，增加語言使用機會與句子長度。",
          "提供一個安全的「投射角色」，讓孩子比較容易說出情緒與想法。",
          "練習手部操作與想像力，有助於創造性思考。"
        ],
        extensions: [
          "做出不同表情的襪子手偶，玩「今天你是哪一個表情？」遊戲。",
          "用兩個手偶演出簡單衝突情境，示範如何說「我不要」、「我會生氣」等情緒語句。"
        ],
        likes_count: 27,
        favorites_count: 11,
        completed_count: 6,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_2_3_06",
        title: "棉花雲朵拼貼畫",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["art", "sensory"],
        cost_min: 20,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "用棉花球和藍色紙張做出天空與雲朵，讓孩子撕、捏、貼，體驗觸覺與創作樂趣。",
        hero_image_url: "/images/games/2_3_06.jpg",
        tags: ["觸覺刺激", "創造力", "精細動作"],
        flags: {
          requires_purchase: true,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "medium",
          need_freezer: false
        },
        materials: [
          "藍色色紙或白紙上先塗藍色背景 1–2 張",
          "棉花球或棉花棒拆開的棉花一小包",
          "兒童安全膠水或固體膠 1 支",
          "保護桌面的舊報紙或墊子"
        ],
        steps: [
          "在桌上鋪好墊子，給孩子一張藍色紙，介紹：「這是天空，我們要做雲。」",
          "示範把一小團棉花輕輕拉開、捏一捏，變成蓬鬆的雲朵形狀，讓孩子感受軟軟的觸感。",
          "在紙上點一小圈膠水，請孩子把棉花貼上去，慢慢排成大雲、小雲。",
          "可以一邊問：「這朵雲像什麼？」鼓勵孩子想像形狀，如兔子、車車等。",
          "完成後，用簡單的語句描述作品並誇獎：「你做了好多可愛的雲，天空變得好熱鬧。」"
        ],
        benefits: [
          "提供柔軟材質的觸覺刺激，幫助感覺統合與情緒安撫。",
          "透過撕、捏、貼的動作，訓練小肌肉控制與雙手協調。",
          "鼓勵孩子觀察和想像雲朵形狀，培養創造力與表達能力。"
        ],
        extensions: [
          "在雲朵旁邊畫上太陽、雨點或彩虹，延伸成天氣主題。",
          "搭配看窗外的真實天空，一起找找「哪一朵雲看起來最像你的作品」。"
        ],
        likes_count: 19,
        favorites_count: 7,
        completed_count: 3,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_2_3_07",
        title: "毛巾小山坡翻滾車",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sports", "balance"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "用毛巾或棉被堆成斜坡，讓小車或球從上往下滾，讓孩子觀察高低與速度變化。",
        hero_image_url: "/images/games/2_3_07.jpg",
        tags: ["物理概念", "大肌肉", "觀察力"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "大毛巾或薄棉被 1–2 條",
          "矮椅子或靠墊數個（墊高一端做斜坡）",
          "小車、小球或圓形玩具 3–5 個"
        ],
        steps: [
          "在地板鋪好毛巾或棉被，一端墊高變成小斜坡，確認坡面平順、安全。",
          "先請孩子用手摸摸看斜坡，感受哪一邊高、哪一邊低。",
          "將小車放在斜坡頂端，請孩子輕輕放手，觀察車子如何往下滾動。",
          "換成球或不同大小的車子，問孩子：「哪一個跑得比較快？」",
          "邀請孩子自己選擇要放什麼東西從坡上滑下，重複實驗與觀察。"
        ],
        benefits: [
          "在遊戲中初步接觸高低、快慢等簡單物理概念。",
          "練習手部控制力與等待時機（放手的瞬間）。",
          "透過看物體移動路徑，增進視覺追蹤與專注力。"
        ],
        extensions: [
          "把斜坡調高或調低，看看有沒有不一樣的速度變化。",
          "請孩子猜一猜：「你覺得這台車會跑得快還是慢？」培養預測能力。"
        ],
        likes_count: 21,
        favorites_count: 8,
        completed_count: 4,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_2_3_08",
        title: "寶寶貼紙大搜查",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sensory", "language"],
        cost_min: 20,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "在紙上畫出簡單區域，讓孩子把貼紙貼到指定位置，訓練手眼協調與理解指令。",
        hero_image_url: "/images/games/2_3_08.jpg",
        tags: ["精細動作", "語言理解", "專注力"],
        flags: {
          requires_purchase: true,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "大張白紙或素描紙 1–2 張",
          "兒童安全貼紙一組（動物、水果、表情等）",
          "粗頭彩色筆數支"
        ],
        steps: [
          "在白紙上畫出幾個大區域，例如圈圈、房子、車子等簡單圖形。",
          "示範撕下一張貼紙，小心不要撕破，貼在一個圈圈裡。",
          "請孩子選一張喜歡的貼紙，指引他貼到特定位置，例如：「貼在房子裡。」",
          "一邊貼一邊說出貼紙的名稱與位置，如「蘋果在房子裡」、「狗狗在車子旁邊」。",
          "完成後一起欣賞作品，請孩子指認「哪裡有狗狗」、「哪裡有星星」。"
        ],
        benefits: [
          "練習撕貼動作，強化手指精細動作與雙手協調。",
          "透過「在哪裡」的指令，提升語言理解與空間概念。",
          "在完成貼紙作品的過程中培養專注力與成就感。"
        ],
        extensions: [
          "將貼紙主題改成同一類別，如只用動物，講一個動物故事。",
          "大一點可以加入簡單規則，例如只貼紅色在左邊、藍色在右邊，增加挑戰度。"
        ],
        likes_count: 26,
        favorites_count: 10,
        completed_count: 5,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_2_3_09",
        title: "瓶子沙沙聲音罐",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sensory", "music"],
        cost_min: 0,
        cost_max: 80,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "在透明瓶子裡裝入不同材料，讓孩子搖動時聽到不一樣的聲音與看到不同的變化。",
        hero_image_url: "/images/games/2_3_09.jpg",
        tags: ["聽覺刺激", "視覺追蹤", "因果關係"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "小型透明塑膠瓶 3–4 個（瓶口需可確實鎖緊）",
          "不同材料：生米、紅豆、小紙片、小珠子、少量水等",
          "膠帶一卷（封住瓶蓋，避免開啟）"
        ],
        steps: [
          "和孩子一起把不同材料分裝到各個空瓶中，每種材料一瓶，注意不要裝太滿。",
          "大人先把瓶蓋鎖緊，再用膠帶繞幾圈固定，避免孩子打開。",
          "示範搖每一個瓶子，請孩子聽聽看聲音有什麼不同（大聲、小聲、沙沙、咚咚）。",
          "把瓶子排成一列，鼓勵孩子自己選擇想搖的瓶子，並說出最喜歡哪一種聲音。",
          "可以一起慢慢搖、快快搖，體驗節奏與力道不同帶來的變化。"
        ],
        benefits: [
          "提供多樣化聽覺與視覺刺激，幫助感覺統合發展。",
          "透過「搖一搖就有聲音」的經驗，建立因果關係概念。",
          "在選擇與比較過程中練習表達喜好與感受。"
        ],
        extensions: [
          "請孩子閉上眼睛，憑聲音猜猜是哪一個瓶子。",
          "大一點可以自己決定要把哪些材料混在同一瓶裡，觀察聲音如何改變。"
        ],
        likes_count: 20,
        favorites_count: 7,
        completed_count: 3,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_2_3_10",
        title: "枕頭城堡翻滾樂",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sports", "balance"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "用枕頭、靠墊堆出安全的軟墊空間，讓孩子翻滾、爬行、跳躍，消耗體力又好玩。",
        hero_image_url: "/images/games/2_3_10.jpg",
        tags: ["大肌肉", "平衡感", "安全探索"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "medium",
          need_freezer: false
        },
        materials: [
          "枕頭、靠墊、抱枕數個（越多越好玩）",
          "大毯子或床墊一張（鋪在底下增加安全性）",
          "可以穿著容易活動的衣服與止滑襪"
        ],
        steps: [
          "在客廳或房間鋪上大毯子，將枕頭和靠墊堆成一個軟軟的「枕頭城堡」。",
          "示範用雙手撐地、雙腳跨過枕頭，或慢慢趴著往下滑，讓孩子看到安全玩法。",
          "請孩子嘗試在枕頭堆上爬行、趴著往前滑、輕輕翻滾，家長需在旁邊保護。",
          "可以設計簡單路線，例如「從門口出發，爬過枕頭山，到達沙發旁就成功」。",
          "活動後一起把枕頭堆回原位，讓孩子參與收拾，完成一個小小任務。"
        ],
        benefits: [
          "增加前庭覺與平衡感受，幫助孩子適應翻滾與身體移動。",
          "練習手腳協調與全身大肌肉發展。",
          "給予安全的「冒險空間」，滿足探索需求，降低之後在危險環境亂爬的衝動。"
        ],
        extensions: [
          "加入簡單角色扮演，例如假裝是探險家或小動物，提升遊戲情境感。",
          "在枕頭城堡中藏小玩具，讓孩子一邊爬一邊尋寶。"
        ],
        likes_count: 30,
        favorites_count: 14,
        completed_count: 7,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
  
    // =====================
    // 3–4 歲：10 個遊戲
    // =====================
    {
        id: "game_3_4_01",
        title: "彩色冰磚畫畫大發現",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["art", "sensory"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 20,
        summary:
          "用彩色冰磚在紙上作畫，觀察冰慢慢融化與顏色混合的變化，體驗冰涼觸感與顏色變化。",
        hero_image_url: "/images/games/3_4_01.jpg",
        tags: ["感覺統合", "顏色認知", "創意表達"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "medium",
          need_freezer: true
        },
        materials: [
          "小紙杯或製冰盒 1–2 盤",
          "水彩顏料或食用色素 2–4 色（少量即可）",
          "水與攪拌棒（免洗筷也可以）",
          "白紙或稍厚一點的畫紙數張",
          "一次性手套或圍兜（看孩子狀況需要可以準備）"
        ],
        steps: [
          "和孩子一起在水中加入少量水彩或食用色素，攪拌成不同顏色的水，倒入製冰盒。",
          "放進冷凍庫冷凍成彩色冰磚，可以事先做好，玩之前一起把冰磚拿出來。",
          "在桌上鋪好墊子，放上白紙，讓孩子拿著彩色冰磚在紙上滑動、點畫或蓋印。",
          "一邊畫一邊觀察冰慢慢融化、顏色變淡或混在一起的樣子，鼓勵孩子說出看到什麼變化。",
          "畫完後一起欣賞作品，可以請孩子挑一張自己最喜歡的「冰磚畫」。"
        ],
        benefits: [
          "冰涼、濕潤與滑動的多重感覺刺激，有助於感覺統合發展。",
          "透過顏色變化與混色過程，讓孩子自然接觸簡單科學與美感體驗。",
          "需要握住冰磚並控制力度與方向，訓練手部肌力與精細動作。"
        ],
        extensions: [
          "改用不同形狀的製冰盒（星星、心形等），增加視覺趣味。",
          "在畫紙上先畫簡單線條或圖案，再用冰磚沿著線走，練習手眼協調。"
        ],
        likes_count: 23,
        favorites_count: 9,
        completed_count: 4,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_3_4_02",
        title: "影子捉迷藏",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["science", "sports"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary:
          "在燈光或陽光下觀察影子，讓孩子追影子、踩影子，認識光線與影子的變化。",
        hero_image_url: "/images/games/3_4_02.jpg",
        tags: ["自然科學", "觀察力", "大肌肉"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "明亮的室內燈光，或有陽光照進來的空間",
          "一面空白的牆或地面空間",
          "如果在室內，可準備小手電筒 1 支（由大人操作）"
        ],
        steps: [
          "和孩子一起站在有光線的地方，請他看看地上或牆上的影子，指給他看：「這是你的影子。」",
          "讓孩子做出不同姿勢（張開手、單腳站等），觀察影子也跟著變化。",
          "大人可以說：「我來踩你的影子！」讓孩子跑走，再換孩子來踩大人的影子，變成輕鬆追逐遊戲。",
          "如果在室內，可用手電筒照牆或地板，移動光源，讓影子變長變短。",
          "活動最後可以請孩子自己發明一個「影子動作」，一起模仿。"
        ],
        benefits: [
          "在遊戲中觀察光線與影子的關係，開啟自然科學的好奇心。",
          "透過奔跑、轉身、伸展等動作，促進大肌肉發展與平衡感。",
          "模仿與互動遊戲，增加親子之間的肢體互動與樂趣。"
        ],
        extensions: [
          "準備紙膠帶，在地上框出一個「影子安全區」，只能在框裡踩影子，增加遊戲規則感。",
          "搭配音樂玩「影子定格」，音樂停下來時要立刻停在原地不動。"
        ],
        likes_count: 21,
        favorites_count: 8,
        completed_count: 5,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_3_4_03",
        title: "動物腳印配對遊戲",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["language", "boardgame"],
        cost_min: 0,
        cost_max: 80,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 15,
        summary:
          "利用自製圖卡，讓孩子將動物和對應的腳印配對，練習觀察與語彙表達。",
        hero_image_url: "/images/games/3_4_03.jpg",
        tags: ["語言發展", "觀察力", "分類能力"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "厚一點的紙或卡紙數張",
          "彩色筆或列印好的動物與腳印圖片",
          "剪刀 1 把（由大人操作）",
          "收納小盒或信封（裝圖卡用）"
        ],
        steps: [
          "事先畫好或印好幾種常見動物（例如貓、狗、鳥、恐龍），以及它們的腳印圖案，各做成一張小卡片。",
          "和孩子一起看每一張動物卡，說出名稱與叫聲，例如「這是小狗，會汪汪叫。」",
          "將動物卡排在桌上，再把腳印卡打散，請孩子幫忙找出「哪一個腳印是小狗的」。",
          "每配對成功一組，就一起重複說一次：「小狗的腳印是這個。」加深記憶。",
          "最後可以把所有配對完成的卡片排成一列，重新說故事或介紹一遍。"
        ],
        benefits: [
          "透過視覺比較與配對，訓練觀察力與分類能力。",
          "藉由多次說出動物名稱與特徵，增加語彙量與表達能力。",
          "在一對一的桌上遊戲中，培養專注力與完成任務的成就感。"
        ],
        extensions: [
          "加入「錯誤腳印」混淆卡，讓孩子找出哪一張不屬於這些動物。",
          "大一點可以讓孩子自己設計新的動物腳印，考考家長。"
        ],
        likes_count: 25,
        favorites_count: 10,
        completed_count: 6,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_3_4_04",
        title: "積木城市故事創作",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["creative", "language", "craft"],
        cost_min: 0,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 20,
        summary:
          "用積木或積木搭配小車、小人，請孩子搭建自己的小城市，再說出發生的故事。",
        hero_image_url: "/images/games/3_4_04.jpg",
        tags: ["想像力", "空間概念", "語言表達"],
        flags: {
          requires_purchase: true,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "積木一組（木頭或塑膠皆可）",
          "小車、小人或動物玩偶數個（可選）",
          "大一點的平面作為「城市基地」，例如桌面或地墊區"
        ],
        steps: [
          "將積木倒出來，請孩子一起幫忙分類（長的、短的、高的、扁的），當作暖身。",
          "邀請孩子搭建「一個你想住的地方」，可以是房子、橋、城堡或道路。",
          "在搭建過程中，用開放式問題引導：「這裡是誰的家？旁邊還需要什麼？」",
          "完成後，把小車、小人或動物放進城市裡，請孩子說說「他們在做什麼」。",
          "家長可以加入一點劇情，例如「下雨了」、「要去上學了」，讓故事繼續延伸。"
        ],
        benefits: [
          "積木搭建有助於空間概念、手眼協調與問題解決能力。",
          "透過「自己設計的城市」練習表達想法與說故事的能力。",
          "與家長共同創作故事，增加親子互動與情緒連結。"
        ],
        extensions: [
          "拍照記錄孩子每次搭建的城市，事後一起翻看、比較變化。",
          "加入簡單任務卡，如「蓋一座橋讓車子可以過河」，增加挑戰性。"
        ],
        likes_count: 28,
        favorites_count: 12,
        completed_count: 7,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_3_4_05",
        title: "圖案接龍桌遊初體驗",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["boardgame", "logic"],
        cost_min: 0,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary:
          "自製簡單圖案卡，玩輪流出牌接龍的遊戲，練習等待輪流與簡單規則。",
        hero_image_url: "/images/games/3_4_05.jpg",
        tags: ["規則概念", "輪流等待", "觀察力"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "厚紙或廢卡片數張",
          "彩色筆或印章，用來畫上不同圖案（如圓形、三角形、星星、愛心等）",
          "收納用的小盒或橡皮筋"
        ],
        steps: [
          "在每張小卡上畫一個大圖案，可以重複幾種基本形狀與顏色，例如紅色圓形、藍色三角形。",
          "洗一洗圖卡，先翻開一張放在桌子中間，作為接龍的起點。",
          "輪到誰的時候，就從手牌中選一張「一樣形狀或一樣顏色」的卡片接在旁邊。",
          "若一時找不到可以接的卡片，可以請孩子說「換你」，練習輪流與等待。",
          "遊戲過程中，家長可以協助說出圖案名稱與顏色，強化認知。"
        ],
        benefits: [
          "讓孩子在輕鬆遊戲中建立「遊戲規則」與「輪流」的概念。",
          "透過比對形狀與顏色，練習視覺辨識與分類能力。",
          "在等候自己回合時，學習自我控制與耐心。"
        ],
        extensions: [
          "加入「全能牌」（例如彩虹卡），可以接在任何顏色上，增加變化與驚喜感。",
          "大一點時可以改成數字或簡單圖案組合，提高難度。"
        ],
        likes_count: 24,
        favorites_count: 9,
        completed_count: 5,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_3_4_06",
        title: "氣球不落地挑戰賽",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["sports", "balance"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary:
          "用一顆氣球玩「不能讓它掉到地上」的遊戲，訓練反應力與全身協調。",
        hero_image_url: "/images/games/3_4_06.jpg",
        tags: ["大肌肉", "反應力", "親子互動"],
        flags: {
          requires_purchase: true,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "普通氣球 1–2 顆（避免過小或過薄，吹氣時請大人操作）",
          "適合活動的空間，先確認周圍沒有尖銳物品"
        ],
        steps: [
          "大人先把氣球吹好，解釋規則：「我們要試著讓氣球不要掉到地上。」",
          "輕輕把氣球拍向空中，請孩子用手掌接住或再拍高。",
          "可以一人一次輪流拍氣球，拍之前說出對方名字：「換爸爸拍」、「換 OO 拍」。",
          "增加挑戰：只能用頭、用腳背或用手背碰氣球，變換不同玩法。",
          "遊戲中提醒孩子留意自己的身體與周圍環境，避免撞到家具。"
        ],
        benefits: [
          "透過追氣球與拍氣球，促進全身協調與反應速度。",
          "練習控制力道與方向，增進身體控制感與空間感。",
          "輪流拍與叫名字，增加社會互動與語言使用機會。"
        ],
        extensions: [
          "計時看看能讓氣球在空中維持幾秒鐘，挑戰打破自己的紀錄。",
          "播放音樂，一邊拍氣球一邊隨節奏走動或跳舞。"
        ],
        likes_count: 27,
        favorites_count: 11,
        completed_count: 7,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_3_4_07",
        title: "廚房小幫手：搖搖沙拉",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["cooking", "sensory"],
        cost_min: 40,
        cost_max: 120,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 10,
        summary:
          "讓孩子幫忙把已切好的蔬菜放進保鮮盒，滴上醬料後一起搖一搖，做出自己的小沙拉。",
        hero_image_url: "/images/games/3_4_07.jpg",
        tags: ["親子料理", "嗅覺味覺", "參與感"],
        flags: {
          requires_purchase: true,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "medium",
          need_freezer: false
        },
        materials: [
          "已洗淨並切成小塊的生菜、番茄、小黃瓜、玉米粒等（依家庭習慣）",
          "有蓋子的保鮮盒或較大塑膠盒 1–2 個",
          "簡單沙拉醬或少量橄欖油與檸檬汁",
          "桌巾或墊子，避免醬汁滴到桌上"
        ],
        steps: [
          "事先由大人完成食材清洗與切塊，將各種蔬菜分裝在小碗裡，請孩子聞聞看、摸摸看。",
          "請孩子把想吃的蔬菜挑進保鮮盒，當作「自己選的沙拉」。",
          "由大人幫忙加入少量醬料，蓋好盒子後，和孩子一起雙手握著盒子搖一搖。",
          "打開盒子，一起觀察蔬菜顏色變化與沾上醬料的樣子，聞聞看味道。",
          "最後邀請孩子品嚐一口，哪怕只吃一點點，也可以誇獎「你有勇敢嘗試」。"
        ],
        benefits: [
          "讓孩子參與簡單料理過程，提升「我也可以幫忙」的參與感與自信。",
          "透過觸摸、聞味道與品嚐，刺激多種感官，有助於減少對新食物的排斥感。",
          "搖晃盒子的動作也能訓練雙手協調與肌力。"
        ],
        extensions: [
          "讓孩子替沙拉取一個名字，例如「OO 的超級勇敢沙拉」。",
          "下次可以加入一種新的蔬菜，慢慢擴大孩子可接受的食物種類。"
        ],
        likes_count: 22,
        favorites_count: 9,
        completed_count: 4,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_3_4_08",
        title: "顏色尋寶任務",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["language", "sports", "sensory"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary:
          "家中顏色大搜查！請孩子在家裡找出指定顏色的物品，練習顏色認知與觀察力。",
        hero_image_url: "/images/games/3_4_08.jpg",
        tags: ["顏色認知", "觀察力", "大肌肉"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "簡單顏色卡片數張，或用色筆在紙上塗出紅、黃、藍、綠等色塊",
          "安全、適合走動的室內空間"
        ],
        steps: [
          "先和孩子一起看顏色卡片，指著每一張說出顏色名稱。",
          "選一張顏色卡，告訴孩子：「請幫我在家裡找到某樣顏色是這樣的東西。」",
          "孩子找到後，一起確認顏色，並說出物品名稱，例如「紅色的杯子」。",
          "可以玩好幾輪，換不同顏色或指定「找兩樣一樣顏色的東西」。",
          "若孩子願意，可以讓他也當小隊長，指定顏色給大人找。"
        ],
        benefits: [
          "在真實環境中練習顏色辨識，加深顏色與物品的連結。",
          "走動、蹲下、伸手取物，促進大肌肉與全身協調。",
          "透過命名物品與顏色，增加語言使用與社會互動。"
        ],
        extensions: [
          "改成「形狀尋寶」，例如找圓形／三角形物品。",
          "加入時間挑戰，如「我們在 1 分鐘內找到三樣藍色東西」。"
        ],
        likes_count: 26,
        favorites_count: 11,
        completed_count: 6,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_3_4_09",
        title: "故事接龍畫漫畫",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["creative", "language", "art"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 20,
        summary:
          "大人先說一段簡短故事，再和孩子一起畫出故事中的主角與場景，讓孩子補充接龍。",
        hero_image_url: "/images/games/3_4_09.jpg",
        tags: ["想像力", "語言表達", "情緒理解"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "medium",
          need_freezer: false
        },
        materials: [
          "白紙數張或簡單分格的漫畫紙",
          "彩色筆、蠟筆或色鉛筆一組",
          "桌墊或畫畫專用區域"
        ],
        steps: [
          "大人先說一個非常簡短的故事開頭，例如「有一隻小熊走到森林裡……」。",
          "在第一格畫面中，和孩子一起畫出故事的主角與背景，不必要求畫得很像。",
          "請孩子想想接下來發生什麼事情，將他的想法畫在第二格，並請他說出來。",
          "持續 3–4 格即可，故事不需要很長，可以有有趣或溫馨的結尾。",
          "最後一起看完整個小漫畫，請孩子用自己的話再說一次這個故事。"
        ],
        benefits: [
          "透過畫畫與說故事的結合，培養想像力與敘事能力。",
          "畫出角色表情與情境，有助於孩子理解不同情緒與情境變化。",
          "在共同創作的過程中，增進親子對話與情感交流。"
        ],
        extensions: [
          "將孩子喜歡的角色一再重複出現在不同故事裡，建立熟悉感。",
          "把完成的漫畫收集成冊，讓孩子有「自己的故事本」。"
        ],
        likes_count: 29,
        favorites_count: 13,
        completed_count: 7,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_3_4_10",
        title: "腳步節奏大遊行",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["music", "sports"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary:
          "跟著簡單節奏用腳步走路、踢踏、跳躍，讓孩子在律動中感受節奏與身體控制。",
        hero_image_url: "/images/games/3_4_10.jpg",
        tags: ["節奏感", "大肌肉", "自我控制"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "可以播放音樂的手機或音響（或大人自己拍手打拍子）",
          "安全、空曠的行走空間"
        ],
        steps: [
          "選一首節奏明顯、速度適中的兒歌或音樂，先讓孩子聽聽看。",
          "示範用腳步踏出節奏，例如每一拍踏一步，或兩拍踏一步。",
          "邀請孩子跟著一起走，可以加上動作口令，如「一步、兩步、停！」。",
          "變化玩法：改成小跳躍、踮腳尖走路、巨人步（跨大步）等。",
          "音樂停止時，所有人都要停下來不動，讓孩子練習控制與等待。"
        ],
        benefits: [
          "透過腳步與音樂節奏的連結，培養節奏感與聽覺專注。",
          "不同走路方式與跳躍動作，有助於大肌肉與平衡發展。",
          "「音樂停就要停」的規則，幫助孩子練習自我控制與情緒收斂。"
        ],
        extensions: [
          "讓孩子也當指揮，決定現在要用什麼腳步走。",
          "加入簡單道具如絲巾或小旗子，變成更華麗的遊行隊伍。"
        ],
        likes_count: 23,
        favorites_count: 9,
        completed_count: 5,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
    
      // =====================
      // 5–6 歲：10 個遊戲
      // =====================
      // =====================
    // 5–6 歲：10 個遊戲
    // =====================
    {
        id: "game_5_6_01",
        title: "自製故事骰子",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["language", "boardgame", "creative"],
        cost_min: 20,
        cost_max: 80,
        currency: "TWD",
        prep_minutes: 20,
        play_minutes: 20,
        summary:
          "在紙骰子每面畫上人物、場景和物品，丟出來組成故事，訓練想像力與口語。",
        hero_image_url: "/images/games/5_6_01.jpg",
        tags: ["說故事", "邏輯思考"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "厚紙或卡紙數張（用來摺成骰子）",
          "剪刀 1 把（由大人操作）",
          "膠帶或膠水 1 個（黏合紙骰子）",
          "彩色筆、蠟筆或貼紙一組（畫人物、場景、物品）"
        ],
        steps: [
          "事先由大人協助，在厚紙上畫出 1～2 個展開圖（十字形）的骰子形狀，剪下來並摺好輪廓。",
          "和孩子一起討論要有哪些「人物、場景、物品」，例如：小狗、公園、冰淇淋、外星人、學校等。",
          "請孩子用彩色筆在骰子的每一面畫上不同的元素，可以是人物、場景或道具。",
          "等膠水乾後，把骰子組裝好，請孩子輪流丟骰子，看出現了哪些圖案，一起把它們組成一個故事。",
          "每說完一次故事，可以換一顆骰子，或交換誰當主講人，鼓勵孩子自由發揮。"
        ],
        benefits: [
          "透過隨機組合的元素，激發孩子的想像力與創造力。",
          "在說故事過程中練習造句、連接句子與完整表達，提升口語能力。",
          "學習遵守輪流、聆聽他人說話等遊戲規則與社會互動技能。"
        ],
        extensions: [
          "增加不同主題的故事骰子，如「情緒骰子」、「天氣骰子」，讓故事更豐富。",
          "把孩子最喜歡的故事錄音或寫下來，之後當睡前故事重複聽。"
        ],
        likes_count: 96,
        favorites_count: 38,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_5_6_02",
        title: "氣泡火山小實驗",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["science"],
        cost_min: 40,
        cost_max: 120,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 20,
        summary:
          "用小蘇打粉和醋做出「火山爆發」泡泡，認識酸鹼反應與安全實驗規則。",
        hero_image_url: "/images/games/5_6_02.jpg",
        tags: ["科學實驗", "觀察記錄"],
        flags: {
          requires_purchase: true,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "high",
          need_freezer: false
        },
        materials: [
          "小蘇打粉約 2～3 湯匙",
          "白醋約半杯（可依需要酌量調整）",
          "透明塑膠杯或小紙杯 2–3 個",
          "食用色素數滴（可選，讓泡泡有顏色）",
          "桌巾或大托盤（接住溢出的泡泡）",
          "小湯匙或量匙 1 支"
        ],
        steps: [
          "在桌上鋪好桌巾或放上大托盤，提醒孩子「等等會有泡泡溢出來」。",
          "在每個杯子中先放入 1 湯匙小蘇打粉，可以讓孩子幫忙舀。",
          "若要有顏色，可在杯中滴入幾滴食用色素，讓孩子觀察顏色變化。",
          "由大人協助倒入適量醋，請孩子專心看杯子裡發生什麼事，會看到大量泡泡湧出。",
          "一邊觀察一邊用簡單語言說明：「小蘇打遇到醋就會變成氣體跑出來，所以有很多泡泡。」"
        ],
        benefits: [
          "透過實際觀察氣泡產生，初步體驗酸鹼反應與「看不見的氣體」。",
          "在等待與觀察過程中培養專注力與好奇心。",
          "學習在實驗前後遵守安全規則與清理步驟，建立良好習慣。"
        ],
        extensions: [
          "改變小蘇打粉或醋的量，讓孩子比較「哪一次的火山比較大」。",
          "用紙圍成火山造型外觀，增加情境感，變成「火山爆發秀」。"
        ],
        likes_count: 73,
        favorites_count: 30,
        completed_count: 16,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_5_6_03",
        title: "影子劇場說故事",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["creative", "language"],
        cost_min: 0,
        cost_max: 80,
        currency: "TWD",
        prep_minutes: 25,
        play_minutes: 20,
        summary:
          "用紙板剪出角色，用手電筒照在牆上變成影子，演一齣小劇場。",
        hero_image_url: "/images/games/5_6_03.jpg",
        tags: ["角色扮演", "故事結構"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "medium",
          need_freezer: false
        },
        materials: [
          "厚紙或紙板數張（用來畫角色與道具）",
          "剪刀與膠帶（剪下角色後黏上棒子）",
          "竹筷或紙吸管數支（當作角色把手）",
          "手電筒或桌燈 1 個",
          "白色牆面、白布或大張白紙（當作投影幕）"
        ],
        steps: [
          "和孩子一起討論要演什麼主題的小劇場，例如「去公園」、「恐龍來了」、「太空旅行」。",
          "在紙板上畫出主要角色和幾個道具（例如人、動物、樹、房子等），由大人協助剪下。",
          "用膠帶將角色固定在竹筷或紙吸管上，變成可以操作的「影子偶」。",
          "關掉部分燈光，使用手電筒或桌燈對著白牆或白布照射，示範如何讓影子出現在幕上。",
          "輪流由大人和孩子操作影子角色，說出簡單對話與故事情節，讓孩子自由加入自己的台詞。"
        ],
        benefits: [
          "結合視覺與想像的影子遊戲，提升孩子的創造力與故事構思能力。",
          "透過角色扮演與對話，練習語言表達與情緒表達。",
          "操作影子偶需要協調手部動作與光線位置，有助於手眼協調與空間感。"
        ],
        extensions: [
          "錄影保存孩子的影子劇場表演，事後一起重看並討論故事內容。",
          "設計「開場、問題、結局」三段式故事結構，引導孩子學會有開頭與收尾的故事。"
        ],
        likes_count: 41,
        favorites_count: 17,
        completed_count: 9,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_5_6_04",
        title: "數字跳格子",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["sports", "logic"],
        cost_min: 0,
        cost_max: 30,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 25,
        summary:
          "在地上畫出數字格子，讓孩子依照指令（奇數、偶數或加總）跳到正確位置。",
        hero_image_url: "/images/games/5_6_04.jpg",
        tags: ["數概念", "大肌肉"],
        flags: {
          requires_purchase: false,
          indoor_friendly: false,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "戶外水泥地或室內大空間一塊（若室內可用紙膠帶黏出格子）",
          "粉筆數支，或室內用紙膠帶",
          "若需要，可準備小號數字卡片做提示"
        ],
        steps: [
          "在地上畫出一條跳格子，用方格寫上 1～10 或 1～12 的數字，依空間調整。",
          "先請孩子從 1 依序跳到最後一格，再從最後一格跳回 1，熟悉格子位置。",
          "開始加入指令，例如「只跳到奇數」「只跳到 5 以內的數字」「跳到 3 加 2 的答案」。",
          "家長可以大聲說出指令，讓孩子先想一想再跳，有需要時給一點提示。",
          "也可以輪流交換角色，讓孩子當小老師出題給大人跳。"
        ],
        benefits: [
          "結合身體活動與數字概念，讓孩子在運動中練習基本數學思考。",
          "透過遵守指令與等待，培養專注力與規則意識。",
          "跳躍、單腳站立等動作，有助於大肌肉發展與平衡感。"
        ],
        extensions: [
          "加入加減法題目，如「跳到 3 + 4」或「跳到 9 − 2」。",
          "換成顏色或圖案格子，遊戲規則變成「跳到星星」等，增加變化。"
        ],
        likes_count: 35,
        favorites_count: 12,
        completed_count: 8,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_5_6_05",
        title: "無烤箱餅乾小廚師",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["cooking"],
        cost_min: 80,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 25,
        play_minutes: 30,
        summary:
          "用壓碎餅乾與牛奶或奶油做成球狀點心，孩子負責搓揉與裝飾。",
        hero_image_url: "/images/games/5_6_05.jpg",
        tags: ["料理體驗", "手部肌肉"],
        flags: {
          requires_purchase: true,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "high",
          need_freezer: false
        },
        materials: [
          "原味餅乾或消化餅數片",
          "少量牛奶、奶油或優格（依家中習慣）",
          "可食用的小糖粒、椰子粉或可可粉（裝飾用，可省略）",
          "保鮮袋 1–2 個（壓碎餅乾用）",
          "大碗 1 個、小湯匙 1 支，塑膠手套（看需要）"
        ],
        steps: [
          "將餅乾放入保鮮袋中，請孩子用手或小槌子慢慢壓碎成餅乾粉。",
          "把餅乾粉倒入大碗中，慢慢加入少量牛奶或奶油，一邊攪拌一邊觀察質地變化（避免太濕）。",
          "當混合物可以捏成團時，請孩子用小手搓成一顆一顆小球。",
          "將小餅乾球在糖粒、椰子粉或可可粉中滾一下，變成有裝飾的特製點心。",
          "完成後排在盤子上，可以冷藏一下再吃，並一起分享「你做的餅乾」。"
        ],
        benefits: [
          "透過搓揉、壓碎與捏成球，訓練手部肌力與精細動作。",
          "參與簡單料理流程，培養自我照顧與家務參與感。",
          "在品嚐自己做的作品時，提升自信與成就感。"
        ],
        extensions: [
          "讓孩子替自己的點心取名字，並畫一張小菜單或招牌。",
          "之後可以嘗試加入不同食材（如香蕉泥、葡萄乾），比較口感差異。"
        ],
        likes_count: 65,
        favorites_count: 25,
        completed_count: 14,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_5_6_06",
        title: "紙箱小劇場",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["craft", "creative"],
        cost_min: 0,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 30,
        play_minutes: 40,
        summary:
          "用大紙箱剪出舞台框與背景，讓孩子畫角色、排隊說台詞。",
        hero_image_url: "/images/games/5_6_06.jpg",
        tags: ["創造力", "團隊合作"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "medium",
          need_freezer: false
        },
        materials: [
          "大紙箱 1–2 個（可當舞台框架）",
          "剪刀、美工刀（由大人操作）、膠帶",
          "色紙、彩色筆或蠟筆（畫背景與角色）",
          "竹筷或紙吸管（若要做手持角色）",
          "小椅子或玩偶，當觀眾席"
        ],
        steps: [
          "由大人在紙箱的一面切出一個大矩形洞，作為「舞台框」，其他三面可保留支撐。",
          "請孩子幫忙裝飾舞台框，可以畫窗簾、燈光或貼上色紙。",
          "在另一張紙或紙板上畫出背景（例如森林、城市、房間），貼在舞台後方。",
          "讓孩子決定要用手偶、玩具人偶，或自己站在紙箱後面演出角色。",
          "一起排簡單橋段與台詞，可以從日常情境開始，例如「去上學」「去露營」，並邀請家人當觀眾。"
        ],
        benefits: [
          "從舞台設計到角色演出，完整體驗一個小作品的創作流程。",
          "在排練與演出中，培養表達能力、自信與團隊合作。",
          "在故事情境中演繹日常壓力或感受，有助於情緒理解與抒發。"
        ],
        extensions: [
          "錄影保存每次的小劇場表演，讓孩子回頭觀看自己的成長。",
          "設計「票券」，讓孩子負責畫票並發票，練習簡單數量與社會互動。"
        ],
        likes_count: 54,
        favorites_count: 19,
        completed_count: 11,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_5_6_07",
        title: "桌上迷你保齡球",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["boardgame", "sports"],
        cost_min: 40,
        cost_max: 120,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 20,
        summary:
          "用小瓶子和彈珠在桌上搭一座迷你保齡球場，練習控制力道與策略。",
        hero_image_url: "/images/games/5_6_07.jpg",
        tags: ["策略思考", "眼手協調"],
        flags: {
          requires_purchase: true,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "小塑膠瓶或飲料空瓶 6～10 個（當保齡球瓶，可裝少量水增加穩定度）",
          "彈珠、乒乓球或小球 1–2 顆（依孩子年齡選擇安全尺寸）",
          "長桌或地板一小段，當作球道",
          "膠帶（可在地上黏出球道邊界）"
        ],
        steps: [
          "將小瓶子排成三角形或倒 V 字形，模仿保齡球場的瓶子排列。",
          "在桌上或地上規劃一條簡單「球道」，可以用膠帶黏出邊界線。",
          "示範站在指定位置，輕輕將球滾出去，試著撞倒前方瓶子。",
          "輪流讓孩子與家長擲球，可以計算每一輪倒了幾個瓶子。",
          "鼓勵孩子自己調整力道與角度，觀察不同滾法造成的差異。"
        ],
        benefits: [
          "透過瞄準與滾球，訓練手眼協調與空間判斷。",
          "在計算倒瓶數量與規劃擲球策略時，培養基本數量概念與問題解決能力。",
          "輪流擲球與為他人加油，有助於社會互動與情緒調節。"
        ],
        extensions: [
          "設計不同難度，如增加距離或縮小瓶子數量，讓孩子挑戰進階模式。",
          "讓孩子自己畫分數表，練習記錄與比較。"
        ],
        likes_count: 38,
        favorites_count: 14,
        completed_count: 9,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_5_6_08",
        title: "圖案接龍大挑戰",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["logic", "art"],
        cost_min: 0,
        cost_max: 40,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 20,
        summary:
          "在紙上畫出重複圖案（紅藍紅藍…），讓孩子猜下一個是什麼並繼續接下去。",
        hero_image_url: "/images/games/5_6_08.jpg",
        tags: ["規律", "邏輯"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "白紙數張",
          "彩色筆、蠟筆或色鉛筆一組",
          "尺（可選，用來畫直線）"
        ],
        steps: [
          "在紙上先畫一列格子，或簡單畫出一串空白小圈圈。",
          "由大人先示範畫出簡單規律，例如「紅、藍、紅、藍」，畫到一半後停下來。",
          "請孩子猜「下一個應該是什麼顏色或圖案」，並請他自己畫上去。",
          "逐漸增加難度，例如「紅、紅、藍、紅、紅、藍」或「星星、圓圈、星星、圓圈」。",
          "完成後請孩子用自己的話說明「這個圖案是怎麼排的」，練習口頭表達規則。"
        ],
        benefits: [
          "透過觀察顏色與圖案的重複規律，培養邏輯思考與模式辨識能力。",
          "在自己補上下一個圖案的過程中，練習預測與問題解決。",
          "結合畫圖活動，讓孩子一邊創作一邊學習數學思維。"
        ],
        extensions: [
          "將圖案改成數字或簡單加減法，例如「2、4、6、？」。",
          "讓孩子自己設計一條規律，出題給家長或兄弟姊妹解答。"
        ],
        likes_count: 29,
        favorites_count: 10,
        completed_count: 7,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_5_6_09",
        title: "房間地圖小探險",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["project", "logic"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 20,
        play_minutes: 25,
        summary:
          "和孩子一起畫出家裡平面圖，標出床、桌子和門口，玩「尋寶路線」。",
        hero_image_url: "/images/games/5_6_09.jpg",
        tags: ["空間概念", "專注力"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "白紙數張或大張紙（當作地圖底）",
          "鉛筆與彩色筆",
          "小貼紙或小圖示（用來標記寶物與人物）",
          "若需要，可準備尺幫忙畫直線"
        ],
        steps: [
          "先選擇家中的一個區域，例如孩子的房間或客廳，一起觀察有哪些重要家具（床、桌子、門、書櫃等）。",
          "在紙上畫出簡單平面圖，不需要非常精準，只要大致位置與形狀正確即可。",
          "請孩子幫忙標上圖示或寫上簡單符號，例如畫床、畫門、畫桌子，或用貼紙標記。",
          "在地圖上畫出一條「尋寶路線」，例如從門口出發，轉彎到書櫃，再到床旁邊。",
          "把小玩具或小紙條藏在真實空間對應的位置，讓孩子依照地圖路線去尋寶。"
        ],
        benefits: [
          "透過畫簡單平面圖，培養孩子的空間概念與方向感。",
          "在對照地圖與真實環境時，練習專注與觀察力。",
          "設計路線與尋寶活動，培養計畫能力與問題解決能力。"
        ],
        extensions: [
          "讓孩子設計屬於自己的「秘密路線」，出題給家長或兄弟姊妹尋寶。",
          "逐步擴大地圖範圍，從房間到整個家，練習記憶與空間推理。"
        ],
        likes_count: 32,
        favorites_count: 12,
        completed_count: 8,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_5_6_10",
        title: "創意紙盤面具",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["craft", "creative"],
        cost_min: 40,
        cost_max: 120,
        currency: "TWD",
        prep_minutes: 25,
        play_minutes: 30,
        summary:
          "用紙盤剪出眼睛與嘴巴，再貼毛線、彩紙做裝飾，扮演角色演戲。",
        hero_image_url: "/images/games/5_6_10.jpg",
        tags: ["美感", "角色扮演"],
        flags: {
          requires_purchase: true,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "medium",
          need_freezer: false
        },
        materials: [
          "紙盤數個（白色或有顏色的皆可）",
          "剪刀、美工刀（剪眼睛與嘴巴時由大人操作）",
          "彩色紙、毛線、棉花、貼紙等裝飾材料",
          "彩色筆、膠水或雙面膠",
          "橡皮筋或棉繩（若要戴在頭上）"
        ],
        steps: [
          "由大人在紙盤上畫出眼睛與嘴巴的位置，小心割出孔洞，確認孩子戴上時視線清楚。",
          "請孩子選擇想扮演的角色，例如貓咪、超人、怪獸、公主等。",
          "使用彩色筆在紙盤上畫出臉部表情，再貼上毛線當頭髮、棉花當鬍子或彩紙當帽子。",
          "若要戴在頭上，可在兩側穿孔，綁上橡皮筋或棉繩，調整長度讓孩子配戴舒適。",
          "完成後，讓孩子戴著面具演出角色，例如自我介紹、說一句代表性的台詞，或演一小段情境。"
        ],
        benefits: [
          "透過設計面具外觀與表情，培養美感與創意表達。",
          "在角色扮演中練習表達自我、嘗試不同角色的情緒與視角。",
          "剪貼與黏貼裝飾的過程，有助於精細動作與手眼協調。"
        ],
        extensions: [
          "一次做出多種角色面具，讓全家一起辦「面具派對」。",
          "搭配故事書中的角色設計面具，讀完故事再戴面具重現情節。"
        ],
        likes_count: 37,
        favorites_count: 14,
        completed_count: 9,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },  
  
    // =====================
    // 7–8 歲：10 個遊戲
    // =====================
        {
          id: "game_7_8_01",
          title: "氣球火箭大賽",
          age_bucket: "7-8",
          age_min: 7,
          age_max: 8,
          gender: "all",
          interests: ["science", "competitive"],
          cost_min: 0,
          cost_max: 50,
          currency: "TWD",
          prep_minutes: 10,
          play_minutes: 30,
          summary: "利用反作用力原理，製作屬於自己的氣球火箭，比比看誰飛得最遠、最快！",
          hero_image_url: "/images/games/7_8_01.jpg",
          tags: ["科學實驗", "物理原理", "動手做"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "氣球（數個）",
            "吸管（剪成小段）",
            "細繩或釣魚線（長約3-5公尺）",
            "膠帶",
            "兩張椅子或是可以固定繩子的地方"
          ],
          steps: [
            "將細繩穿過一小段吸管。",
            "將繩子的兩端分別綁在兩張椅背或固定物上，拉緊繩子使其呈現水平懸空。",
            "將氣球吹大（先不要打結），用手捏住吹氣口。",
            "請孩子幫忙，用膠帶將吹大的氣球固定在繩子上的吸管下方（氣球口朝向起點）。",
            "倒數 3、2、1，放開捏住氣球的手，觀察氣球火箭向前衝刺！"
          ],
          benefits: [
            "認識牛頓第三運動定律（作用力與反作用力）的基礎概念。",
            "透過組裝過程訓練手眼協調與精細動作。",
            "培養觀察力與實驗精神（氣球大小是否影響速度）。"
          ],
          extensions: [
            "嘗試改變氣球充氣的大小，測量飛行距離是否有變化。",
            "在氣球上黏貼紙機翼，觀察是否會飛得更穩。"
          ],
          likes_count: 45,
          favorites_count: 12,
          completed_count: 8,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_7_8_02",
          title: "家庭逃脫解謎任務",
          age_bucket: "7-8",
          age_min: 7,
          age_max: 8,
          gender: "all",
          interests: ["puzzle", "adventure"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 20,
          play_minutes: 40,
          summary: "在家中設置簡單的謎題關卡，孩子需要透過閱讀線索、解開密碼來找到最終寶藏。",
          hero_image_url: "/images/games/7_8_02.jpg",
          tags: ["邏輯思考", "閱讀理解", "問題解決"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "便條紙",
            "筆",
            "一個小盒子或袋子（當作寶箱）",
            "小獎勵（貼紙、點心）"
          ],
          steps: [
            "設計 3-5 個關卡。例如第一張紙條寫「我在冷冷的地方，守護著牛奶（答案：冰箱）」。",
            "將第二個線索藏在冰箱裡，指向下一個地點（例如書架、枕頭下）。",
            "最後一個線索指向「寶箱」的位置。",
            "將寫好的線索紙條依序藏好，把第一張交給孩子。",
            "孩子需要閱讀並破解謎題，依序找到所有線索直到發現寶藏。"
          ],
          benefits: [
            "提升閱讀理解能力與聯想力。",
            "訓練邏輯推理與觀察環境的能力。",
            "增加完成任務的成就感與耐心。"
          ],
          extensions: [
            "讓孩子反過來設計謎題給爸媽玩。",
            "加入簡單的數學題（例如：答案是鞋櫃的第 3 層，因為 1+2=3）。"
          ],
          likes_count: 62,
          favorites_count: 28,
          completed_count: 15,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_7_8_03",
          title: "紙飛機飛行實驗室",
          age_bucket: "7-8",
          age_min: 7,
          age_max: 8,
          gender: "all",
          interests: ["craft", "science"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 5,
          play_minutes: 30,
          summary: "這不是普通的摺紙飛機，而是透過實驗找出飛最遠、飛最久的摺法，成為小小航空工程師。",
          hero_image_url: "/images/games/7_8_03.jpg",
          tags: ["STEM", "實驗精神", "測量"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "各種紙張（A4影印紙、色紙、報紙）",
            "捲尺或長尺",
            "筆（紀錄用）",
            "迴紋針（選用，增加重量）"
          ],
          steps: [
            "上網搜尋或運用想像力，摺出三種不同造型的紙飛機（例如：尖頭型、寬翼型）。",
            "在客廳或走廊設立起點線。",
            "依序試飛每一架飛機，並用捲尺測量飛行距離。",
            "記錄每一架飛機的特色（飛得直、飛得遠、會在空中轉圈）。",
            "嘗試改造：在機鼻加迴紋針，或是稍微捲曲機翼尾端，看看飛行狀況有何改變。"
          ],
          benefits: [
            "學習科學實驗的步驟：假設、測試、記錄、修正。",
            "練習使用測量工具（尺）與數字紀錄。",
            "了解空氣動力學的基本概念（重心、阻力）。"
          ],
          extensions: [
            "舉辦家庭飛行大賽，設立「降落準確區」，看誰能停在指定範圍內。",
            "用不同材質的紙摺同一種飛機，比較材質的影響。"
          ],
          likes_count: 33,
          favorites_count: 10,
          completed_count: 7,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_7_8_04",
          title: "房間改造小設計師",
          age_bucket: "7-8",
          age_min: 7,
          age_max: 8,
          gender: "all",
          interests: ["art", "design"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 10,
          play_minutes: 45,
          summary: "運用空間概念繪製房間平面圖，並嘗試規劃家具擺放或裝飾，培養空間感與美學。",
          hero_image_url: "/images/games/7_8_04.jpg",
          tags: ["空間概念", "美術繪圖", "測量"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "方格紙或白紙",
            "鉛筆、橡皮擦",
            "捲尺",
            "色筆"
          ],
          steps: [
            "教孩子認識什麼是「平面圖」（從上往下看的視角）。",
            "協助孩子用捲尺大略測量房間的長寬（或用腳步數測量）。",
            "在紙上畫出房間的輪廓，標出門和窗戶的位置。",
            "畫出床、書桌、衣櫃的位置（可以剪紙片當作家具，方便移動）。",
            "讓孩子發揮創意，思考如果可以重新佈置，他想把書桌放哪裡？或是想在哪裡貼海報？"
          ],
          benefits: [
            "建立空間幾何概念與比例尺的初步認識。",
            "練習測量與轉化立體空間為平面圖形。",
            "培養美感與對生活環境的規劃能力。"
          ],
          extensions: [
            "實際動手整理房間的一個小角落（例如書桌或玩具櫃），實現設計圖的想法。",
            "設計「夢想中的房間」，可以畫入溜滑梯或樹屋等想像元素。"
          ],
          likes_count: 28,
          favorites_count: 15,
          completed_count: 3,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_7_8_05",
          title: "自製桌遊規則設計",
          age_bucket: "7-8",
          age_min: 7,
          age_max: 8,
          gender: "all",
          interests: ["logic", "creative"],
          cost_min: 0,
          cost_max: 50,
          currency: "TWD",
          prep_minutes: 30,
          play_minutes: 60,
          summary: "從零開始設計一款桌遊！畫地圖、設陷阱、訂規則，讓孩子成為遊戲設計師。",
          hero_image_url: "/images/games/7_8_05.jpg",
          tags: ["邏輯思維", "創意思考", "規則制定"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
          },
          materials: [
            "大張厚紙板或圖畫紙",
            "彩色筆",
            "骰子",
            "代表玩家的小玩偶或棋子（可用橡皮擦、硬幣代替）"
          ],
          steps: [
            "在紙上畫出一條路線（蛇形、螺旋形皆可），並畫出一格一格的格子。",
            "設計「起點」與「終點」。",
            "在特定格子設定特殊事件，例如：「暫停一次」、「前進兩格」、「退回起點」、「唱一首歌才能過」。",
            "與孩子一起討論並寫下遊戲規則說明書。",
            "全家人一起試玩，過程中如果發現規則不合理，隨時進行修正（Debug）。"
          ],
          benefits: [
            "深度訓練系統性思考與邏輯規劃。",
            "學習制定規則並遵守規則，以及換位思考（這規則對別人公平嗎？）。",
            "激發無限的想像力與創作力。"
          ],
          extensions: [
            "加入「機會與命運」卡牌機制，製作專屬的卡片。",
            "以最近喜歡的故事書為主題設計桌遊背景故事。"
          ],
          likes_count: 55,
          favorites_count: 22,
          completed_count: 10,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_7_8_06",
          title: "簡易平衡裝置DIY",
          age_bucket: "7-8",
          age_min: 7,
          age_max: 8,
          gender: "all",
          interests: ["science", "math"],
          cost_min: 0,
          cost_max: 20,
          currency: "TWD",
          prep_minutes: 15,
          play_minutes: 30,
          summary: "利用衣架製作簡易天平，比較不同玩具或物品的重量，建立重量與平衡的概念。",
          hero_image_url: "/images/games/7_8_06.jpg",
          tags: ["數學測量", "物理平衡", "觀察力"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "衣架（有掛勾的）",
            "兩個紙杯或塑膠杯",
            "細繩",
            "剪刀、打孔機（或用筆戳洞）",
            "各種小物品（積木、橡皮擦、錢幣）"
          ],
          steps: [
            "在兩個紙杯緣口對稱處各打兩個洞。",
            "剪兩段長度相同的繩子，分別穿過紙杯的洞並綁在衣架的兩端（確保衣架水平時杯子高度一致）。",
            "將衣架掛在門把或椅背上，確認天平是否平衡。",
            "開始實驗：一邊放一塊積木，另一邊要放幾個硬幣才會平衡？",
            "猜猜看：橡皮擦比較重還是小汽車比較重？先猜測再實測。"
          ],
          benefits: [
            "將抽象的「重量」概念具體化。",
            "學習比較（大於、小於、等於）的數學邏輯。",
            "觀察槓桿原理與平衡狀態。"
          ],
          extensions: [
            "使用彈珠或積木當作標準砝碼，測量家裡小東西的重量（例如：這支筆等於 3 顆彈珠重）。",
            "移動繩子在衣架上的位置（改變力臂），觀察平衡的變化。"
          ],
          likes_count: 30,
          favorites_count: 8,
          completed_count: 5,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_7_8_07",
          title: "時間管理任務卡",
          age_bucket: "7-8",
          age_min: 7,
          age_max: 8,
          gender: "all",
          interests: ["life_skills", "role_play"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 20,
          play_minutes: 60,
          summary: "將生活瑣事變成遊戲挑戰，幫助孩子建立時間感，學習規劃自己的課後時光。",
          hero_image_url: "/images/games/7_8_07.jpg",
          tags: ["時間管理", "自我負責", "生活自理"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "卡紙或便條紙",
            "計時器或鬧鐘",
            "貼紙（作為獎勵）"
          ],
          steps: [
            "與孩子討論放學後需要做的事（寫作業、洗澡、整理書包、玩玩具）。",
            "將每件事寫在一張「任務卡」上。",
            "請孩子估計每件事需要多久時間，寫在卡片上。",
            "實際執行：按下計時器，挑戰在估計時間內完成任務。",
            "檢討：如果超時了，討論是因為分心還是時間估得太少？完成任務可獲得一張貼紙。"
          ],
          benefits: [
            "培養對時間長短的敏銳度（20分鐘到底是多久？）。",
            "訓練自我監控與專注力。",
            "養成今日事今日畢的責任感。"
          ],
          extensions: [
            "設計「自由時間券」，累積完成任務可以兌換額外的閱讀或遊戲時間。",
            "週末時讓孩子規劃半天的行程表並擔任「時間管理員」。"
          ],
          likes_count: 78,
          favorites_count: 40,
          completed_count: 25,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_7_8_08",
          title: "創意漫畫接龍",
          age_bucket: "7-8",
          age_min: 7,
          age_max: 8,
          gender: "all",
          interests: ["art", "storytelling"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 5,
          play_minutes: 40,
          summary: "一人畫一格，共同創作無厘頭的故事！激發幽默感與圖像敘事能力。",
          hero_image_url: "/images/games/7_8_08.jpg",
          tags: ["創意寫作", "美術", "合作互動"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "A4紙（摺成四格或六格）",
            "鉛筆、黑筆"
          ],
          steps: [
            "將紙摺出格線，決定誰先開始。",
            "第一人在第一格畫出故事的開頭（例如：一隻想飛的企鵝）。",
            "將紙傳給第二人，他必須根據前一格的內容，畫出接下來的情節。",
            "依序輪流，直到畫完最後一格。",
            "一起看著完成的漫畫，講出完整的故事內容。"
          ],
          benefits: [
            "學習故事結構（起承轉合）。",
            "練習解讀他人的圖像訊息並進行邏輯銜接。",
            "在輕鬆氣氛中表達創意與幽默感。"
          ],
          extensions: [
            "將完成的漫畫影印，讓孩子著色。",
            "嘗試「矇眼畫」或「用非慣用手畫」增加趣味與難度。"
          ],
          likes_count: 36,
          favorites_count: 11,
          completed_count: 6,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_7_8_09",
          title: "室內障礙賽道",
          age_bucket: "7-8",
          age_min: 7,
          age_max: 8,
          gender: "all",
          interests: ["sports", "action"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 15,
          play_minutes: 30,
          summary: "將客廳變成體能訓練場，爬行、跳躍、平衡，消耗體力並訓練肢體協調。",
          hero_image_url: "/images/games/7_8_09.jpg",
          tags: ["大肌肉運動", "體能消耗", "協調性"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
          },
          materials: [
            "枕頭、抱枕",
            "椅子",
            "紙膠帶（貼地板用）",
            "毛巾"
          ],
          steps: [
            "設定關卡：",
            "1. 匍匐前進區（排幾張椅子，從下方鑽過）。",
            "2. 獨木橋（在地板貼一直線或用毛巾鋪成直線，需走在上面不落地）。",
            "3. 跳島戰術（地上放枕頭，只能踩枕頭移動）。",
            "4. 投準區（終點放一個籃子，要將紙團投入才算過關）。",
            "計時開始，看孩子花多少時間完成所有關卡。"
          ],
          benefits: [
            "促進身體大肌肉發展與核心力量。",
            "訓練本體覺與動作計畫能力。",
            "在受限空間中安全地發洩過剩精力。"
          ],
          extensions: [
            "設定「岩漿模式」，只要碰到地板就要從頭開始。",
            "讓孩子重新設計關卡考驗大人。"
          ],
          likes_count: 50,
          favorites_count: 18,
          completed_count: 12,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_7_8_10",
          title: "小小記者訪談任務",
          age_bucket: "7-8",
          age_min: 7,
          age_max: 8,
          gender: "all",
          interests: ["social", "language"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 15,
          play_minutes: 40,
          summary: "化身新聞記者，擬定問題採訪家人，並練習整理資訊與口頭報告。",
          hero_image_url: "/images/games/7_8_10.jpg",
          tags: ["口語表達", "社交互動", "同理心"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "筆記本",
            "筆",
            "麥克風（可用紙捲或梳子代替）",
            "手機（錄音或錄影用，選用）"
          ],
          steps: [
            "決定採訪主題，例如「爸爸小時候的玩具」、「媽媽最喜歡的食物」。",
            "引導孩子列出 3-5 個問題（5W1H練習：什麼時候、為什麼、感覺如何？）。",
            "孩子拿著「麥克風」正式採訪家人，並記錄重點。",
            "採訪結束後，請孩子站上「主播台」，向全家人報告今天的採訪發現。"
          ],
          benefits: [
            "訓練聆聽技巧與統整重點的能力。",
            "增進親子間的了解與情感交流。",
            "提升口語表達自信與提問技巧。"
          ],
          extensions: [
            "製作一份簡單的「家庭報紙」，畫出採訪內容。",
            "採訪打電話給爺爺奶奶，增加跨代互動。"
          ],
          likes_count: 25,
          favorites_count: 6,
          completed_count: 4,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
  
    // =====================
    // 9–10 歲：10 個遊戲
    // ===================== 
        {
          id: "game_9_10_01",
          title: "簡易密碼破譯遊戲",
          age_bucket: "9-10",
          age_min: 9,
          age_max: 10,
          gender: "all",
          interests: ["logic", "puzzle"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 15,
          play_minutes: 45,
          summary: "學習摩斯密碼或凱薩密碼的原理，製作解碼輪，傳遞不被發現的秘密訊息。",
          hero_image_url: "/images/games/9_10_01.jpg",
          tags: ["邏輯思考", "密碼學", "神秘感"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "紙板（製作轉盤用）",
            "兩腳釘",
            "筆",
            "對照表（可上網查摩斯密碼或自行設計符號）"
          ],
          steps: [
            "介紹「凱薩密碼」原理：將字母順序往後推移（例如 A 變成 C）。",
            "製作密碼輪：剪兩個大小不同的圓形紙板疊在一起，用兩腳釘固定圓心，邊緣寫上注音符號或英文字母。",
            "約定密鑰：例如內圈對準外圈的哪個字。",
            "出題：家長寫一段加密過的訊息（例如藏寶地點）。",
            "破譯：孩子利用密碼輪轉譯出真實含義。"
          ],
          benefits: [
            "理解代碼與符號的轉換邏輯。",
            "訓練專注力與細心程度。",
            "滿足孩子擁有「小秘密」的心理需求。"
          ],
          extensions: [
            "嘗試用檸檬汁寫無字天書，用火烤過才顯現。",
            "設計只有兩人才懂的肢體暗號。"
          ],
          likes_count: 58,
          favorites_count: 24,
          completed_count: 15,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_9_10_02",
          title: "家庭小實驗：自製指南針",
          age_bucket: "9-10",
          age_min: 9,
          age_max: 10,
          gender: "all",
          interests: ["science", "nature"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 10,
          play_minutes: 30,
          summary: "利用磁化原理，讓縫衣針變成指南針，探索家中磁場與方位。",
          hero_image_url: "/images/games/9_10_02.jpg",
          tags: ["物理實驗", "磁力", "方位辨識"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "縫衣針",
            "強力磁鐵",
            "裝水的淺盤或碗",
            "小片保麗龍或樹葉（讓針浮起來用）"
          ],
          steps: [
            "手拿磁鐵，用同一方向摩擦縫衣針約 30-50 次（不要來回摩擦）。",
            "將摩擦過的針放在保麗龍片或樹葉上。",
            "輕輕放入裝水的碗中，確保它自由漂浮。",
            "觀察針尖轉動，最後會指向南北方。",
            "拿出手機指南針APP驗證是否準確。"
          ],
          benefits: [
            "認識地磁與磁極（N極、S極）的概念。",
            "動手驗證科學原理的實證精神。",
            "學習辨別方位的生存技能。"
          ],
          extensions: [
            "拿磁鐵靠近自製指南針，觀察會發生什麼事（干擾磁場）。",
            "畫出家裡的方位圖，標示大門朝哪裡。"
          ],
          likes_count: 40,
          favorites_count: 12,
          completed_count: 8,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_9_10_03",
          title: "家庭桌遊設計進階版",
          age_bucket: "9-10",
          age_min: 9,
          age_max: 10,
          gender: "all",
          interests: ["creative", "strategy"],
          cost_min: 0,
          cost_max: 50,
          currency: "TWD",
          prep_minutes: 40,
          play_minutes: 60,
          summary: "相較於低年級的簡單路徑，這次要加入「資源管理」或「角色能力」的機制。",
          hero_image_url: "/images/games/9_10_03.jpg",
          tags: ["系統思考", "美術設計", "策略規劃"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
          },
          materials: [
            "厚紙板",
            "彩色筆",
            "籌碼（可用積木或錢幣代替）",
            "骰子"
          ],
          steps: [
            "決定主題：例如「荒島求生」、「宇宙探險」或「經營餐廳」。",
            "設計機制：除了走路，加入「收集資源」（如木頭、食物）才能過關的規則。",
            "設計角色卡：每個角色有不同能力（例如：兔子走得快、熊力氣大）。",
            "繪製地圖與卡牌（機會卡、命運卡）。",
            "全家試玩並進行平衡性調整（會不會太難贏？）。"
          ],
          benefits: [
            "訓練多層次的邏輯思考與變數控制。",
            "體驗從無到有產出產品的過程。",
            "學習接受回饋並修正作品（迭代設計）。"
          ],
          extensions: [
            "為桌遊設計包裝盒與封面。",
            "拍攝一段「試玩介紹影片」上傳給親友看。"
          ],
          likes_count: 65,
          favorites_count: 28,
          completed_count: 10,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_9_10_04",
          title: "生活數學闖關王",
          age_bucket: "9-10",
          age_min: 9,
          age_max: 10,
          gender: "all",
          interests: ["math", "role_play"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 20,
          play_minutes: 40,
          summary: "將數學課本的內容搬到客廳，用捲尺算面積、用食譜算比例，數學變得超實用。",
          hero_image_url: "/images/games/9_10_04.jpg",
          tags: ["數學應用", "測量", "生活技能"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "捲尺",
            "計算機",
            "家中物品（書本、桌子、瓶罐）"
          ],
          steps: [
            "關卡一【面積大師】：測量餐桌的長寬，計算面積是多少平方公分？",
            "關卡二【體積估算】：這個水壺是 500ml，那鍋湯大約是多少 ml？",
            "關卡三【折扣高手】：這本書定價 300 元，打 79 折是多少錢？",
            "關卡四【時間管家】：現在是 2:15，電影 135 分鐘後結束，那是幾點幾分？",
            "全部答對可以獲得「數學金頭腦」證書。"
          ],
          benefits: [
            "消除對數學的恐懼，連結抽象數字與具體生活。",
            "複習學校教的四則運算與度量衡。",
            "培養解決實際問題的能力。"
          ],
          extensions: [
            "去超市購物時，請孩子幫忙比價（算算看哪一種包裝的單價比較便宜）。",
            "依照比例縮小，畫出客廳的平面圖。"
          ],
          likes_count: 50,
          favorites_count: 18,
          completed_count: 12,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_9_10_05",
          title: "小小說書人寫作任務",
          age_bucket: "9-10",
          age_min: 9,
          age_max: 10,
          gender: "all",
          interests: ["writing", "storytelling"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 10,
          play_minutes: 50,
          summary: "利用「故事骰子」或隨機圖片激發靈感，練習創作短篇故事並口語表達。",
          hero_image_url: "/images/games/9_10_05.jpg",
          tags: ["創意寫作", "口語表達", "想像力"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "筆、紙",
            "舊雜誌圖片或故事骰子（也可用寫著單詞的籤）"
          ],
          steps: [
            "準備三種籤筒：【角色】（如外星人、偵探）、【地點】（如金字塔、超市）、【事件】（如遺失錢包、發現恐龍蛋）。",
            "隨機抽取這三個元素。",
            "給孩子 10-15 分鐘構思一個包含這三元素的故事。",
            "將故事寫下來（或是畫成簡單的分鏡圖）。",
            "在晚餐後的時間，向全家人朗讀或表演這個故事。"
          ],
          benefits: [
            "練習起承轉合的故事結構。",
            "激發將不相關事物連結在一起的創意（聯想力）。",
            "提升寫作與公開演說的自信。"
          ],
          extensions: [
            "全家進行「故事接龍」，每人講一分鐘。",
            "將故事錄音，配上音效做成廣播劇。"
          ],
          likes_count: 35,
          favorites_count: 10,
          completed_count: 5,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_9_10_06",
          title: "家庭節目企劃人",
          age_bucket: "9-10",
          age_min: 9,
          age_max: 10,
          gender: "all",
          interests: ["performance", "social"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 30,
          play_minutes: 60,
          summary: "策劃一場家庭才藝秀或遊戲之夜，從流程安排、主持稿到場地佈置一手包辦。",
          hero_image_url: "/images/games/9_10_06.jpg",
          tags: ["領導力", "組織規劃", "社交互動"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "節目單（紙筆）",
            "麥克風（道具）",
            "音響設備"
          ],
          steps: [
            "確定活動主題（例如：週五歌唱大賽、睡衣派對）。",
            "邀請家人報名表演項目（唱歌、講笑話、變魔術）。",
            "排定節目流程表（Opening、表演順序、頒獎）。",
            "撰寫簡單的主持稿。",
            "正式執行：擔任主持人，控制現場氣氛與流程。"
          ],
          benefits: [
            "培養領導與組織大型活動的初階能力。",
            "訓練面對群眾的台風。",
            "增進家庭成員間的情感凝聚力。"
          ],
          extensions: [
            "設計海報或邀請函發給家人。",
            "準備簡單的小點心作為中場休息招待。"
          ],
          likes_count: 48,
          favorites_count: 16,
          completed_count: 8,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_9_10_07",
          title: "科學新聞小記者",
          age_bucket: "9-10",
          age_min: 9,
          age_max: 10,
          gender: "all",
          interests: ["science", "research"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 20,
          play_minutes: 45,
          summary: "針對一個感興趣的科學現象（如為什麼天空是藍的？），查找資料並製作成新聞播報。",
          hero_image_url: "/images/games/9_10_07.jpg",
          tags: ["資訊素養", "科學知識", "口語表達"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "電腦或平板（查資料用）",
            "大字報或紙板（製作解說圖）"
          ],
          steps: [
            "選定主題：例如「火山為什麼會爆發？」或「蜜蜂怎麼溝通？」。",
            "教導孩子分辨網路資料的可信度，蒐集正確資訊。",
            "消化資訊：將艱澀的知識轉化為口語化的講稿。",
            "製作輔助道具（例如畫圖表說明）。",
            "錄影播報：坐在桌前像主播一樣，在 3 分鐘內把知識講清楚。"
          ],
          benefits: [
            "學習主動求知與過濾資訊的能力（媒體識讀）。",
            "練習摘要重點與邏輯表達。",
            "滿足對特定領域的好奇心。"
          ],
          extensions: [
            "採訪家裡的人對這個科學現象的看法（闢謠時間）。",
            "剪輯影片加上字幕。"
          ],
          likes_count: 25,
          favorites_count: 8,
          completed_count: 3,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_9_10_08",
          title: "循環利用創意工作坊",
          age_bucket: "9-10",
          age_min: 9,
          age_max: 10,
          gender: "all",
          interests: ["craft", "eco"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 10,
          play_minutes: 60,
          summary: "蒐集家裡的廢棄物（紙盒、寶特瓶），發揮創意改造成實用的生活小物。",
          hero_image_url: "/images/games/9_10_08.jpg",
          tags: ["環保教育", "美勞創作", "問題解決"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
          },
          materials: [
            "乾淨的回收物（紙箱、捲筒、塑膠瓶）",
            "剪刀、膠水、膠帶",
            "彩色筆或顏料"
          ],
          steps: [
            "觀察回收物形狀，思考可以變成什麼？（例如：寶特瓶變筆筒、鞋盒變收納箱）。",
            "設計草圖：規劃要怎麼切割、組裝。",
            "動手製作：注意使用剪刀安全。",
            "美化裝飾：用彩繪或拼貼讓它變漂亮。",
            "實際使用：將成品放在家中角落發揮功能。"
          ],
          benefits: [
            "培養「物盡其用」的惜物觀念。",
            "訓練立體結構與美感設計。",
            "享受自己動手改善生活的成就感。"
          ],
          extensions: [
            "用寶特瓶蓋製作成象棋或跳棋。",
            "舉辦「廢物利用博覽會」展示作品。"
          ],
          likes_count: 42,
          favorites_count: 15,
          completed_count: 10,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_9_10_09",
          title: "家庭體能闖關表",
          age_bucket: "9-10",
          age_min: 9,
          age_max: 10,
          gender: "all",
          interests: ["sports", "competitive"],
          cost_min: 0,
          cost_max: 0,
          currency: "TWD",
          prep_minutes: 15,
          play_minutes: 40,
          summary: "結合肌力與協調性的循環訓練，製作紀錄表挑戰自我極限。",
          hero_image_url: "/images/games/9_10_09.jpg",
          tags: ["健康體能", "目標設定", "自我挑戰"],
          flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "瑜珈墊",
            "計時器",
            "大張紙（製作紀錄表）"
          ],
          steps: [
            "設定 5 個動作站點：開合跳、仰臥起坐、深蹲、棒式、單腳站立。",
            "製作紀錄表，寫下每個人的名字。",
            "測驗一：一分鐘內能做幾下？（肌耐力挑戰）。",
            "測驗二：棒式能撐幾秒？（核心挑戰）。",
            "將全家人的成績記錄下來，約定下週再挑戰一次，看誰進步最多。"
          ],
          benefits: [
            "養成規律運動的健康習慣。",
            "學習設定目標並透過努力達成（成長型思維）。",
            "正確的運動姿勢觀念。"
          ],
          extensions: [
            "加入雙人動作（例如背對背傳球）。",
            "配合動感音樂增加樂趣。"
          ],
          likes_count: 33,
          favorites_count: 9,
          completed_count: 6,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
        {
          id: "game_9_10_10",
          title: "家庭預算小管家",
          age_bucket: "9-10",
          age_min: 9,
          age_max: 10,
          gender: "all",
          interests: ["math", "life_skills"],
          cost_min: 200,
          cost_max: 500,
          currency: "TWD",
          prep_minutes: 30,
          play_minutes: 90,
          summary: "給予一筆固定預算，讓孩子規劃一頓晚餐或一次超市採購，學習金錢分配。",
          hero_image_url: "/images/games/9_10_10.jpg",
          tags: ["財商教育", "決策能力", "數學應用"],
          flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
          },
          materials: [
            "現金（例如 500 元）",
            "計算機",
            "購物袋"
          ],
          steps: [
            "設定任務：用 500 元買齊一家四口晚餐的食材，且必須包含肉、菜、水果。",
            "討論菜單：思考想吃什麼，預估可能需要的花費。",
            "前往超市：實際查看標價，如果發現太貴，要學習「取捨」或「替代」（改買特價品）。",
            "結帳：在櫃檯前先算好總金額，確認沒有超支。",
            "回家後檢討：剩多少錢？買的東西划算嗎？"
          ],
          benefits: [
            "建立「預算」與「量入為出」的金錢觀。",
            "體驗當家的柴米油鹽，培養感恩惜福的心。",
            "訓練加減法與估算的實戰能力。"
          ],
          extensions: [
            "如果預算有剩，剩下的錢可以變成孩子的零用錢（鼓勵精打細算）。",
            "挑戰「清冰箱料理」，不花錢做出晚餐。"
          ],
          likes_count: 70,
          favorites_count: 35,
          completed_count: 20,
          created_at: "2025-11-21T00:00:00Z",
          updated_at: "2025-11-21T00:00:00Z"
        },
    // =====================
    // 11–12 歲：10 個遊戲
    // =====================
    {
        id: "game_11_12_01",
        title: "小小研究專題：家庭用水觀察",
        age_bucket: "11-12",
        age_min: 11,
        age_max: 12,
        gender: "all",
        interests: ["science", "math", "nature"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 60,
        summary: "化身數據科學家，透過實際記錄水錶或分析水費單，計算家庭用水量並提出節水方案。",
        hero_image_url: "/images/games/11_12_01.jpg",
        tags: ["環境教育", "數據分析", "公民素養"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "筆記本",
          "計算機",
          "過去的水費帳單（選用）",
          "碼錶（測量水龍頭流量用）"
        ],
        steps: [
          "找出家裡的水錶位置，教孩子如何讀取數據。",
          "設定觀察期（例如一週），每天固定時間記錄水錶讀數。",
          "實驗測量：拿一個已知容量的瓶子，測量洗澡或洗手時平均一分鐘流掉多少水。",
          "計算全家人的每日人均用水量。",
          "提出一份「家庭節水計畫書」，例如：改用淋浴、收集洗米水澆花，並預估能省下多少錢。"
        ],
        benefits: [
          "將數學應用於真實生活，培養數據敏感度。",
          "提升環境保護意識與社會責任感。",
          "訓練觀察現況、發現問題並提出解決方案的能力。"
        ],
        extensions: [
          "繪製用水量變化折線圖。",
          "擴大研究範圍，調查電費或瓦斯費的數據。"
        ],
        likes_count: 42,
        favorites_count: 15,
        completed_count: 5,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_11_12_02",
        title: "邏輯推理案件調查",
        age_bucket: "11-12",
        age_min: 11,
        age_max: 12,
        gender: "all",
        interests: ["puzzle", "reading"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 30,
        play_minutes: 60,
        summary: "這是一場燒腦的偵探遊戲，透過零碎的證詞與線索，拼湊出案件的真相。",
        hero_image_url: "/images/games/11_12_02.jpg",
        tags: ["邏輯演繹", "批判性思考", "閱讀理解"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "案件劇本（可網上搜尋『海龜湯』或簡易推理題）",
          "白板或紙筆（整理線索用）"
        ],
        steps: [
          "由家長擔任「上帝」或「法官」，唸出案件的開頭（謎面）。例如：「一個男人走進餐廳點了一碗海龜湯，喝了一口就哭了，為什麼？」",
          "孩子擔任偵探，必須提出只能回答「是」、「不是」或「不重要」的問題。",
          "孩子需要將問到的線索分類（人物、動機、時間點）。",
          "引導孩子進行推論，排除不可能的選項。",
          "直到孩子完整還原故事真相（謎底）。"
        ],
        benefits: [
          "訓練水平思考（Lateral Thinking）與發散性思維。",
          "學習如何精確提問以獲取關鍵資訊。",
          "培養耐心與抽絲剝繭的專注力。"
        ],
        extensions: [
          "讓孩子自己編寫一個推理故事考家長。",
          "觀看偵探影集片段，暫停並預測兇手是誰。"
        ],
        likes_count: 88,
        favorites_count: 45,
        completed_count: 30,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_11_12_03",
        title: "簡易程式邏輯桌遊",
        age_bucket: "11-12",
        age_min: 11,
        age_max: 12,
        gender: "all",
        interests: ["technology", "logic"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 20,
        play_minutes: 45,
        summary: "不插電也能學程式！用紙筆設計地圖與指令卡，模擬電腦運作邏輯。",
        hero_image_url: "/images/games/11_12_03.jpg",
        tags: ["運算思維", "演算法", "遊戲設計"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "方格紙（繪製地圖）",
          "厚紙卡（製作指令卡）",
          "代表機器人的棋子"
        ],
        steps: [
          "繪製一張充滿障礙物的網格地圖，設定起點與終點。",
          "製作指令卡：前進、左轉、右轉、迴圈（重複動作）、條件判斷（如果遇到牆壁則...）。",
          "一位玩家扮演「工程師」，排列指令卡寫出程式。",
          "另一位玩家扮演「機器人」，只能嚴格按照指令卡動作，不能自己思考。",
          "如果機器人撞牆或無法到達終點，工程師需要「除錯（Debug）」，修正指令卡順序。"
        ],
        benefits: [
          "理解程式設計基礎概念（序列、迴圈、條件式）。",
          "訓練預測結果與邏輯排序的能力。",
          "培養面對錯誤並修正問題（Debug）的抗壓性。"
        ],
        extensions: [
          "加入「副程式（Function）」概念，將一連串動作打包成一張特殊卡。",
          "設計雙人對戰，看誰用最少的指令步數到達終點。"
        ],
        likes_count: 65,
        favorites_count: 20,
        completed_count: 12,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_11_12_04",
        title: "迷你創業模擬",
        age_bucket: "11-12",
        age_min: 11,
        age_max: 12,
        gender: "all",
        interests: ["business", "social"],
        cost_min: 0,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 30,
        play_minutes: 90,
        summary: "從產品發想到定價策略，模擬一次微型創業過程，體驗賺錢與成本的概念。",
        hero_image_url: "/images/games/11_12_04.jpg",
        tags: ["財商教育", "企劃能力", "數學應用"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "計算機",
          "筆記本",
          "海報紙（行銷宣傳用）",
          "實際製作產品的材料（如檸檬水食材或手環珠子）"
        ],
        steps: [
          "發想產品：決定要賣什麼？（例如：手工餅乾、二手書拍賣、自製飾品）。",
          "成本計算：列出所有材料費，計算出「單位成本」。",
          "定價策略：決定售價，計算賣出多少才能回本（損益平衡點）。",
          "行銷規劃：設計宣傳海報或口號。",
          "模擬銷售：向家人或鄰居推銷，並記錄實際收支表。"
        ],
        benefits: [
          "建立基本的商業與金錢觀念（營收 - 成本 = 利潤）。",
          "訓練溝通技巧與說服力。",
          "了解父母賺錢的不易與資源規劃的重要性。"
        ],
        extensions: [
          "若是虛擬創業，可以使用大富翁鈔票進行模擬交易。",
          "探討「風險」，例如如果下雨導致沒客人該怎麼辦？"
        ],
        likes_count: 55,
        favorites_count: 25,
        completed_count: 8,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_11_12_05",
        title: "辯論小練習：支持還是反對？",
        age_bucket: "11-12",
        age_min: 11,
        age_max: 12,
        gender: "all",
        interests: ["social", "language"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 20,
        play_minutes: 40,
        summary: "挑選一個爭議性話題，練習有條理地表達觀點，並學會聆聽相反意見。",
        hero_image_url: "/images/games/11_12_05.jpg",
        tags: ["口語表達", "批判性思考", "換位思考"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "計時器",
          "題目籤筒"
        ],
        steps: [
          "設定辯題，例如：「小學生該不該擁有智慧型手機？」、「學校應不應該穿制服？」。",
          "抽籤決定正方（支持）與反方（反對），即使抽到不認同的立場也要試著辯護。",
          "準備時間 5 分鐘，列出 3 個論點。",
          "申論階段：雙方各講 2 分鐘。",
          "反駁階段：針對對方的論點進行提問或反擊。",
          "結論：總結自己的看法。"
        ],
        benefits: [
          "訓練邏輯思考與組織語言的能力。",
          "培養包容多元觀點的雅量（了解事情往往沒有絕對對錯）。",
          "提升自信心與公眾演說技巧。"
        ],
        extensions: [
          "嘗試「角色互換」，在第二輪時交換立場辯論。",
          "錄音下來，事後回放檢查是否有贅詞或邏輯漏洞。"
        ],
        likes_count: 30,
        favorites_count: 10,
        completed_count: 4,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_11_12_06",
        title: "人體平衡與重心實驗",
        age_bucket: "11-12",
        age_min: 11,
        age_max: 12,
        gender: "all",
        interests: ["sports", "science"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 30,
        summary: "透過看似簡單卻做不到的身體動作，體驗物理學中的重心原理，既好笑又長知識。",
        hero_image_url: "/images/games/11_12_06.jpg",
        tags: ["物理科學", "身體協調", "趣味挑戰"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "一張椅子",
          "牆壁"
        ],
        steps: [
          "挑戰一：雙腳腳跟緊貼牆壁站立，試著彎腰撿起地上的物品而不跌倒（通常做不到，因為重心後移受阻）。",
          "挑戰二：側邊身體（腳與手臂）緊貼牆壁，試著抬起外側的腳（做不到，因為重心無法移動到支撐腳）。",
          "挑戰三（椅子挑戰）：彎腰頭頂牆壁，將椅子抓在胸前，試著直立起身體（男女重心位置不同，結果可能不同）。",
          "討論：為什麼會失敗？引導孩子思考「重心」與「支撐底面積」的關係。"
        ],
        benefits: [
          "親身體驗物理力學原理。",
          "探索人體構造的奧妙（如男女重心差異）。",
          "在失敗與歡笑中學習科學知識。"
        ],
        extensions: [
          "比賽誰能做出最難的平衡動作（如瑜珈樹式）。",
          "查閱資料，了解為什麼不倒翁不會倒。"
        ],
        likes_count: 48,
        favorites_count: 14,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_11_12_07",
        title: "長篇漫畫／故事企劃",
        age_bucket: "11-12",
        age_min: 11,
        age_max: 12,
        gender: "all",
        interests: ["art", "writing"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 30,
        play_minutes: 120,
        summary: "不只是畫畫，而是建構一個完整的世界觀。設計角色設定集、地圖與劇本大綱。",
        hero_image_url: "/images/games/11_12_07.jpg",
        tags: ["創意寫作", "世界觀設計", "專案規劃"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "素描本或活頁紙",
          "繪圖工具",
          "便利貼（整理劇情用）"
        ],
        steps: [
          "世界觀設定：這是魔法世界、未來科幻還是校園故事？繪製一張世界地圖。",
          "角色設定（Character Sheet）：設計主角與反派，包含姓名、外貌、技能、弱點與背景故事。",
          "劇情大綱：使用「英雄旅程」架構（平靜生活 -> 冒險召喚 -> 遇見導師 -> 挑戰 -> 回歸）。",
          "分鏡草圖：將第一章的故事畫成簡單的分鏡格。",
          "向家人展示你的企劃案，就像電影提案一樣。"
        ],
        benefits: [
          "練習長篇結構的組織能力。",
          "深入探索角色的心理與動機（同理心練習）。",
          "享受創造世界的巨大成就感。"
        ],
        extensions: [
          "使用手機APP製作簡單的定格動畫。",
          "將故事寫成小說形式，每天寫 500 字。"
        ],
        likes_count: 35,
        favorites_count: 18,
        completed_count: 2,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_11_12_08",
        title: "家庭規則重新設計工作坊",
        age_bucket: "11-12",
        age_min: 11,
        age_max: 12,
        gender: "all",
        interests: ["social", "life_skills"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 60,
        summary: "以民主的方式召開家庭會議，檢視並協商現有的家規，簽訂新的「家庭公約」。",
        hero_image_url: "/images/games/11_12_08.jpg",
        tags: ["溝通協商", "公民教育", "家庭關係"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "大張紙（海報紙）",
          "彩色筆",
          "點心（營造輕鬆氣氛）"
        ],
        steps: [
          "列出目前家裡的不成文或成文規定（如門禁、手機使用時間、家事分配）。",
          "每個人（包含大人）提出覺得不合理或需要調整的地方。",
          "進行協商：孩子如果想要更多自由，願意承擔什麼責任？（權利與義務）。",
          "表決通過新規則，並白紙黑字寫下來，裝飾這份「家庭公約」。",
          "全家人簽名以示負責，並張貼在顯眼處。"
        ],
        benefits: [
          "讓孩子感受到被尊重，提升遵守規則的意願。",
          "學習理性溝通與談判技巧。",
          "理解民主程序的運作方式。"
        ],
        extensions: [
          "設定「試行期」，一週後再開會檢討新規則是否可行。",
          "設立「家庭獎勵基金」，若大家都遵守規則可獲得獎勵。"
        ],
        likes_count: 60,
        favorites_count: 28,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_11_12_09",
        title: "身心平衡伸展計畫",
        age_bucket: "11-12",
        age_min: 11,
        age_max: 12,
        gender: "all",
        interests: ["health", "mindfulness"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 20,
        play_minutes: 40,
        summary: "進入青春期，身體變化大，透過設計專屬的伸展菜單，認識身體並紓解壓力。",
        hero_image_url: "/images/games/11_12_09.jpg",
        tags: ["健康教育", "自我覺察", "情緒調節"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: true,
          messy_level: "low",
          need_freezer: false
        },
        materials: [
          "瑜珈墊或地毯",
          "輕柔的音樂",
          "平板或電腦（查詢動作）"
        ],
        steps: [
          "上網搜尋 5-8 個適合青少年的伸展動作（如貓牛式、下犬式、嬰兒式）。",
          "了解每個動作的好處（例如：舒緩背痛、拉長腿部線條）。",
          "排列動作順序，並挑選搭配的放鬆音樂。",
          "擔任「瑜珈老師」，帶領家人一起進行這套伸展操，邊做邊講解。",
          "最後進行 3 分鐘的大休息（冥想），練習專注呼吸。"
        ],
        benefits: [
          "建立健康的運動習慣與身體形象。",
          "學習自我放鬆與調節情緒的方法。",
          "增進對身體構造與肌肉感受的了解。"
        ],
        extensions: [
          "每天睡前執行 10 分鐘，紀錄睡眠品質的變化。",
          "學習測量心跳，比較運動前後的心率差異。"
        ],
        likes_count: 22,
        favorites_count: 8,
        completed_count: 4,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
      {
        id: "game_11_12_10",
        title: "未來職業夢想板",
        age_bucket: "11-12",
        age_min: 11,
        age_max: 12,
        gender: "all",
        interests: ["career", "art"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 20,
        play_minutes: 90,
        summary: "運用圖像化方式，拼貼出對未來的想像。這不是嚴肅的生涯規劃，而是探索興趣的起點。",
        hero_image_url: "/images/games/11_12_10.jpg",
        tags: ["生涯探索", "自我認知", "美術拼貼"],
        flags: {
          requires_purchase: false,
          indoor_friendly: true,
          outdoor_friendly: false,
          messy_level: "medium",
          need_freezer: false
        },
        materials: [
          "過期雜誌、報紙或列印網路圖片",
          "剪刀、膠水",
          "大張厚紙板",
          "彩色筆"
        ],
        steps: [
          "列出自己的興趣關鍵字（例如：喜歡動物、喜歡畫畫、想賺大錢、想環遊世界）。",
          "從雜誌中尋找能代表這些關鍵字的圖片或文字，剪下來。",
          "不要限制一定要是某種職業，可以是生活風格（如：住在海邊的房子）。",
          "將剪下來的素材拼貼在紙板上，進行排版裝飾。",
          "完成後，向家人介紹這塊夢想板，說說看為什麼選這些圖片。"
        ],
        benefits: [
          "具象化模糊的未來想像，增加學習動力。",
          "更深入認識自己的價值觀與渴望。",
          "家長可藉此了解孩子真正的興趣所在，而非將大人期望強加於人。"
        ],
        extensions: [
          "針對夢想板上的一個職業，進行深入研究（需要什麼學歷、工作內容是什麼）。",
          "每年製作一次，觀察夢想的變化軌跡。"
        ],
        likes_count: 40,
        favorites_count: 16,
        completed_count: 7,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
      },
    {
        id: "game_2_3_01",
        title: "顏色小豆豆分類盤",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sensory", "logic"],
        cost_min: 0,
        cost_max: 80,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "用彩色豆子或珠珠放進分類盤，讓孩子照顏色分類，訓練顏色認知與手眼協調。",
        hero_image_url: "/images/games/2_3_01.jpg",
        tags: ["顏色認知", "感覺統合", "精細動作"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "不同顏色的小豆豆、珠珠或鈕扣數十顆（避免可吞大小，需家長全程陪同）",
            "有分隔的小盤子或製冰盒",
            "小夾子或湯匙"
        ],
        steps: [
            "在分隔盤的每個格子裡貼上一個顏色的標籤或色紙。",
            "將所有混在一起的豆豆放在一個大碗裡。",
            "請孩子使用夾子或湯匙，將豆豆依照顏色放進對應的格子。",
            "家長在旁鼓勵並複誦顏色名稱。",
        ],
        benefits: [
            "訓練精細動作與手部小肌肉。",
            "建立基礎的顏色辨識與分類邏輯。",
            "提升專注力與耐心。"
        ],
        extensions: [
            "將豆豆改為不同形狀的積木或玩具，練習形狀分類。",
            "設置一個計時器，讓孩子挑戰在時間內完成。",
        ],
        likes_count: 55,
        favorites_count: 15,
        completed_count: 12,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_34",
        title: "紙箱隧道小爬行",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sports", "sensory"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 10,
        summary: "利用大紙箱排成隧道，讓孩子爬行穿越，練習大肌肉與空間感。",
        hero_image_url: "/images/games/2_3_34.jpg",
        tags: ["大肌肉發展", "空間感", "探索"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "中大尺寸紙箱 2–4 個（例如宅配箱）",
            "安全膠帶或紙膠帶 1 卷",
            "軟墊、地墊或毛毯數條（鋪在地上防滑）",
            "小玩偶或小球 1–2 個（放在終點當驚喜）"
        ],
        steps: [
            "在客廳或走廊鋪上軟墊，將紙箱排成一條直線或彎曲的隧道，用膠帶固定接縫讓箱子不易倒塌。",
            "請孩子先站在隧道入口，讓他看見終點有小玩偶或小球作為「寶物」。",
            "家長先示範半跪或爬行進隧道，讓孩子看到「原來可以這樣玩」。",
            "邀請孩子用手腳慢慢爬行穿越，過程中可以說「小火車進隧道囉」、「小兔子鑽洞囉」。",
            "爬完後一起在隧道外拍拍手，並可以再改變隧道方向或增加箱子長度。"
        ],
        benefits: [
            "促進肩膀、手臂、腿部等大肌肉發展。",
            "透過空間穿越，幫助建立前後、內外等空間概念。",
            "在安全環境中滿足探索與冒險的需求，增強自信心。"
        ],
        extensions: [
            "在隧道中間貼上彩色貼紙，請孩子邊爬邊找特定顏色。",
            "播放音樂，讓孩子聽到音樂開始就進隧道，音樂停止就停下來，變成節奏遊戲。"
        ],
        likes_count: 24,
        favorites_count: 9,
        completed_count: 4,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_35",
        title: "大象鼻子噴水畫",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["art", "sensory"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用滴管或噴水瓶，將稀釋的顏料噴灑在大畫紙上，創造抽象的色彩噴濺畫。",
        hero_image_url: "/images/games/2_3_35.jpg",
        tags: ["色彩探索", "精細動作", "藝術創作"],
        flags: {
            requires_purchase: true,
            indoor_friendly: false,
            outdoor_friendly: true,
            messy_level: "high",
            need_freezer: false
        },
        materials: [
            "大張圖畫紙或紙板",
            "水彩或食用色素",
            "水",
            "滴管或小型噴水瓶",
            "圍裙或舊衣物"
        ],
        steps: [
            "將顏料以水稀釋，裝入滴管或噴水瓶中。",
            "將大畫紙固定在地上或牆上。",
            "讓孩子自由地用滴管滴下顏料，或用噴水瓶噴灑顏料。",
            "觀察不同顏色在紙上融合、流動的樣子。",
            "等畫作乾燥後，幫作品取一個有趣的名字。"
        ],
        benefits: [
            "練習手指精細動作（擠壓滴管或噴水瓶）。",
            "認識色彩混合的初步概念。",
            "提供自由探索與宣洩的感官經驗。"
        ],
        extensions: [
            "在畫紙上放一些葉子或積木，噴灑完後拿開，形成遮擋的圖案。",
            "用不同材質的紙（如衛生紙、卡紙）試試看噴灑效果的差異。"
        ],
        likes_count: 38,
        favorites_count: 12,
        completed_count: 6,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_36",
        title: "廚房科學：鹽巴冰塊黏起來",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["science", "sensory"],
        cost_min: 0,
        cost_max: 10,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "利用鹽巴讓冰塊降溫的原理，進行「釣」冰塊的有趣實驗，結合感官和科學啟蒙。",
        hero_image_url: "/images/games/2_3_36.jpg",
        tags: ["感官探索", "科學啟蒙", "精細動作"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "冰塊數顆",
            "一碗水",
            "一條棉線或毛線",
            "食鹽"
        ],
        steps: [
            "將冰塊放入水中。",
            "把棉線輕輕放在冰塊上，確保棉線有接觸到冰塊。",
            "在棉線與冰塊的接觸點上撒一點點鹽巴。",
            "靜待約 30 秒。",
            "輕輕提起棉線，看是否能把冰塊「釣」起來！",
            "向孩子解釋鹽巴讓冰塊變得更冷，水重新結冰，把線凍住了。"
        ],
        benefits: [
            "體驗溫度與物質變化的感官刺激。",
            "滿足好奇心，初步了解「鹽」對「冰」的影響。",
            "練習等待與觀察的耐心。"
        ],
        extensions: [
            "試試看不加鹽、加糖或加其他粉末的效果差異。",
            "用筷子代替棉線，變成撈冰塊比賽。"
        ],
        likes_count: 45,
        favorites_count: 20,
        completed_count: 8,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_37",
        title: "親子動物叫聲模仿",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["language", "music"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 10,
        summary: "家長發出不同動物的叫聲或動作，讓孩子模仿，訓練聽力、語言和身體協調。",
        hero_image_url: "/images/games/2_3_37.jpg",
        tags: ["語言學習", "發音練習", "身體律動"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "動物圖卡或繪本（可選）",
            "家長的聲音"
        ],
        steps: [
            "家長先發出一個簡單的動物叫聲，例如「喵～」。",
            "鼓勵孩子跟著發出相同的聲音。",
            "慢慢加入動物的動作，例如學小狗爬行、學小鳥飛。",
            "換孩子發出聲音或做出動作，讓家長模仿。",
            "可以搭配動物繪本，看圖學叫聲。"
        ],
        benefits: [
            "促進語言發展和發音練習。",
            "訓練聽覺分辨與模仿能力。",
            "增進親子間的互動與樂趣。"
        ],
        extensions: [
            "加入交通工具的聲音，例如火車、汽車。",
            "將不同的叫聲變成一首「動物交響樂」。"
        ],
        likes_count: 60,
        favorites_count: 25,
        completed_count: 15,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_38",
        title: "麵團捏捏樂：精細動作練習",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["art", "sensory"],
        cost_min: 30,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 20,
        summary: "利用黏土或自製麵團，讓孩子搓、揉、壓，訓練手部小肌肉和創造力。",
        hero_image_url: "/images/games/2_3_38.jpg",
        tags: ["精細動作", "感覺統合", "創作"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "黏土或自製彩色麵團",
            "壓模工具、小刀（塑膠製）",
            "工作墊或餐墊"
        ],
        steps: [
            "為孩子準備幾種顏色的黏土。",
            "家長示範捏成簡單的形狀：圓形、長條形、扁形。",
            "讓孩子自由搓、揉、拍打麵團。",
            "使用壓模工具壓出星星、月亮等形狀。",
            "引導孩子嘗試捏出生活中的物品，例如香蕉、餅乾。"
        ],
        benefits: [
            "強化手掌、手指的力量與協調性。",
            "透過觸覺刺激，幫助感官統合。",
            "發展想像力和形狀認知。"
        ],
        extensions: [
            "將麵團加上香料（如肉桂），增加嗅覺的感官體驗。",
            "捏出動物後，進行「動物園」角色扮演遊戲。"
        ],
        likes_count: 70,
        favorites_count: 30,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_39",
        title: "小廚師：水果串串樂",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["cooking", "logic"],
        cost_min: 100,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 15,
        summary: "在安全前提下，讓孩子將切好的水果串在竹籤或吸管上，練習手眼協調和簡單的序列概念。",
        hero_image_url: "/images/games/2_3_39.jpg",
        tags: ["精細動作", "烹飪啟蒙", "序列概念"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "數種孩子喜歡的水果（如香蕉、葡萄、草莓），已切成塊狀",
            "鈍頭竹籤或粗吸管",
            "餐盤"
        ],
        steps: [
            "家長示範如何將水果塊插進竹籤或吸管。",
            "讓孩子自己嘗試串水果。",
            "引導孩子嘗試「紅、黃、紅、黃」或「大、小、大、小」的簡單序列串法。",
            "串好後一起享用美味的水果串。",
            "過程中可教導孩子認識水果的名稱、顏色和味道。"
        ],
        benefits: [
            "訓練手眼協調能力。",
            "初步了解圖案與序列的概念。",
            "增進孩子對健康食物的興趣。"
        ],
        extensions: [
            "加入棉花糖或小餅乾，創造更多變化。",
            "用不同顏色的水果串出「彩虹」串。"
        ],
        likes_count: 50,
        favorites_count: 22,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_40",
        title: "寶寶足球：踢衛生紙筒",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sports", "logic"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "用輕巧的衛生紙筒代替足球，讓孩子在室內練習踢球，發展腿部大肌肉和方向控制。",
        hero_image_url: "/images/games/2_3_40.jpg",
        tags: ["大肌肉", "協調性", "目標導向"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "用完的衛生紙筒或空塑膠瓶 3–5 個",
            "一個小皮球或軟布球",
            "兩本書或兩件衣服當作球門"
        ],
        steps: [
            "將衛生紙筒排成一列或三角形當作目標物。",
            "劃定一個起點，讓孩子站在起點。",
            "家長示範如何用腳輕輕踢球，將目標物踢倒。",
            "讓孩子嘗試用腳踢球。",
            "踢完後一起將倒下的目標物扶正。",
            "進階：設定球門，練習將球踢進球門。"
        ],
        benefits: [
            "增進腿部大肌肉的力量與控制。",
            "訓練眼睛與腳部的協調性。",
            "學習目標導向的遊戲樂趣。"
        ],
        extensions: [
            "用不同大小的球或目標物，感受踢擊難度的變化。",
            "用膠帶在地板上貼出彎曲的「路線」，讓孩子練習沿著路線踢球。"
        ],
        likes_count: 48,
        favorites_count: 18,
        completed_count: 9,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_41",
        title: "聽聲辨位：小鈴鐺在哪裡？",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sensory", "logic"],
        cost_min: 20,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 10,
        summary: "利用小鈴鐺或會發出聲音的玩具，藏在布後或手中，讓孩子用聽覺判斷位置。",
        hero_image_url: "/images/games/2_3_41.jpg",
        tags: ["聽覺訓練", "空間感", "專注力"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "小鈴鐺、響板或任何小巧會發出聲音的玩具",
            "一條小毯子或布"
        ],
        steps: [
            "讓孩子先看見鈴鐺。",
            "用布將鈴鐺蓋住，或將鈴鐺藏在左右任一隻手中。",
            "輕輕搖晃鈴鐺發出聲音。",
            "問孩子：「鈴鐺在哪裡呢？」鼓勵孩子指出聲音的來源。",
            "換孩子藏鈴鐺，讓家長來猜。"
        ],
        benefits: [
            "訓練聽覺的專注力與分辨能力。",
            "幫助建立空間的概念（左/右、上/下）。",
            "發展推理與觀察能力。"
        ],
        extensions: [
            "使用不同音量、音高的聲音，讓孩子感受聲音的變化。",
            "將鈴鐺藏在房間的不同角落，變成小小的尋寶遊戲。"
        ],
        likes_count: 35,
        favorites_count: 10,
        completed_count: 5,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_10",
        title: "創意：紙盤動物面具",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["art", "creative"],
        cost_min: 50,
        cost_max: 150,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 20,
        summary: "利用紙盤為基底，加上色紙、毛線等材料，一起製作可愛的動物面具。",
        hero_image_url: "/images/games/2_3_10.jpg",
        tags: ["美術創作", "想像力", "角色扮演"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "一次性紙盤 2–3 個",
            "彩色筆或蠟筆",
            "剪刀（家長使用）",
            "膠水或雙面膠",
            "色紙、毛線、鈕扣等裝飾物"
        ],
        steps: [
            "家長先在紙盤上剪出兩個眼睛的洞。",
            "和孩子討論要做什麼動物，例如小貓、小狗、小熊。",
            "引導孩子用彩色筆為紙盤塗色。",
            "協助孩子剪下或撕下耳朵、鼻子等形狀，用膠水貼上。",
            "用毛線當作鬍鬚或頭髮。",
            "完成後戴上面具，模仿動物叫聲與動作。"
        ],
        benefits: [
            "訓練色彩搭配與造型能力。",
            "促進想像力與角色扮演的發展。",
            "練習貼、塗色的精細動作。"
        ],
        extensions: [
            "用冰棒棍當作把手，變成手持面具。",
            "舉辦一個小小的動物面具派對。"
        ],
        likes_count: 52,
        favorites_count: 20,
        completed_count: 14,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_11",
        title: "敲敲打打：即興鍋碗瓢盆樂隊",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["music", "sensory"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用家中安全的鍋碗瓢盆當作樂器，搭配湯匙或筷子，讓孩子隨意敲打，感受節奏與音色的變化。",
        hero_image_url: "/images/games/2_3_11.jpg",
        tags: ["音樂啟蒙", "節奏感", "聽覺探索"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "不同材質的鍋子、塑膠碗、鐵碗等（確保安全）",
            "木製湯匙或飯匙",
            "地墊或舊毛巾（降低音量）"
        ],
        steps: [
            "將不同的鍋碗瓢盆倒扣在地墊上。",
            "家長先示範用湯匙輕輕敲打，發出聲音。",
            "引導孩子敲打不同的「樂器」，感受聲音高低與材質的關係。",
            "家長用口說出簡單的節奏（例如：一、二、停！），讓孩子跟著敲擊。",
            "一起合奏一首即興的「鍋碗交響曲」。"
        ],
        benefits: [
            "培養初步的節奏感與音色分辨能力。",
            "滿足孩子敲打探索的慾望。",
            "訓練手部動作的控制與協調。"
        ],
        extensions: [
            "在鍋碗中放入少量水，敲打後聽聽看水聲的變化。",
            "用不同的敲擊工具（如筷子、刷子）試試看音色的差異。"
        ],
        likes_count: 65,
        favorites_count: 28,
        completed_count: 18,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_12",
        title: "海洋世界積木澡盆",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sensory", "creative"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 20,
        summary: "在澡盆中放水，加入玩具動物或積木，讓孩子在水中探索，創造屬於自己的海洋世界。",
        hero_image_url: "/images/games/2_3_12.jpg",
        tags: ["水感官", "自由探索", "想像力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "小澡盆或任何防水容器",
            "水",
            "小塑膠動物、船、積木或水杯",
            "浴巾"
        ],
        steps: [
            "在容器中放入適量的溫水。",
            "將玩具放入水中，讓孩子自己去撈、去玩。",
            "引導孩子用水杯倒水、攪拌水，感受水的流動。",
            "可以加入一些肥皂泡泡，變成泡泡海洋。",
            "家長在旁可以講述海洋動物的故事。"
        ],
        benefits: [
            "提供豐富的觸覺感官經驗。",
            "促進想像力和敘事能力。",
            "練習舀、倒水的精細動作。"
        ],
        extensions: [
            "加入藍色食用色素，讓水變成真正的「海洋」。",
            "用濾網或有洞的玩具，讓孩子練習過濾水的動作。"
        ],
        likes_count: 58,
        favorites_count: 24,
        completed_count: 16,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_13",
        title: "黏貼遊戲：幫圖畫穿衣服",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["art", "fine_motor"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用貼紙、色紙、毛線等，讓孩子練習撕、貼的動作，完成一幅立體的畫作。",
        hero_image_url: "/images/games/2_3_13.jpg",
        tags: ["精細動作", "撕貼", "藝術啟蒙"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "圖畫紙",
            "各種形狀、大小的貼紙",
            "色紙（讓孩子練習撕）",
            "膠水或口紅膠"
        ],
        steps: [
            "家長先在紙上畫出一個簡單的圖案，例如一棵樹、一個人形。",
            "鼓勵孩子用手將色紙撕成小塊。",
            "示範塗膠水和貼貼紙的動作。",
            "讓孩子自由地將撕下的色紙和貼紙貼在圖案上，幫它「穿上衣服」。",
            "完成後一起欣賞這幅有紋理的畫作。"
        ],
        benefits: [
            "訓練手指抓握、撕紙的精細動作。",
            "提升色彩搭配的認知。",
            "培養空間規劃與創作能力。"
        ],
        extensions: [
            "用有紋路的材質（如絨布、砂紙）增加觸覺體驗。",
            "讓孩子嘗試用手指頭沾顏料蓋印花。"
        ],
        likes_count: 40,
        favorites_count: 15,
        completed_count: 8,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_14",
        title: "跳躍格子：大肌肉與數字啟蒙",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sports", "language"],
        cost_min: 0,
        cost_max: 10,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "用膠帶在地板上貼出幾個格子，寫上數字或顏色，讓孩子邊跳邊學習基礎認知。",
        hero_image_url: "/images/games/2_3_14.jpg",
        tags: ["大肌肉", "數字認知", "顏色認知"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "紙膠帶或彩色膠帶",
            "麥克筆"
        ],
        steps: [
            "用膠帶在地板上貼出 4–6 個大小適中的正方形格子。",
            "在每個格子裡寫上 1 到 6 的數字，或貼上不同的色紙。",
            "家長先示範單腳跳、雙腳跳的動作。",
            "喊出一個數字或顏色，讓孩子跳到對應的格子上。",
            "可以變成「大巨人走路」或「小兔子跳」等不同角色的移動方式。"
        ],
        benefits: [
            "訓練跳躍、平衡等大肌肉動作。",
            "將身體動作與抽象的數字、顏色連結。",
            "提升聽從指令的能力。"
        ],
        extensions: [
            "將數字格子改成形狀或字母。",
            "變成親子接力賽，兩人一起從起點跳到終點。"
        ],
        likes_count: 53,
        favorites_count: 21,
        completed_count: 11,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_15",
        title: "自製小書：我的家人",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["language", "creative"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 20,
        summary: "利用照片、圖畫紙和膠水，和孩子一起製作一本關於家人的小書，練習口語表達和親子依附。",
        hero_image_url: "/images/games/2_3_15.jpg",
        tags: ["口語表達", "親子關係", "創作"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "圖畫紙或空白筆記本",
            "家人照片數張",
            "膠水、彩色筆"
        ],
        steps: [
            "家長先將紙張對折裝訂成一本小書。",
            "與孩子討論家人有哪些成員。",
            "將照片貼在每一頁，並在下方寫上名字（如：爸爸、媽媽、我）。",
            "引導孩子用彩色筆為每一頁畫上簡單的裝飾。",
            "完成後，和孩子一起翻閱小書，並請他指認和說出每一位家人的名字。"
        ],
        benefits: [
            "豐富詞彙量，練習指認與口語表達。",
            "加深孩子對家庭成員的認知與情感連結。",
            "體驗動手製作書本的成就感。"
        ],
        extensions: [
            "將主題改為「我最喜歡的動物」或「我最喜歡的食物」。",
            "讓孩子嘗試在空白處畫出家人的肖像。",
        ],
        likes_count: 49,
        favorites_count: 17,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    // 2-3 games 16-33 (更多主題補充)
    {
        id: "game_2_3_16",
        title: "自製彩虹飯團",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["cooking", "sensory"],
        cost_min: 100,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 20,
        summary: "利用天然色素（如紅蘿蔔、菠菜、紫高麗菜汁）將米飯染色，讓孩子捏出不同顏色的飯團，訓練手部觸覺和創造力。",
        hero_image_url: "/images/games/2_3_16.jpg",
        tags: ["觸覺", "烹飪", "顏色認知"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "煮好的白飯",
            "天然蔬菜汁（紅、黃、綠色）",
            "保鮮膜或塑膠手套"
        ],
        steps: [
            "將米飯分成幾份，用少量蔬菜汁拌勻染色。",
            "讓孩子戴上塑膠手套（或用保鮮膜），感受米飯的溫暖和黏性。",
            "引導孩子將米飯捏成圓形、三角形或任何喜歡的形狀。",
            "將不同顏色的飯團排列起來，創造彩虹飯團。",
        ],
        benefits: [
            "提供溫和的觸覺感官經驗。",
            "訓練手部揉捏的精細動作。",
            "認識食物的天然色彩。"
        ],
        extensions: [
            "加入海苔、肉鬆、芝麻等，增加飯團的口味與層次。",
            "用飯團排出簡單的字母或數字。"
        ],
        likes_count: 45,
        favorites_count: 18,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_17",
        title: "毛巾體操：我是超人",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sports", "music"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 10,
        summary: "利用一條大浴巾，進行拉、撐、甩、繞等動作，搭配兒歌或音樂，訓練大肌肉和身體協調。",
        hero_image_url: "/images/games/2_3_17.jpg",
        tags: ["大肌肉", "協調性", "親子互動"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "一條大浴巾或毛毯",
            "輕快的兒歌或音樂"
        ],
        steps: [
            "家長與孩子各抓住毛巾的一端，進行「拔河」遊戲。",
            "將毛巾舉高，讓孩子鑽過去。",
            "將毛巾當作超人的披風，讓孩子穿著它在原地奔跑或跳躍。",
            "家長抓住毛巾兩端，輕輕地左右晃動，讓孩子坐在毛巾上享受搖晃的感覺。",
        ],
        benefits: [
            "訓練手臂、核心和腿部的大肌肉群。",
            "增進親子間的合作與信任感。",
            "提升身體協調與平衡能力。"
        ],
        extensions: [
            "用毛巾當作「河流」，讓孩子練習跨越或跳過。",
            "將毛巾當作「床」，讓小玩偶睡覺，進行角色扮演。"
        ],
        likes_count: 40,
        favorites_count: 15,
        completed_count: 9,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_18",
        title: "形狀拼貼：幾何動物園",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["art", "logic"],
        cost_min: 20,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "利用預先剪好的各種幾何圖形，讓孩子拼貼出動物、車子等複雜圖案，學習形狀認知和創造力。",
        hero_image_url: "/images/games/2_3_18.jpg",
        tags: ["形狀認知", "邏輯", "美術"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "彩色圖畫紙或色紙（剪成圓形、三角形、方形等）",
            "大張底紙",
            "膠水"
        ],
        steps: [
            "家長先剪好各種幾何形狀。",
            "先示範用幾個形狀拼出簡單的圖案（如用三角形拼成山）。",
            "讓孩子自由選擇形狀，引導他拼出動物或建築。",
            "可以讓孩子說出他拼出的形狀名稱和顏色。",
        ],
        benefits: [
            "認識基礎幾何形狀。",
            "訓練視覺空間組織能力。",
            "提升創造力與邏輯思考。"
        ],
        extensions: [
            "將遊戲變成「形狀記憶配對」，讓孩子記住圖案所需的形狀。",
            "用不同材質的幾何形狀（如布料、木片）增加觸覺感官。"
        ],
        likes_count: 42,
        favorites_count: 16,
        completed_count: 11,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_19",
        title: "積木疊高高：數數挑戰",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["logic", "fine_motor"],
        cost_min: 0,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "利用積木或杯子，讓孩子嘗試疊高，並在疊的過程中數數，訓練手眼協調和數字概念。",
        hero_image_url: "/images/games/2_3_19.jpg",
        tags: ["數數", "邏輯", "精細動作"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "積木、塑膠杯或任何可疊高的物品 10–20 個",
        ],
        steps: [
            "家長先示範慢慢地疊積木，並數出「一、二、三」。",
            "讓孩子自己嘗試將積木一個一個往上疊。",
            "每疊一個，家長就引導孩子數一次數字。",
            "當積木倒塌時，一起大笑，再重新開始。",
            "挑戰：看誰能疊得比自己還要高。"
        ],
        benefits: [
            "訓練手部穩定度與精細動作。",
            "學習基礎的數數與量詞概念。",
            "建立平衡與空間概念。"
        ],
        extensions: [
            "用不同大小的積木，讓孩子思考如何平衡。",
            "將積木當作「城市」，進行角色扮演遊戲。"
        ],
        likes_count: 50,
        favorites_count: 20,
        completed_count: 13,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_20",
        title: "影子魔術師：光影遊戲",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["science", "creative"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "利用手電筒和牆壁，讓孩子用手做出動物的影子，認識光與影的簡單科學原理。",
        hero_image_url: "/images/games/2_3_20.jpg",
        tags: ["科學啟蒙", "光影", "想像力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "手電筒",
            "一面空白的牆壁",
            "小玩偶或剪紙圖案（可選）"
        ],
        steps: [
            "將房間燈光調暗，打開手電筒照射牆壁。",
            "家長先示範用手做出簡單的影子形狀，例如小狗、鳥。",
            "讓孩子嘗試用手靠近或遠離光源，觀察影子大小的變化。",
            "可以將小玩偶放在光源前，讓影子投射在牆上。",
            "一起講述一個影子小故事。"
        ],
        benefits: [
            "初步認識光線與影子之間的關係。",
            "訓練手部協調與形狀塑造能力。",
            "激發想像力與情境創造。"
        ],
        extensions: [
            "用不同顏色的透明紙片蓋住手電筒，觀察影子的顏色變化。",
            "在戶外找找太陽光下的影子，感受光源的不同。"
        ],
        likes_count: 38,
        favorites_count: 13,
        completed_count: 7,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_21",
        title: "顏色配對：積木找家",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["logic", "sensory"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "用不同顏色的紙張在地板上設置「家」，讓孩子將對應顏色的積木或玩具放回家中。",
        hero_image_url: "/images/games/2_3_21.jpg",
        tags: ["顏色認知", "配對", "邏輯"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "彩色紙張或色紙 4–6 種顏色",
            "對應顏色的積木或小玩具數個"
        ],
        steps: [
            "將彩色紙張分散鋪在地板上。",
            "將積木或玩具放在另一個容器中。",
            "家長先示範將紅色的積木放進紅色的紙張上，並說出「紅色積木回家囉」。",
            "請孩子將其他顏色的積木或玩具，一一配對放回對應顏色的紙張上。",
            "完成後，家長可以隨意喊出顏色，讓孩子快速找出積木。"
        ],
        benefits: [
            "訓練顏色辨識與配對邏輯。",
            "提升專注力與觀察力。",
            "練習拿取與放置的精細動作。"
        ],
        extensions: [
            "將彩色紙張貼在不同高度的牆上，變成站著進行的遊戲。",
            "增加更多顏色和不同深淺的顏色，提升辨識難度。"
        ],
        likes_count: 47,
        favorites_count: 19,
        completed_count: 12,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_22",
        title: "情緒臉譜模仿",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["language", "creative"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 10,
        summary: "家長做出「開心」、「生氣」、「難過」等簡單的情緒表情，讓孩子模仿並說出情緒名稱，練習情緒認知與表達。",
        hero_image_url: "/images/games/2_3_22.jpg",
        tags: ["情緒認知", "語言表達", "角色扮演"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "鏡子（可選）",
            "情緒圖卡（可選）"
        ],
        steps: [
            "家長先用誇張的表情和聲音說出「我好開心啊！」。",
            "鼓勵孩子跟著做出一樣開心的表情。",
            "慢慢加入其他情緒：生氣（皺眉頭）、難過（撇嘴巴）。",
            "引導孩子說出情緒的名稱。",
            "可以讓孩子站在鏡子前，觀察自己的表情變化。"
        ],
        benefits: [
            "學習基礎的情緒表達與詞彙。",
            "增進孩子對自己與他人情緒的理解。",
            "訓練臉部肌肉的控制。"
        ],
        extensions: [
            "將情緒與情境結合：例如「跌倒了，所以難過」。",
            "用黏土或畫畫來呈現不同的情緒臉譜。"
        ],
        likes_count: 36,
        favorites_count: 11,
        completed_count: 6,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_23",
        title: "聽覺：聲音瓶配對",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sensory", "logic"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 15,
        summary: "將相同的內容物放入兩個不透明的小瓶子中，讓孩子搖晃瓶子，用聽覺找出聲音相同的配對。",
        hero_image_url: "/images/games/2_3_23.jpg",
        tags: ["聽覺訓練", "配對", "專注力"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "不透明小塑膠瓶或罐子 6 個（3 組）",
            "米、豆子、鈕扣、沙子等發聲材料",
            "強力膠或封箱膠帶（確保瓶蓋不會打開）"
        ],
        steps: [
            "將米、豆子、鈕扣等內容物，每種材料各裝入兩個瓶子中，並將瓶蓋密封。",
            "將瓶子打亂，放在桌上。",
            "家長先示範搖晃一個瓶子，聽聽看聲音。",
            "讓孩子搖晃其他瓶子，試著找出聲音完全一樣的那一組。",
            "配對成功後可以一起打開瓶子，看看裡面是什麼材料。"
        ],
        benefits: [
            "訓練聽覺記憶與分辨能力。",
            "提升專注力與耐心。",
            "學習配對與分類的邏輯。"
        ],
        extensions: [
            "增加更多組不同的材料，增加難度。",
            "用不同大小的瓶子裝同樣的材料，讓孩子感受音量差異。"
        ],
        likes_count: 44,
        favorites_count: 17,
        completed_count: 9,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_24",
        title: "魔法布偶躲貓貓",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["language", "creative"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 10,
        summary: "利用一塊布和一個手偶，進行簡單的躲貓貓遊戲，同時加入對話，刺激語言發展。",
        hero_image_url: "/images/games/2_3_24.jpg",
        tags: ["語言", "想像力", "親子互動"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "一塊輕薄的布或毛巾",
            "孩子喜歡的手偶或玩偶"
        ],
        steps: [
            "家長將布蓋在手偶上，讓手偶說話：「我在這裡，你看不到我！」。",
            "鼓勵孩子將布拿開，找到手偶。",
            "換孩子用布蓋住手偶，並問家長：「猜猜我在哪裡？」。",
            "可以將布偶藏在身體的不同部位（例如頭上、背後），教導孩子身體部位名稱。",
        ],
        benefits: [
            "提升語言理解與表達能力。",
            "訓練物體恆存概念。",
            "增進幽默感與親子連結。"
        ],
        extensions: [
            "讓布偶躲在家具後面，變成尋寶遊戲。",
            "為布偶設計一段簡單的故事情節，進行角色扮演。"
        ],
        likes_count: 32,
        favorites_count: 9,
        completed_count: 5,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_25",
        title: "積木滑梯：重力與斜坡",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["science", "logic"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "利用紙板、積木或書本搭建一個斜坡，讓孩子觀察小球或玩具從高處滑下的速度變化，認識重力與斜坡。",
        hero_image_url: "/images/games/2_3_25.jpg",
        tags: ["科學", "重力", "邏輯"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "光滑的紙板或塑膠板",
            "積木或書本（當作支撐）",
            "小球或小車"
        ],
        steps: [
            "用積木或書本墊高紙板的一端，做出一個斜坡。",
            "讓孩子將小球或小車放在斜坡頂端，放手觀察它滑下來的樣子。",
            "改變斜坡的高度（用更多書本墊高），讓孩子感受斜坡越陡，速度越快的現象。",
            "嘗試用不同重量的物品滑下，觀察速度的差異。",
        ],
        benefits: [
            "初步了解重力與斜坡的科學原理。",
            "訓練觀察力與預測能力。",
            "學習基礎的建構與平衡邏輯。"
        ],
        extensions: [
            "將斜坡彎曲成不同的形狀，觀察行進路線的變化。",
            "用不同材質的紙板或布料做斜坡，感受摩擦力的差異。"
        ],
        likes_count: 49,
        favorites_count: 20,
        completed_count: 11,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_26",
        title: "自製沙鈴：節奏遊戲",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["music", "sensory"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 10,
        summary: "利用寶特瓶和各種乾燥的穀物，製作不同音色的沙鈴，訓練節奏感和聽覺分辨。",
        hero_image_url: "/images/games/2_3_26.jpg",
        tags: ["聽覺", "音樂", "節奏"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "透明小寶特瓶 3 個",
            "紅豆、綠豆、米（或沙子）",
            "彩色膠帶",
            "強力膠（封蓋用）"
        ],
        steps: [
            "將不同的材料（紅豆、綠豆、米）分別裝入寶特瓶中。",
            "用強力膠將瓶蓋密封，確保孩子無法打開。",
            "用彩色膠帶裝飾瓶子。",
            "家長先搖晃一個沙鈴，讓孩子聆聽聲音。",
            "播放音樂，讓孩子跟著音樂的節奏搖晃沙鈴，創造自己的樂隊。",
        ],
        benefits: [
            "訓練聽覺分辨不同音色的能力。",
            "培養基礎的節奏感。",
            "提供觸覺和聽覺的感官刺激。"
        ],
        extensions: [
            "將沙鈴藏起來，讓孩子用聽覺找出不同音色的沙鈴。",
            "用不同速度搖晃沙鈴，感受聲音的快慢變化。"
        ],
        likes_count: 45,
        favorites_count: 18,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_27",
        title: "枕頭山大探險",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sports", "sensory"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用家中軟墊、枕頭、棉被等堆疊成一座「山丘」或「迷宮」，讓孩子練習攀爬、翻滾，訓練本體覺與平衡感。",
        hero_image_url: "/images/games/2_3_27.jpg",
        tags: ["本體覺", "大肌肉", "平衡感"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "家中的枕頭、棉被、瑜伽墊、抱枕等",
            "寬敞安全的空間"
        ],
        steps: [
            "在地上鋪上軟墊或地毯，確保安全。",
            "將枕頭和棉被堆疊成一個高度適中的山丘。",
            "家長先示範慢慢地爬上、爬下山丘，或在上面翻滾。",
            "讓孩子自己探索這個軟綿綿的空間，練習不同的移動方式（爬、走、跳）。",
            "家長務必全程在旁保護，確保孩子不會跌落受傷。"
        ],
        benefits: [
            "提供豐富的觸覺和本體覺刺激。",
            "促進大肌肉發展和身體協調。",
            "在安全的環境中滿足探索慾望。"
        ],
        extensions: [
            "將枕頭排成一條直線，變成「獨木橋」，練習平衡。",
            "將小玩偶藏在枕頭山中，讓孩子去尋找寶藏。"
        ],
        likes_count: 62,
        favorites_count: 25,
        completed_count: 17,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_28",
        title: "小小醫生角色扮演",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["creative", "language"],
        cost_min: 0,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用簡單的道具（如玩具聽診器、OK繃），讓孩子扮演醫生或病人，練習對話和理解身體部位。",
        hero_image_url: "/images/games/2_3_28.jpg",
        tags: ["角色扮演", "語言", "想像力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "玩具醫生組（或自製聽診器）",
            "OK繃",
            "布偶或家人"
        ],
        steps: [
            "家長先扮演病人，說出身體哪裡不舒服（例如：頭痛、腳痛）。",
            "引導孩子扮演醫生，使用道具為病人看病。",
            "家長可以問醫生：「我需要吃藥嗎？」，讓孩子練習簡單的回覆。",
            "換孩子扮演病人，讓家長來照顧他。",
            "過程中可教導孩子身體部位的名稱。"
        ],
        benefits: [
            "豐富情境詞彙和對話能力。",
            "幫助孩子熟悉看醫生的過程，減少恐懼。",
            "激發想像力與同理心。"
        ],
        extensions: [
            "將遊戲延伸至「動物醫院」，照顧布偶寵物。",
            "用圖畫紙畫出人體，讓孩子貼上 OK 繃。"
        ],
        likes_count: 48,
        favorites_count: 20,
        completed_count: 11,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_29",
        title: "視覺：找找相同圖案",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["logic", "language"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 10,
        summary: "準備兩組相同的圖卡或實物，讓孩子找出一樣的配對，訓練視覺辨識和基礎邏輯。",
        hero_image_url: "/images/games/2_3_29.jpg",
        tags: ["視覺辨識", "配對", "邏輯"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "兩組相同的圖案卡片（例如蘋果、香蕉、球） 3–5 對",
            "或兩組相同的實物玩具"
        ],
        steps: [
            "將其中一組圖卡排成一列。",
            "讓孩子從另一組圖卡中，選出與排列圖卡一樣的圖案。",
            "將配對成功的圖卡放在一起，並說出圖案的名稱。",
            "進階：將圖卡覆蓋，變成翻牌記憶配對遊戲（只用 2–3 對）。"
        ],
        benefits: [
            "訓練視覺專注力與分辨能力。",
            "提升基礎的配對與分類邏輯。",
            "豐富詞彙量。"
        ],
        extensions: [
            "增加圖案的數量和複雜度。",
            "將遊戲變成「找找與圖卡一樣的家中物品」。"
        ],
        likes_count: 40,
        favorites_count: 14,
        completed_count: 7,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_30",
        title: "迷你籃球：丟入洗衣籃",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["sports", "logic"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 10,
        summary: "利用洗衣籃或紙箱當作籃框，讓孩子投擲軟球或捲好的襪子，練習投擲與協調性。",
        hero_image_url: "/images/games/2_3_30.jpg",
        tags: ["大肌肉", "手眼協調", "目標導向"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "洗衣籃或紙箱",
            "軟球、捲好的襪子或報紙團"
        ],
        steps: [
            "將洗衣籃放在地上或矮桌上當作籃框。",
            "設定一個投擲線。",
            "家長先示範投擲的動作。",
            "讓孩子嘗試從投擲線將球丟進籃框。",
            "每投進一次，給予大大的鼓勵，並一起數數投進了幾顆。",
        ],
        benefits: [
            "訓練手臂與身體的投擲動作。",
            "增進手眼協調能力。",
            "學習基礎的數數與目標導向。"
        ],
        extensions: [
            "改變投擲距離或籃框高度，增加難度。",
            "用不同大小的籃框，感受投擲的差異。"
        ],
        likes_count: 55,
        favorites_count: 22,
        completed_count: 15,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_31",
        title: "廚房：撕撕貼貼海苔飯",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["cooking", "art"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "讓孩子將海苔撕成小塊，自由地貼在白飯上，創造出獨一無二的「海苔畫」。",
        hero_image_url: "/images/games/2_3_31.jpg",
        tags: ["精細動作", "烹飪", "創作"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "煮好的白飯或飯團",
            "原味海苔片",
            "小碟子"
        ],
        steps: [
            "準備一份飯團或一碗白飯。",
            "家長示範如何將海苔片撕成不同大小的塊狀。",
            "讓孩子自由地將海苔片「貼」在飯上，創造圖案或造型。",
            "可以引導孩子用海苔排出簡單的笑臉或字母。",
            "完成後一起享用這份特別的飯團。"
        ],
        benefits: [
            "訓練手指撕、捏的精細動作。",
            "提供觸覺和味覺的感官刺激。",
            "提升孩子對食物的興趣和創造力。"
        ],
        extensions: [
            "加入乳酪、火腿等，讓孩子嘗試用不同材料進行「拼貼」。",
            "用飯團當作基底，用海苔裝飾出動物造型。"
        ],
        likes_count: 38,
        favorites_count: 15,
        completed_count: 9,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_32",
        title: "創意：紙箱小房屋",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["creative", "art"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 30,
        summary: "利用一個大紙箱，和孩子一起布置成一個可以躲藏、玩耍的小空間，並在外面塗色裝飾。",
        hero_image_url: "/images/games/2_3_32.jpg",
        tags: ["空間感", "創作", "想像力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "一個夠大的紙箱",
            "美工刀（家長使用）",
            "彩色筆、蠟筆或水彩顏料",
            "膠帶"
        ],
        steps: [
            "家長先用美工刀將紙箱的開口固定或裁切，並挖出一個門和窗戶。",
            "引導孩子用彩色筆或顏料在紙箱外牆上畫圖、塗色。",
            "在紙箱內鋪上軟墊或小毯子，變成舒適的秘密基地。",
            "讓孩子帶喜歡的布偶或玩具進去玩。",
            "可以變成「小火車站」、「火箭發射台」等不同的主題。"
        ],
        benefits: [
            "促進創造力與想像力的發展。",
            "給予孩子一個專屬的私密空間。",
            "練習大肌肉的進出與空間概念。"
        ],
        extensions: [
            "在紙箱內外貼上夜光貼紙，變成「星空屋」。",
            "將兩個紙箱連在一起，創造更長的秘密通道。"
        ],
        likes_count: 58,
        favorites_count: 24,
        completed_count: 16,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_2_3_33",
        title: "簡單樂器：自製彈性吉他",
        age_bucket: "2-3",
        age_min: 2,
        age_max: 3,
        gender: "all",
        interests: ["music", "creative"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "利用鞋盒和橡皮筋，製作一個簡單的弦樂器，讓孩子撥弦發出聲音，感受不同的音高。",
        hero_image_url: "/images/games/2_3_33.jpg",
        tags: ["音樂", "發聲", "創作"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "一個鞋盒或空紙盒",
            "數條粗細不同的橡皮筋",
            "膠帶"
        ],
        steps: [
            "將橡皮筋套在鞋盒上，像吉他的弦一樣拉緊。",
            "家長示範用手指撥動橡皮筋，發出聲音。",
            "讓孩子嘗試撥動橡皮筋，感受不同粗細、鬆緊的橡皮筋發出的聲音差異。",
            "可以搭配簡單的兒歌，讓孩子撥弦伴奏。",
        ],
        benefits: [
            "訓練聽覺分辨不同音高的能力。",
            "培養音樂創造的興趣。",
            "訓練手指撥弦的精細動作。"
        ],
        extensions: [
            "在鞋盒內放入不同的東西（如小石頭），聽聽看音色的變化。",
            "用彩色筆裝飾吉他，變成獨特的樂器。"
        ],
        likes_count: 45,
        favorites_count: 18,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },

    // =====================
    // 3–4 歲：33 個遊戲 (3-4 歲著重於角色扮演、簡單規則、精細動作進階)
    // =====================
    {
        id: "game_3_4_11",
        title: "紙飛機競速：空氣動力學啟蒙",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["science", "sports"],
        cost_min: 0,
        cost_max: 10,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "一起摺出簡單的紙飛機，測試哪一種摺法飛得最遠，初步認識空氣動力學。",
        hero_image_url: "/images/games/3_4_11.jpg",
        tags: ["科學啟蒙", "大肌肉", "摺紙"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "A4 紙數張",
            "膠帶（可選）",
            "量尺（可選）"
        ],
        steps: [
            "家長示範一種簡單的紙飛機摺法。",
            "和孩子一起摺飛機，孩子主要負責對齊和壓平。",
            "在寬敞空間設定起飛線，讓孩子嘗試將飛機丟出。",
            "觀察飛機的飛行距離和軌跡。",
            "試著改變飛機的形狀（例如增加機翼的寬度），看飛行效果是否有差異。"
        ],
        benefits: [
            "練習基礎的摺紙精細動作。",
            "初步認識空氣與飛行的關係。",
            "訓練手臂投擲的大肌肉控制。"
        ],
        extensions: [
            "在飛機上塗色或裝飾，當作「專屬戰機」。",
            "進行親子紙飛機競速比賽。"
        ],
        likes_count: 58,
        favorites_count: 22,
        completed_count: 15,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_12",
        title: "小精靈記憶翻牌",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["boardgame", "logic"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "利用一組圖案相同的卡片，進行翻牌記憶配對遊戲，訓練短期記憶和專注力。",
        hero_image_url: "/images/games/3_4_12.jpg",
        tags: ["記憶力", "專注力", "邏輯推理"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "兩組相同的圖案卡片 8–12 對（例如：動物、水果）"
        ],
        steps: [
            "將所有卡片圖案朝下，排成整齊的矩形。",
            "由年紀小的孩子先開始，一次翻開兩張卡片。",
            "如果圖案相同，就將卡片收走，獲得一分，並可以再翻一次。",
            "如果圖案不同，就將卡片蓋回原處，換下一位玩家。",
            "遊戲結束時，數數誰獲得的卡片最多。"
        ],
        benefits: [
            "訓練短期記憶與視覺辨識能力。",
            "學習遵守遊戲規則與輪流等待。",
            "提升專注力與觀察力。"
        ],
        extensions: [
            "增加卡片數量，提升遊戲難度。",
            "加入聲音元素，變成「聽覺記憶配對」。"
        ],
        likes_count: 45,
        favorites_count: 18,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_13",
        title: "身體打擊樂：節奏模仿",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["music", "sports"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 10,
        summary: "利用拍手、拍腿、跺腳等身體動作，創造不同的節奏，讓孩子模仿，訓練節奏感與身體控制。",
        hero_image_url: "/images/games/3_4_13.jpg",
        tags: ["節奏感", "身體協調", "音樂"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "家長的身體",
            "輕快音樂（可選）"
        ],
        steps: [
            "家長先用拍手的方式創造一個簡單的節奏（例如：拍、拍、停）。",
            "讓孩子仔細聽，並跟著模仿相同的節奏。",
            "慢慢加入不同的動作：拍手、拍腿、跺腳、拍肚子。",
            "讓孩子自己創造節奏，由家長來模仿。",
            "搭配音樂，讓孩子用身體打出音樂的節奏。"
        ],
        benefits: [
            "培養基礎的節奏感與韻律感。",
            "訓練聽覺專注與身體控制。",
            "增進親子間的合作與默契。"
        ],
        extensions: [
            "將節奏變成一串指令，例如：拍手兩下、跺腳一下、轉一圈。",
            "用不同速度進行節奏模仿，感受快慢的差異。"
        ],
        likes_count: 50,
        favorites_count: 20,
        completed_count: 12,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_14",
        title: "自製泡泡水與吹泡泡",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["science", "sensory"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 20,
        summary: "一起用洗碗精、水和甘油（或糖）調配出泡泡水，觀察泡泡的生成與破裂，訓練口腔動作和感官。",
        hero_image_url: "/images/games/3_4_14.jpg",
        tags: ["科學實驗", "感官探索", "口腔動作"],
        flags: {
            requires_purchase: true,
            indoor_friendly: false,
            outdoor_friendly: true,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "洗碗精",
            "水",
            "甘油或糖（增加韌性）",
            "吹泡泡工具（或自製鐵絲環）"
        ],
        steps: [
            "按照比例（例如：1 份洗碗精、5 份水、0.5 份甘油）將材料混合均勻。",
            "家長先示範如何輕輕地吹氣，讓泡泡生成。",
            "讓孩子嘗試用工具吹泡泡，練習控制氣流和吹氣量。",
            "觀察泡泡在空中飛舞、反射光線的顏色變化。",
            "試著吹出大泡泡或一串小泡泡。"
        ],
        benefits: [
            "訓練口腔肌肉與氣流控制。",
            "觀察表面張力的科學現象。",
            "提供視覺與觸覺的感官刺激。"
        ],
        extensions: [
            "用不同形狀的吹泡泡工具，觀察泡泡形狀的差異（泡泡永遠是圓的）。",
            "在戶外用大繩子或呼拉圈，製作超大泡泡。"
        ],
        likes_count: 65,
        favorites_count: 28,
        completed_count: 18,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_15",
        title: "講故事：故事接龍大王",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["language", "creative"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 15,
        summary: "由家長開頭說一句話，讓孩子接著說下一句，一起創造一個充滿想像力的故事。",
        hero_image_url: "/images/games/3_4_15.jpg",
        tags: ["口語表達", "想像力", "敘事能力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "無"
        ],
        steps: [
            "家長先開頭：「從前有一隻小恐龍，牠今天早上想要去爬山。」",
            "邀請孩子接續：「但是小恐龍沒有穿鞋子。」",
            "家長繼續接：「所以牠決定先去鞋店買一雙紅色的雨鞋。」",
            "持續輪流接話，直到故事有個完整的結局。",
            "鼓勵孩子加入誇張或不合常理的情節，越有趣越好。"
        ],
        benefits: [
            "訓練口語表達與邏輯連貫性。",
            "激發想像力與情境創造。",
            "增進詞彙量和句子結構的運用。"
        ],
        extensions: [
            "先設定三個關鍵詞（例如：飛機、香蕉、魔術），要求故事必須包含這些詞彙。",
            "用畫筆將故事中的重要情節畫出來，變成圖文故事。"
        ],
        likes_count: 48,
        favorites_count: 19,
        completed_count: 11,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_16",
        title: "造型三明治：創意烹飪",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["cooking", "art"],
        cost_min: 150,
        cost_max: 300,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 20,
        summary: "利用吐司和各種餡料，搭配餅乾壓模，製作出動物、星星等造型三明治。",
        hero_image_url: "/images/games/3_4_16.jpg",
        tags: ["烹飪", "創作", "精細動作"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "吐司",
            "餡料（果醬、花生醬、乳酪片等）",
            "餅乾壓模（不同造型）"
        ],
        steps: [
            "讓孩子自己塗抹餡料在吐司上（練習塗抹的精細動作）。",
            "將兩片吐司蓋在一起。",
            "引導孩子將餅乾壓模放在吐司上，用力壓下，壓出造型。",
            "用剩下的邊角料，鼓勵孩子做出新的創意組合。",
            "完成後一起享用美味的造型三明治。"
        ],
        benefits: [
            "訓練手部塗抹、按壓的精細動作。",
            "激發對食物造型的創造力。",
            "增進孩子對食物的興趣。"
        ],
        extensions: [
            "用剪刀（安全剪刀）剪出簡單的直線或曲線造型。",
            "將造型三明治放入烤箱烤一下，變成脆皮小點心。"
        ],
        likes_count: 60,
        favorites_count: 24,
        completed_count: 17,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_17",
        title: "跨越毛線迷宮",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["sports", "logic"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 15,
        summary: "利用毛線或紙膠帶在走廊或房間內交叉貼出迷宮，讓孩子練習跨越、爬行、閃躲，訓練大肌肉與空間感。",
        hero_image_url: "/images/games/3_4_17.jpg",
        tags: ["大肌肉", "空間感", "協調性"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "一卷毛線或紙膠帶",
            "剪刀",
            "寬敞的走廊或房間"
        ],
        steps: [
            "將毛線或紙膠帶，以不同高度、角度固定在牆壁或家具之間。",
            "設定起點和終點。",
            "家長先示範如何從上方跨越、或從下方鑽過毛線而不碰到它。",
            "讓孩子嘗試穿越迷宮，引導他運用身體各部位來閃躲。",
            "進階：在身上貼一張紙，規定不能碰到任何一條毛線。"
        ],
        benefits: [
            "訓練身體的靈活性、平衡感與大肌肉控制。",
            "提升空間覺察能力。",
            "學習遵守規則與解決問題的邏輯。"
        ],
        extensions: [
            "將迷宮變成「雷射光束」，增加緊張感。",
            "將迷宮與尋寶遊戲結合，終點藏著小禮物。"
        ],
        likes_count: 70,
        favorites_count: 30,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_18",
        title: "棉花棒點點畫：藝術創作",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["art", "fine_motor"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用棉花棒代替畫筆，沾取顏料在紙上創作點狀畫，訓練手指的精細動作和控制力。",
        hero_image_url: "/images/games/3_4_18.jpg",
        tags: ["精細動作", "藝術", "色彩"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "棉花棒數支",
            "不同顏色的水彩或壓克力顏料",
            "圖畫紙",
            "顏料盤"
        ],
        steps: [
            "將顏料擠在顏料盤上。",
            "家長示範用棉花棒沾取少量顏料，在紙上輕輕點擊。",
            "讓孩子自由創作，可以引導他用不同顏色的點點來畫出圖案。",
            "可以先用鉛筆畫出輪廓，讓孩子在輪廓內點色。",
            "等作品乾燥後，感受點點構成的特殊紋理。"
        ],
        benefits: [
            "訓練手指的抓握與施力控制。",
            "提升色彩搭配與構圖能力。",
            "提供視覺和觸覺的感官刺激。"
        ],
        extensions: [
            "用不同大小的圓點貼紙，讓孩子練習對應貼點點。",
            "用牙刷代替棉花棒，沾顏料後用手指撥動，創造噴灑效果。"
        ],
        likes_count: 55,
        favorites_count: 23,
        completed_count: 14,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_19",
        title: "液體分層：彩虹水實驗",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["science", "logic"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "利用不同密度的液體（如蜂蜜、油、水）和食用色素，讓孩子嘗試將液體分層，觀察彩虹般的層次變化。",
        hero_image_url: "/images/games/3_4_19.jpg",
        tags: ["密度", "科學實驗", "觀察力"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "透明玻璃杯或塑膠杯",
            "蜂蜜、洗碗精、水、沙拉油（密度由高到低）",
            "食用色素",
            "滴管或小湯匙"
        ],
        steps: [
            "家長先將蜂蜜（最底層）輕輕倒入杯中。",
            "將洗碗精倒入第二層。",
            "將水滴入色素染色，再輕輕沿著杯壁倒入第三層。",
            "將油倒入最上層。",
            "讓孩子觀察液體層次分明的現象，並試著用滴管輕輕滴入其他顏色的水，看它會停在哪一層。",
            "向孩子解釋：重重的（密度大的）會沉下去，輕輕的（密度小的）會浮上來。"
        ],
        benefits: [
            "初步了解密度與分層的科學原理。",
            "訓練觀察力與操作的精細動作。",
            "滿足好奇心與探索慾望。"
        ],
        extensions: [
            "嘗試將小物件（如鈕扣、軟木塞）放入杯中，觀察它們會停在哪一層。",
            "用更多種液體來進行分層挑戰。"
        ],
        likes_count: 62,
        favorites_count: 25,
        completed_count: 16,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_20",
        title: "感覺統合：義大利麵尋寶",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["sensory", "fine_motor"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 20,
        summary: "將煮熟的義大利麵染色後，藏入小玩具，讓孩子用手摸索、抓取，進行豐富的觸覺遊戲。",
        hero_image_url: "/images/games/3_4_20.jpg",
        tags: ["觸覺", "感覺統合", "精細動作"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "high",
            need_freezer: false
        },
        materials: [
            "煮熟的義大利麵",
            "食用色素",
            "沙拉油（防止黏在一起）",
            "小玩具、鈕扣、積木等（當作寶藏）",
            "大托盤或塑膠箱"
        ],
        steps: [
            "將煮熟的義大利麵分成幾份，用食用色素染色，加入少量油拌勻。",
            "將義大利麵放入大托盤中，藏入各種小寶藏。",
            "讓孩子用手觸摸、抓握義大利麵，感受它滑溜、冰涼或黏糊的觸感。",
            "引導孩子在麵中摸索，找出藏起來的寶藏。",
            "過程中可描述麵條的觸感（滑溜溜、軟軟的）。"
        ],
        benefits: [
            "提供豐富的觸覺感官經驗，幫助感官統合。",
            "訓練手指抓取與抓握的精細動作。",
            "提升專注力與探索慾望。"
        ],
        extensions: [
            "用冰塊或溫水加入，改變義大利麵的溫度。",
            "將義大利麵放在不同的容器中，讓孩子練習舀、倒的動作。"
        ],
        likes_count: 75,
        favorites_count: 35,
        completed_count: 22,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_21",
        title: "小小建築師：棉花糖牙籤塔",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["logic", "creative"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 20,
        summary: "利用棉花糖和牙籤或義大利麵條，讓孩子嘗試搭建立體結構，學習穩定性、平衡與幾何概念。",
        hero_image_url: "/images/games/3_4_21.jpg",
        tags: ["結構", "邏輯", "精細動作"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "棉花糖數包（或軟糖、黏土）",
            "竹籤或生義大利麵條（鈍頭）",
            "餐盤"
        ],
        steps: [
            "家長先示範如何用竹籤將棉花糖連接起來，組成一個三角形或方形。",
            "引導孩子嘗試搭建更複雜的結構，例如金字塔或立方體。",
            "挑戰孩子：在桌上搭建一座能承受一個小玩具重量的「高塔」。",
            "在搭建過程中，討論「三角形最穩定」的幾何原理。",
        ],
        benefits: [
            "訓練空間感與三維結構的邏輯思考。",
            "練習穿刺與連接的精細動作。",
            "培養解決問題與團隊合作能力。"
        ],
        extensions: [
            "用不同大小的棉花糖，感受材料對結構穩定性的影響。",
            "將搭建的結構當作「火箭」或「城堡」，進行角色扮演。"
        ],
        likes_count: 60,
        favorites_count: 25,
        completed_count: 15,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_22",
        title: "舊衣改造：時尚變裝秀",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["creative", "art"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 20,
        summary: "利用家中不要的舊衣物、圍巾、襪子等，讓孩子自由搭配、穿搭，進行一場創意服裝秀。",
        hero_image_url: "/images/games/3_4_22.jpg",
        tags: ["想像力", "創意", "美感"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "家長的舊衣物、圍巾、帽子、首飾（安全無尖銳處）",
            "一個鏡子",
            "手機或相機（錄影）"
        ],
        steps: [
            "將所有舊衣物集中在一個大箱子或衣架上。",
            "家長先示範一套誇張的造型，鼓勵孩子嘗試。",
            "讓孩子自己選擇、搭配衣服，創造他心目中的超級英雄、公主或外星人。",
            "搭配音樂，在客廳走秀，擺出各種姿勢。",
            "引導孩子描述他穿搭的角色和故事。"
        ],
        benefits: [
            "激發無限的想像力和角色扮演能力。",
            "培養基礎的美感與色彩搭配概念。",
            "訓練穿脫衣服的自理能力。"
        ],
        extensions: [
            "用色紙或不織布為衣服加上裝飾。",
            "邀請朋友或家人一起參加變裝派對。"
        ],
        likes_count: 52,
        favorites_count: 21,
        completed_count: 13,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_23",
        title: "音樂：聽指令跳舞",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["music", "sports"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 10,
        summary: "播放音樂，讓孩子自由跳舞，當音樂停止時，家長喊出一個指令（例如：摸鼻子、單腳站立），訓練反應力與身體控制。",
        hero_image_url: "/images/games/3_4_23.jpg",
        tags: ["反應力", "大肌肉", "音樂律動"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "手機或音響",
            "輕快音樂"
        ],
        steps: [
            "播放音樂，鼓勵孩子隨意跳舞、擺動身體。",
            "音樂突然停止，家長大喊一個簡單的指令（例如：蹲下！）。",
            "孩子必須立即完成指令。",
            "指令可包含身體部位、數量、方向（例如：轉兩圈、往後退）。",
            "換孩子來控制音樂和喊指令。"
        ],
        benefits: [
            "訓練聽覺反應與快速應變能力。",
            "促進身體大肌肉與小肌肉的協調。",
            "增進孩子對音樂節奏的感受。"
        ],
        extensions: [
            "將指令與動物結合：例如：學小狗叫、學企鵝走路。",
            "用不同風格的音樂，讓孩子嘗試不同的舞步。"
        ],
        likes_count: 65,
        favorites_count: 26,
        completed_count: 18,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_24",
        title: "水杯科學：沉浮實驗",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["science", "logic"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "準備各種家中常見的小物，讓孩子預測哪些會浮起來、哪些會沉下去，認識浮力概念。",
        hero_image_url: "/images/games/3_4_24.jpg",
        tags: ["科學", "浮力", "預測"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "一個裝滿水的大透明容器",
            "各種小物件：迴紋針、積木、軟木塞、石頭、葉子、塑膠玩具等",
            "記錄紙筆（可選）"
        ],
        steps: [
            "將所有小物件放在桌上，讓孩子觀察。",
            "家長拿起一個物件，例如迴紋針，問孩子：「你猜它會浮起來還是沉下去？」",
            "讓孩子將物件輕輕放入水中，觀察結果。",
            "一一測試所有物件，並討論為什麼有些浮起來、有些沉下去（輕重、材質的關係）。",
            "家長可以將結果記錄下來。"
        ],
        benefits: [
            "初步了解浮力與密度的概念。",
            "訓練觀察與預測的科學思考方式。",
            "滿足好奇心與探索慾望。"
        ],
        extensions: [
            "用黏土捏出不同的形狀，觀察形狀對浮力的影響。",
            "將水杯改成鹽水、糖水，觀察水的密度變化對浮力的影響。"
        ],
        likes_count: 56,
        favorites_count: 23,
        completed_count: 15,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_25",
        title: "詞彙分類：找找同類的朋友",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["language", "logic"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "準備多張圖卡，讓孩子將同類的物品（如食物類、動物類、交通工具類）放在一起，訓練詞彙與分類邏輯。",
        hero_image_url: "/images/games/3_4_25.jpg",
        tags: ["詞彙", "分類邏輯", "認知"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "數組圖卡或實物玩具（例如：蘋果、香蕉、狗、貓、汽車、火車）",
            "分類箱或分類墊 3–4 個"
        ],
        steps: [
            "設定好分類的主題（例如：食物類、動物類）。",
            "家長先示範將蘋果（食物）放進食物類箱子，說出：「蘋果是食物，回家囉！」",
            "讓孩子將其他圖卡或實物，依照主題放進正確的箱子。",
            "完成後一起檢查，並複誦每一類物品的名稱。",
        ],
        benefits: [
            "豐富詞彙量與對周遭事物的認知。",
            "訓練分類與歸納的邏輯思維。",
            "提升專注力與學習興趣。"
        ],
        extensions: [
            "將遊戲變成「找找家中同類物品」，例如：找找所有圓形的物品。",
            "將分類標準改為顏色或大小，增加複雜度。"
        ],
        likes_count: 47,
        favorites_count: 18,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_26",
        title: "自製彈珠台：紙箱大改造",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["creative", "logic"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 30,
        play_minutes: 15,
        summary: "利用紙箱、吸管和橡皮筋，一起製作一個可以玩彈珠或小球的彈珠台，訓練手眼協調和目標控制。",
        hero_image_url: "/images/games/3_4_26.jpg",
        tags: ["創作", "手眼協調", "邏輯"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "一個扁平的紙箱",
            "吸管、冰棒棍或積木（當作障礙物）",
            "彈珠或小球",
            "剪刀、膠帶"
        ],
        steps: [
            "家長先在紙箱底部挖幾個洞（當作得分區），並標上分數。",
            "讓孩子將吸管、冰棒棍等材料，用膠帶貼在紙箱底部，當作彈珠的障礙物。",
            "在底部設置一個彈射器（可用橡皮筋或夾子）。",
            "讓孩子嘗試用彈射器將彈珠射出，目標是射入得分區。",
            "一起計算得分，看誰的分數最高。"
        ],
        benefits: [
            "訓練手眼協調與力量控制。",
            "培養空間規劃與結構設計能力。",
            "學習基礎的數數與加法概念。"
        ],
        extensions: [
            "將彈珠台設計成不同的主題（如森林、太空）。",
            "用不同大小的球，感受彈射的差異。"
        ],
        likes_count: 68,
        favorites_count: 30,
        completed_count: 21,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_27",
        title: "藝術：吸管吹畫",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["art", "sensory"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "將稀釋的顏料滴在紙上，用吸管吹氣讓顏料擴散、流動，創造獨特的抽象畫，訓練口腔肌肉。",
        hero_image_url: "/images/games/3_4_27.jpg",
        tags: ["口腔動作", "藝術", "色彩"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "稀釋的水彩顏料或食用色素",
            "吸管",
            "圖畫紙",
            "滴管或湯匙"
        ],
        steps: [
            "將少量顏料用滴管滴在圖畫紙上。",
            "家長示範用吸管靠近顏料，輕輕吹氣，讓顏料往外流動。",
            "讓孩子嘗試用不同方向、不同力道吹氣，觀察顏料形成的圖案。",
            "可以讓孩子用多種顏色重疊，創造出豐富的色彩層次。",
            "完成後一起為作品命名。"
        ],
        benefits: [
            "訓練口腔肌肉與氣流控制，有助於語言發展。",
            "提供視覺感官經驗。",
            "激發藝術創作的自由與想像力。"
        ],
        extensions: [
            "將顏料滴在不同的紙張（如衛生紙、卡紙）上，感受吹畫效果的差異。",
            "吹出樹枝、頭髮等形狀，再用筆加上細節。"
        ],
        likes_count: 58,
        favorites_count: 24,
        completed_count: 15,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_28",
        title: "邏輯：顏色序列排序",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["logic", "fine_motor"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "利用彩色積木或珠子，讓孩子依照「紅-藍-紅-藍」的規則排列，學習基礎的序列邏輯。",
        hero_image_url: "/images/games/3_4_28.jpg",
        tags: ["序列", "邏輯", "精細動作"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "紅、藍、黃三種顏色的積木或珠子",
            "長條底板或繩子"
        ],
        steps: [
            "家長先排出一個簡單的序列：「紅、藍、紅、藍、？」。",
            "請孩子說出下一個應該放什麼顏色。",
            "讓孩子自己嘗試排出「紅、藍、黃」三種顏色的序列。",
            "進階：設定更複雜的規則，例如：「紅、紅、藍、黃、紅、紅、藍、黃、？」。",
            "可以將序列變成一個「手鍊」或「項鍊」。"
        ],
        benefits: [
            "訓練模式識別與序列邏輯思考。",
            "提升專注力與觀察力。",
            "練習拿取與放置的精細動作。"
        ],
        extensions: [
            "將序列規則改為形狀或大小。",
            "用音樂的節奏來進行序列創作（例如：快-慢-快-慢）。"
        ],
        likes_count: 53,
        favorites_count: 20,
        completed_count: 14,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_29",
        title: "我是小小科學家：冰棒棍蹺蹺板",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["science", "logic"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用一根冰棒棍和一個積木當作支點，製作一個簡單的蹺蹺板，讓孩子觀察兩邊物體重量的平衡原理。",
        hero_image_url: "/images/games/3_4_29.jpg",
        tags: ["平衡", "科學啟蒙", "重量概念"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "一根長冰棒棍或尺",
            "一個積木或捲好的紙筒（當作支點）",
            "兩邊重量不同的小物件（例如：硬幣、橡皮擦、積木）"
        ],
        steps: [
            "將冰棒棍架在支點上，找到平衡點。",
            "家長先示範在蹺蹺板兩端放上同樣重量的硬幣，觀察它保持平衡。",
            "讓孩子嘗試在兩端放上不同重量的物件（例如：一邊放硬幣，另一邊放積木）。",
            "觀察哪邊重、哪邊輕，引導孩子思考如何讓蹺蹺板再次平衡（例如：在輕的那邊多放一個東西）。",
        ],
        benefits: [
            "初步了解平衡、重力與重量的概念。",
            "訓練觀察力與邏輯推理能力。",
            "練習放置物品的精細動作。"
        ],
        extensions: [
            "改變支點的位置，觀察平衡點的變化。",
            "用不同長度的冰棒棍，感受長度對平衡的影響。"
        ],
        likes_count: 50,
        favorites_count: 21,
        completed_count: 13,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_30",
        title: "紙盤滾球：手眼協調訓練",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["sports", "sensory"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "利用紙盤或紙板，讓孩子練習讓小球在盤子上滾動而不掉下來，訓練手部穩定與追視能力。",
        hero_image_url: "/images/games/3_4_30.jpg",
        tags: ["手眼協調", "追視", "感官"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "一個一次性紙盤或紙板",
            "一個小彈珠或小球",
            "彩色筆"
        ],
        steps: [
            "在紙盤中央畫一個圓圈，當作「終點」。",
            "家長示範如何輕輕傾斜紙盤，讓小球在盤子上滾動，並引導它滾進終點。",
            "讓孩子自己嘗試操作，鼓勵他不要讓球掉出盤外。",
            "挑戰：看誰能在不掉球的情況下，讓球滾的時間最久。",
            "進階：在紙盤上畫一些障礙物或迷宮線，增加難度。"
        ],
        benefits: [
            "訓練手部小肌肉的穩定度與控制力。",
            "增進眼睛追視與手眼協調能力。",
            "提升專注力。"
        ],
        extensions: [
            "用不同大小的紙盤和小球，感受難度的變化。",
            "將遊戲變成兩人合作，一起控制一個大紙板，讓球滾動。"
        ],
        likes_count: 50,
        favorites_count: 20,
        completed_count: 13,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_31",
        title: "音樂：音高猜猜看",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["music", "sensory"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "利用簡單的樂器或發聲玩具，發出高音和低音，讓孩子分辨並做出相應的身體動作。",
        hero_image_url: "/images/games/3_4_31.jpg",
        tags: ["音高", "聽覺", "身體律動"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "口琴、笛子、鋼琴或手機 App（發出高低音）",
            "或家長用聲音發出高低音"
        ],
        steps: [
            "家長先發出一個高音，讓孩子做出「往上跳」或「舉高手」的動作。",
            "發出一個低音，讓孩子做出「蹲下」或「趴下」的動作。",
            "在不同音高之間快速切換，訓練孩子的聽覺反應與動作轉換。",
            "讓孩子自己來發出高低音，讓家長來猜測與動作。",
            "可以讓孩子閉上眼睛，專注用聽覺分辨音高。"
        ],
        benefits: [
            "訓練聽覺分辨音高的能力。",
            "增進聽覺與身體動作的連結。",
            "培養對音樂的興趣與感受力。"
        ],
        extensions: [
            "加入中音，讓孩子做出「站著不動」的動作。",
            "用不同的樂器發出高低音，感受音色的差異。"
        ],
        likes_count: 45,
        favorites_count: 17,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_32",
        title: "語言：反義詞配對遊戲",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["language", "logic"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 10,
        summary: "準備多組反義詞圖卡（例如：大/小、黑/白、開/關），讓孩子進行配對，理解詞彙的反向概念。",
        hero_image_url: "/images/games/3_4_32.jpg",
        tags: ["反義詞", "語言", "邏輯"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "反義詞圖卡 5–10 組",
        ],
        steps: [
            "將其中一組反義詞圖卡（例如：「大」的圖片）放在桌上。",
            "家長從另一組中隨機拿出一張（例如：「小」的圖片），說出「這是小，誰是大的朋友呢？」",
            "讓孩子找出對應的反義詞圖卡，並說出反義詞。",
            "可以將反義詞變成動作：家長說「開」，孩子就做出「關」的動作。",
        ],
        benefits: [
            "擴充詞彙量，理解抽象概念。",
            "訓練邏輯配對與聯想能力。",
            "提升專注力與語言表達。"
        ],
        extensions: [
            "將遊戲延伸至家中物品，例如：找找「高」的椅子和「矮」的桌子。",
            "加入形容詞的反義詞（例如：快/慢、香/臭）。"
        ],
        likes_count: 42,
        favorites_count: 16,
        completed_count: 8,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_33",
        title: "棋盤遊戲：簡單跳棋入門",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["boardgame", "logic"],
        cost_min: 50,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "教孩子學習簡單的跳棋規則，認識棋盤格子的移動，培養基礎策略思維。",
        hero_image_url: "/images/games/3_4_33.jpg",
        tags: ["桌遊", "策略", "規則理解"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "一套跳棋或自製的棋盤與棋子",
        ],
        steps: [
            "家長先簡單說明遊戲目標（將自己的棋子移到對面）。",
            "示範棋子的基本移動方式（只能向前斜走一格）。",
            "示範「跳吃」的規則。",
            "和孩子進行一場簡單的跳棋遊戲。",
            "重點在於享受過程和遵守規則，不用過度強調勝負。"
        ],
        benefits: [
            "學習遵守複雜的遊戲規則。",
            "初步培養策略與預測的能力。",
            "訓練空間位置與邏輯思考。"
        ],
        extensions: [
            "加入更多的棋子，增加遊戲的變化性。",
            "將棋盤改成更大的格子，讓孩子在上面進行身體跳躍的遊戲。"
        ],
        likes_count: 40,
        favorites_count: 15,
        completed_count: 8,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_34",
        title: "創意：紙袋手偶劇場",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["creative", "language"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 20,
        summary: "利用牛皮紙袋，畫上五官和裝飾，製作成手偶，進行一場即興的布偶戲。",
        hero_image_url: "/images/games/3_4_34.jpg",
        tags: ["角色扮演", "創作", "語言"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "牛皮紙袋或白紙袋 2–3 個",
            "彩色筆、色紙、毛線",
            "膠水或雙面膠"
        ],
        steps: [
            "家長引導孩子在紙袋底部（當作頭部）畫上五官。",
            "用色紙剪出頭髮、耳朵、衣服等裝飾，貼在紙袋上。",
            "將紙袋套在手上，讓手偶動起來。",
            "家長與孩子各自扮演一個角色，進行簡單的對話或故事。",
            "可以利用紙箱挖一個洞，變成一個簡易的布偶劇場。",
        ],
        benefits: [
            "激發想像力與創造力。",
            "訓練口語表達與敘事能力。",
            "練習美工剪貼的精細動作。"
        ],
        extensions: [
            "將故事主題設定為孩子當天遇到的事情。",
            "將布偶設計成不同情緒（開心、難過、生氣），進行情緒教學。"
        ],
        likes_count: 48,
        favorites_count: 19,
        completed_count: 11,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_35",
        title: "戶外遊戲：我是小小園丁",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["science", "sensory"],
        cost_min: 50,
        cost_max: 150,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 20,
        summary: "在陽台或花園中，和孩子一起種下小種子或小盆栽，感受土壤的觸感，觀察植物的生長過程。",
        hero_image_url: "/images/games/3_4_35.jpg",
        tags: ["戶外", "自然", "感官"],
        flags: {
            requires_purchase: true,
            indoor_friendly: false,
            outdoor_friendly: true,
            messy_level: "high",
            need_freezer: false
        },
        materials: [
            "小盆栽或舊容器",
            "泥土",
            "種子（例如：綠豆、九層塔）",
            "小鏟子、水壺"
        ],
        steps: [
            "讓孩子觸摸泥土，感受它的粗糙與濕潤。",
            "家長示範用鏟子將泥土放入盆栽中。",
            "讓孩子將種子輕輕放入泥土中，再蓋上薄薄一層土。",
            "每天一起為植物澆水，並觀察它的生長變化。",
            "過程中可教導孩子植物生長的要素（水、陽光、空氣）。"
        ],
        benefits: [
            "提供豐富的觸覺感官經驗。",
            "認識植物生長的基礎科學知識。",
            "培養責任感與對生命的尊重。"
        ],
        extensions: [
            "用不同顏色的石頭、樹葉裝飾盆栽。",
            "在植物生長過程中，為它畫日記。"
        ],
        likes_count: 55,
        favorites_count: 22,
        completed_count: 14,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_36",
        title: "烹飪：自製果凍布丁",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["cooking", "science"],
        cost_min: 100,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 20,
        summary: "一起製作簡單的果凍或布丁，讓孩子參與攪拌和倒液體的過程，觀察液體如何凝固成固體的科學變化。",
        hero_image_url: "/images/games/3_4_36.jpg",
        tags: ["科學", "烹飪", "物質變化"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: true
        },
        materials: [
            "果凍粉或布丁粉",
            "熱水、冷水",
            "攪拌器、量杯",
            "小容器或模具"
        ],
        steps: [
            "家長負責處理熱水部分，讓孩子幫忙攪拌果凍粉。",
            "孩子將攪拌好的液體慢慢倒入模具中（訓練倒液體的精細動作）。",
            "一起將模具放入冰箱，並討論：「液體什麼時候會變成Q彈的果凍呢？」",
            "等待果凍凝固後，一起脫模享用。",
        ],
        benefits: [
            "觀察物質（液體到固體）的物理變化。",
            "訓練手部攪拌、倒液體的精細動作。",
            "培養對烹飪的興趣與耐心等待。"
        ],
        extensions: [
            "在果凍中加入水果塊，創造不同的層次。",
            "嘗試用不同的凝固劑（如吉利丁、洋菜）感受差異。"
        ],
        likes_count: 53,
        favorites_count: 21,
        completed_count: 13,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_37",
        title: "平衡木挑戰：膠帶獨木橋",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["sports", "sensory"],
        cost_min: 0,
        cost_max: 10,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "用一條寬膠帶或紙膠帶在地板上貼出一條直線，讓孩子在上面行走，練習平衡感與專注力。",
        hero_image_url: "/images/games/3_4_37.jpg",
        tags: ["平衡感", "大肌肉", "專注力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "寬紙膠帶一卷",
        ],
        steps: [
            "用膠帶在地板上貼出一條長約 2–3 公尺的直線（獨木橋）。",
            "家長先示範如何將雙腳交替踩在線上，慢慢向前走。",
            "讓孩子嘗試在膠帶上行走，鼓勵他慢慢來，保持平衡。",
            "進階：讓孩子閉著眼睛走、單腳跳、或倒退走。",
            "可以手持一個小玩具，增加平衡的難度。"
        ],
        benefits: [
            "訓練身體平衡與核心控制。",
            "提升視覺專注力。",
            "促進大肌肉發展與本體覺統合。"
        ],
        extensions: [
            "將膠帶貼成 S 型或 L 型，增加轉彎的挑戰。",
            "在膠帶的兩側放上軟墊或枕頭，假裝是「水」或「沼澤」。"
        ],
        likes_count: 50,
        favorites_count: 20,
        completed_count: 12,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_38",
        title: "感官：盲摸猜猜看",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["sensory", "logic"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "準備一個不透明的袋子，放入各種物品，讓孩子用觸覺來猜測是什麼東西，訓練觸覺分辨與詞彙。",
        hero_image_url: "/images/games/3_4_38.jpg",
        tags: ["觸覺", "感官", "邏輯"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "一個不透明的布袋或紙箱",
            "各種觸感、形狀不同的物品（例如：毛絨玩具、鑰匙、積木、水果）"
        ],
        steps: [
            "將所有物品放入袋中。",
            "讓孩子將手伸入袋中，隨意觸摸一個物品。",
            "引導孩子描述他摸到的感覺（例如：軟軟的、硬硬的、有尖尖的地方）。",
            "鼓勵孩子猜猜看是什麼東西。",
            "猜對後將物品拿出來，並說出名稱。",
            "換家長來猜，讓孩子描述物品的特徵。"
        ],
        benefits: [
            "訓練觸覺分辨與記憶能力。",
            "豐富詞彙量，練習描述物品的特性。",
            "提升專注力與推理能力。"
        ],
        extensions: [
            "將遊戲變成「摸摸看家裡有哪些圓形/方形的東西」。",
            "在袋中放入食物，變成「嗅覺猜猜看」。"
        ],
        likes_count: 47,
        favorites_count: 18,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_39",
        title: "邏輯：自製形狀拼圖",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["logic", "fine_motor"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "利用厚紙板或舊雜誌，剪出簡單的 2–4 塊拼圖，讓孩子練習空間概念和圖形組合。",
        hero_image_url: "/images/games/3_4_39.jpg",
        tags: ["空間概念", "邏輯", "精細動作"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "厚紙板或瓦楞紙",
            "舊照片或雜誌圖案",
            "剪刀（家長使用）",
            "膠水"
        ],
        steps: [
            "將照片或圖案貼在厚紙板上。",
            "家長將圖案裁切成 2–4 塊簡單的拼圖。",
            "讓孩子嘗試將拼圖塊重新拼回完整的圖案。",
            "當孩子成功拼好時，問他：「你覺得哪一塊應該先放？」，引導他思考順序。",
            "進階：增加拼圖的塊數，或將切線變成曲線。"
        ],
        benefits: [
            "訓練視覺空間組織能力。",
            "培養解決問題與邏輯思考。",
            "練習拿取與旋轉拼圖塊的精細動作。"
        ],
        extensions: [
            "讓孩子自己設計圖案，再請家長幫忙剪成拼圖。",
            "將拼圖變成「地圖」，讓孩子將家具圖卡拼回正確的位置。"
        ],
        likes_count: 45,
        favorites_count: 17,
        completed_count: 10,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_40",
        title: "音樂：跟著動物節奏跳舞",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["music", "sports"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 10,
        summary: "播放不同節奏的音樂，讓孩子模仿動物的動作和速度（例如：輕快的兔子跳、緩慢的大象走）。",
        hero_image_url: "/images/games/3_4_40.jpg",
        tags: ["節奏", "大肌肉", "音樂律動"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "手機或音響",
            "不同節奏的音樂（快、慢、活潑、輕柔）"
        ],
        steps: [
            "家長先示範：播放輕快音樂時，學小鳥飛。",
            "播放慢速音樂時，學烏龜慢慢爬。",
            "讓孩子跟著音樂的節奏和風格，自由變換動物角色與動作。",
            "可以讓孩子閉上眼睛，感受音樂的變化，再決定要變成什麼動物。",
        ],
        benefits: [
            "培養對音樂節奏與情感的感受力。",
            "訓練大肌肉的控制與協調。",
            "激發想像力與角色扮演。"
        ],
        extensions: [
            "將遊戲變成「音樂停，雕像定格」，音樂停止時必須立即靜止不動。",
            "用身體擺出動物的形狀，例如：貓、蛇、狗。"
        ],
        likes_count: 55,
        favorites_count: 22,
        completed_count: 14,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_41",
        title: "戶外：尋找自然的色彩",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["art", "science"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 20,
        summary: "帶孩子到戶外，用色卡或色紙，尋找大自然中顏色相同的葉子、石頭、花朵，認識自然色彩。",
        hero_image_url: "/images/games/3_4_41.jpg",
        tags: ["戶外", "顏色認知", "觀察力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: false,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "幾張不同顏色的色紙或色卡",
            "一個小提籃或袋子"
        ],
        steps: [
            "家長先拿出一張色紙（例如：紅色），問孩子：「我們來找找大自然裡有沒有紅色的東西？」",
            "引導孩子在公園或自家花園中，尋找對應顏色的物品（例如：紅色的花、紅色的石頭）。",
            "找到後，讓孩子將物品與色紙進行比對。",
            "過程中可教導孩子愛護花草，只能撿拾掉落在地上的葉子或石頭。",
        ],
        benefits: [
            "訓練視覺的色彩辨識與細微差異的觀察。",
            "認識自然環境與植物的顏色變化。",
            "增進戶外活動的樂趣。"
        ],
        extensions: [
            "將找到的自然材料帶回家，進行拼貼畫。",
            "挑戰找找看「最亮」的顏色或「最暗」的顏色。"
        ],
        likes_count: 52,
        favorites_count: 20,
        completed_count: 13,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_42",
        title: "烹飪：自製果醬吐司捲",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["cooking", "fine_motor"],
        cost_min: 100,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "利用吐司邊和果醬，讓孩子練習用擀麵棍將吐司壓扁，再捲成果醬卷，訓練手部力量和精細動作。",
        hero_image_url: "/images/games/3_4_42.jpg",
        tags: ["精細動作", "烹飪", "手部力量"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "去邊吐司片",
            "果醬或巧克力醬",
            "擀麵棍或圓形水瓶"
        ],
        steps: [
            "家長示範用擀麵棍將吐司片壓得扁平。",
            "讓孩子嘗試用力量壓扁吐司。",
            "讓孩子塗上喜歡的果醬。",
            "引導孩子將吐司從一端慢慢捲起，變成一個緊實的吐司卷。",
            "將吐司卷切成小塊，享用成果。"
        ],
        benefits: [
            "訓練手部肌肉的力量與控制。",
            "提升專注力與操作能力。",
            "激發對食物的興趣。"
        ],
        extensions: [
            "在吐司卷外層沾上巧克力醬和彩色米，增加裝飾。",
            "用不同的餡料（如香蕉片、肉鬆）嘗試不同的口味。"
        ],
        likes_count: 55,
        favorites_count: 23,
        completed_count: 16,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_3_4_43",
        title: "邏輯：小火車排列順序",
        age_bucket: "3-4",
        age_min: 3,
        age_max: 4,
        gender: "all",
        interests: ["logic", "language"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "利用車子或積木，讓孩子依照大小、長度或顏色深淺來排列順序，理解量化概念。",
        hero_image_url: "/images/games/3_4_43.jpg",
        tags: ["排序", "量化概念", "邏輯"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "不同大小或長度的車子 5 輛",
            "或不同長度的積木條 5 塊"
        ],
        steps: [
            "將車子或積木打亂放在桌上。",
            "家長先示範從「最小」排到「最大」的順序，並說出「小、中、大」。",
            "請孩子嘗試將剩下的物品，依照大小或長度的順序排列成一列火車。",
            "引導孩子說出：「這是最長/最短的。」",
            "進階：將物品排好後，故意移動其中一個，讓孩子找出「排錯位置」的東西。"
        ],
        benefits: [
            "訓練觀察與比較的邏輯能力。",
            "理解大小、長度等量化概念。",
            "提升視覺空間的組織能力。"
        ],
        extensions: [
            "將遊戲變成「聲音由大到小」的排列順序。",
            "用數字卡片，讓孩子將卡片由 1 排到 10。"
        ],
        likes_count: 45,
        favorites_count: 18,
        completed_count: 11,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },

    // =====================
    // 5–6 歲：34 個遊戲 (5-6 歲著重於數理啟蒙、規則複雜化、團隊合作)
    // =====================
    {
        id: "game_5_6_35",
        title: "火山爆發：化學反應初探",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["science", "logic"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "利用小蘇打粉和醋進行簡單的化學反應，模擬火山爆發的場景，認識酸鹼中和。",
        hero_image_url: "/images/games/5_6_35.jpg",
        tags: ["化學", "科學實驗", "觀察力"],
        flags: {
            requires_purchase: true,
            indoor_friendly: false,
            outdoor_friendly: true,
            messy_level: "high",
            need_freezer: false
        },
        materials: [
            "小蘇打粉（碳酸氫鈉）",
            "白醋",
            "食用色素（紅色或橘色）",
            "洗碗精（增加泡沫）",
            "小寶特瓶、容器或黏土做成的火山模型"
        ],
        steps: [
            "將小寶特瓶放在火山模型的中央，或直接使用小寶特瓶。",
            "在瓶中加入小蘇打粉、食用色素和少量洗碗精。",
            "家長慢慢將白醋倒入瓶中。",
            "觀察瓶口冒出大量紅色泡沫，模擬火山爆發。",
            "向孩子解釋：酸（醋）和鹼（小蘇打）混在一起會產生氣體（二氧化碳），所以會冒泡泡！"
        ],
        benefits: [
            "體驗化學反應的視覺震撼。",
            "初步了解酸鹼中和的科學原理。",
            "培養實驗精神與觀察力。"
        ],
        extensions: [
            "改變小蘇打粉和醋的比例，觀察爆發效果的差異。",
            "用不同的容器做火山，觀察噴發高度的變化。"
        ],
        likes_count: 72,
        favorites_count: 35,
        completed_count: 24,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_36",
        title: "注音或字母尋寶：語言訓練",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["language", "logic"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "將注音符號或英文字母卡片藏在房間各處，讓孩子根據線索尋找，訓練字母認知與聽覺記憶。",
        hero_image_url: "/images/games/5_6_36.jpg",
        tags: ["注音/字母認知", "邏輯", "語言"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "注音或字母卡片數張",
            "藏寶線索（家長預先準備）"
        ],
        steps: [
            "家長先將卡片藏起來，並準備好線索（例如：『ㄇ』藏在像『ㄇ』的東西旁邊）。",
            "告訴孩子要尋找的目標（例如：『ㄚ』）。",
            "孩子找到卡片後，必須正確說出或寫出該注音/字母。",
            "進階：讓孩子根據『ㄅ』來尋找『波浪』、『ㄆ』來尋找『蘋果』等，加入拼音或相關詞彙。",
            "所有卡片找完後，可以將卡片依序排列，變成一個簡單的詞語。"
        ],
        benefits: [
            "強化注音/字母的視覺與聽覺記憶。",
            "訓練空間感與邏輯推理能力。",
            "提升語言基礎能力。"
        ],
        extensions: [
            "將遊戲變成「看圖找注音」，讓孩子將注音卡片貼在對應的圖案上。",
            "加入數字或簡單的數學符號，變成數學尋寶。"
        ],
        likes_count: 60,
        favorites_count: 25,
        completed_count: 18,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_37",
        title: "桌遊：數字階梯與加減",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["boardgame", "logic"],
        cost_min: 50,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 20,
        summary: "利用自製的大富翁型遊戲，加入骰子和簡單的加法/減法規則，訓練數字認知與計算能力。",
        hero_image_url: "/images/games/5_6_37.jpg",
        tags: ["數數", "加減法", "桌遊"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "大張紙或紙板",
            "彩色筆、尺",
            "骰子 1 顆",
            "小棋子或玩具 2–4 個"
        ],
        steps: [
            "在家長引導下，一起在紙上畫出 1–30 的格子。",
            "在格子裡加入特殊指令（例如：前進 3 格、後退 2 格、休息一回合）。",
            "玩家輪流擲骰子，並說出「我擲到X，要前進X步」。",
            "當走到特殊格子時，必須完成指令上的加法或減法。",
            "第一位走到終點的玩家獲勝。"
        ],
        benefits: [
            "強化數字順序與加減法的概念。",
            "學習遵守遊戲規則與輪流等待。",
            "提升專注力與計算能力。"
        ],
        extensions: [
            "加入兩種顏色的骰子，變成『紅骰子是加，藍骰子是減』的玩法。",
            "將遊戲場地放大，讓孩子用身體跳格子。"
        ],
        likes_count: 65,
        favorites_count: 30,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_39",
        title: "藝術：紙板立體雕塑",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["art", "creative"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 30,
        summary: "利用厚紙板剪出各種形狀，透過切割、組合、黏貼，創作成立體結構的雕塑或動物。",
        hero_image_url: "/images/games/5_6_39.jpg",
        tags: ["立體創作", "空間感", "美勞"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "厚紙板或瓦楞紙",
            "剪刀或美工刀（家長使用）",
            "膠水、熱熔槍（家長使用）",
            "顏料或色紙（裝飾用）"
        ],
        steps: [
            "家長先用美工刀將紙板裁切成基礎的平面形狀（例如：身體、頭、腳）。",
            "教孩子如何在紙板上劃線，並沿線剪下。",
            "引導孩子思考如何將平面組合成穩固的立體結構（例如：用插槽或L型支撐）。",
            "將完成的結構用膠水或熱熔膠固定。",
            "最後用顏料或色紙裝飾作品。",
        ],
        benefits: [
            "訓練視覺空間組織能力與三維概念。",
            "培養動手實作與解決問題的能力。",
            "提升手部精細動作與協調性。"
        ],
        extensions: [
            "挑戰用紙板蓋一座『迷你城市』。",
            "將多個作品組成一個『紙板動物園』或『紙板機器人軍團』。"
        ],
        likes_count: 68,
        favorites_count: 32,
        completed_count: 21,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_40",
        title: "平衡：呼拉圈投籃挑戰",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["sports", "logic"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "將呼拉圈固定在地上或矮處，讓孩子練習投擲沙包或小球，訓練投擲準度與手眼協調。",
        hero_image_url: "/images/games/5_6_40.jpg",
        tags: ["投擲", "協調性", "目標導向"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "呼拉圈 1–2 個",
            "沙包、軟布球或捲好的襪子 5–10 個",
            "計分板（紙筆）"
        ],
        steps: [
            "將呼拉圈平放在地上，或用椅子、棍子架高。",
            "劃定投擲線，與呼拉圈保持 1–2 公尺的距離。",
            "讓孩子從投擲線開始，將沙包投進呼拉圈。",
            "投進一個得 1 分，讓孩子練習數數和簡單的加法。",
            "進階：設定不同顏色的呼拉圈，投進不同顏色得分不同。"
        ],
        benefits: [
            "訓練手臂投擲的準度與協調性。",
            "提升目標導向的專注力。",
            "練習基礎的數數與計分邏輯。"
        ],
        extensions: [
            "將呼拉圈掛在樹枝或門把上，變成高空投籃。",
            "用呼拉圈在地板上排出一個圖案，規定投擲的順序。"
        ],
        likes_count: 70,
        favorites_count: 33,
        completed_count: 22,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_41",
        title: "音樂：簡單節奏卡片辨識",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["music", "logic"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "製作簡單的節奏卡片（例如：畫一個圈代表一拍、兩個圈代表兩拍），讓孩子根據卡片打出節奏，認識音樂的符號與邏輯。",
        hero_image_url: "/images/games/5_6_41.jpg",
        tags: ["節奏", "音樂符號", "邏輯"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "空白卡片或紙板",
            "麥克筆",
            "打擊樂器（或手、腳）"
        ],
        steps: [
            "家長在卡片上畫出簡單的節奏符號（例如：長線代表長音、短點代表短音）。",
            "家長先示範，根據卡片上的符號，用手拍出節奏。",
            "讓孩子根據卡片，嘗試用拍手、跺腳或樂器打出相同的節奏。",
            "將多張節奏卡片排列在一起，變成一段完整的「音樂」。",
            "讓孩子自己創作節奏卡片，讓家長來打擊。"
        ],
        benefits: [
            "培養視覺與聽覺的轉換能力。",
            "學習音樂符號的基礎邏輯。",
            "訓練節奏感與專注力。"
        ],
        extensions: [
            "加入『休止符』，訓練孩子在對應的地方停止動作。",
            "用不同顏色的卡片，代表不同的打擊樂器。"
        ],
        likes_count: 55,
        favorites_count: 23,
        completed_count: 16,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_42",
        title: "烹飪：迷你披薩大師",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["cooking", "art"],
        cost_min: 200,
        cost_max: 400,
        currency: "TWD",
        prep_minutes: 20,
        play_minutes: 30,
        summary: "利用市售的披薩皮或吐司，讓孩子親手塗抹醬料、鋪上餡料，創作自己的迷你披薩，學習分量控制與食材認知。",
        hero_image_url: "/images/games/5_6_42.jpg",
        tags: ["烹飪", "創作", "食材認知"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "市售迷你披薩皮或吐司",
            "番茄醬或披薩醬",
            "各種餡料（火腿、蘑菇、玉米、彩椒等）",
            "起司絲"
        ],
        steps: [
            "家長先示範如何用湯匙將醬料塗抹均勻。",
            "讓孩子自己塗抹醬料，練習手部控制力。",
            "引導孩子將餡料鋪在披薩上，可以嘗試用餡料排出圖案或笑臉。",
            "最後鋪上滿滿的起司絲。",
            "放入烤箱或氣炸鍋烤熟（家長操作）。",
            "一起享用自製的披薩大餐。"
        ],
        benefits: [
            "訓練手部塗抹、鋪排的精細動作。",
            "學習食材的名稱與分類。",
            "激發對食物造型的創造力。"
        ],
        extensions: [
            "讓孩子嘗試揉麵團、製作披薩皮（難度較高）。",
            "將餡料分成不同顏色，讓孩子創作「色彩披薩」。"
        ],
        likes_count: 75,
        favorites_count: 38,
        completed_count: 28,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_43",
        title: "感官：盲眼障礙賽",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["sensory", "logic"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "用眼罩蒙住孩子的眼睛，家長用口頭指令引導孩子通過簡單的障礙物，訓練聽覺、空間感和信任感。",
        hero_image_url: "/images/games/5_6_43.jpg",
        tags: ["聽覺", "空間感", "信任"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "眼罩或毛巾",
            "枕頭、玩具或書本（當作障礙物）",
            "安全、寬敞的空間"
        ],
        steps: [
            "在家中設置 3–5 個簡單的障礙物（例如：繞過椅子、跨過枕頭）。",
            "讓孩子戴上眼罩，家長在旁邊給予清晰的指令（例如：往前走 3 步、向左轉、抬高腳跨過去）。",
            "孩子完成任務後，可以換孩子用口頭指令引導家長通過障礙。",
            "務必確保孩子在安全範圍內，並在旁隨時準備攙扶。"
        ],
        benefits: [
            "強化聽覺專注與空間方向感。",
            "訓練身體本體覺與平衡控制。",
            "培養親子間的信任與合作。"
        ],
        extensions: [
            "在障礙物旁放上會發出聲音的玩具，增加聽覺干擾。",
            "將口頭指令改成『拍手』的次數，讓孩子判斷移動的步數。"
        ],
        likes_count: 62,
        favorites_count: 28,
        completed_count: 19,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_44",
        title: "創意：樂高未來城市規劃",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["creative", "logic"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 30,
        summary: "利用樂高或積木，設計一座包含房屋、道路、交通工具的未來城市，訓練空間規劃與系統思考。",
        hero_image_url: "/images/games/5_6_44.jpg",
        tags: ["空間規劃", "想像力", "邏輯"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "樂高積木、一般積木或方塊糖果",
            "大塊底板或地圖紙"
        ],
        steps: [
            "和孩子討論：一座城市需要什麼？（例如：學校、醫院、公園、住家）。",
            "讓孩子在地圖上規劃出不同的區域。",
            "用積木開始建造各種建築物和設施。",
            "討論道路的走向、交通工具的類型。",
            "完成後，一起用小玩偶進行城市角色扮演。",
        ],
        benefits: [
            "激發想像力與創造力。",
            "訓練空間規劃與三維建構能力。",
            "初步了解社會組織與城市功能。"
        ],
        extensions: [
            "規定只能用單一顏色或單一形狀的積木來建造，增加難度。",
            "將城市規劃變成『環保城市』，討論如何節省能源。"
        ],
        likes_count: 70,
        favorites_count: 35,
        completed_count: 24,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_45",
        title: "語言：句子排列組合",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["language", "logic"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "將一個完整的句子分解成詞語卡片，讓孩子重新排列組成正確的句子，學習句子結構與詞序。",
        hero_image_url: "/images/games/5_6_45.jpg",
        tags: ["句子結構", "詞彙", "邏輯"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "詞語卡片數張（例如：『小貓』、『在』、『桌子』、『上』、『睡覺』）",
            "白紙或白板"
        ],
        steps: [
            "家長先寫一個完整的句子，例如：「妹妹開心地在公園玩。」",
            "將句子分解成詞語卡片（妹妹、開心地、在、公園、玩）。",
            "將卡片打亂，讓孩子嘗試重新排列，組成正確的句子。",
            "引導孩子思考：『誰』先做什麼？『在哪裡』做？『用什麼方式』做？",
            "完成後，讓孩子大聲唸出排好的句子。"
        ],
        benefits: [
            "理解句子結構與詞語的邏輯關係。",
            "提升閱讀與寫作的基礎能力。",
            "訓練專注力與組織能力。"
        ],
        extensions: [
            "增加更長的句子或標點符號的卡片。",
            "將句子改成疑問句或感嘆句，讓孩子感受語氣的變化。"
        ],
        likes_count: 58,
        favorites_count: 24,
        completed_count: 17,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_11",
        title: "邏輯：初階數獨 (4x4)",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["logic", "boardgame"],
        cost_min: 0,
        cost_max: 10,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用 4x4 的數獨格子，搭配數字或圖案，讓孩子練習填空，培養觀察與推理邏輯。",
        hero_image_url: "/images/games/5_6_11.jpg",
        tags: ["數獨", "邏輯推理", "專注力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "4x4 數獨紙本或圖案卡片",
            "鉛筆、橡皮擦"
        ],
        steps: [
            "家長先解釋數獨規則：每一行、每一列、每一個小區塊（2x2）都不能有重複的數字或圖案。",
            "先從最簡單的 4x4 格子開始練習。",
            "引導孩子從資訊最多的格子或區塊開始推理。",
            "鼓勵孩子大聲說出他的思考過程：「這一行已經有 1、2、4，所以這裡一定是 3。」",
            "完成後一起檢查，並討論如何更快找到答案。"
        ],
        benefits: [
            "訓練觀察力與邏輯推理能力。",
            "提升專注力與解決問題的能力。",
            "學習基礎的數理邏輯思維。"
        ],
        extensions: [
            "用顏色或動物圖案代替數字，讓孩子更有興趣。",
            "挑戰 6x6 的數獨格子，增加難度。"
        ],
        likes_count: 63,
        favorites_count: 29,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_12",
        title: "感官：氣味辨識猜猜看",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["sensory", "science"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 15,
        summary: "將數種家中常見的食物或香料放入不透明罐子中，讓孩子用嗅覺辨識內容物。",
        hero_image_url: "/images/games/5_6_12.jpg",
        tags: ["嗅覺", "感官", "科學"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "不透明小罐子 5–6 個",
            "棉花球或咖啡豆（當作基底）",
            "咖啡粉、肉桂粉、檸檬皮、蒜頭、薄荷葉等"
        ],
        steps: [
            "將棉花球或咖啡豆放入罐中，再加入有氣味的材料，蓋緊蓋子。",
            "家長先示範聞一聞，並說出氣味名稱。",
            "讓孩子聞一聞罐子，鼓勵他描述氣味（例如：香香的、辣辣的、酸酸的）。",
            "讓孩子猜猜看是什麼東西。",
            "猜對後，讓孩子看看罐子裡的內容物。"
        ],
        benefits: [
            "訓練嗅覺分辨與記憶能力。",
            "豐富形容氣味的詞彙量。",
            "提升專注力與感官統合。"
        ],
        extensions: [
            "將遊戲變成「配對」：準備兩組一樣的氣味罐，讓孩子找出相同的配對。",
            "用氣味來創作一個小故事或情境。"
        ],
        likes_count: 57,
        favorites_count: 25,
        completed_count: 18,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_13",
        title: "科學：磁力探索遊戲",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["science", "logic"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用磁鐵和各種材質的物品，讓孩子嘗試吸取，認識磁力的原理和哪些材料會被磁化。",
        hero_image_url: "/images/games/5_6_13.jpg",
        tags: ["磁力", "科學", "分類"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "強力磁鐵",
            "各種材質的物品（迴紋針、積木、鈕扣、橡皮筋、湯匙、紙張）"
        ],
        steps: [
            "將所有物品放在桌上。",
            "家長先示範用磁鐵吸取迴紋針，觀察現象。",
            "讓孩子拿著磁鐵，一一嘗試吸取其他物品。",
            "將物品分成兩類：「會被磁鐵吸住」和「不會被磁鐵吸住」。",
            "向孩子解釋：磁鐵只能吸住含有「鐵」的物質。"
        ],
        benefits: [
            "初步了解磁力與物質的關係。",
            "訓練觀察與分類的邏輯能力。",
            "激發對物理現象的好奇心。"
        ],
        extensions: [
            "用磁鐵讓迴紋針在紙板下移動，變成「海底尋寶」遊戲。",
            "用兩個磁鐵嘗試讓它們互相排斥（同極相斥），感受無形的力。"
        ],
        likes_count: 60,
        favorites_count: 27,
        completed_count: 18,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_14",
        title: "創意：石頭彩繪藝術",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["art", "creative"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 30,
        summary: "收集一些光滑的石頭，讓孩子在上面畫上圖案或動物，變成有趣的裝飾品。",
        hero_image_url: "/images/games/5_6_14.jpg",
        tags: ["彩繪", "創作", "美勞"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "光滑的石頭數顆",
            "壓克力顏料或彩色筆",
            "畫筆、清潔劑"
        ],
        steps: [
            "先將石頭洗淨、晾乾。",
            "家長示範如何在石頭上打底色。",
            "讓孩子用畫筆在石頭上自由創作，畫出小動物、表情符號或抽象圖案。",
            "完成後，將石頭放在陽台或花園裝飾。",
            "可以將石頭畫成「瓢蟲」、「毛毛蟲」等小動物造型。"
        ],
        benefits: [
            "訓練手部精細動作與繪畫能力。",
            "培養美感與色彩搭配。",
            "激發想像力與創作樂趣。"
        ],
        extensions: [
            "將石頭變成『故事石』，讓孩子用石頭上的圖案編故事。",
            "將石頭塗上夜光顏料，變成『夜光寶石』。"
        ],
        likes_count: 65,
        favorites_count: 30,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_15",
        title: "運動：室內障礙賽挑戰",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["sports", "logic"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 20,
        summary: "利用家中家具、繩子、紙箱等，設計一個需要爬、跳、鑽、跑的室內障礙賽，訓練全身大肌肉與反應。",
        hero_image_url: "/images/games/5_6_15.jpg",
        tags: ["大肌肉", "協調性", "反應力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "椅子、枕頭、繩子、紙箱",
            "碼表或手機計時器"
        ],
        steps: [
            "設置 5–8 個關卡，例如：『爬過椅子下的隧道』、『跳過 3 個枕頭』、『單腳站立 5 秒』。",
            "家長先示範一次，確保安全與流暢度。",
            "讓孩子計時挑戰，看誰能用最短的時間完成所有關卡。",
            "在每個關卡加入一個小任務（例如：找到綠色的積木、回答一個問題）。",
            "可以讓孩子自己設計一個新的關卡。"
        ],
        benefits: [
            "促進大肌肉發展與身體協調。",
            "訓練反應力與專注力。",
            "學習規劃路線與解決問題的邏輯。"
        ],
        extensions: [
            "將遊戲變成團隊接力賽。",
            "規定只能用特定的方式移動，例如：全程螃蟹走、全程倒退走。"
        ],
        likes_count: 72,
        favorites_count: 34,
        completed_count: 23,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_16",
        title: "棋盤遊戲：西洋棋入門",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["boardgame", "logic"],
        cost_min: 100,
        cost_max: 300,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 20,
        summary: "學習西洋棋的基本棋子名稱、擺放位置和移動規則，培養初步的策略思維。",
        hero_image_url: "/images/games/5_6_16.jpg",
        tags: ["策略", "邏輯", "桌遊"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "一套西洋棋",
            "棋盤"
        ],
        steps: [
            "從最簡單的棋子開始介紹（例如：兵、車），講解它們的移動方式。",
            "只用少數棋子進行對戰，讓孩子熟悉走法。",
            "示範簡單的『將軍』和『吃子』概念。",
            "不用過於強調勝負，重點在於讓孩子理解規則和棋盤上的空間概念。",
            "讓孩子從旁觀摩家長和其他人下棋。"
        ],
        benefits: [
            "訓練長時間的專注力與觀察力。",
            "培養初步的策略規劃與預測能力。",
            "理解複雜的規則系統。"
        ],
        extensions: [
            "將棋子當作角色，進行『騎士與公主』的角色扮演遊戲。",
            "設計一個簡單的西洋棋謎題，讓孩子解開。"
        ],
        likes_count: 60,
        favorites_count: 28,
        completed_count: 18,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_17",
        title: "藝術：自製萬花筒",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["art", "science"],
        cost_min: 100,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 30,
        play_minutes: 20,
        summary: "利用紙筒、鏡面紙和彩色珠子，製作一個萬花筒，觀察光的反射與對稱的圖案變化，結合美學與物理。",
        hero_image_url: "/images/games/5_6_17.jpg",
        tags: ["光學", "對稱", "美勞"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "硬紙筒或寶特瓶（當作外殼）",
            "鏡面紙或鏡片 3 片",
            "彩色珠子、亮片或碎玻璃紙",
            "透明塑膠片、膠帶"
        ],
        steps: [
            "家長將 3 片鏡面紙組合成一個三角柱，用膠帶固定後放入紙筒中。",
            "在紙筒一端放入彩色珠子，並用透明塑膠片封住，留下一點點空隙。",
            "在另一端開一個小孔（當作觀景窗）。",
            "讓孩子從觀景窗看進去，並轉動紙筒，觀察美麗的對稱圖案變化。",
            "向孩子解釋：這利用了鏡子的『反射』原理。"
        ],
        benefits: [
            "初步了解光的反射原理。",
            "觀察對稱與重複的圖案邏輯。",
            "培養動手實作與美感創造。"
        ],
        extensions: [
            "用不同顏色的珠子或亮片，觀察色彩的變化。",
            "在外殼上裝飾圖案，變成獨一無二的萬花筒。"
        ],
        likes_count: 67,
        favorites_count: 31,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_18",
        title: "語言：我會說繞口令",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["language", "music"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "練習說出簡單的繞口令，訓練孩子的發音清晰度、語速控制與口腔肌肉靈活性。",
        hero_image_url: "/images/games/5_6_18.jpg",
        tags: ["發音", "口語表達", "語言"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "簡單繞口令 3–5 則（例如：四是四、十是十）"
        ],
        steps: [
            "家長先慢慢唸出繞口令，確保每個字都清晰。",
            "讓孩子跟著慢慢唸一次。",
            "逐漸加快速度，變成挑戰賽。",
            "讓孩子嘗試用不同的情緒（例如：生氣、開心、難過）唸出繞口令。",
            "讓孩子自己創作一個短小的繞口令。"
        ],
        benefits: [
            "訓練發音器官的協調性與靈活性。",
            "提升語音辨識與模仿能力。",
            "增進自信心與口語表達的流暢度。"
        ],
        extensions: [
            "將繞口令搭配簡單的節奏或旋律。",
            "挑戰用不同語言（例如：台語、客語）的繞口令。"
        ],
        likes_count: 53,
        favorites_count: 21,
        completed_count: 15,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_19",
        title: "烹飪：自製手工麵條",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["cooking", "sensory"],
        cost_min: 100,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 30,
        play_minutes: 30,
        summary: "讓孩子參與麵粉揉捏、擀麵、切麵的過程，感受麵團的彈性與觸感，學習麵食製作的基礎。",
        hero_image_url: "/images/games/5_6_19.jpg",
        tags: ["觸覺", "烹飪", "精細動作"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "high",
            need_freezer: false
        },
        materials: [
            "麵粉、水、鹽",
            "揉麵墊或大盤子",
            "擀麵棍",
            "安全切麵刀或披薩刀"
        ],
        steps: [
            "家長與孩子一起將麵粉、水、鹽混和揉捏成麵團。",
            "讓孩子用力揉麵團，感受麵團從黏手到光滑的變化（訓練手部力量）。",
            "用擀麵棍將麵團擀成大片薄餅。",
            "讓孩子用安全切麵刀將麵皮切成寬麵或細麵。",
            "將麵條煮熟後，加入簡單的醬料享用。",
        ],
        benefits: [
            "提供豐富的觸覺感官經驗。",
            "訓練手部揉捏、擀壓的精細動作與力量。",
            "學習麵食製作的基礎科學（麵粉與水）。"
        ],
        extensions: [
            "在麵團中加入蔬菜汁，製作彩色麵條。",
            "將麵團做成包子、水餃等其他麵食。"
        ],
        likes_count: 65,
        favorites_count: 30,
        completed_count: 21,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_20",
        title: "科學：浮在水上的紙船",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["science", "creative"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "利用紙張摺出小船，塗上蠟，並在水中進行競賽，觀察防水與浮力的關係。",
        hero_image_url: "/images/games/5_6_20.jpg",
        tags: ["浮力", "防水", "摺紙"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "摺紙或圖畫紙",
            "蠟筆或蠟燭",
            "大水盆或浴缸",
            "吸管（當作風）"
        ],
        steps: [
            "家長教孩子摺一個簡單的紙船。",
            "讓孩子用蠟筆在船體上塗抹，將船體『防水』。",
            "將船放在水面上，用吸管吹氣，讓船前進。",
            "觀察有塗蠟和沒塗蠟的船在水中的差異。",
            "向孩子解釋：蠟像一件雨衣，可以防止船濕掉，船才能浮得久。"
        ],
        benefits: [
            "學習基礎的防水與浮力原理。",
            "訓練口腔氣流控制與摺紙精細動作。",
            "激發對水的探索慾望。"
        ],
        extensions: [
            "在紙船上加上桅杆或帆，觀察風對船速的影響。",
            "用不同材質的紙（如報紙、卡紙）摺船，觀察浮力差異。"
        ],
        likes_count: 58,
        favorites_count: 25,
        completed_count: 16,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_21",
        title: "音樂：小小指揮家",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["music", "creative"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "播放交響樂或純音樂，讓孩子學習用手勢、表情來指揮音樂的速度、大小聲和情感，訓練身體表達。",
        hero_image_url: "/images/games/5_6_21.jpg",
        tags: ["音樂", "身體表達", "情感"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "手機或音響",
            "不同風格的音樂（交響樂、爵士樂、搖滾樂）"
        ],
        steps: [
            "家長先示範指揮的基本手勢（例如：手高舉代表大聲、手慢慢放下代表慢速）。",
            "播放音樂，讓孩子嘗試用手勢控制音樂的強弱、快慢。",
            "鼓勵孩子用表情和身體動作來表達音樂的情感（例如：歡樂、悲傷、緊張）。",
            "家長可以扮演樂手，假裝依照孩子的指揮演奏。",
            "換孩子來當觀眾，讓家長來指揮。"
        ],
        benefits: [
            "培養對音樂要素（節奏、音量、情感）的感受力。",
            "訓練身體動作與表情的表達能力。",
            "激發創造力與想像力。"
        ],
        extensions: [
            "讓孩子指揮家中的寵物或玩具，變成『動物樂隊』。",
            "將指揮手勢變成一套『暗語』，只有親子才懂。"
        ],
        likes_count: 50,
        favorites_count: 20,
        completed_count: 14,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_22",
        title: "邏輯：數學圖案找規律",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["logic", "language"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "設計一系列由圖案、顏色、數量組成的序列，讓孩子找出規律並填補空格，訓練抽象思維。",
        hero_image_url: "/images/games/5_6_22.jpg",
        tags: ["規律", "邏輯", "抽象思維"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "圖案卡片或紙筆",
            "積木或鈕扣（當作輔助）"
        ],
        steps: [
            "家長先設計一個規律：例如：「紅圓圈、藍方塊、紅圓圈、藍方塊、？」。",
            "讓孩子觀察規律，說出下一個圖案是什麼。",
            "逐漸增加規律的複雜度：例如：「一個蘋果、兩個香蕉、三個蘋果、四個香蕉、？」。",
            "讓孩子自己設計一個規律，讓家長來猜。",
            "可以將規律變成一套『舞蹈動作』，讓孩子跟著跳。"
        ],
        benefits: [
            "訓練觀察力、歸納與推理的邏輯思維。",
            "提升抽象概念與模式識別能力。",
            "培養專注力與解決問題的能力。"
        ],
        extensions: [
            "將遊戲變成『規律接力賽』，每人輪流接續規律。",
            "用聲音或節奏來設計規律，增加難度。"
        ],
        likes_count: 62,
        favorites_count: 28,
        completed_count: 19,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_23",
        title: "語言：看圖說故事",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["language", "creative"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "準備一系列圖片（無關聯），讓孩子依序將圖片串聯起來，編造一個完整且有邏輯的故事。",
        hero_image_url: "/images/games/5_6_23.jpg",
        tags: ["敘事能力", "語言", "想像力"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "圖片卡片 5–8 張（例如：月亮、汽車、魚、鞋子）"
        ],
        steps: [
            "將圖片打亂，讓孩子隨意選取一張當作故事的開頭。",
            "讓孩子根據第一張圖，說出一個句子或一段話。",
            "接著抽出第二張圖，要求孩子將第一段故事與第二張圖連結起來。",
            "持續抽取圖片，直到所有圖片都納入故事中。",
            "鼓勵孩子運用連接詞（例如：因為、所以、然後）。"
        ],
        benefits: [
            "訓練邏輯連貫與口語敘事能力。",
            "提升想像力與情境創造。",
            "豐富詞彙量與句子結構。"
        ],
        extensions: [
            "將圖片順序隨機排列，增加故事邏輯的挑戰。",
            "用錄音筆或手機將孩子的故事錄下來。"
        ],
        likes_count: 55,
        favorites_count: 23,
        completed_count: 16,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_24",
        title: "體育：袋鼠跳跳樂",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["sports", "sensory"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 10,
        summary: "利用舊枕頭套或大購物袋，讓孩子將雙腳套入，進行袋鼠跳競賽，訓練腿部大肌肉與爆發力。",
        hero_image_url: "/images/games/5_6_24.jpg",
        tags: ["爆發力", "大肌肉", "協調性"],
        flags: {
            requires_purchase: false,
            indoor_friendly: false,
            outdoor_friendly: true,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "舊枕頭套或大購物袋 2 個",
            "碼表或計時器",
            "起點與終點標誌"
        ],
        steps: [
            "在空曠的場地設置起點和終點。",
            "讓孩子將雙腳套入枕頭套中，雙手抓著袋子的兩端。",
            "家長先示範袋鼠跳的動作。",
            "讓孩子從起點跳到終點，並進行計時。",
            "進階：在賽道上設置簡單的障礙物（例如：跳過一個水瓶）。"
        ],
        benefits: [
            "訓練腿部大肌肉的力量與爆發力。",
            "增進身體協調與平衡感。",
            "體驗競賽的樂趣與運動精神。"
        ],
        extensions: [
            "將遊戲變成團隊接力賽。",
            "規定只能用單腳跳，增加難度。"
        ],
        likes_count: 68,
        favorites_count: 31,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_25",
        title: "音樂：小小 DJ 混音",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["music", "creative"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用兩個手機或音響，同時播放不同節奏的音樂，讓孩子感受混音的樂趣，並嘗試找出和諧或衝突的組合。",
        hero_image_url: "/images/games/5_6_25.jpg",
        tags: ["音樂", "混音", "創造力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "手機或音響 2 個",
            "不同風格的音樂（古典、電子、兒歌、搖滾）"
        ],
        steps: [
            "同時播放兩種不同節奏或曲風的音樂。",
            "讓孩子聽一聽，問他：「你覺得哪兩種音樂混在一起很好聽？」、「哪兩種聽起來很奇怪？」",
            "讓孩子嘗試調整兩個音樂的音量大小，感受音量對音樂的影響。",
            "讓孩子自己選擇兩首音樂，當一個小小 DJ 進行混音。",
            "引導孩子用身體跟著混音跳舞。"
        ],
        benefits: [
            "培養對音樂結構與和諧度的感受力。",
            "訓練聽覺專注與分辨能力。",
            "激發音樂創造與想像力。"
        ],
        extensions: [
            "將遊戲變成『聲音層次堆疊』：先放一個背景音樂，再疊加一個節奏聲。",
            "用口技或身體打擊樂來代替其中一個音源。"
        ],
        likes_count: 53,
        favorites_count: 21,
        completed_count: 15,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_26",
        title: "邏輯：顏色魔術方塊（積木版）",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["logic", "spatial"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 20,
        summary: "利用積木或彩色方塊，讓孩子將混亂的顏色重新歸位，組成單色方塊，訓練空間與色彩邏輯。",
        hero_image_url: "/images/games/5_6_26.jpg",
        tags: ["空間邏輯", "顏色分類", "抽象思維"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "6 面不同顏色的方塊積木（可自製）或簡易魔術方塊"
        ],
        steps: [
            "家長先將積木顏色打亂。",
            "讓孩子嘗試用最少步數，將一個積木的其中一個面變成單一顏色。",
            "進階：挑戰將整個積木變成六個單一顏色面。",
            "鼓勵孩子大聲說出他移動的邏輯和順序。",
            "如果孩子太挫折，可以從 2x2 的簡易魔術方塊開始練習。"
        ],
        benefits: [
            "訓練視覺空間組織能力。",
            "培養系統化、逐步推理的邏輯思維。",
            "提升專注力與耐心。"
        ],
        extensions: [
            "將遊戲變成『顏色配對』：將積木某個面變成特定顏色。",
            "用數字或圖案代替顏色，增加辨識難度。"
        ],
        likes_count: 65,
        favorites_count: 30,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_27",
        title: "藝術：手指印畫創意",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["art", "sensory"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 20,
        summary: "利用手指頭沾取顏料蓋印在紙上，再用畫筆或彩色筆加上細節，創造出手指印畫。",
        hero_image_url: "/images/games/5_6_27.jpg",
        tags: ["觸覺", "繪畫", "創造力"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "high",
            need_freezer: false
        },
        materials: [
            "安全可水洗顏料",
            "圖畫紙",
            "濕布或紙巾（清潔用）",
            "彩色筆"
        ],
        steps: [
            "家長先示範用不同手指沾取不同顏色，在紙上蓋印。",
            "讓孩子自由地用手指創造圓點、線條等圖案。",
            "等顏料稍乾後，引導孩子用彩色筆在指印上加上眼睛、腳、翅膀，變成小動物。",
            "可以創作一幅『手指印動物園』。",
            "完成後，讓孩子說說看他的手指印畫了什麼故事。"
        ],
        benefits: [
            "提供豐富的觸覺感官經驗。",
            "訓練手指的控制與協調。",
            "激發無限的想像力與創作樂趣。"
        ],
        extensions: [
            "用腳趾頭或手掌蓋印，變成更大的圖案。",
            "用蔬菜或水果切塊當作印章，進行蓋印畫。"
        ],
        likes_count: 68,
        favorites_count: 32,
        completed_count: 22,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_28",
        title: "感官：冰凍寶藏挖掘",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["sensory", "science"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 60,
        play_minutes: 20,
        summary: "將小玩具、樹葉等物品放入水中冰凍成大冰塊，讓孩子利用溫水、鹽巴等工具將寶藏『挖掘』出來，感受溫度與物質變化。",
        hero_image_url: "/images/games/5_6_28.jpg",
        tags: ["溫度", "感官", "科學"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: true
        },
        materials: [
            "小玩具、樹葉、亮片等",
            "大容器",
            "水",
            "溫水、鹽巴、滴管、小湯匙"
        ],
        steps: [
            "家長先將玩具放入容器中，注水後放入冷凍庫冰凍。",
            "將冰塊從容器中取出，放在大托盤上。",
            "提供孩子溫水和鹽巴，引導孩子用滴管滴在冰塊上，觀察冰塊融化的速度。",
            "讓孩子用小湯匙或鈍器輕輕敲打冰塊，試著將寶藏挖出來。",
            "向孩子解釋：鹽巴可以讓冰塊更快融化，溫水也可以幫助融化。"
        ],
        benefits: [
            "提供豐富的溫度與觸覺感官刺激。",
            "初步了解水的凝固與融化原理。",
            "訓練手部操作與問題解決能力。"
        ],
        extensions: [
            "在水中加入食用色素，變成彩色冰塊。",
            "將遊戲變成競賽，看誰最快挖出寶藏。"
        ],
        likes_count: 65,
        favorites_count: 30,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_29",
        title: "語言：句子造句遊戲",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["language", "logic"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 10,
        summary: "家長說一個詞語，讓孩子用這個詞語造一個完整且有意義的句子，訓練詞彙理解和語法結構。",
        hero_image_url: "/images/games/5_6_29.jpg",
        tags: ["造句", "詞彙", "語法"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "無"
        ],
        steps: [
            "家長先說一個簡單的詞語，例如：「蘋果」。",
            "讓孩子用「蘋果」造一個完整的句子，例如：「我喜歡吃紅色的蘋果。」",
            "挑戰孩子使用不同類型的詞語（例如：動詞、形容詞、連接詞）。",
            "如果句子不完整或不通順，家長可以給予引導與修正。",
            "進階：讓孩子使用兩個或三個詞語來造句。"
        ],
        benefits: [
            "強化詞彙理解與語法應用。",
            "提升口語表達的流暢度與邏輯性。",
            "訓練快速應變與組織語言的能力。"
        ],
        extensions: [
            "將造句變成『情境造句』：例如：在『下雨天』造一個句子。",
            "將造句變成『接龍』：前一句的結尾詞，是下一句的開頭詞。"
        ],
        likes_count: 50,
        favorites_count: 20,
        completed_count: 12,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_30",
        title: "運動：室內踢球射門",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["sports", "logic"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用軟球和紙箱或椅子，設置一個室內球門，讓孩子練習踢球射門，訓練腳部控制與目標導向。",
        hero_image_url: "/images/games/5_6_30.jpg",
        tags: ["腳部控制", "大肌肉", "目標導向"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "軟布球或塑膠球",
            "椅子、紙箱或積木（當作球門）",
            "紙膠帶（劃定射門線）"
        ],
        steps: [
            "將椅子或紙箱設置成一個簡單的球門。",
            "劃定一個射門線，與球門保持適當距離。",
            "家長先示範如何用腳輕輕將球踢進球門。",
            "讓孩子嘗試用不同腳踢球，練習腳部控制。",
            "進階：在球門前設置障礙物（例如：水瓶），讓孩子練習繞過障礙後射門。"
        ],
        benefits: [
            "訓練腳部大肌肉與控制力。",
            "增進手眼協調能力。",
            "培養目標導向與運動精神。"
        ],
        extensions: [
            "將遊戲變成『守門員』挑戰，家長或另一位孩子當守門員。",
            "用不同大小的球，感受踢擊難度的變化。"
        ],
        likes_count: 60,
        favorites_count: 28,
        completed_count: 19,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_31",
        title: "棋盤遊戲：自製多米諾骨牌",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["boardgame", "fine_motor"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 30,
        play_minutes: 20,
        summary: "利用厚紙板或積木製作骨牌，讓孩子練習排成各種複雜的路線，訓練專注力、耐心和精細動作。",
        hero_image_url: "/images/games/5_6_31.jpg",
        tags: ["精細動作", "耐心", "桌遊"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "厚紙板或木製積木 30 塊以上",
            "彩色筆或貼紙"
        ],
        steps: [
            "家長與孩子一起將紙板裁切成骨牌大小，並用彩色筆裝飾。",
            "家長先示範如何讓骨牌保持間距，慢慢地排成直線。",
            "讓孩子嘗試排出 S 型、圓形等彎曲路線。",
            "挑戰：排完所有骨牌後，輕輕推倒第一個，觀察連鎖反應。",
            "可以加入積木、小車等障礙物，讓骨牌路線更有趣。"
        ],
        benefits: [
            "訓練手部精細動作的穩定度與控制力。",
            "培養耐心、專注力與抗挫折能力。",
            "學習基礎的物理連鎖反應概念。"
        ],
        extensions: [
            "將遊戲變成『多米諾骨牌接龍』，每人輪流接續。",
            "將骨牌上寫上數字或字母，變成學習遊戲。"
        ],
        likes_count: 67,
        favorites_count: 31,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_32",
        title: "創意：石頭人與葉子裙",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["art", "creative"],
        cost_min: 0,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 20,
        summary: "利用石頭當作身體，搭配樹葉、花朵、樹枝等自然材料，創造出獨特的『自然藝術品』。",
        hero_image_url: "/images/games/5_6_32.jpg",
        tags: ["自然", "美勞", "想像力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: true,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "光滑的石頭數顆",
            "各種樹葉、花瓣、小樹枝",
            "膠水或泥土（當作黏著劑）",
            "白紙或紙板"
        ],
        steps: [
            "帶孩子到戶外收集各種自然材料。",
            "將石頭放在紙板上當作人或動物的身體。",
            "引導孩子利用葉子當作裙子、樹枝當作手、花瓣當作頭髮。",
            "用膠水或泥土將材料固定。",
            "完成後，為創作出來的『石頭人』命名並編故事。"
        ],
        benefits: [
            "親近大自然，認識植物的形狀與顏色。",
            "激發想像力與自然美學的創造。",
            "訓練手部操作與組織能力。"
        ],
        extensions: [
            "將遊戲變成『大自然拼貼畫』，用自然材料在紙上拼出圖案。",
            "用泥土捏出人形，再用自然材料裝飾。"
        ],
        likes_count: 60,
        favorites_count: 27,
        completed_count: 18,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_33",
        title: "語言：詞彙接龍挑戰",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["language", "logic"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 2,
        play_minutes: 10,
        summary: "從一個詞語開始，讓孩子接續說出下一個詞語，其第一個字必須是前一個詞語的最後一個字，訓練詞彙量與反應。",
        hero_image_url: "/images/games/5_6_33.jpg",
        tags: ["詞彙", "反應力", "語言邏輯"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "無"
        ],
        steps: [
            "家長先說一個詞語，例如：「蘋果」。",
            "孩子必須接續說出第一個字是「果」的詞語，例如：「果汁」。",
            "持續輪流接龍，直到其中一人接不出來為止。",
            "可以規定詞語的長度（例如：必須是兩個字或三個字）。",
            "進階：規定只能使用特定類別的詞語（例如：只能接食物）。"
        ],
        benefits: [
            "擴充詞彙量與文字的連結能力。",
            "訓練反應速度與專注力。",
            "提升語言邏輯與組織能力。"
        ],
        extensions: [
            "將遊戲變成『英文單字接龍』。",
            "將詞語接龍變成『句子接龍』，讓句子接續下去。"
        ],
        likes_count: 57,
        favorites_count: 25,
        completed_count: 16,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_5_6_34",
        title: "音樂：用身體彈鋼琴",
        age_bucket: "5-6",
        age_min: 5,
        age_max: 6,
        gender: "all",
        interests: ["music", "sports"],
        cost_min: 0,
        cost_max: 10,
        currency: "TWD",
        prep_minutes: 10,
        play_minutes: 15,
        summary: "用膠帶在地板上貼出鋼琴鍵盤（黑鍵、白鍵），讓孩子用腳或手踩踏，同時發出聲音，感受音高與身體的關係。",
        hero_image_url: "/images/games/5_6_34.jpg",
        tags: ["音高", "身體律動", "音樂"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "寬紙膠帶或彩色膠帶",
            "手機或平板（發出鋼琴聲音）",
            "彩色筆"
        ],
        steps: [
            "家長用膠帶在地板上貼出幾個連續的白鍵和黑鍵。",
            "在每個鍵上寫上對應的音名（Do、Re、Mi）或數字（1、2、3）。",
            "家長在手機上彈出一個音，讓孩子用腳踩到對應的琴鍵上。",
            "進階：讓孩子踩出簡單的旋律（例如：小星星）。",
            "可以讓孩子用身體當作鋼琴鍵，家長來踩孩子的身體部位發出聲音。"
        ],
        benefits: [
            "訓練聽覺與視覺的連結能力。",
            "初步認識音高與音階的概念。",
            "促進大肌肉與身體的協調性。"
        ],
        extensions: [
            "將遊戲變成『節奏跳躍』，規定必須用跳的方式移動。",
            "用不同顏色的琴鍵，代表不同的音色。"
        ],
        likes_count: 65,
        favorites_count: 30,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },

    // =====================
    // 7–8 歲：33 個遊戲 (7-8 歲著重於邏輯解謎、進階藝術、科學推理)
    // =====================
    {
        id: "game_7_8_11",
        title: "科學：水淨化實驗",
        age_bucket: "7-8",
        age_min: 7,
        age_max: 8,
        gender: "all",
        interests: ["science", "logic"],
        cost_min: 50,
        cost_max: 100,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 30,
        summary: "利用沙子、小石頭、活性碳等材料，製作一個簡易的水過濾系統，認識水循環與淨化原理。",
        hero_image_url: "/images/games/7_8_11.jpg",
        tags: ["水循環", "過濾", "科學實驗"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "medium",
            need_freezer: false
        },
        materials: [
            "透明塑膠瓶（裁切底部）",
            "棉花、紗布",
            "小石頭、粗沙、細沙",
            "活性碳（水族館可購）",
            "泥土、水（當作髒水）"
        ],
        steps: [
            "將塑膠瓶底部剪開，倒置，瓶口用棉花塞住。",
            "引導孩子依序放入紗布、小石頭、粗沙、細沙、活性碳、細沙、粗沙。",
            "在另一個容器中混合水與泥土，製作『髒水』。",
            "將髒水慢慢倒入過濾器中，觀察水流過每一層材料後的變化。",
            "向孩子解釋每一層材料的功能（例如：活性碳可以吸附雜質和氣味）。",
            "提醒：過濾後的水不能飲用。"
        ],
        benefits: [
            "了解水過濾與淨化過程的科學原理。",
            "訓練系統性思考與操作能力。",
            "培養環境保護意識。"
        ],
        extensions: [
            "嘗試用不同材料進行過濾，比較效果。",
            "討論水循環與節約用水的重要性。"
        ],
        likes_count: 78,
        favorites_count: 40,
        completed_count: 30,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_7_8_12",
        title: "邏輯：加密訊息解碼",
        age_bucket: "7-8",
        age_min: 7,
        age_max: 8,
        gender: "all",
        interests: ["logic", "language"],
        cost_min: 0,
        cost_max: 10,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 20,
        summary: "設計一個簡單的密碼表（例如：A=1, B=2），讓孩子根據加密的訊息進行解碼，訓練邏輯推理與數理應用。",
        hero_image_url: "/images/games/7_8_12.jpg",
        tags: ["密碼學", "邏輯", "語言應用"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "紙筆",
            "自製密碼表（字母/注音對應數字/符號）"
        ],
        steps: [
            "家長先設計一個簡單的密碼表（例如：注音『ㄅ』=1、英文『A』=★）。",
            "家長寫下一個加密的短訊息（例如：『1-2-3-4』）。",
            "讓孩子根據密碼表，將加密訊息解讀出來。",
            "完成後，讓孩子自己設計一個密碼表，將訊息加密給家長解碼。",
            "進階：使用凱撒密碼（字母向後位移 n 位）增加難度。"
        ],
        benefits: [
            "訓練觀察與對應的邏輯推理能力。",
            "提升專注力與解決問題的能力。",
            "培養對符號系統的理解。"
        ],
        extensions: [
            "將解碼訊息與尋寶遊戲結合，解開訊息才能找到下一個線索。",
            "用顏色或圖案代替數字與符號，增加變化性。"
        ],
        likes_count: 75,
        favorites_count: 35,
        completed_count: 25,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_7_8_13",
        title: "藝術：漫畫人物設計",
        age_bucket: "7-8",
        age_min: 7,
        age_max: 8,
        gender: "all",
        interests: ["art", "creative"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 30,
        summary: "教導孩子繪製漫畫人物的基礎比例、五官和表情，並創作一個屬於自己的漫畫英雄或反派角色。",
        hero_image_url: "/images/games/7_8_13.jpg",
        tags: ["繪畫", "角色設計", "創造力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "鉛筆、橡皮擦",
            "圖畫紙或漫畫稿紙",
            "彩色筆或色鉛筆"
        ],
        steps: [
            "家長先示範畫出漫畫人物頭部的基礎形狀（圓形或蛋形）。",
            "教導孩子五官的比例與位置。",
            "讓孩子嘗試繪製「開心」、「生氣」、「驚訝」三種不同表情。",
            "引導孩子設計一個角色的背景故事、特殊能力、服裝和配色。",
            "完成後，讓孩子介紹他的漫畫人物，並畫一個簡單的場景。"
        ],
        benefits: [
            "訓練繪畫技巧與人物比例概念。",
            "激發想像力與故事敘事能力。",
            "提升專注力與審美觀。"
        ],
        extensions: [
            "將角色設定變成『連環漫畫』，畫出一個短篇故事。",
            "挑戰用不同的畫風（例如：美式、日式）繪製同一個角色。"
        ],
        likes_count: 80,
        favorites_count: 42,
        completed_count: 32,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_7_8_14",
        title: "體育：室內氣球羽毛球",
        age_bucket: "7-8",
        age_min: 7,
        age_max: 8,
        gender: "all",
        interests: ["sports", "logic"],
        cost_min: 10,
        cost_max: 50,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 15,
        summary: "利用氣球代替羽毛球，用蒼蠅拍或紙板當作球拍，進行室內羽毛球遊戲，訓練手眼協調與控制力。",
        hero_image_url: "/images/games/7_8_14.jpg",
        tags: ["手眼協調", "大肌肉", "反應力"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "一顆氣球",
            "蒼蠅拍、紙板或書本（當作球拍）",
            "繩子或膠帶（當作球網）"
        ],
        steps: [
            "用繩子或膠帶在房間中央設置一個簡易的球網。",
            "家長與孩子各自站在球網兩邊。",
            "用球拍輕輕拍打氣球，目標是讓氣球飛過球網，掉落在對方場地。",
            "氣球落地或出界對方得分。",
            "鼓勵孩子嘗試不同的揮拍方式，並移動腳步追趕氣球。"
        ],
        benefits: [
            "訓練手眼協調與視覺追蹤能力。",
            "增進手臂與身體的大肌肉控制。",
            "培養專注力與快速反應能力。"
        ],
        extensions: [
            "用不同大小的氣球，感受擊球難度的變化。",
            "規定只能用單手、單腳或頭部擊球，增加難度。"
        ],
        likes_count: 73,
        favorites_count: 38,
        completed_count: 28,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_7_8_15",
        title: "音樂：流行歌改編創作",
        age_bucket: "7-8",
        age_min: 7,
        age_max: 8,
        gender: "all",
        interests: ["music", "language"],
        cost_min: 0,
        cost_max: 0,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 30,
        summary: "選擇一首孩子熟悉的流行歌，保留原有旋律，將歌詞改編成新的主題，訓練押韻和語言創作。",
        hero_image_url: "/images/games/7_8_15.jpg",
        tags: ["歌詞創作", "押韻", "語言應用"],
        flags: {
            requires_purchase: false,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "紙筆或電腦",
            "孩子熟悉的流行歌或兒歌"
        ],
        steps: [
            "與孩子一起選一首喜歡的歌，確定它的旋律和節奏。",
            "決定新的歌詞主題（例如：我的寵物、我的學校生活、我最喜歡的食物）。",
            "引導孩子嘗試將新詞語填入舊歌詞的空格中，確保字數和發音能對應。",
            "重點指導『押韻』的概念，讓歌詞聽起來更流暢。",
            "一起將改編後的歌唱出來，並錄音紀念。"
        ],
        benefits: [
            "訓練語言的押韻與節奏感。",
            "提升歌詞創作與敘事能力。",
            "培養音樂與文學結合的創造力。"
        ],
        extensions: [
            "將遊戲變成『即興創作』：規定 3 個關鍵詞，立即進行改編。",
            "為改編後的歌設計一個專屬的 CD 封面。"
        ],
        likes_count: 65,
        favorites_count: 30,
        completed_count: 20,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_7_8_16",
        title: "烹飪：自製健康水果冰棒",
        age_bucket: "7-8",
        age_min: 7,
        age_max: 8,
        gender: "all",
        interests: ["cooking", "science"],
        cost_min: 100,
        cost_max: 200,
        currency: "TWD",
        prep_minutes: 15,
        play_minutes: 60,
        summary: "利用新鮮水果、果汁或優格，自製健康冰棒，認識冰點與物質凝固的原理。",
        hero_image_url: "/images/games/7_8_16.jpg",
        tags: ["冰點", "烹飪", "健康飲食"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: true
        },
        materials: [
            "冰棒模具",
            "新鮮水果塊（例如：草莓、奇異果）",
            "果汁、優格或牛奶",
            "冰棒棍"
        ],
        steps: [
            "引導孩子將水果塊放入冰棒模具中。",
            "將果汁或優格倒入模具中。",
            "放入冰棒棍，蓋上蓋子或保鮮膜，放入冷凍庫。",
            "討論水變成冰塊需要多少時間、需要多低的溫度。",
            "等待冰棒凝固後，一起享用清涼健康的冰品。"
        ],
        benefits: [
            "了解水結冰與融化的物理變化。",
            "培養健康飲食與食物搭配的知識。",
            "訓練手部操作與耐心等待。"
        ],
        extensions: [
            "嘗試用鹽水或糖水做冰棒，觀察凝固速度是否不同（鹽水冰點較低）。",
            "將不同顏色的果汁分層倒入，製作彩色冰棒。"
        ],
        likes_count: 70,
        favorites_count: 35,
        completed_count: 25,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
    {
        id: "game_7_8_17",
        title: "桌遊：UNO 策略與計分",
        age_bucket: "7-8",
        age_min: 7,
        age_max: 8,
        gender: "all",
        interests: ["boardgame", "logic"],
        cost_min: 50,
        cost_max: 150,
        currency: "TWD",
        prep_minutes: 5,
        play_minutes: 20,
        summary: "學習 UNO 卡牌遊戲的規則，訓練快速反應、觀察力與基礎策略，並進行簡單的計分。",
        hero_image_url: "/images/games/7_8_17.jpg",
        tags: ["桌遊", "策略", "反應力"],
        flags: {
            requires_purchase: true,
            indoor_friendly: true,
            outdoor_friendly: false,
            messy_level: "low",
            need_freezer: false
        },
        materials: [
            "一套 UNO 卡牌",
            "紙筆（計分用）"
        ],
        steps: [
            "家長先講解卡牌的顏色、數字與功能牌的規則。",
            "進行遊戲時，鼓勵孩子觀察對手的出牌狀況，進行策略規劃（例如：保留功能牌、改變顏色）。",
            "學習遊戲結束後的計分方式（算手中剩下的牌的點數）。",
            "討論在不同情況下，應該出哪種牌才是最好的選擇。",
            "鼓勵孩子大聲說出『UNO！』"
        ],
        benefits: [
            "訓練反應速度與專注力。",
            "培養基礎的策略規劃與預測能力。",
            "學習遵守複雜的遊戲規則與計分邏輯。"
        ],
        extensions: [
            "嘗試加入其他規則（例如：疊加 +2 牌），增加遊戲變化性。",
            "將遊戲變成『團隊賽』，兩人一組合作出牌。"
        ],
        likes_count: 85,
        favorites_count: 45,
        completed_count: 35,
        created_at: "2025-11-21T00:00:00Z",
        updated_at: "2025-11-21T00:00:00Z"
    },
];