// detail.js
// 依照網址中的 id 從 GAMES 找出對應遊戲，顯示詳細內容

document.addEventListener("DOMContentLoaded", () => {
    const statusEl = document.getElementById("detail-status");
    const detailEl = document.getElementById("game-detail");
  
    if (!detailEl) return;
  
    // 安全檢查：確認 games.js 有載入
    if (!window.GAMES || !Array.isArray(window.GAMES)) {
      if (statusEl) {
        statusEl.textContent = "找不到遊戲資料，請確認有正確載入 games.js";
      }
      console.error("GAMES 資料不存在，請確認有正確載入 games.js");
      return;
    }
  
    // 🎨 關鍵字對照表 (與 list.js 同步，確保風格一致)
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
  
    // 對照表
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
      // ===== 收藏相關：localStorage 工具 =====
      const FAVORITES_KEY = "homeplay_favorites";

      function getFavoriteIds() {
        try {
          const raw = localStorage.getItem(FAVORITES_KEY);
          if (!raw) return [];
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            return parsed.filter((id) => typeof id === "string");
          }
        } catch (e) {
          console.warn("解析收藏資料失敗", e);
        }
        return [];
      }
  
      function saveFavoriteIds(ids) {
        const unique = Array.from(new Set(ids));
        try {
          localStorage.setItem(FAVORITES_KEY, JSON.stringify(unique));
        } catch (e) {
          console.warn("寫入收藏資料失敗", e);
        }
        return unique;
      }
  
      function isFavorite(id) {
        const current = getFavoriteIds();
        return current.includes(id);
      }
  
      function addFavorite(id) {
        const current = getFavoriteIds();
        current.push(id);
        return saveFavoriteIds(current);
      }
  
      function removeFavorite(id) {
        const current = getFavoriteIds();
        const next = current.filter((x) => x !== id);
        return saveFavoriteIds(next);
      }
  
    // ⚡️ 產生固定的 Hash ID (與 list.js 同步)
    function generateLockId(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      return Math.abs(hash) % 1000;
    }
  
    // 從網址取得 id
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get("id");
  
    if (!gameId) {
      if (statusEl) {
        statusEl.textContent = "沒有指定遊戲 id，請從列表頁重新選擇遊戲。";
      }
      return;
    }
  
    const game = window.GAMES.find((g) => g.id === gameId);
  
    if (!game) {
      if (statusEl) {
        statusEl.innerHTML = `
          <div class="text-center py-10">
            <div class="text-4xl mb-2">😢</div>
            <p>找不到這個遊戲，可能已被移除或尚未建立。</p>
            <a href="list.html" class="text-orange-500 underline mt-2 inline-block">回遊戲列表</a>
          </div>`;
      }
      return;
    }
  
    // 找到了遊戲，清空狀態
    if (statusEl) statusEl.innerHTML = "";
  
    // ===== 工具函式 =====
    function formatAge(game) {
      if (game.age_bucket && AGE_LABELS[game.age_bucket]) {
        return AGE_LABELS[game.age_bucket];
      }
      return `${game.age_min || "?"}–${game.age_max || "?"} 歲`;
    }
  
    function formatCost(game) {
      if (typeof game.cost_min === "number" && typeof game.cost_max === "number") {
        if (game.cost_min === 0 && game.cost_max === 0) return "免費（家中物品即可）";
        if (game.cost_min === 0) return `約 NT$${game.cost_max} 以內`;
        if (game.cost_min === game.cost_max) return `約 NT$${game.cost_max}`;
        return `約 NT$${game.cost_min}–${game.cost_max}`;
      }
      return "成本不明";
    }
  
    function formatTime(game) {
      const prep = game.prep_minutes || 0;
      const play = game.play_minutes || 0;
      if (!prep && !play) return "自由安排";
      if (!prep) return `遊玩約 ${play} 分鐘`;
      if (!play) return `準備約 ${prep} 分鐘`;
      return `準備 ${prep} 分 · 遊玩 ${play} 分`;
    }
  
    function getMainInterest(game) {
      return Array.isArray(game.interests) && game.interests.length > 0
        ? game.interests[0]
        : null;
    }
  
    function getInterestChips(game) {
      const interests = Array.isArray(game.interests) ? game.interests : [];
      if (interests.length === 0) return "";
  
      return interests
        .map((code, index) => {
          const label = INTEREST_LABELS[code] || code;
          if (index === 0) {
            return `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-100 font-medium">🎯 ${label}</span>`;
          }
          return `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-600 border border-slate-200">${label}</span>`;
        })
        .join(" ");
    }
  
    function buildMaterialsHTML(game) {
      const materials = game.materials;
      if (!materials || !materials.length)
        return `<p class="text-sm text-slate-400 italic">未填寫材料</p>`;
      return `
        <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700 marker:text-sky-300">
          ${materials
            .map((item) => `<li>${typeof item === "string" ? item : item.name}</li>`)
            .join("")}
        </ul>`;
    }
  
    function buildStepsHTML(game) {
      const steps = game.steps;
      if (!steps || !steps.length)
        return `<p class="text-sm text-slate-400 italic">未填寫步驟</p>`;
      return `
        <ol class="relative border-l-2 border-orange-100 ml-3 space-y-6 my-2">
          ${steps
            .map(
              (step, idx) => `
            <li class="ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -left-[13px] ring-4 ring-white text-orange-600 text-xs font-bold">
                ${idx + 1}
              </span>
              <p class="text-sm md:text-base text-slate-700 leading-relaxed">${
                typeof step === "string" ? step : step.title
              }</p>
            </li>
          `
            )
            .join("")}
        </ol>`;
    }
  
    function buildBenefitsHTML(game) {
      const benefits = game.benefits;
      if (!benefits || !benefits.length) return "";
      return `
        <ul class="space-y-2 text-sm text-slate-700">
          ${benefits
            .map(
              (b) => `
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 mt-0.5">✔</span>
              <span>${typeof b === "string" ? b : b.title}</span>
            </li>
          `
            )
            .join("")}
        </ul>`;
    }
  
    function buildTagsHTML(game) {
      const tags = Array.isArray(game.tags) ? game.tags : [];
      return tags
        .map((tag) => `<span class="text-xs text-slate-400">#${tag}</span>`)
        .join(" ");
    }
  
    // 🔥 圖片邏輯 🔥 改成純 emoji 卡片，不再載入外部圖片
   const mainInterest = getMainInterest(game);
   const icon =
     mainInterest && INTEREST_ICONS[mainInterest]
       ? INTEREST_ICONS[mainInterest]
       : "⭐";

   const heroBlock = `
     <div
       id="game-hero"
       class="w-full md:w-80 h-56 md:h-64 rounded-2xl bg-gradient-to-tr from-sky-100 to-emerald-100 shadow-sm shrink-0 border border-slate-100 relative flex items-center justify-center group cursor-zoom-in transition-transform duration-300"
     >
       <span class="text-6xl md:text-7xl drop-shadow-sm">
         ${icon}
       </span>

       <div
         class="absolute bottom-3 right-3 px-2 py-1 rounded-full bg-white/80 text-[11px] text-slate-500 flex items-center gap-1"
       >
         <span class="hidden md:inline">點一下可以放大</span>
         <span class="md:hidden">點一下放大</span>
       </div>
     </div>
   `;
  
    const summaryText =
      game.summary ||
      "這是一個適合在家進行的親子遊戲，能讓孩子在安全又熟悉的環境中，透過玩樂自然學習。";
  
    // ===== 渲染詳細頁 HTML =====
    detailEl.innerHTML = `
      <!-- 上半部：Header 卡片 -->
      <article class="bg-white rounded-3xl p-5 md:p-8 shadow-sm border border-orange-100 flex flex-col md:flex-row gap-6 md:gap-8">
        ${heroBlock}
  
        <div class="flex-1 flex flex-col justify-center">
          <div class="flex flex-wrap items-center gap-3 mb-3">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
              🎂 ${formatAge(game)}
            </span>
            ${getInterestChips(game)}
          </div>
          
          <h1 class="text-2xl md:text-3xl font-bold text-slate-800 mb-3 leading-tight">
            ${game.title}
          </h1>
          
          <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
            ${summaryText}
          </p>
  
          <div class="flex flex-wrap gap-3 text-sm text-slate-500 mb-6">
            ${buildTagsHTML(game)}
          </div>
  
          <!-- 資訊方塊 -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div class="bg-slate-50 rounded-xl p-3 border border-slate-100">
              <div class="text-xs text-slate-400 mb-1">時間</div>
              <div class="text-sm font-semibold text-slate-700">${formatTime(game)}</div>
            </div>
            <div class="bg-slate-50 rounded-xl p-3 border border-slate-100">
              <div class="text-xs text-slate-400 mb-1">花費</div>
              <div class="text-sm font-semibold text-slate-700">${formatCost(game)}</div>
            </div>
            <!-- 收藏 / 愛心：分成兩個功能 -->
            <div class="col-span-2 md:col-span-1 bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col gap-2">
              <div class="text-xs text-slate-400 mb-1">互動</div>
              <div class="flex flex-wrap gap-2">
                <!-- 愛心：表示你喜歡這個遊戲 -->
                <button
                  id="like-button"
                  type="button"
                  class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border text-xs md:text-sm bg-white text-slate-500 border-slate-200 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600 transition-colors"
                >
                  <span class="text-base">♥</span>
                  <span>給愛心</span>
                  <span class="text-[11px] text-slate-400">(${game.likes_count || 0})</span>
                </button>
  
                <!-- 收藏：之後串會員，可以在「我的收藏」中查看 -->
                <button
                  id="favorite-button"
                  type="button"
                  class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border text-xs md:text-sm bg-white text-slate-500 border-slate-200 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-600 transition-colors"
                >
                  <span class="text-base">★</span>
                  <span>加入收藏</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
  
      <!-- 下半部：三欄資訊 -->
      <div class="grid md:grid-cols-12 gap-6 mt-6 md:mt-8">
        
        <!-- 左側：材料與好處 -->
        <div class="md:col-span-4 space-y-6">
          <section class="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-sky-100">
            <h2 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span class="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-lg">🧺</span>
              準備材料
            </h2>
            ${buildMaterialsHTML(game)}
          </section>
  
          <section class="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-emerald-100">
            <h2 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-lg">🌱</span>
              學習好處
            </h2>
            ${buildBenefitsHTML(game)}
          </section>
        </div>
  
        <!-- 右側：步驟 -->
        <div class="md:col-span-8">
          <section class="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-orange-100 h-full">
            <h2 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 pb-4 border-b border-orange-50">
              <span class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-lg">🎲</span>
              遊戲步驟
            </h2>
            ${buildStepsHTML(game)}
  
            ${
              game.extensions && game.extensions.length
                ? `
              <div class="mt-8 pt-6 border-t border-slate-100">
                <h3 class="font-bold text-slate-700 mb-3 flex items-center gap-2">
                  <span class="text-pink-500">✨</span> 延伸挑戰
                </h3>
                <ul class="list-disc pl-5 space-y-2 text-sm text-slate-600">
                  ${game.extensions
                    .map((ex) => `<li>${typeof ex === "string" ? ex : ex.text}</li>`)
                    .join("")}
                </ul>
              </div>
            `
                : ""
            }
          </section>
        </div>
      </div>
  
      <!-- Google 購物推薦區（沒有廣告就隱藏） -->
      <section
        id="shopping-ads-section"
        class="mt-6 md:mt-8 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-100 hidden"
      >
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-lg">
              🛒
            </span>
            這些商品你也很需要
          </h2>
          <span class="text-[11px] md:text-xs text-slate-400">
            由 Google 購物廣告提供
          </span>
        </div>
        <div
          id="shopping-ads-slot"
          class="min-h-[60px] md:min-h-[90px] flex items-center justify-center text-xs text-slate-400"
        >
          <!-- Google Shopping 廣告程式碼會插入在這裡 -->
        </div>
      </section>
  
      <!-- 底部按鈕 -->
      <div class="flex justify-center py-8">
        <button onclick="history.back()" class="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors shadow-sm">
          ← 返回列表
        </button>
      </div>
    `;
  
    // ===== 互動邏輯：愛心 & 收藏 =====
    const likeBtn = document.getElementById("like-button");
    const favBtn = document.getElementById("favorite-button");
  
    if (likeBtn) {
      likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("bg-pink-50");
        likeBtn.classList.toggle("border-pink-200");
        likeBtn.classList.toggle("text-pink-600");
        likeBtn.classList.toggle("text-slate-500");
        likeBtn.classList.toggle("border-slate-200");
      });
    }
  
    if (favBtn) {
        favBtn.addEventListener("click", () => {
          const isFav = isFavorite(game.id);
      
          if (!isFav) {
            // 加入收藏
            addFavorite(game.id);
      
            // 按鈕變已收藏
            favBtn.classList.add("bg-amber-50", "border-amber-300", "text-amber-600");
            favBtn.classList.remove("bg-white", "text-slate-500", "border-slate-200");
            favBtn.querySelector("span:nth-child(2)").textContent = "已收藏";
      
            // ⭐ 自動跳到 favorites.html
            setTimeout(() => {
              window.location.href = "favorites.html";
            }, 600);
          } else {
            // 移除收藏
            removeFavorite(game.id);
      
            favBtn.classList.remove("bg-amber-50","border-amber-300","text-amber-600");
            favBtn.classList.add("bg-white","text-slate-500","border-slate-200");
            favBtn.querySelector("span:nth-child(2)").textContent = "加入收藏";
          }
        });
      }      
  
    // ===== 圖片放大（簡易燈箱） =====
    const heroImg = document.getElementById("game-hero");
    if (heroImg) {
      heroImg.addEventListener("click", () => {
        // 之後如果你想做真正的燈箱，可以在這裡開一個全螢幕 modal
        // 目前先保留 hook，方便之後擴充
        // console.log("點擊主圖，可在這裡實作放大檢視");
      });
    }
  
    // ===== Google 購物廣告區：有廣告才顯示 =====
    const adsSection = document.getElementById("shopping-ads-section");
    const adsSlot = document.getElementById("shopping-ads-slot");
  
    if (adsSection && adsSlot) {
      // 若未來你有外部 script，可以掛一個初始化函式進來
      // window.initHomePlayShoppingAds = function({ slotElement, game, onHasAds, onNoAds }) { ... }
      if (typeof window.initHomePlayShoppingAds === "function") {
        window.initHomePlayShoppingAds({
          slotElement: adsSlot,
          game,
          onHasAds: () => {
            adsSection.classList.remove("hidden");
          },
          onNoAds: () => {
            adsSection.classList.add("hidden");
          }
        });
      } else {
        // 簡易偵測：給外部廣告程式一點時間插入內容
        setTimeout(() => {
          const hasAds =
            adsSlot.children.length > 0 ||
            (adsSlot.textContent && adsSlot.textContent.trim() !== "");
          if (hasAds) {
            adsSection.classList.remove("hidden");
          } else {
            adsSection.classList.add("hidden");
          }
        }, 1200);
      }
    }
  });
  
  