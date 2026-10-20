import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

function setup(reducedMotion = false) {
  let time = 0;
  let click;
  let focused = false;
  const tasks = [];
  const classes = new Set(["intro-active"]);
  const node = () => ({
    children: [], style: {}, classList: { add() {} }, removed: false,
    append(child) { this.children.push(child); },
    remove() { this.removed = true; },
    animate() { return {}; },
  });
  const petals = node();
  const confetti = node();
  const intro = node();
  intro.querySelector = selector => ({ ".letter-petals": petals, ".letter-confetti": confetti })[selector];
  const scene = { hidden: true, focus() { focused = true; } };
  const button = { disabled: false, addEventListener(event, callback) { click = callback; } };

  runInNewContext(readFileSync(new URL("../js/intro.js", import.meta.url), "utf8"), {
    document: {
      body: { classList: { remove: name => classes.delete(name) } },
      querySelector: selector => ({ "#letter-scene": intro, "#bouquet-scene": scene, "#open-letter": button })[selector],
      createElement: node,
    },
    window: { matchMedia: () => ({ matches: reducedMotion }) },
    setTimeout(callback, delay) { tasks.push({ callback, at: time + delay }); },
  });

  function advanceTo(target) {
    while (tasks.some(task => task.at <= target)) {
      tasks.sort((a, b) => a.at - b.at);
      const task = tasks.shift();
      time = task.at;
      task.callback();
    }
    time = target;
  }
  return { petals, confetti, intro, scene, button, classes, tasks, click: () => click(), advanceTo, focused: () => focused };
}

const regular = setup();
assert.equal(regular.petals.children.length, 35);
assert.equal(regular.scene.hidden, true);
regular.click();
regular.click();
assert.equal(regular.tasks.length, 3, "Repeated clicks must not start a second transition");
regular.advanceTo(500);
assert.equal(regular.confetti.children.length, 100);
regular.advanceTo(649);
assert.equal(regular.scene.hidden, true);
regular.advanceTo(650);
assert.equal(regular.scene.hidden, false);
assert.equal(regular.intro.inert, true);
regular.advanceTo(750);
assert.equal(regular.confetti.children.length, 150);
regular.advanceTo(2450);
assert.equal(regular.intro.removed, true);
assert.equal(regular.classes.has("intro-active"), false);
assert.equal(regular.focused(), true);
assert.equal(regular.tasks.length, 0);

const reduced = setup(true);
assert.equal(reduced.petals.children.length, 0);
reduced.click();
assert.equal(reduced.scene.hidden, false);
assert.equal(reduced.intro.removed, true);
assert.equal(reduced.classes.has("intro-active"), false);
assert.equal(reduced.tasks.length, 0);
assert.equal(reduced.focused(), true);
console.log("PASS: intro timing, 150 particles, repeated clicks, scene reveal, cleanup, reduced motion.");
