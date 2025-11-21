// 🎯 追蹤年齡選擇
document.querySelectorAll("[data-age]").forEach(btn => {
    btn.addEventListener("click", () => {
      gtag("event", "select_age_group", {
        age_group: btn.dataset.age,
        page_location: window.location.href
      });
    });
  });
  
  // 🎯 追蹤性別選擇
  document.querySelectorAll("[data-gender]").forEach(btn => {
    btn.addEventListener("click", () => {
      gtag("event", "select_gender", {
        gender: btn.dataset.gender
      });
    });
  });
  
  // 🎯 追蹤興趣選擇
  document.querySelectorAll("[data-interest]").forEach(btn => {
    btn.addEventListener("click", () => {
      gtag("event", "select_interest", {
        interest: btn.dataset.interest
      });
    });
  });
  
  // 🎯 最後按下「開始找遊戲」時
  document.getElementById("start-filter-btn")?.addEventListener("click", () => {
    // 將使用者選的條件都帶進事件
    gtag("event", "start_filter", {
      age: selectedAge,
      gender: selectedGender,
      interests: selectedInterests
    });
  });
  