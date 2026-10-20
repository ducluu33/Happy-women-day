import assert from "node:assert/strict";
import { readFileSync, existsSync, statSync } from "node:fs";
import { runInNewContext } from "node:vm";

function createMockElement(tag) {
  const listeners = {};
  const classes = new Set();
  const children = [];
  const attributes = {};

  const el = {
    tag,
    dataset: {},
    style: {},
    children,
    value: "",
    textContent: "",
    id: "",
    src: "",
    alt: "",
    classList: {
      add: (cls) => classes.add(cls),
      remove: (cls) => classes.delete(cls),
      contains: (cls) => classes.has(cls),
      has: (cls) => classes.has(cls),
    },
    addEventListener: (event, handler) => {
      listeners[event] = listeners[event] || [];
      listeners[event].push(handler);
    },
    dispatchEvent: (event) => {
      const type = typeof event === "string" ? event : event.type;
      (listeners[type] || []).forEach((fn) => fn(event));
    },
    click: function () {
      (listeners["click"] || []).forEach((fn) => fn({ target: this, preventDefault() {} }));
    },
    focus: () => {},
    setAttribute: (name, val) => { attributes[name] = val; },
    getAttribute: (name) => attributes[name],
    appendChild: (child) => { children.push(child); },
    append: (...args) => { children.push(...args); },
    remove: function () {
      this.removed = true;
    },
    animate: () => ({ onfinish: null }),
    querySelector: function (selector) {
      return findSelector(this, selector);
    },
  };

  Object.defineProperty(el, "innerHTML", {
    get() { return this._innerHTML || ""; },
    set(html) {
      this._innerHTML = html;
      const tagRegex = /<([a-zA-Z0-9]+)([^>]*)>/g;
      let match;
      while ((match = tagRegex.exec(html)) !== null) {
        const tagName = match[1];
        const attrs = match[2];
        const child = createMockElement(tagName);
        const idMatch = attrs.match(/id=["']([^"']+)["']/);
        if (idMatch) child.id = idMatch[1];
        const classMatch = attrs.match(/class=["']([^"']+)["']/);
        if (classMatch) {
          classMatch[1].split(/\s+/).forEach((c) => child.classList.add(c));
        }
        children.push(child);
      }
    }
  });

  return el;
}

function findSelector(root, selector) {
  if (selector.startsWith("#")) {
    const id = selector.slice(1);
    const search = (node) => {
      if (node.id === id) return node;
      for (const child of node.children || []) {
        const found = search(child);
        if (found) return found;
      }
      return null;
    };
    return search(root);
  }
  if (selector.startsWith(".")) {
    const cls = selector.slice(1);
    const search = (node) => {
      if (node.classList?.contains(cls)) return node;
      for (const child of node.children || []) {
        const found = search(child);
        if (found) return found;
      }
      return null;
    };
    return search(root);
  }
  return null;
}

// 1. Setup mock environment
const mockBody = createMockElement("body");
mockBody.classList.add("intro-active");
const mockScene = createMockElement("main");
mockScene.id = "bouquet-scene";

const elementsById = {
  "bouquet-scene": mockScene,
  "letter-scene": createMockElement("section"),
};

let queuedTimeouts = [];
const customTimeouts = (cb, delay) => {
  queuedTimeouts.push({ cb, delay });
};

const domListeners = {};
const windowListeners = {};
const mockModule = { exports: {} };

let copiedText = "";
const mockNavigator = {
  clipboard: {
    writeText: async (text) => {
      copiedText = text;
      return Promise.resolve();
    }
  }
};

const context = {
  document: {
    readyState: "complete",
    body: mockBody,
    querySelector: (selector) => {
      if (selector === "#bouquet-scene") return mockScene;
      if (selector === "#letter-scene") return elementsById["letter-scene"];
      return null;
    },
    createElement: (tag) => createMockElement(tag),
    addEventListener: (type, fn) => {
      domListeners[type] = domListeners[type] || [];
      domListeners[type].push(fn);
    },
  },
  window: {
    addEventListener: (type, fn) => {
      windowListeners[type] = windowListeners[type] || [];
      windowListeners[type].push(fn);
    },
  },
  navigator: mockNavigator,
  performance: { now: () => 0 },
  requestAnimationFrame: (cb) => cb(10000),
  setTimeout: customTimeouts,
  MutationObserver: class {
    observe() {}
    disconnect() {}
  },
  module: mockModule,
  Math,
};

// Run raffle.js in context
const raffleCode = readFileSync(new URL("../js/raffle.js", import.meta.url), "utf8");
runInNewContext(raffleCode, context);

// Verify WISHES array
const wishes = mockModule.exports.WISHES;
assert.ok(Array.isArray(wishes), "WISHES should be an array");
assert.equal(wishes.length, 20, "Must contain exactly 20 wishes");

