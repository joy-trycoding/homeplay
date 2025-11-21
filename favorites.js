// favorites.js
// 顯示「我的收藏」列表，資料來源：localStorage + window.GAMES

document.addEventListener("DOMContentLoaded", () => {
    if (!window.GAMES || !Array.isArray(window.GAMES)) {
      console.error("GAMES 資料不存在，請確認有正確載入 games.js");
      return;
    }
  
    const listEl = document.getElementById("favorites-list");
    const emptyEl = document.getElementById("favorites-empty");
    const clearBtn = document.getElementById("clear-favorites-btn");
  
    // 興趣 → emoji 對照
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
  
    // ===== 收藏儲存相關 =====
  
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
  
    function removeFavorite(id) {
      const current = getFavoriteIds();
      const next = current.filter((x) => x !== id);
      saveFavoriteIds(next);
      return next;
    }
  
    // ===== 工具函式 =====
  
    function formatAge(game) {
      if (game.age_bucket && AGE_LABELS[game.age_bucket]) {
        return AGE_LABELS[game.age_bucket];
      }
      return `${game.age_min || "?"}–${game.age_max || "?"} 歲`;
    }
  
    function formatMeta(game) {
      const costMin = game.cost_min;
      const costMax = game.cost_max;
      let cost = "";
      if (typeof costMin === "number" && typeof costMax === "number") {
        if (costMin === 0 && costMax === 0) cost = "免費";
        else if (costMin === 0) cost = `NT$${costMax} 以內`;
        else if (costMin === costMax) cost = `約 NT$${costMax}`;
        else cost = `NT$${costMin}–${costMax}`;
      }
  
      const prep = game.prep_minutes || 0;
      const play = game.play_minutes || 0;
      let time = "";
      if (prep && play) time = `${prep} 分準備 · ${play} 分玩`;
      else if (prep) time = `準備 ${prep} 分`;
      else if (play) time = `${play} 分鐘`;
  
      if (cost && time) return `${cost} · ${time}`;
      return cost || time || "";
    }
  
    function getMainInterest(game) {
      return Array.isArray(game.interests) && game.interests.length > 0
        ? game.interests[0]
        : null;
    }
  
    function buildFavoriteCard(game) {
      const mainInterest = getMainInterest(game);
      const icon =
        mainInterest && INTEREST_ICONS[mainInterest]
          ? INTEREST_ICONS[mainInterest]
          : "⭐";
  
      const ageLabel = formatAge(game);
      const metaLine = formatMeta(game);
      const summary =
        game.summary ||
        "在家就能完成的小遊戲，讓孩子透過玩樂自然學習。";
  
      return `
        <article
          class="rounded-2xl bg-white shadow-sm border border-orange-100 p-4 flex gap-3 md:gap-4 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition group"
          onclick="window.location.href='detail.html?id=${encodeURIComponent(
            game.id
          )}'"
        >
          <!-- emoji 縮圖 -->
          <div
            class="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-tr from-sky-100 to-emerald-100 flex items-center justify-center text-3xl md:text-4xl shrink-0"
          >
            <span>${icon}</span>
          </div>
  
          <!-- 內容 -->
          <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
              <div class="flex items-start justify-between gap-2 mb-1">
                <h2
                  class="text-base md:text-lg font-semibold text-slate-800 line-clamp-1 group-hover:text-orange-600"
                >
                  ${game.title}
                </h2>
              </div>
              <p class="text-xs md:text-sm text-slate-500 line-clamp-2 mb-2">
                ${summary}
              </p>
            </div>
  
            <div class="flex items-center justify-between text-[11px] md:text-xs text-slate-500">
              <div class="flex items-center gap-2">
                <span
                  class="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700"
                >
                  ${ageLabel}
                </span>
                ${metaLine
                  ? `<span class="hidden md:inline-block text-slate-400">${metaLine}</span>`
                  : ""}
              </div>
  
              <button
                type="button"
                class="px-2 py-1 rounded-full border border-slate-200 text-[11px] text-slate-400 hover:bg-slate-50 hover:text-red-500 hover:border-red-200"
                onclick="event.stopPropagation(); window.__removeFavoriteAndRerender && window.__removeFavoriteAndRerender('${
                  game.id
                }');"
              >
                取消收藏
              </button>
            </div>
          </div>
        </article>
      `;
    }
  
    // ===== 主流程：渲染收藏列表 =====
  
    function renderFavorites() {
      const ids = getFavoriteIds();
  
      if (!ids.length) {
        if (listEl) listEl.innerHTML = "";
        if (emptyEl) emptyEl.classList.remove("hidden");
        if (clearBtn) clearBtn.classList.add("hidden");
        return;
      }
  
      if (emptyEl) emptyEl.classList.add("hidden");
      if (clearBtn) clearBtn.classList.remove("hidden");
  
      const gamesMap = new Map(window.GAMES.map((g) => [g.id, g]));
      const favGames = ids
        .map((id) => gamesMap.get(id))
        .filter(Boolean);
  
      if (!favGames.length) {
        if (listEl) listEl.innerHTML = "";
        if (emptyEl) emptyEl.classList.remove("hidden");
        if (clearBtn) clearBtn.classList.add("hidden");
        return;
      }
  
      // 簡單排序：依照 age_min、title 排序
      favGames.sort((a, b) => {
        const aa = a.age_min || 0;
        const bb = b.age_min || 0;
        if (aa !== bb) return aa - bb;
        return (a.title || "").localeCompare(b.title || "");
      });
  
      if (listEl) {
        listEl.innerHTML = favGames.map(buildFavoriteCard).join("");
      }
    }
  
    // 提供給「取消收藏」按鈕呼叫
    window.__removeFavoriteAndRerender = function (id) {
      removeFavorite(id);
      renderFavorites();
    };
  
    // 清除全部收藏
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (!confirm("確定要清除所有收藏紀錄嗎？")) return;
        saveFavoriteIds([]);
        renderFavorites();
      });
    }
  
    // 首次渲染
    renderFavorites();
  });
  