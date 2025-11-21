// index.js
// 首頁：隨機遊戲 + 今日靈感推薦（全部用 emoji，不抓外部圖片）

document.addEventListener("DOMContentLoaded", () => {
    if (!window.GAMES || !Array.isArray(window.GAMES)) {
      console.error("GAMES 資料不存在，請確認有正確載入 games.js");
      return;
    }
  
    const todayCardsEl = document.getElementById("today-cards");
    const randomBtn = document.getElementById("random-game-btn");
    const shuffleBtn = document.getElementById("shuffle-today-btn");
  
    // 興趣 → emoji 對照，跟 list/detail 保持一致
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
  
    const AGE_LABELS = {
      "2-3": "2–3 歲",
      "3-4": "3–4 歲",
      "5-6": "5–6 歲",
      "7-8": "7–8 歲",
      "9-10": "9–10 歲",
      "11-12": "11–12 歲"
    };
  
    function formatAge(game) {
      if (game.age_bucket && AGE_LABELS[game.age_bucket]) {
        return AGE_LABELS[game.age_bucket];
      }
      return `${game.age_min || "?"}–${game.age_max || "?"} 歲`;
    }
  
    function formatCostShort(game) {
      if (
        typeof game.cost_min === "number" &&
        typeof game.cost_max === "number"
      ) {
        if (game.cost_min === 0 && game.cost_max === 0) return "免費";
        if (game.cost_min === 0) return `NT$${game.cost_max} 以內`;
        if (game.cost_min === game.cost_max) return `約 NT$${game.cost_max}`;
        return `NT$${game.cost_min}–${game.cost_max}`;
      }
      return "成本不明";
    }
  
    function formatTimeShort(game) {
      const prep = game.prep_minutes || 0;
      const play = game.play_minutes || 0;
      if (!prep && !play) return "";
      if (!prep) return `${play} 分鐘`;
      if (!play) return `準備 ${prep} 分`;
      return `${prep} 分準備 · ${play} 分玩`;
    }
  
    function getMainInterest(game) {
      return Array.isArray(game.interests) && game.interests.length > 0
        ? game.interests[0]
        : null;
    }
  
    function buildTodayCard(game) {
      const mainInterest = getMainInterest(game);
      const icon =
        mainInterest && INTEREST_ICONS[mainInterest]
          ? INTEREST_ICONS[mainInterest]
          : "⭐";
  
      const ageLabel = formatAge(game);
      const costText = formatCostShort(game);
      const timeText = formatTimeShort(game);
      const metaLine =
        costText && timeText ? `${costText} · ${timeText}` : costText || timeText;
  
      const summary =
        game.summary ||
        "在家就能完成的小遊戲，讓孩子透過玩樂自然學習。";
  
      return `
        <article
          class="rounded-2xl bg-white shadow-sm border border-orange-100 p-4 flex flex-col gap-2 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition group"
          onclick="window.location.href='detail.html?id=${encodeURIComponent(
            game.id
          )}'"
        >
          <div
            class="w-full h-24 rounded-xl bg-gradient-to-tr from-sky-100 to-emerald-100 flex items-center justify-center text-3xl md:text-4xl"
          >
            <span>${icon}</span>
          </div>
          <h3 class="text-base md:text-lg font-semibold mt-1 text-slate-800 line-clamp-1 group-hover:text-orange-600">
            ${game.title}
          </h3>
          <p class="text-xs md:text-sm text-slate-500 line-clamp-2">
            ${summary}
          </p>
          <div class="flex items-center justify-between text-[11px] md:text-xs mt-1 text-slate-500">
            <span class="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700">
              ${ageLabel}
            </span>
            <span class="text-slate-400">
              ${metaLine || ""}
            </span>
          </div>
        </article>
      `;
    }
  
    // 抽 n 個不重複隨機遊戲
    function pickRandomGames(n) {
      const result = [];
      const usedIndex = new Set();
      const total = window.GAMES.length;
  
      if (total === 0) return result;
  
      const count = Math.min(n, total);
  
      while (result.length < count) {
        const idx = Math.floor(Math.random() * total);
        if (!usedIndex.has(idx)) {
          usedIndex.add(idx);
          result.push(window.GAMES[idx]);
        }
      }
      return result;
    }
  
    function renderTodayCards() {
      if (!todayCardsEl) return;
      const picked = pickRandomGames(3);
      if (!picked.length) {
        todayCardsEl.innerHTML =
          '<p class="text-sm text-slate-400">目前還沒有遊戲資料。</p>';
        return;
      }
      todayCardsEl.innerHTML = picked.map(buildTodayCard).join("");
    }
  
    // 🎲 隨機玩一個
    if (randomBtn) {
      randomBtn.addEventListener("click", () => {
        if (!window.GAMES.length) return;
        const idx = Math.floor(Math.random() * window.GAMES.length);
        const game = window.GAMES[idx];
        window.location.href = `detail.html?id=${encodeURIComponent(game.id)}`;
      });
    }
  
    // 🔁 今日推薦：換一批
    if (shuffleBtn) {
      shuffleBtn.addEventListener("click", () => {
        renderTodayCards();
      });
    }
  
    // 首次載入時就先渲染一批
    renderTodayCards();
  });
  