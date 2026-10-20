import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const stems = [];
let resize;
let scale;
const frame = { clientWidth: 400 };
const flowers = { append: stem => stems.push(stem) };
const bouquet = { style: { setProperty: (name, value) => { scale = value; } } };

runInNewContext(readFileSync(new URL("../js/main.js", import.meta.url), "utf8"), {
  document: {
    querySelector: selector => ({ "#flowers": flowers, ".bouquet": bouquet, ".bouquet-frame": frame })[selector],
    createElement: () => ({ dataset: {}, style: {}, innerHTML: "" }),
  },
  ResizeObserver: class {
    constructor(callback) { resize = callback; }
    observe(target) { assert.equal(target, frame); }
  },
});

assert.equal(stems.length, 17);
assert.equal(stems.filter(stem => stem.dataset.source === "flowers").length, 3);
assert.equal(stems.filter(stem => stem.dataset.color).length, 6);
assert.deepEqual(new Set(stems.map(stem => stem.dataset.color).filter(Boolean)), new Set([
  "lavender", "sky", "peach", "coral",
]));
assert.deepEqual(new Set(stems.map(stem => stem.dataset.source)), new Set([
  "Blooming_Flower", "Flower-animation", "FlowersGift", "flowers",
]));
for (const stem of stems) {
  const petals = stem.innerHTML.match(/class="flower__leaf(?: |")/g) || [];
  const leaves = stem.innerHTML.match(/class="flower__line__leaf /g) || [];
  assert.equal(petals.length, stem.dataset.source === "flowers" ? 12 : 4);
  assert.equal(leaves.length, 4);
  assert.ok(stem.innerHTML.includes('class="flower__line"'));
  assert.doesNotMatch(stem.innerHTML, /grass|grow-ans|flower__g-/);
  const height = Number(stem.style.cssText.match(/--stem:([\d.]+)em/)[1]);
  const angle = Number(stem.style.cssText.match(/--angle:([-\d.]+)deg/)[1]);
  const headY = 620 - height * 7 * Math.cos(angle * Math.PI / 180);
  const lowerPetalReach = stem.dataset.source === "flowers" ? 81 : 35;
  assert.ok(headY + lowerPetalReach < 422, "Flower heads must clear the front wrapping");
  assert.ok(headY > 81, "Flower heads must stay inside the top of the bouquet frame");
}
assert.equal(scale, 0.5);
frame.clientWidth = 800;
resize();
assert.equal(scale, 1);
console.log("PASS: 17 flowers, four added colors, four sources, petals/leaves, no grass, scaling, heads inside frame and above wrapping.");
