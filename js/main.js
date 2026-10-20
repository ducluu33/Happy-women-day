"use strict";

// All stems meet at the wrapping. Heights are in the flower's em units.
const arrangement = [
  { type: "blooming", angle: -37, height: 55, offset: -12, layer: 2 },
  { type: "gift", angle: 35, height: 56, offset: 12, layer: 2 },
  { type: "yellow", angle: -14, height: 65, offset: -8, layer: 3 },
  { type: "blooming", angle: 16, height: 66, offset: 8, layer: 3 },
  { type: "sunflower", angle: -24, height: 48, offset: -12, layer: 4 },
  { type: "sunflower", angle: 26, height: 49, offset: 12, layer: 4 },
  { type: "sunflower", angle: 0, height: 57, offset: 0, layer: 5 },
  { type: "yellow", angle: -34, height: 44, offset: -8, layer: 6 },
  { type: "blooming", angle: -13, height: 42, offset: -4, layer: 6 },
  { type: "yellow", angle: 8, height: 40, offset: 4, layer: 7 },
  { type: "gift", angle: 34, height: 44, offset: 8, layer: 6 },
  { type: "blooming", color: "lavender", angle: -31, height: 66, offset: -12, layer: 1 },
  { type: "gift", color: "sky", angle: 30, height: 67, offset: 12, layer: 1 },
  { type: "yellow", color: "peach", angle: -1, height: 74, offset: 0, layer: 1 },
  { type: "blooming", color: "coral", angle: -11, height: 54, offset: -4, layer: 4 },
  { type: "gift", color: "sky", angle: 17, height: 54, offset: 8, layer: 4 },
  { type: "blooming", color: "lavender", angle: -1, height: 45, offset: -12, layer: 8 },
];

const flowers = document.querySelector("#flowers");
const bouquet = document.querySelector(".bouquet");
const frame = document.querySelector(".bouquet-frame");

for (const [index, flower] of arrangement.entries()) {
  const stem = document.createElement("div");
  stem.className = `flower flower--${flower.type}`;
  if (flower.color) stem.dataset.color = flower.color;
  stem.dataset.source = {
    blooming: "Blooming_Flower",
    yellow: "Flower-animation",
    gift: "FlowersGift",
    sunflower: "flowers",
  }[flower.type];
  stem.style.cssText = `--angle:${flower.angle}deg;--stem:${flower.height}em;--offset:${flower.offset}px;--layer:${flower.layer};--delay:${index * 0.09}s`;

  const petalCount = flower.type === "sunflower" ? 12 : 4;
  const petals = Array.from({ length: petalCount }, (_, i) =>
    flower.type === "sunflower"
      ? `<div class="flower__leaf" style="--petal-angle:${i * 30}deg"></div>`
      : `<div class="flower__leaf flower__leaf--${i + 1}"></div>`
  ).join("");
  const leaves = Array.from({ length: 4 }, (_, i) =>
    `<div class="flower__line__leaf flower__line__leaf--${i + 1}"></div>`
  ).join("");

  stem.innerHTML = `<div class="flower__leafs">${petals}<div class="flower__white-circle"></div></div><div class="flower__line">${leaves}</div>`;
  flowers.append(stem);
}

function fitBouquet() {
  bouquet.style.setProperty("--bouquet-scale", frame.clientWidth / 800);
}

fitBouquet();
new ResizeObserver(fitBouquet).observe(frame);
