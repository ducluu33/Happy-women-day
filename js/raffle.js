"use strict";

(() => {
  // Complete 20 wishes for 20/10 with famous real Internet memes
  const WISHES = [
    {
      id: 1,
      title: "Tiền Vô Như Nước Sông Đà",
      theme: "💰 Tài Lộc Rủng Rỉnh",
      wish: "Chúc bạn ngày 20/10 tiền vào như nước sông Đà, tiền ra nhỏ giọt như cà phê phin. Tài khoản lúc nào cũng 'ting ting' đầy ắp số dư!",
      meme: "img/memes/meme1.jpg",
      memeName: "Leonardo DiCaprio Cheers 🥂",
      memeCaption: "Nâng ly chúc mừng đại gia 20/10!"
    },
    {
      id: 2,
      title: "Ăn Cả Thế Giới Không Béo",
      theme: "🍰 Vóc Dáng Vạn Người Mê",
      wish: "Chúc bạn nạp bao nhiêu calo cũng chỉ vào visual, ăn cả thế giới mà eo vẫn thon gọn, dáng chuẩn hoa hậu, cơ thể lúc nào cũng săn chắc!",
      meme: "img/memes/meme2.jpg",
      memeName: "Woman Yelling At Cat 🐱",
      memeCaption: "Người ta: 'Ăn ít thôi mập' — Tôi: '20/10 ăn thả ga!'"
    },
    {
      id: 3,
      title: "Bug Tự Fix, Sếp Tự Tăng Lương",
      theme: "💼 Sự Nghiệp Thăng Hoa",
      wish: "Chúc bạn công việc hanh thông, bug tự fix, task tự xong, deadline tự lùi, sếp tự động ký duyệt tăng lương và thưởng nóng kịch trần!",
      meme: "img/memes/meme3.jpg",
      memeName: "This Is Fine ☕🔥",
      memeCaption: "Deadline bốc hỏa nhưng tâm hồn 20/10 vẫn chill!"
    },
    {
      id: 4,
      title: "Visual Phát Sáng Không Góc Chết",
      theme: "💅 Nhan Sắc Vô Cực",
      wish: "Chúc bạn nhan sắc ngày càng thăng hạng, da căng bóng không tì vết, camera thường cũng phải chào thua trước vẻ đẹp rạng ngời của bạn!",
      meme: "img/memes/meme4.jpg",
      memeName: "Disaster Girl 😏🔥",
      memeCaption: "Visual thiêu đốt mọi ánh nhìn của các chàng trai!"
    },
    {
      id: 5,
      title: "Shopping Quẹt Thẻ Không Nhìn Giá",
      theme: "🛍️ Đại Gia Mua Sắm",
      wish: "Chúc bạn shopping thả ga, giỏ hàng shopee tự động được thanh toán, quẹt thẻ không cần check số dư, thích gì có đó!",
      meme: "img/memes/meme5.jpg",
      memeName: "Distracted Boyfriend 👀",
      memeCaption: "Tạm biệt tiết kiệm, 20/10 là phải chốt đơn mỏi tay!"
    },
    {
      id: 6,
      title: "Trà Sữa Full Topping Nhân Đôi",
      theme: "🧋 Ngọt Ngào Hạnh Phúc",
      wish: "Chúc cuộc đời bạn ngọt ngào như ly trà sữa trân châu hoàng kim 100% đường 100% đá, order ly nào cũng được nhân đôi topping miễn phí!",
      meme: "img/memes/meme6.png",
      memeName: "Tuxedo Winnie The Pooh 🎩",
      memeCaption: "Người thường uống nước - Quý cô 20/10 uống trà sữa full topping!"
    },
    {
      id: 7,
      title: "Được Cưng Chiều Như Công Chúa",
      theme: "👑 Tình Duyên Viên Mãn",
      wish: "Chúc bạn luôn được người thương cưng chiều như công chúa 365 ngày/năm, nói gì nghe nấy, chuyển khoản nhanh hơn tốc độ ánh sáng!",
      meme: "img/memes/meme7.png",
      memeName: "Buff Doge vs. Cheems 🐕",
      memeCaption: "Người yêu khi ra ngoài vs khi về nhà nghe lời bạn!"
    },
    {
      id: 8,
      title: "Ngủ Đủ 8 Tiếng Thức Dậy Vẫn Giàu",
      theme: "🛌 Thảnh Thơi Vô Lo",
      wish: "Chúc bạn tối ngủ ngon không mộng mị, ngủ đẫy mắt 8 tiếng không báo thức, thức dậy với tinh thần sảng khoái và một ngày tràn ngập niềm vui!",
      meme: "img/memes/meme8.jpg",
      memeName: "Sleeping Shaq 💤",
      memeCaption: "Báo thức réo: I sleep — Thông báo lương về: Real shit!"
    },
    {
      id: 9,
      title: "Tâm Bất Biến Giữa Dòng Đời",
      theme: "🧘‍♀️ Tâm Hồn Thanh Tịnh",
      wish: "Chúc bạn tâm luôn tịnh, không drama, không toxic, chỉ có an yên, đồ ăn ngon và những nụ cười rạng rỡ bên cạnh những người thân yêu!",
      meme: "img/memes/meme9.jpg",
      memeName: "Hide The Pain Harold 🥲",
      memeCaption: "Nụ cười thanh tịnh khi ai đó cố tạo drama vào ngày 20/10!"
    },
    {
      id: 10,
      title: "Bước Đi Tự Tin Vận May Nở Rộ",
      theme: "🍀 Vận May Ngút Ngàn",
      wish: "Chúc bạn bước chân ra đường là gặp may mắn, đèn đỏ hóa xanh, bãi đỗ xe luôn trống, đi đâu cũng được mọi người yêu thương quý mến!",
      meme: "img/memes/meme10.jpg",
      memeName: "Success Kid ✊",
      memeCaption: "Vừa dắt xe ra đường: Đèn xanh suốt tuyến, đỗ xe free!"
    },
    {
      id: 11,
      title: "Nụ Cười Tỏa Nắng Đốn Tim",
      theme: "☀️ Năng Lượng Tích Cực",
      wish: "Chúc nụ cười của bạn luôn là nguồn năng lượng chữa lành cho cả vũ trụ. Hãy cười thật tươi mỗi ngày vì bạn đẹp nhất khi vui vẻ!",
      meme: "img/memes/meme11.png",
      memeName: "Laughing Leo 😆",
      memeCaption: "Cười thả ga cho cả thế giới xỉu up xỉu down!"
    },
    {
      id: 12,
      title: "Tự Tin, Độc Lập & Kiêu Hãnh",
      theme: "👸 Bản Lĩnh Phái Đẹp",
      wish: "Chúc bạn luôn là bông hoa kiêu hãnh nhất trong vườn hoa: Tự tin, độc lập, tài năng và luôn biết yêu thương chính bản thân mình!",
      meme: "img/memes/meme12.jpg",
      memeName: "Drake Hotline Bling 👉",
      memeCaption: "Buồn bã drama: KHÔNG — Tự tin & kiêu hãnh: CÓ!"
    },
    {
      id: 13,
      title: "Quà Ngập Phòng Xin Thêm Chỗ Chứa",
      theme: "🎁 Bội Thu Quà Tặng",
      wish: "Chúc ngày 20/10 nhận quà mỏi tay, hoa cắm kín phòng, thiệp chúc đếm không xuể, hạnh phúc ngập tràn từ sáng tới đêm!",
      meme: "img/memes/meme13.jpg",
      memeName: "Oprah You Get A Gift 🎁",
      memeCaption: "Bạn có quà! Mọi người đều có quà 20/10!"
    },
    {
      id: 14,
      title: "Da Căng Bóng Mướt Mịn Không Mụn",
      theme: "✨ Skincare Thần Thánh",
      wish: "Chúc routine skincare của bạn đạt cảnh giới tối cao: Thức khuya không nổi mụn, mắt không quầng thâm, da luôn mướt mịn như sương mai!",
      meme: "img/memes/meme14.jpg",
      memeName: "Awkward Monkey 🙈",
      memeCaption: "Thức đến 3h sáng nhưng sáng sau da vẫn mịn màng!"
    },
    {
      id: 15,
      title: "Outfit 10/10 Không Có Nhưng",
      theme: "👗 Thời Trang Đỉnh Chóp",
      wish: "Chúc bạn mở tủ quần áo là thấy ngay đồ ưng ý, phối đồ nào cũng thành outfit of the day, bước ra đường ai cũng phải ngoái nhìn!",
      meme: "img/memes/meme15.png",
      memeName: "Absolute Cinema 🎬🙌",
      memeCaption: "Outfit hôm nay bước ra phố: Tuyệt tác điện ảnh!"
    },
    {
      id: 16,
      title: "Ăn Ngon Miệng Bạn Bè Tranh Bao",
      theme: "🍣 Ẩm Thực Thượng Hạng",
      wish: "Chúc bạn đi đâu cũng được ăn ngon, quán nào bạn chọn cũng chuẩn 5 sao, bạn bè tranh nhau bao tiền ăn uống!",
      meme: "img/memes/meme16.jpg",
      memeName: "Trade Offer 🤝",
      memeCaption: "Kèo thơm: Tôi góp mặt xinh đẹp, các bạn bao ăn trọn gói!"
    },
    {
      id: 17,
      title: "Đường Thông Hè Thoáng Trời Không Mưa",
      theme: "🛴 Thuận Buồm Xuôi Gió",
      wish: "Chúc bạn đi làm đường thông hè thoáng, vừa dắt xe ra thì trời tạnh mưa, gió mát vi vu, đi đâu cũng thuận buồm xuôi gió!",
      meme: "img/memes/meme17.jpg",
      memeName: "Left Exit 12 Off Ramp 🚗💨",
      memeCaption: "Đường kẹt xe vs Lối tắt thông thoáng về nhà ngủ sớm!"
    },
    {
      id: 18,
      title: "Trí Tuệ Sáng Suốt Đầu Óc Sắc Sảo",
      theme: "🧠 Thông Minh Xuất Chúng",
      wish: "Chúc bạn đầu óc luôn sáng suốt, tư duy nhạy bén, học 1 biết 10, làm việc gì cũng chuẩn xác như máy tính lượng tử!",
      meme: "img/memes/meme18.jpg",
      memeName: "Roll Safe Think About It 💡",
      memeCaption: "Bạn không thể buồn 20/10 nếu bạn bận xinh đẹp và tài giỏi!"
    },
    {
      id: 19,
      title: "Yêu Thương Đong Đầy Hạnh Phúc",
      theme: "💖 Tình Cảm Ấm Áp",
      wish: "Chúc bạn được yêu thương vô điều kiện, luôn có một bờ vai vững chãi để tựa vào và những người bạn tri kỷ luôn sẵn sàng lắng nghe!",
      meme: "img/memes/meme19.jpg",
      memeName: "Epic Handshake 🤝💪",
      memeCaption: "Hội chị em & Tình yêu thương vô điều kiện ngày 20/10!"
    },
    {
      id: 20,
      title: "Vũ Trụ Gửi Tín Hiệu May Mắn 100%",
      theme: "🌟 Điều Ước Tối Thượng",
      wish: "Chúc tất cả những mong muốn của bạn trong ngày 20/10 và 364 ngày còn lại đều trở thành hiện thực! Vũ trụ gửi tín hiệu may mắn 100%!",
      meme: "img/memes/meme20.jpg",
      memeName: "Expanding Brain 🌌🧠",
      memeCaption: "Tầng số năng lượng: Vũ trụ độ 100% mọi điều ước thành hiện thực!"
    }
  ];

  function initRaffle() {
    const bouquetScene = document.querySelector("#bouquet-scene");
    if (!bouquetScene) return;

    // Create Trigger Button
    const triggerBtn = document.createElement("button");
    triggerBtn.type = "button";
    triggerBtn.id = "raffle-trigger";
    triggerBtn.className = "raffle-trigger";
    triggerBtn.setAttribute("aria-label", "Mở quẻ may mắn 20/10");
    triggerBtn.innerHTML = `
      <div class="raffle-trigger-icon">
        <span>💌</span>
        <span class="raffle-trigger-badge">20</span>
      </div>
      <div class="raffle-trigger-text">
        <span class="raffle-trigger-title">Quẻ May Mắn 20/10</span>
        <span class="raffle-trigger-sub">Nhấn để mở / Press to open</span>
      </div>
    `;
    bouquetScene.appendChild(triggerBtn);

    // Create Modal Overlay & Letter Card
    const overlay = document.createElement("div");
    overlay.id = "raffle-overlay";
    overlay.className = "raffle-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "raffle-main-title");

    overlay.innerHTML = `
      <div class="raffle-modal">
        <button type="button" class="raffle-close-btn" id="raffle-close-btn" aria-label="Đóng thư">✕</button>
        <div class="raffle-confetti" id="raffle-confetti" aria-hidden="true"></div>
        <div class="raffle-toast" id="raffle-toast">Đã sao chép lời chúc! 💖</div>

        <div class="raffle-card-header">
          <div class="raffle-ribbon-tag">🌸 20.10 Women's Day Special 🌸</div>
          <h2 class="raffle-title" id="raffle-main-title">Quẻ May Mắn 20/10</h2>
          <p class="raffle-subtitle">20 Lời Chúc & Siêu Meme Hài Hước</p>
        </div>

        <!-- Step 1: Welcome to 20/10 Wish Raffle -->
        <div class="raffle-step is-active" id="raffle-step-welcome">
          <div class="raffle-welcome-art" aria-hidden="true">💌</div>
          <p class="raffle-desc">
            Chào mừng bạn đến với <strong>Hộp Thư Quẻ May Mắn 20/10</strong>! Vũ trụ đã chuẩn bị trọn bộ <strong>20 lời chúc độc quyền</strong> đi kèm <strong>20 siêu meme hài hước nổi tiếng trên mạng</strong> dành riêng cho bạn hôm nay.
          </p>
          <div class="raffle-highlight-box">
            ✨ Hãy nhấn nút bên dưới để rút một quẻ may mắn và đón nhận bất ngờ nhé!
          </div>
          <button type="button" class="raffle-btn raffle-btn--primary" id="raffle-next-btn">
            <span>Bốc Thăm Lời Chúc / Draw Wish</span>
            <span>🎁</span>
          </button>
        </div>

        <!-- Step 2: The Drawn Wish & Real Meme Card -->
        <div class="raffle-step" id="raffle-step-wish">
          <div class="raffle-wish-badge-wrap">
            <span class="raffle-wish-number-badge" id="raffle-wish-number">✨ Quẻ Số #01 / 20</span>
            <span class="raffle-wish-theme-badge" id="raffle-wish-theme">Tài Lộc Rủng Rỉnh</span>
          </div>

          <div class="raffle-meme-container">
            <div class="raffle-meme-header-bar">
              <span id="raffle-meme-name">Meme: Leonardo Cheers 🥂</span>
              <span>🔥 VIRAL MEME</span>
            </div>
            <img src="img/memes/meme1.jpg" alt="Viral Internet Meme 20/10" class="raffle-meme-img" id="raffle-meme-img">
            <div class="raffle-meme-caption-bar" id="raffle-meme-caption">
              Tài khoản ting ting - Chúc mừng đại gia 20/10!
            </div>
          </div>

          <div class="raffle-wish-content">
            <h3 class="raffle-wish-title" id="raffle-wish-title">Tiền Vô Như Nước</h3>
            <p class="raffle-wish-text" id="raffle-wish-text">Lời chúc 20/10...</p>
          </div>

          <div class="raffle-actions-grid">
            <button type="button" class="raffle-btn raffle-btn--draw" id="raffle-reroll-btn">
              <span>Bốc Quẻ Khác 🎲</span>
            </button>
            <button type="button" class="raffle-btn raffle-btn--copy" id="raffle-copy-btn">
              <span>Sao Chép 📋</span>
            </button>
          </div>

          <button type="button" class="raffle-btn raffle-btn--secondary" id="raffle-finish-btn">
            Đóng & Ngắm Hoa / View Flowers 💐
          </button>
        </div>
      </div>
    `;
    bouquetScene.appendChild(overlay);

    // Elements
    const stepWelcome = overlay.querySelector("#raffle-step-welcome");
    const stepWish = overlay.querySelector("#raffle-step-wish");
    const nextBtn = overlay.querySelector("#raffle-next-btn");
    const rerollBtn = overlay.querySelector("#raffle-reroll-btn");
    const copyBtn = overlay.querySelector("#raffle-copy-btn");
    const closeBtn = overlay.querySelector("#raffle-close-btn");
    const finishBtn = overlay.querySelector("#raffle-finish-btn");
    const wishNumberEl = overlay.querySelector("#raffle-wish-number");
    const wishThemeEl = overlay.querySelector("#raffle-wish-theme");
    const memeNameEl = overlay.querySelector("#raffle-meme-name");
    const memeImgEl = overlay.querySelector("#raffle-meme-img");
    const memeCaptionEl = overlay.querySelector("#raffle-meme-caption");
    const wishTitleEl = overlay.querySelector("#raffle-wish-title");
    const wishTextEl = overlay.querySelector("#raffle-wish-text");
    const confettiBox = overlay.querySelector("#raffle-confetti");
    const toastEl = overlay.querySelector("#raffle-toast");

    let currentWish = null;
    let drawnWishIds = [];

    // Confetti effect
    function spawnConfetti(count = 45) {
      const colors = ["#ff0055", "#ff77a8", "#ffd700", "#00e5ff", "#00ff88", "#ff9800", "#ffffff", "#c084fc"];
      for (let i = 0; i < count; i++) {
        const particle = document.createElement("span");
        particle.className = "raffle-particle";
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = 6 + Math.random() * 8;
        particle.style.cssText = `
          width: ${size}px;
          height: ${size * (Math.random() > 0.5 ? 1 : 1.6)}px;
          background: ${color};
          border-radius: ${Math.random() > 0.4 ? "50%" : "2px"};
          box-shadow: 0 0 6px ${color};
        `;
        confettiBox.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const dist = 60 + Math.random() * 220;
        const x = Math.cos(angle) * dist;
        const y = Math.sin(angle) * dist + 40;
        const rot = Math.random() * 720 - 360;
        const duration = 850 + Math.random() * 650;

        const animation = particle.animate([
          { transform: "translate(-50%, -50%) scale(0.4)", opacity: 1 },
          { transform: `translate(calc(-50% + ${x * 0.6}px), calc(-50% + ${y * 0.4}px)) rotate(${rot / 2}deg)`, opacity: 1, offset: 0.4 },
          { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y + 110}px)) rotate(${rot}deg) scale(0.2)`, opacity: 0 }
        ], { duration, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" });

        animation.onfinish = () => particle.remove();
      }
    }

    // Pick random wish (non-repeating until all 20 drawn)
    function pickRandomWish() {
      if (drawnWishIds.length >= WISHES.length) {
        drawnWishIds = [];
      }
      const available = WISHES.filter(w => !drawnWishIds.includes(w.id));
      const chosen = available[Math.floor(Math.random() * available.length)];
      drawnWishIds.push(chosen.id);
      return chosen;
    }

    // Display wish
    function displayWish(wish) {
      currentWish = wish;
      wishNumberEl.textContent = `✨ Quẻ Số #${String(wish.id).padStart(2, "0")} / 20`;
      wishThemeEl.textContent = wish.theme;
      memeNameEl.textContent = `Meme: ${wish.memeName}`;
      memeImgEl.src = wish.meme;
      memeImgEl.alt = `${wish.memeName} - ${wish.title}`;
      memeCaptionEl.textContent = wish.memeCaption;
      wishTitleEl.textContent = wish.title;
      wishTextEl.textContent = wish.wish;

      stepWelcome.classList.remove("is-active");
      stepWish.classList.add("is-active");
      spawnConfetti(50);
    }

    // Open Modal
    function openLetter() {
      overlay.classList.add("is-open");
      if (!currentWish) {
        stepWelcome.classList.add("is-active");
        stepWish.classList.remove("is-active");
        nextBtn.focus();
      } else {
        stepWelcome.classList.remove("is-active");
        stepWish.classList.add("is-active");
      }
    }

    // Close Modal
    function closeLetter() {
      overlay.classList.remove("is-open");
      triggerBtn.focus();
    }

    // Toast helper
    function showToast(message) {
      toastEl.textContent = message;
      toastEl.classList.add("is-shown");
      setTimeout(() => toastEl.classList.remove("is-shown"), 2200);
    }

    // Event listeners
    triggerBtn.addEventListener("click", openLetter);
    closeBtn.addEventListener("click", closeLetter);
    finishBtn.addEventListener("click", closeLetter);

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeLetter();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) {
        closeLetter();
      }
    });

    // Draw wish button clicked
    nextBtn.addEventListener("click", () => {
      const wish = pickRandomWish();
      displayWish(wish);
    });

    // Reroll button clicked
    rerollBtn.addEventListener("click", () => {
      const wish = pickRandomWish();
      displayWish(wish);
    });

    // Copy wish button clicked
    copyBtn.addEventListener("click", () => {
      if (!currentWish) return;
      const textToCopy = `🌸 Chúc mừng 20/10 🌸\n"${currentWish.title}" - ${currentWish.wish}\n(Meme: ${currentWish.memeName} - ${currentWish.memeCaption})`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast("Đã sao chép lời chúc 20/10! 💖");
        }).catch(() => {
          showToast("Đã chọn lời chúc! 💖");
        });
      } else {
        showToast("Đã chọn lời chúc 20/10! 💖");
      }
    });

    // Reveal Trigger button after flowers are showed
    function revealTrigger() {
      setTimeout(() => {
        triggerBtn.classList.add("is-visible");
      }, 2000);
    }

    const introScene = document.querySelector("#letter-scene");
    if (!introScene || !document.body.classList.contains("intro-active")) {
      revealTrigger();
    } else {
      window.addEventListener("flowers-shown", revealTrigger, { once: true });
      window.addEventListener("bouquet-revealed", () => {
        setTimeout(revealTrigger, 2200);
      }, { once: true });

      const observer = new MutationObserver(() => {
        if (!document.body.classList.contains("intro-active")) {
          observer.disconnect();
          revealTrigger();
        }
      });
      observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    }
  }

  // Export WISHES for testing if needed
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { WISHES };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRaffle);
  } else {
    initRaffle();
  }
})();
