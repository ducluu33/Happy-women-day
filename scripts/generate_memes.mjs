import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

mkdirSync("img/memes", { recursive: true });

const memeConfigs = [
  {
    file: "meme1.svg",
    bg: "#102a18",
    accent: "#ffd700",
    top: "RICH ENERGY",
    bottom: "TIỀN VÔ NHƯ NƯỚC - TIỀN RA NHỎ GIỌT",
    art: `
      <!-- Stacks of cash & coins -->
      <rect x="50" y="160" width="100" height="40" rx="6" fill="#2d7a42" stroke="#4ade80" stroke-width="2"/>
      <rect x="250" y="150" width="100" height="50" rx="6" fill="#2d7a42" stroke="#4ade80" stroke-width="2"/>
      <circle cx="90" cy="140" r="18" fill="#ffd700" stroke="#b45309" stroke-width="2"/>
      <text x="90" y="147" font-size="20" font-weight="900" fill="#78350f" text-anchor="middle">$</text>
      <circle cx="310" cy="130" r="18" fill="#ffd700" stroke="#b45309" stroke-width="2"/>
      <text x="310" y="137" font-size="20" font-weight="900" fill="#78350f" text-anchor="middle">$</text>
      <!-- Cool Cat Head -->
      <polygon points="140,90 160,40 185,85" fill="#f59e0b"/>
      <polygon points="260,90 240,40 215,85" fill="#f59e0b"/>
      <ellipse cx="200" cy="115" rx="55" ry="45" fill="#fbbf24"/>
      <!-- Sunglasses -->
      <polygon points="150,105 195,105 190,125 155,125" fill="#111827"/>
      <polygon points="205,105 250,105 245,125 210,125" fill="#111827"/>
      <line x1="195" y1="112" x2="205" y2="112" stroke="#111827" stroke-width="5"/>
      <line x1="158" y1="110" x2="175" y2="120" stroke="#ffffff" stroke-width="2"/>
      <line x1="213" y1="110" x2="230" y2="120" stroke="#ffffff" stroke-width="2"/>
      <!-- Nose & Mouth -->
      <polygon points="196,133 204,133 200,138" fill="#f43f5e"/>
      <path d="M193,140 Q200,146 207,140" stroke="#78350f" stroke-width="3" fill="none"/>
      <!-- Gold Chain -->
      <path d="M165,150 Q200,185 235,150" stroke="#ffd700" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="200" cy="182" r="14" fill="#ffd700" stroke="#b45309" stroke-width="2"/>
      <text x="200" y="188" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">$</text>
    `
  },
  {
    file: "meme2.svg",
    bg: "#3b1728",
    accent: "#ff7597",
    top: "CALORIES DON'T COUNT",
    bottom: "ĂN CẢ THẾ GIỚI - EO VẪN 56",
    art: `
      <!-- Giant Cake & Boba -->
      <ellipse cx="200" cy="170" rx="90" ry="25" fill="#fce7f3"/>
      <rect x="130" y="130" width="140" height="40" rx="8" fill="#f472b6"/>
      <path d="M130,130 Q165,145 200,130 Q235,145 270,130" fill="#fdf2f8"/>
      <circle cx="200" cy="115" r="12" fill="#ef4444"/>
      <!-- Cute Chubby Hamster -->
      <ellipse cx="200" cy="85" rx="42" ry="38" fill="#fed7aa"/>
      <circle cx="165" cy="55" r="12" fill="#fb923c"/>
      <circle cx="235" cy="55" r="12" fill="#fb923c"/>
      <circle cx="185" cy="80" r="5" fill="#1f2937"/>
      <circle cx="215" cy="80" r="5" fill="#1f2937"/>
      <ellipse cx="170" cy="92" rx="8" ry="5" fill="#f43f5e" opacity="0.6"/>
      <ellipse cx="230" cy="92" rx="8" ry="5" fill="#f43f5e" opacity="0.6"/>
      <!-- Tiny fork & Sparkles -->
      <text x="140" y="85" font-size="24">✨</text>
      <text x="250" y="85" font-size="24">🍰</text>
    `
  },
  {
    file: "meme3.svg",
    bg: "#1e1e2f",
    accent: "#38bdf8",
    top: "WORK STATUS: GODLIKE",
    bottom: "BUG TỰ FIX - SẾP TỰ TĂNG LƯƠNG",
    art: `
      <!-- Laptop -->
      <polygon points="120,185 280,185 300,195 100,195" fill="#94a3b8"/>
      <rect x="135" y="105" width="130" height="80" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
      <text x="200" y="135" font-size="12" font-family="monospace" fill="#4ade80" text-anchor="middle">&gt; 0 BUGS FOUND</text>
      <text x="200" y="155" font-size="12" font-family="monospace" fill="#38bdf8" text-anchor="middle">&gt; SALARY = SALARY * 10</text>
      <text x="200" y="172" font-size="11" font-family="monospace" fill="#facc15" text-anchor="middle">[SUCCESS 200 OK]</text>
      <!-- Boss Doge Peeking -->
      <circle cx="200" cy="70" r="35" fill="#d97706"/>
      <polygon points="175,45 160,20 185,35" fill="#b45309"/>
      <polygon points="225,45 240,20 215,35" fill="#b45309"/>
      <circle cx="190" cy="65" r="4" fill="#000"/>
      <circle cx="210" cy="65" r="4" fill="#000"/>
      <ellipse cx="200" cy="80" rx="14" ry="10" fill="#fef3c7"/>
      <circle cx="200" cy="75" r="4" fill="#000"/>
      <!-- Mug -->
      <rect x="80" y="150" width="25" height="35" rx="4" fill="#e11d48"/>
      <text x="92" y="172" font-size="10" fill="#fff" text-anchor="middle">☕</text>
    `
  },
  {
    file: "meme4.svg",
    bg: "#2b0938",
    accent: "#e879f9",
    top: "BLINDING AURA",
    bottom: "VISUAL PHÁT SÁNG - KHÔNG GÓC CHẾT",
    art: `
      <!-- Radiant rays -->
      <g stroke="#f0abfc" stroke-width="2" opacity="0.6">
        <line x1="200" y1="100" x2="100" y2="40"/>
        <line x1="200" y1="100" x2="300" y2="40"/>
        <line x1="200" y1="100" x2="80" y2="100"/>
        <line x1="200" y1="100" x2="320" y2="100"/>
        <line x1="200" y1="100" x2="110" y2="160"/>
        <line x1="200" y1="100" x2="290" y2="160"/>
      </g>
      <!-- Glowing Queen Cat -->
      <circle cx="200" cy="100" r="50" fill="#fae8ff" stroke="#c084fc" stroke-width="4"/>
      <polygon points="160,65 150,30 180,55" fill="#e879f9"/>
      <polygon points="240,65 250,30 220,55" fill="#e879f9"/>
      <!-- Diamond Crown -->
      <polygon points="175,50 185,25 200,45 215,25 225,50" fill="#ffd700" stroke="#b45309" stroke-width="2"/>
      <!-- Starry Eyes -->
      <text x="180" y="105" font-size="20">✨</text>
      <text x="205" y="105" font-size="20">✨</text>
      <!-- Sparkle Blush -->
      <ellipse cx="170" cy="115" rx="8" ry="5" fill="#f43f5e" opacity="0.7"/>
      <ellipse cx="230" cy="115" rx="8" ry="5" fill="#f43f5e" opacity="0.7"/>
      <path d="M195,118 Q200,123 205,118" stroke="#86198f" stroke-width="2" fill="none"/>
    `
  },
  {
    file: "meme5.svg",
    bg: "#18181b",
    accent: "#f59e0b",
    top: "BLACK CARD ACTIVATED",
    bottom: "I DON'T NEED THERAPY, I NEED SHOPPING",
    art: `
      <!-- Black Card VIP -->
      <rect x="110" y="60" width="180" height="110" rx="14" fill="#09090b" stroke="#eab308" stroke-width="3"/>
      <rect x="130" y="85" width="30" height="22" rx="4" fill="#f59e0b"/>
      <text x="260" y="90" font-size="14" font-weight="900" fill="#eab308" text-anchor="end">VIP BLACK</text>
      <text x="130" y="140" font-size="13" font-family="monospace" fill="#ffffff" letter-spacing="2">**** 2010 ****</text>
      <text x="130" y="158" font-size="10" fill="#a1a1aa">EXP: FOREVER</text>
      <text x="260" y="158" font-size="10" font-weight="bold" fill="#22c55e" text-anchor="end">LIMIT: ∞</text>
      <!-- Shopping Bags -->
      <g transform="translate(40, 130)">
        <rect x="10" y="20" width="45" height="45" rx="6" fill="#ec4899"/>
        <path d="M22,20 Q32,0 42,20" stroke="#fff" stroke-width="3" fill="none"/>
        <text x="32" y="47" font-size="10" fill="#fff" font-weight="bold" text-anchor="middle">SALE</text>
      </g>
      <g transform="translate(265, 125)">
        <rect x="10" y="20" width="50" height="50" rx="6" fill="#8b5cf6"/>
        <path d="M24,20 Q35,-2 46,20" stroke="#fff" stroke-width="3" fill="none"/>
        <text x="35" y="50" font-size="16" fill="#fff" text-anchor="middle">🛍️</text>
      </g>
    `
  },
  {
    file: "meme6.svg",
    bg: "#382314",
    accent: "#fbbf24",
    top: "BOBA THERAPY",
    bottom: "100% ĐƯỜNG, 100% ĐÁ, 1000% HẠNH PHÚC",
    art: `
      <!-- Huge Boba Cup -->
      <path d="M150,80 L160,185 Q162,195 175,195 L225,195 Q238,195 240,185 L250,80 Z" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
      <!-- Straw -->
      <rect x="192" y="30" width="16" height="70" rx="4" fill="#f43f5e" transform="rotate(-8 200 65)"/>
      <!-- Dome lid -->
      <path d="M140,80 Q200,45 260,80 Z" fill="#fed7aa" opacity="0.8"/>
      <!-- Cheese foam -->
      <path d="M150,80 Q175,95 200,85 Q225,95 250,80 L250,110 Q200,120 150,110 Z" fill="#ffffff"/>
      <!-- Boba Pearls -->
      <g fill="#451a03">
        <circle cx="175" cy="180" r="8"/>
        <circle cx="195" cy="182" r="8"/>
        <circle cx="215" cy="180" r="8"/>
        <circle cx="230" cy="175" r="7"/>
        <circle cx="185" cy="165" r="8"/>
        <circle cx="205" cy="166" r="8"/>
        <circle cx="222" cy="164" r="8"/>
        <circle cx="195" cy="150" r="8"/>
      </g>
      <!-- Happy Face on cup -->
      <circle cx="188" cy="130" r="3" fill="#78350f"/>
      <circle cx="212" cy="130" r="3" fill="#78350f"/>
      <path d="M195,137 Q200,143 205,137" stroke="#78350f" stroke-width="2" fill="none"/>
    `
  },
  {
    file: "meme7.svg",
    bg: "#2b0a1a",
    accent: "#f43f5e",
    top: "ROYAL TREATMENT",
    bottom: "ĐƯỢC CƯNG CHIỀU NHƯ CÔNG CHÚA 365 NGÀY",
    art: `
      <!-- Royal Throne Cushion -->
      <rect x="120" y="145" width="160" height="45" rx="12" fill="#9f1239" stroke="#fbbf24" stroke-width="3"/>
      <!-- Royal Princess Doge -->
      <circle cx="200" cy="100" r="45" fill="#fcd34d"/>
      <ellipse cx="155" cy="105" rx="14" ry="25" fill="#b45309" transform="rotate(15 155 105)"/>
      <ellipse cx="245" cy="105" rx="14" ry="25" fill="#b45309" transform="rotate(-15 245 105)"/>
      <!-- Eyes & Snout -->
      <circle cx="185" cy="95" r="4" fill="#1e293b"/>
      <circle cx="215" cy="95" r="4" fill="#1e293b"/>
      <ellipse cx="200" cy="110" rx="16" ry="12" fill="#fffbeb"/>
      <ellipse cx="200" cy="105" rx="6" ry="4" fill="#0f172a"/>
      <!-- Gold Tiara with Ruby -->
      <polygon points="175,60 185,35 200,50 215,35 225,60" fill="#ffd700" stroke="#b45309" stroke-width="2"/>
      <circle cx="200" cy="46" r="4" fill="#ef4444"/>
      <!-- Scepter -->
      <line x1="250" y1="90" x2="270" y2="160" stroke="#ffd700" stroke-width="5" stroke-linecap="round"/>
      <circle cx="248" cy="85" r="10" fill="#ef4444" stroke="#ffd700" stroke-width="2"/>
    `
  },
  {
    file: "meme8.svg",
    bg: "#091e36",
    accent: "#38bdf8",
    top: "DO NOT DISTURB",
    bottom: "NGỦ ĐỦ 8 TIẾNG - THỨC DẬY VẪN GIÀU",
    art: `
      <!-- Fluffy Cloud Bed -->
      <ellipse cx="200" cy="165" rx="95" ry="30" fill="#1e293b"/>
      <ellipse cx="200" cy="155" rx="85" ry="25" fill="#334155"/>
      <!-- Burrito Cat in Blanket -->
      <rect x="145" y="90" width="110" height="60" rx="30" fill="#f472b6" transform="rotate(-5 200 120)"/>
      <circle cx="160" cy="115" r="24" fill="#fed7aa"/>
      <polygon points="145,95 138,80 155,90" fill="#fb923c"/>
      <polygon points="165,92 170,78 178,92" fill="#fb923c"/>
      <!-- Sleeping Happy Eyes (curved lines) -->
      <path d="M148,115 Q153,120 158,115" stroke="#78350f" stroke-width="2" fill="none"/>
      <path d="M165,115 Q170,120 175,115" stroke="#78350f" stroke-width="2" fill="none"/>
      <!-- Neon Zzz -->
      <text x="220" y="85" font-size="20" font-weight="bold" fill="#38bdf8" opacity="0.9">Z</text>
      <text x="240" y="65" font-size="26" font-weight="bold" fill="#818cf8" opacity="0.8">z</text>
      <text x="265" y="45" font-size="32" font-weight="bold" fill="#c084fc" opacity="0.7">z</text>
    `
  },
  {
    file: "meme9.svg",
    bg: "#132a22",
    accent: "#34d399",
    top: "ZEN MODE: 100%",
    bottom: "TÂM BẤT BIẾN GIỮA DÒNG ĐỜI VẠN BIẾN",
    art: `
      <!-- Hot spring tub -->
      <ellipse cx="200" cy="175" rx="90" ry="24" fill="#065f46"/>
      <ellipse cx="200" cy="165" rx="82" ry="18" fill="#10b981" opacity="0.7"/>
      <!-- Capybara Body & Head -->
      <ellipse cx="200" cy="130" rx="46" ry="38" fill="#92400e"/>
      <ellipse cx="200" cy="95" rx="30" ry="26" fill="#a16207"/>
      <!-- Calm face -->
      <line x1="185" y1="92" x2="195" y2="92" stroke="#451a03" stroke-width="3" stroke-linecap="round"/>
      <line x1="205" y1="92" x2="215" y2="92" stroke="#451a03" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="200" cy="108" rx="10" ry="7" fill="#78350f"/>
      <circle cx="197" cy="107" r="2" fill="#000"/>
      <circle cx="203" cy="107" r="2" fill="#000"/>
      <!-- Yuzu Orange on Head -->
      <circle cx="200" cy="65" r="14" fill="#f59e0b"/>
      <polygon points="200,51 205,44 200,47" fill="#15803d"/>
      <!-- Steam -->
      <path d="M150,130 Q145,110 155,90" stroke="#a7f3d0" stroke-width="2" fill="none" opacity="0.6"/>
      <path d="M250,130 Q255,110 245,90" stroke="#a7f3d0" stroke-width="2" fill="none" opacity="0.6"/>
    `
  },
  {
    file: "meme10.svg",
    bg: "#2b0a0a",
    accent: "#ef4444",
    top: "MAIN CHARACTER VIBES",
    bottom: "BƯỚC ĐI TỰ TIN - VẬN MAY NỞ RỘ",
    art: `
      <!-- Red carpet perspective -->
      <polygon points="170,80 230,80 280,200 120,200" fill="#dc2626"/>
      <line x1="170" y1="80" x2="120" y2="200" stroke="#fbbf24" stroke-width="4"/>
      <line x1="230" y1="80" x2="280" y2="200" stroke="#fbbf24" stroke-width="4"/>
      <!-- Confident Cheems walking -->
      <circle cx="200" cy="95" r="32" fill="#f59e0b"/>
      <ellipse cx="200" cy="135" rx="26" ry="32" fill="#d97706"/>
      <circle cx="190" cy="90" r="4" fill="#000"/>
      <circle cx="210" cy="90" r="4" fill="#000"/>
      <ellipse cx="200" cy="102" rx="12" ry="8" fill="#fef3c7"/>
      <!-- Petals falling -->
      <g fill="#f43f5e">
        <circle cx="150" cy="100" r="6"/>
        <circle cx="250" cy="110" r="7"/>
        <circle cx="140" cy="150" r="8"/>
        <circle cx="260" cy="160" r="7"/>
        <circle cx="170" cy="180" r="9"/>
      </g>
    `
  },
  {
    file: "meme11.svg",
    bg: "#351c0a",
    accent: "#fbbf24",
    top: "SMILE MAXIMUM",
    bottom: "NỤ CƯỜI TỎA NẮNG ĐÁNH GỤC MỌI TRÁI TIM",
    art: `
      <!-- Shiba with biggest smile -->
      <circle cx="200" cy="110" r="55" fill="#f59e0b"/>
      <polygon points="145,75 130,35 165,55" fill="#d97706"/>
      <polygon points="255,75 270,35 235,55" fill="#d97706"/>
      <!-- Cheeks white fur -->
      <ellipse cx="170" cy="130" rx="22" ry="18" fill="#fffbeb"/>
      <ellipse cx="230" cy="130" rx="22" ry="18" fill="#fffbeb"/>
      <!-- Squinting happy eyes ^_^ -->
      <path d="M165,100 L175,92 L185,100" stroke="#451a03" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M215,100 L225,92 L235,100" stroke="#451a03" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- Huge happy open mouth -->
      <path d="M185,122 Q200,150 215,122 Z" fill="#ef4444" stroke="#451a03" stroke-width="2"/>
      <circle cx="200" cy="115" r="6" fill="#1e293b"/>
      <!-- Flower crown -->
      <circle cx="165" cy="55" r="8" fill="#ec4899"/>
      <circle cx="185" cy="48" r="9" fill="#eab308"/>
      <circle cx="205" cy="46" r="10" fill="#f43f5e"/>
      <circle cx="225" cy="50" r="9" fill="#a855f7"/>
      <circle cx="245" cy="57" r="8" fill="#06b6d4"/>
    `
  },
  {
    file: "meme12.svg",
    bg: "#241026",
    accent: "#e879f9",
    top: "QUEEN ENERGY",
    bottom: "TỰ TIN, ĐỘC LẬP & KIÊU HÃNH THEO CÁCH RIÊNG",
    art: `
      <!-- Crown & Aura -->
      <circle cx="200" cy="115" r="50" fill="#fae8ff" stroke="#a855f7" stroke-width="3"/>
      <!-- Majestic Crown -->
      <polygon points="160,70 175,30 200,55 225,30 240,70" fill="#eab308" stroke="#78350f" stroke-width="2"/>
      <circle cx="175" cy="30" r="5" fill="#ef4444"/>
      <circle cx="200" cy="55" r="5" fill="#3b82f6"/>
      <circle cx="225" cy="30" r="5" fill="#10b981"/>
      <!-- Confident Cat Face -->
      <polygon points="155,80 145,50 170,70" fill="#c084fc"/>
      <polygon points="245,80 255,50 230,70" fill="#c084fc"/>
      <!-- Winged Eyeliner -->
      <path d="M170,108 Q182,102 190,110 L195,106" stroke="#581c87" stroke-width="3" fill="none"/>
      <path d="M230,108 Q218,102 210,110 L205,106" stroke="#581c87" stroke-width="3" fill="none"/>
      <path d="M195,125 Q200,132 205,125" stroke="#7e22ce" stroke-width="3" fill="none"/>
      <!-- Sparkling Stars -->
      <text x="130" y="100" font-size="20">✨</text>
      <text x="250" y="100" font-size="20">👑</text>
    `
  },
  {
    file: "meme13.svg",
    bg: "#330a1e",
    accent: "#fb7185",
    top: "GIFT OVERLOAD",
    bottom: "QUÀ NGẬP PHÒNG - XIN THÊM CHỖ CHỨA!",
    art: `
      <!-- Avalanche of Gifts -->
      <rect x="80" y="130" width="70" height="60" rx="8" fill="#f43f5e"/>
      <line x1="115" y1="130" x2="115" y2="190" stroke="#fef08a" stroke-width="8"/>
      <rect x="250" y="125" width="75" height="65" rx="8" fill="#8b5cf6"/>
      <line x1="287" y1="125" x2="287" y2="190" stroke="#f472b6" stroke-width="8"/>
      <rect x="150" y="150" width="100" height="50" rx="8" fill="#eab308"/>
      <line x1="200" y1="150" x2="200" y2="200" stroke="#ef4444" stroke-width="8"/>
      <!-- Kitten Peeking from Top -->
      <ellipse cx="200" cy="115" rx="35" ry="30" fill="#fff"/>
      <polygon points="170,95 160,70 185,88" fill="#fed7aa"/>
      <polygon points="230,95 240,70 215,88" fill="#fed7aa"/>
      <circle cx="188" cy="112" r="5" fill="#0284c7"/>
      <circle cx="212" cy="112" r="5" fill="#0284c7"/>
      <polygon points="197,120 203,120 200,124" fill="#f43f5e"/>
      <!-- Paws on box -->
      <ellipse cx="180" cy="148" rx="10" ry="7" fill="#fff"/>
      <ellipse cx="220" cy="148" rx="10" ry="7" fill="#fff"/>
    `
  },
  {
    file: "meme14.svg",
    bg: "#0a2624",
    accent: "#2dd4bf",
    top: "SKINCARE GURU",
    bottom: "THỨC KHUYA KHÔNG MỤN - DA CĂNG BÓNG MƯỚT MỊN",
    art: `
      <!-- Spa Cat in Towel -->
      <circle cx="200" cy="115" r="45" fill="#fef3c7"/>
      <!-- Hair towel wrap -->
      <path d="M160,95 Q200,40 240,95 Z" fill="#ec4899"/>
      <circle cx="200" cy="50" r="14" fill="#ec4899"/>
      <!-- Cucumber Slices on Eyes -->
      <circle cx="180" cy="112" r="14" fill="#84cc16" stroke="#4d7c0f" stroke-width="3"/>
      <circle cx="180" cy="112" r="6" fill="#bef264"/>
      <circle cx="220" cy="112" r="14" fill="#84cc16" stroke="#4d7c0f" stroke-width="3"/>
      <circle cx="220" cy="112" r="6" fill="#bef264"/>
      <!-- Smile -->
      <path d="M195,135 Q200,140 205,135" stroke="#78350f" stroke-width="2" fill="none"/>
      <!-- Sparkle effects -->
      <text x="135" y="90" font-size="22">✨</text>
      <text x="245" y="90" font-size="22">✨</text>
      <text x="190" y="180" font-size="20">🧖‍♀️</text>
    `
  },
  {
    file: "meme15.svg",
    bg: "#1e1424",
    accent: "#c084fc",
    top: "FASHION ICON",
    bottom: "BƯỚC RA ĐƯỜNG LÀ CẢ PHỐ PHẢI NGƯỚC NHÌN",
    art: `
      <!-- French Bulldog in Beret -->
      <circle cx="200" cy="110" r="45" fill="#e2e8f0"/>
      <!-- Chic Beret -->
      <ellipse cx="195" cy="72" rx="36" ry="14" fill="#be123c" transform="rotate(-12 195 72)"/>
      <circle cx="178" cy="60" r="4" fill="#be123c"/>
      <!-- Designer Sunglasses -->
      <ellipse cx="180" cy="108" rx="16" ry="12" fill="#0f172a"/>
      <ellipse cx="220" cy="108" rx="16" ry="12" fill="#0f172a"/>
      <line x1="196" y1="108" x2="204" y2="108" stroke="#eab308" stroke-width="3"/>
      <!-- Trench Coat Collar -->
      <polygon points="160,150 200,180 170,200 135,160" fill="#ca8a04"/>
      <polygon points="240,150 200,180 230,200 265,160" fill="#ca8a04"/>
    `
  },
  {
    file: "meme16.svg",
    bg: "#2b180a",
    accent: "#f97316",
    top: "FOODIE HEAVEN",
    bottom: "ĂN NGON NGẬP TRÀN - BẠN BÈ TRANH NHAU BAO",
    art: `
      <!-- Table of Feast -->
      <ellipse cx="200" cy="175" rx="100" ry="25" fill="#fed7aa"/>
      <!-- Sushi & Pizza -->
      <text x="120" y="175" font-size="28">🍣</text>
      <text x="160" y="170" font-size="28">🍕</text>
      <text x="210" y="170" font-size="28">🍔</text>
      <text x="250" y="175" font-size="28">🍰</text>
      <!-- Happy Bear Holding Fork & Knife -->
      <circle cx="200" cy="95" r="40" fill="#b45309"/>
      <circle cx="165" cy="65" r="14" fill="#78350f"/>
      <circle cx="235" cy="65" r="14" fill="#78350f"/>
      <ellipse cx="200" cy="105" rx="18" ry="14" fill="#fde68a"/>
      <circle cx="188" cy="92" r="4" fill="#000"/>
      <circle cx="212" cy="92" r="4" fill="#000"/>
      <ellipse cx="200" cy="102" rx="7" ry="5" fill="#451a03"/>
      <!-- Bib -->
      <path d="M180,125 Q200,145 220,125" fill="#f43f5e"/>
    `
  },
  {
    file: "meme17.svg",
    bg: "#0c2333",
    accent: "#38bdf8",
    top: "SMOOTH SAILING",
    bottom: "ĐÈN XANH SUỐT TUYẾN - TRỜI MƯA KHÔNG ƯỚT TÓC",
    art: `
      <!-- Green Traffic Light -->
      <rect x="75" y="60" width="35" height="85" rx="8" fill="#1e293b"/>
      <circle cx="92" cy="78" r="8" fill="#475569"/>
      <circle cx="92" cy="102" r="8" fill="#475569"/>
      <circle cx="92" cy="126" r="10" fill="#22c55e" stroke="#86efac" stroke-width="2"/>
      <!-- Cool Duck on Rainbow Slide -->
      <path d="M120,80 Q200,120 280,175" stroke="#ec4899" stroke-width="8" fill="none"/>
      <path d="M120,88 Q200,128 280,183" stroke="#eab308" stroke-width="8" fill="none"/>
      <path d="M120,96 Q200,136 280,191" stroke="#38bdf8" stroke-width="8" fill="none"/>
      <!-- Duck with Shades -->
      <circle cx="220" cy="120" r="26" fill="#facc15"/>
      <ellipse cx="242" cy="122" rx="12" ry="6" fill="#f97316"/>
      <!-- Sunglasses -->
      <polygon points="208,114 232,114 228,124 212,124" fill="#0f172a"/>
    `
  },
  {
    file: "meme18.svg",
    bg: "#110b29",
    accent: "#a855f7",
    top: "MIND SIZE: MEGA",
    bottom: "THÔNG MINH XUẤT CHÚNG - ĐẦU ÓC SẮC SẢO",
    art: `
      <!-- Galaxy Cosmic Spiral -->
      <g stroke="#c084fc" stroke-width="1.5" opacity="0.6">
        <path d="M200,105 Q140,60 180,30 Q240,20 250,70 Q260,140 180,150 Q120,150 120,90" fill="none"/>
      </g>
      <!-- Big Brain Cat -->
      <circle cx="200" cy="115" r="38" fill="#fed7aa"/>
      <polygon points="170,90 160,65 185,80" fill="#f97316"/>
      <polygon points="230,90 240,65 215,80" fill="#f97316"/>
      <!-- Giant glowing brain above -->
      <ellipse cx="200" cy="65" rx="36" ry="24" fill="#f472b6" opacity="0.9" stroke="#fbcfe8" stroke-width="2"/>
      <!-- Glowing equations -->
      <text x="130" y="60" font-size="12" font-family="monospace" fill="#38bdf8">E=mc²</text>
      <text x="245" y="60" font-size="12" font-family="monospace" fill="#facc15">IQ=300</text>
      <text x="190" y="125" font-size="14">🧠✨</text>
    `
  },
  {
    file: "meme19.svg",
    bg: "#0f232e",
    accent: "#38bdf8",
    top: "PURE WHOLESOME LOVE",
    bottom: "ĐƯỢC YÊU THƯƠNG VÔ ĐIỀU KIỆN - HẠNH PHÚC NGẬP TRÀN",
    art: `
      <!-- Water ripples -->
      <ellipse cx="200" cy="160" rx="95" ry="25" fill="#0284c7" opacity="0.5"/>
      <ellipse cx="200" cy="170" rx="75" ry="18" fill="#38bdf8" opacity="0.3"/>
      <!-- Two Otters holding hands -->
      <!-- Left Otter -->
      <ellipse cx="170" cy="120" rx="26" ry="32" fill="#78350f" transform="rotate(-10 170 120)"/>
      <circle cx="165" cy="95" r="18" fill="#92400e"/>
      <circle cx="160" cy="92" r="3" fill="#000"/>
      <!-- Right Otter -->
      <ellipse cx="230" cy="120" rx="26" ry="32" fill="#78350f" transform="rotate(10 230 120)"/>
      <circle cx="235" cy="95" r="18" fill="#92400e"/>
      <circle cx="240" cy="92" r="3" fill="#000"/>
      <!-- Holding Hands in middle -->
      <ellipse cx="200" cy="122" rx="12" ry="8" fill="#b45309"/>
      <!-- Floating Hearts -->
      <text x="190" y="70" font-size="24">💖</text>
      <text x="150" y="60" font-size="16">🌸</text>
      <text x="235" y="60" font-size="16">🌸</text>
    `
  },
  {
    file: "meme20.svg",
    bg: "#3b1e06",
    accent: "#ffd700",
    top: "100% MAXIMUM LUCK",
    bottom: "VŨ TRỤ GỬI TÍN HIỆU MAY MẮN TỐI ĐA",
    art: `
      <!-- Golden Maneki Neko -->
      <ellipse cx="200" cy="135" rx="50" ry="45" fill="#facc15" stroke="#b45309" stroke-width="3"/>
      <circle cx="200" cy="90" r="38" fill="#facc15" stroke="#b45309" stroke-width="3"/>
      <!-- Red inner ears -->
      <polygon points="170,68 158,35 185,55" fill="#ef4444"/>
      <polygon points="230,68 242,35 215,55" fill="#ef4444"/>
      <!-- Waving Lucky Paw -->
      <ellipse cx="245" cy="80" rx="12" ry="20" fill="#fde047" stroke="#b45309" stroke-width="2" transform="rotate(25 245 80)"/>
      <!-- Bell Collar -->
      <rect x="175" y="115" width="50" height="10" rx="4" fill="#dc2626"/>
      <circle cx="200" cy="127" r="9" fill="#ffd700" stroke="#78350f" stroke-width="2"/>
      <!-- Koban Gold Coin in lap -->
      <ellipse cx="190" cy="148" rx="16" ry="22" fill="#ffd700" stroke="#b45309" stroke-width="2"/>
      <text x="190" y="153" font-size="12" font-weight="900" fill="#78350f" text-anchor="middle">千万両</text>
      <!-- Rainbow Luck meter -->
      <text x="130" y="90" font-size="22">✨</text>
      <text x="200" y="45" font-size="22">🌈</text>
    `
  }
];

