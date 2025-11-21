// list.js
// 讓列表頁：讀取 URL 篩選條件 → 過濾 GAMES → 排序 → 顯示卡片＋廣告

document.addEventListener("DOMContentLoaded", () => {
    // 安全檢查：確認有載入 games.js
    if (!window.GAMES || !Array.isArray(window.GAMES)) {
      console.error("GAMES 資料不存在，請確認有正確載入 games.js");
      return;
    }
  
    const listEl = document.getElementById("game-list");
    const countEl = document.getElementById("result-count");
    const sortSelect = document.getElementById("sort-select");
    const ageTextEl = document.getElementById("filter-age-text");
    const interestsTextEl = document.getElementById("filter-interests-text");
    const budgetTextEl = document.getElementById("filter-budget-text");
  
    if (!listEl) {
      console.error('找不到 #game-list 容器');
      return;
    }
  
    // 對照表：顯示用中文
    const AGE_LABELS = {
      "2-3": "2–3 歲",
      "3-4": "3–4 歲",
      "5-6": "5–6 歲",
      "7-8": "7–8 歲",
      "9-10": "9–10 歲",
      "11-12": "11–12 歲"
    };
  
    const INTEREST_LABELS = {
      art: "繪畫＆藝術",
      science: "科學實驗",
      sensory: "感覺統合",
      sports: "運動遊戲",
      language: "語言訓練",
      boardgame: "桌遊",
      balance: "平衡訓練",
      cooking: "親子料理",
      craft: "模型＆手作",
      project: "專題／專案",
      logic: "邏輯訓練",
      music: "音樂節奏",
      creative: "創意訓練"
    };
  
    const INTEREST_ICONS = {
        art: "🎨",
        science: "🧪",
        sensory: "🧊",
        sports: "⚽",
        language: "💬",
        boardgame: "🎲",
        balance: "⚖️",
        cooking: "🍳",
        craft: "📦",
        project: "📌",
        logic: "🧠",
        music: "🎵",
        creative: "✨"
      };

    // 🎨 關鍵字對照表 (優化版)：針對兒童風格與具體遊戲內容設定
    // 加入 cute, colorful, kids 等詞彙以確保風格一致
    const INTEREST_KEYWORDS = {
      art: "kids drawing,crayons,children painting,colorful art",
      science: "kids science experiment,magnifying glass,bubbles,education",
      sensory: "playdough,slime,sensory play,sand castle",
      sports: "kids running,ball game,playground,jumping",
      language: "children reading book,library,alphabet,storytelling",
      boardgame: "board game,dice,family playing cards,puzzle",
      balance: "kids yoga,balance beam,gymnastics,blocks",
      cooking: "kids baking,flour,kitchen,cookie",
      craft: "origami,paper craft,scissors,glue",
      project: "kids writing,desk,planning,notebook",
      logic: "chess,maze,building blocks,lego",
      music: "xylophone,kids singing,piano,musical instrument",
      creative: "colorful toys,imagination,costume,blocks"
    };
  
    // 1️⃣ 從網址讀取篩選條件
    function getFilterConfigFromURL() {
      const params = new URLSearchParams(window.location.search);
  
      const age = params.get("age") || null;              
      const gender = params.get("gender") || null;        
      const budgetMax = params.get("budget_max");         
      const timeMax = params.get("time_max");             
  
      let interests = params.getAll("interests");
      if (interests.length === 0) {
        const single = params.get("interests");
        if (single) {
          interests = single.split(",").map(s => s.trim()).filter(Boolean);
        }
      }
  
      const config = {
        age: age,
        gender: gender,
        interests: interests,
        budgetMax: budgetMax ? Number(budgetMax) : null,
        timeMax: timeMax ? Number(timeMax) : null
      };
  
      return config;
    }
  
    // 2️⃣ 依照 config 過濾 GAMES
    function applyFilters(games, config) {
      return games.filter(game => {
        // 年齡篩選
        if (config.age && game.age_bucket !== config.age) return false;
        // 性別篩選
        if (config.gender && config.gender !== "all") {
          if (game.gender !== "all" && game.gender !== config.gender) return false;
        }
        // 興趣篩選
        if (config.interests && config.interests.length > 0) {
          const gameInterests = Array.isArray(game.interests) ? game.interests : [];
          const hasCommon = config.interests.some(i => gameInterests.includes(i));
          if (!hasCommon) return false;
        }
        // 預算上限
        if (typeof config.budgetMax === "number" && !Number.isNaN(config.budgetMax)) {
          const gameCostMax = typeof game.cost_max === "number" ? game.cost_max : 999999;
          if (gameCostMax > config.budgetMax) return false;
        }
        // 遊玩時間上限
        if (typeof config.timeMax === "number" && !Number.isNaN(config.timeMax)) {
          const play = game.play_minutes || 0;
          if (play > config.timeMax) return false;
        }
        return true;
      });
    }
  
    // 3️⃣ 更新上方「目前條件」文字
    function updateFilterSummary(config) {
      if (ageTextEl) ageTextEl.textContent = (config.age && AGE_LABELS[config.age]) ? AGE_LABELS[config.age] : "全部年齡";
      
      if (interestsTextEl) {
        if (config.interests && config.interests.length > 0) {
          const labels = config.interests.map(code => INTEREST_LABELS[code] || code);
          interestsTextEl.textContent = labels.join("、");
        } else {
          interestsTextEl.textContent = "全部興趣";
        }
      }
  
      if (budgetTextEl) {
        if (typeof config.budgetMax === "number" && !Number.isNaN(config.budgetMax)) {
          budgetTextEl.textContent = `0–${config.budgetMax} 元`;
        } else {
          budgetTextEl.textContent = "0–300 元";
        }
      }
    }
  
    // 4️⃣ 小工具：格式化顯示用文字
    function formatCost(game) {
      if (typeof game.cost_min === "number" && typeof game.cost_max === "number") {
        if (game.cost_min === 0 && game.cost_max === 0) return "💰 免費";
        if (game.cost_min === 0) return `💰 <${game.cost_max}元`;
        if (game.cost_min === game.cost_max) return `💰 約${game.cost_max}元`;
        return `💰 ${game.cost_min}–${game.cost_max}元`;
      }
      return "💰 成本不明";
    }
  
    function formatTime(game) {
      const prep = game.prep_minutes || 0;
      const play = game.play_minutes || 0;
      if (!prep && !play) return "";
      if (!prep) return `⏱ 遊玩 ${play}分`;
      if (!play) return `⏱ 準備 ${prep}分`;
      return `⏱ 準備${prep}分 · 遊玩${play}分`;
    }
  
    function getMainInterest(game) {
      if (Array.isArray(game.interests) && game.interests.length > 0) {
        return game.interests[0];
      }
      return null;
    }
  
    // ⚡️ 產生固定的 Hash ID 
    // 確保同一個 game.id 永遠產生同一個數字，讓圖片在不同頁面保持一致
    function generateLockId(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      return Math.abs(hash) % 1000; // 取絕對值並限制在 0-1000 之間
    }
  
    // 5️⃣ 排序
    function sortGames(games, sortKey) {
      const list = [...games];
      switch (sortKey) {
        case "popular":
          list.sort((a, b) => (b.likes_count || 0) - (a.likes_count || 0));
          break;
        case "prep":
          list.sort((a, b) => (a.prep_minutes || 0) - (b.prep_minutes || 0));
          break;
        case "play":
          list.sort((a, b) => (a.play_minutes || 0) - (b.play_minutes || 0));
          break;
        case "cost":
          list.sort((a, b) => (a.cost_max || 0) - (b.cost_max || 0));
          break;
        default:
          list.sort((a, b) => (b.likes_count || 0) - (a.likes_count || 0));
      }
      return list;
    }
  
    // 6️⃣ 組卡片 HTML (圖片邏輯已修正)
  
    // 6️⃣ 組卡片 HTML（改成 emoji 當縮圖，不再載入外部圖片）
    function buildGameCardHTML(game) {
        const ageLabel =
          AGE_LABELS[game.age_bucket] ||
          `${game.age_min || "?"}–${game.age_max || "?"} 歲`;
  
        const interests = Array.isArray(game.interests) ? game.interests : [];
        const mainInterest = getMainInterest(game);
        const mainInterestLabel = mainInterest
          ? INTEREST_LABELS[mainInterest] || "綜合"
          : "綜合";
        const otherTags = interests
          .slice(1, 3)
          .map((code) => INTEREST_LABELS[code] || code);
  
        const costText = formatCost(game);
        const timeText = formatTime(game);
  
        // 🎯 用興趣決定 emoji，沒有就給一顆星
        const icon =
          mainInterest && INTEREST_ICONS[mainInterest]
            ? INTEREST_ICONS[mainInterest]
            : "⭐";
  
        // 🧸 縮圖：純漸層背景＋ emoji，不用 <img>
        const imageHTML = `
          <div
            class="w-28 h-28 md:w-36 md:h-36 rounded-xl bg-gradient-to-tr from-sky-100 to-emerald-100 flex items-center justify-center text-4xl md:text-5xl shrink-0 shadow-sm border border-slate-100"
          >
            <span>${icon}</span>
          </div>
        `;
  
        // 標籤
        let tagHTML = `
          <span class="px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 text-[10px] md:text-xs font-medium">
            ${ageLabel}
          </span>
          <span class="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[10px] md:text-xs font-medium">
            ${mainInterestLabel}
          </span>`;
  
        otherTags.forEach((label) => {
          tagHTML += `
            <span class="hidden sm:inline-block px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] md:text-xs">
              ${label}
            </span>`;
        });
  
        const desc =
          game.summary ||
          "這是一個適合在家進行的親子遊戲，能幫助孩子在玩樂中學習。";
  
        return `
          <article
            class="rounded-2xl bg-white p-3 md:p-4 flex gap-3 md:gap-5 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-orange-200 relative overflow-hidden"
            onclick="window.location.href='detail.html?id=${encodeURIComponent(
              game.id
            )}'"
          >
            <!-- 縮圖（emoji） -->
            ${imageHTML}
  
            <!-- 內容 -->
            <div class="flex-1 flex flex-col h-28 md:h-36 justify-between py-0.5">
              <div>
                <div class="flex items-start justify-between gap-2 mb-1">
                  <h3 class="text-base md:text-xl font-bold text-slate-800 leading-snug group-hover:text-orange-600 transition-colors line-clamp-1">
                    ${game.title}
                  </h3>
                  <!-- 愛心按鈕（純視覺切換） -->
                  <button
                    type="button"
                    class="text-slate-300 hover:text-pink-500 hover:scale-110 transition-all"
                    onclick="event.stopPropagation(); this.classList.toggle('text-pink-500'); this.classList.toggle('text-slate-300');"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </button>
                </div>
                
                <div class="flex flex-wrap gap-2 mb-2">
                  ${tagHTML}
                </div>
  
                <p class="text-xs md:text-sm text-slate-500 line-clamp-2 md:line-clamp-2 leading-relaxed mb-2">
                  ${desc}
                </p>
              </div>
  
              <div class="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-2 mt-auto">
                <div class="flex items-center gap-3">
                  <span class="flex items-center gap-1">
                    ${costText}
                  </span>
                  <span class="hidden md:flex items-center gap-1 border-l border-slate-200 pl-3">
                    ${timeText}
                  </span>
                </div>
                <span class="text-orange-500 font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                  開始玩 ➜
                </span>
              </div>
            </div>
          </article>
        `;
      }
  
    // 7️⃣ 廣告 placeholder
    function buildAdCardHTML(index) {
      const title = index === 4 ? "給爸媽的專屬優惠" : "兒童讀物推薦";
      const desc = "根據您目前的篩選（7-8歲、科學），我們推薦這些精選的教具與書籍。";
  
      return `
        <article class="rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-200 p-3 md:p-4 flex gap-3 md:gap-5 relative overflow-hidden opacity-90 hover:opacity-100 transition">
          <div class="absolute top-0 right-0 px-3 py-1 bg-slate-200 text-[10px] text-slate-600 font-bold rounded-bl-lg z-10">
            SPONSORED
          </div>
          <div class="w-28 h-28 md:w-36 md:h-36 rounded-xl bg-slate-200 flex items-center justify-center text-4xl text-slate-400 shrink-0">
            🛍️
          </div>
          <div class="flex-1 flex flex-col justify-center gap-2">
            <h3 class="text-base md:text-lg font-bold text-slate-700">
              ${title}
            </h3>
            <p class="text-xs md:text-sm text-slate-500 leading-relaxed">
              ${desc}
            </p>
            <button class="text-xs font-bold text-slate-400 text-left mt-1 hover:text-orange-500 hover:underline transition-colors">
              查看詳情 ↗
            </button>
          </div>
        </article>
      `;
    }
  
    // 8️⃣ 主渲染流程
    const filterConfig = getFilterConfigFromURL();
    updateFilterSummary(filterConfig);
  
    function renderGames() {
      const sortKey = sortSelect ? sortSelect.value : "popular";
  
      const filtered = applyFilters(window.GAMES, filterConfig);
      const sorted = sortGames(filtered, sortKey);
  
      if (countEl) {
        countEl.textContent = sorted.length.toString();
      }
  
      listEl.innerHTML = "";
  
      if (sorted.length === 0) {
        listEl.innerHTML = `
          <div class="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300">
            <div class="text-5xl mb-4">🦕</div>
            <h3 class="text-lg font-bold text-slate-700">哎呀！找不到符合的遊戲</h3>
            <p class="text-sm text-slate-500 mt-2">試著調整上方的篩選條件看看？</p>
            <button onclick="window.history.back()" class="mt-6 px-6 py-2.5 bg-orange-500 text-white rounded-full text-sm font-bold hover:bg-orange-600 shadow-lg shadow-orange-200 transition-all hover:-translate-y-1">
              回上一頁修改條件
            </button>
          </div>
        `;
        return;
      }
  
      sorted.forEach((game, idx) => {
        const displayIndex = idx + 1;
        if (displayIndex === 4 || displayIndex === 9) {
          listEl.insertAdjacentHTML("beforeend", buildAdCardHTML(displayIndex));
        }
        listEl.insertAdjacentHTML("beforeend", buildGameCardHTML(game));
      });
    }
  
    // 9️⃣ 排序事件
    if (sortSelect) {
      sortSelect.addEventListener("change", () => {
        renderGames();
      });
    }
  
    // 🔟 預設載入一次
    renderGames();
  });