wishes.forEach((w, index) => {
  assert.equal(w.id, index + 1, `Wish ${index + 1} must have correct id`);
  assert.ok(w.title && w.title.length > 0, `Wish ${w.id} must have title`);
  assert.ok(w.theme && w.theme.length > 0, `Wish ${w.id} must have theme`);
  assert.ok(w.wish && w.wish.length > 10, `Wish ${w.id} must have complete wish text`);
  assert.ok(w.meme && (w.meme.endsWith(".jpg") || w.meme.endsWith(".png")), `Wish ${w.id} must reference a real image file (.jpg/.png)`);
  assert.ok(existsSync(w.meme), `Image file ${w.meme} must exist on disk`);
  const stat = statSync(w.meme);
  assert.ok(stat.size > 1000, `Image file ${w.meme} must be a real image with content (>1KB), got ${stat.size} bytes`);
  assert.ok(w.memeName && w.memeName.length > 0, `Wish ${w.id} must have meme name`);
  assert.ok(w.memeCaption && w.memeCaption.length > 0, `Wish ${w.id} must have meme caption`);
});

// Locate trigger and overlay inside scene
const trigger = mockScene.children.find((c) => c.id === "raffle-trigger");
assert.ok(trigger, "Trigger button must be appended to bouquet-scene");

const overlay = mockScene.children.find((c) => c.id === "raffle-overlay");
assert.ok(overlay, "Overlay must be appended to bouquet-scene");

// Trigger is initially hidden
assert.equal(trigger.classList.contains("is-visible"), false);

// Simulate flowers-shown event
assert.ok(windowListeners["flowers-shown"], "Should register listener for flowers-shown");
windowListeners["flowers-shown"][0]();

// Advance timeouts to reveal trigger
while (queuedTimeouts.length > 0) {
  const item = queuedTimeouts.shift();
  item.cb();
}
assert.equal(trigger.classList.contains("is-visible"), true, "Trigger should become visible");

// 2. Click trigger to open letter
trigger.click();
assert.equal(overlay.classList.contains("is-open"), true, "Overlay should open upon trigger click");

// Check Step 1 Welcome
const stepWelcome = overlay.querySelector("#raffle-step-welcome");
const stepWish = overlay.querySelector("#raffle-step-wish");
const nextBtn = overlay.querySelector("#raffle-next-btn");
const rerollBtn = overlay.querySelector("#raffle-reroll-btn");
const copyBtn = overlay.querySelector("#raffle-copy-btn");
const closeBtn = overlay.querySelector("#raffle-close-btn");
const wishNumberEl = overlay.querySelector("#raffle-wish-number");
const wishThemeEl = overlay.querySelector("#raffle-wish-theme");
const memeNameEl = overlay.querySelector("#raffle-meme-name");
const memeImgEl = overlay.querySelector("#raffle-meme-img");
const memeCaptionEl = overlay.querySelector("#raffle-meme-caption");
const wishTitleEl = overlay.querySelector("#raffle-wish-title");
const wishTextEl = overlay.querySelector("#raffle-wish-text");

assert.equal(stepWelcome.classList.contains("is-active"), true, "Step 1 should be active initially");
assert.equal(stepWish.classList.contains("is-active"), false);

// 3. Click Draw Wish button
nextBtn.click();

assert.equal(stepWelcome.classList.contains("is-active"), false, "Step 1 should be inactive");
assert.equal(stepWish.classList.contains("is-active"), true, "Step 2 should be active");

assert.ok(wishNumberEl.textContent.includes("/ 20"), "Should show wish number out of 20");
assert.ok(wishThemeEl.textContent.length > 0, "Should display wish theme");
assert.ok(memeNameEl.textContent.includes("Meme:"), "Should show meme name");
assert.ok(memeImgEl.src.includes(".jpg") || memeImgEl.src.includes(".png"), "Should set real meme image src");
assert.ok(memeCaptionEl.textContent.length > 0, "Should display meme caption");
assert.ok(wishTitleEl.textContent.length > 0, "Should display wish title");
assert.ok(wishTextEl.textContent.length > 0, "Should display wish text");

// 4. Test Reroll / Draw another wish
rerollBtn.click();
assert.equal(stepWish.classList.contains("is-active"), true);
assert.ok(wishTitleEl.textContent.length > 0);

// 5. Test Copy button
copyBtn.click();
assert.ok(copiedText.includes("20/10"), "Copied text should include 20/10 greeting");
assert.ok(copiedText.includes("Meme:"), "Copied text should include meme attribution");

// 6. Test Close button
closeBtn.click();
assert.equal(overlay.classList.contains("is-open"), false, "Overlay should close");

console.log("PASS: 20/10 raffle with complete 20 wishes, 20 REAL INTERNET MEMES, reroll, copy, and UI transitions.");