function generateSVG(config) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${config.bg}"/>
      <stop offset="100%" stop-color="#0a060e"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="400" height="240" rx="16" fill="url(#bgGrad)" stroke="${config.accent}" stroke-width="2" stroke-opacity="0.5"/>
  <!-- Top Meme Header -->
  <rect x="16" y="12" width="368" height="26" rx="6" fill="rgba(0,0,0,0.4)"/>
  <text x="200" y="30" font-family="'Impact', 'Arial Black', sans-serif" font-size="13" font-weight="bold" fill="${config.accent}" letter-spacing="1.5" text-anchor="middle" filter="url(#glow)">${config.top}</text>
  <!-- Artwork Graphic -->
  <g id="artwork">
    ${config.art}
  </g>
  <!-- Bottom Meme Caption -->
  <rect x="12" y="202" width="376" height="28" rx="6" fill="rgba(0,0,0,0.6)"/>
  <text x="200" y="221" font-family="'Segoe UI', -apple-system, sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" letter-spacing="0.5" text-anchor="middle">${config.bottom}</text>
</svg>`;
}

for (const config of memeConfigs) {
  const svg = generateSVG(config);
  writeFileSync(join("img/memes", config.file), svg, "utf8");
}

console.log(`Generated all ${memeConfigs.length} meme SVGs in img/memes/ successfully!`);
