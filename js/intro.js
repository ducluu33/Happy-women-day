"use strict";

(() => {
  const intro = document.querySelector("#letter-scene");
  const scene = document.querySelector("#bouquet-scene");
  const button = document.querySelector("#open-letter");
  const petals = intro.querySelector(".letter-petals");
  const confetti = intro.querySelector(".letter-confetti");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!reducedMotion.matches) {
    for (let i = 0; i < 35; i++) {
      const petal = document.createElement("span");
      petal.className = i < 20 ? "letter-petal" : "letter-petal letter-petal--sparkle";
      petal.style.cssText = `--left:${Math.random() * 100}%;--size:${8 + Math.random() * 6}px;--duration:${4 + Math.random() * 4}s;--delay:${-Math.random() * 8}s`;
      petals.append(petal);
    }
  }

  // Same 100-particle burst and 50-particle echo as the reference, using browser animations.
  function burst(count, echo = false) {
    const colors = ["#ff0055", "#ff33aa", "#00f5ff", "#ffeb3b", "#ff9800", "#e91e63", "#9c27b0", "#00e5ff", "#00ff88", "#ffffff"];
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("span");
      particle.className = "letter-particle";
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = echo ? 3 + Math.random() * 6 : 6 + Math.random() * 10;
      const shape = Math.random();
      const isPetal = !echo && shape < .3;
      particle.style.cssText = `width:${size}px;height:${isPetal ? size * 1.5 : size}px;background:${isPetal ? "linear-gradient(135deg,#ff9a9e,#fecfef)" : color};border-radius:${isPetal ? "50% 0 50% 0" : "50%"};box-shadow:0 0 ${size}px ${color};`;
      if (!echo && shape >= .5) {
        particle.style.borderRadius = "0";
        if (shape >= .85) {
          particle.style.width = `${4 + Math.random() * 6}px`;
          particle.style.height = `${12 + Math.random() * 16}px`;
          particle.style.borderRadius = "2px";
        } else if (shape >= .7) {
          particle.style.clipPath = "polygon(50% 0,100% 50%,50% 100%,0 50%)";
        }
      }
      confetti.append(particle);

      const angle = Math.random() * Math.PI * 2;
      const velocity = echo ? 80 + Math.random() * 200 : 120 + Math.random() * 320;
      const x = Math.cos(angle) * velocity;
      const y = Math.sin(angle) * velocity;
      const rotation = Math.random() * 720 - 360;
      const duration = isPetal ? 1500 + Math.random() * 1500 : 700 + Math.random() * 500;
      const animation = particle.animate([
        { transform: "translate(-50%, -50%) scale(.5)", opacity: 1 },
        { transform: `translate(${x}px, ${y}px) rotate(${rotation / 2}deg)`, opacity: .9, offset: .35 },
        { transform: `translate(${x}px, ${y + (isPetal ? 300 : 120)}px) rotate(${rotation}deg) scale(${isPetal ? .8 : 0})`, opacity: 0 },
      ], { duration, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" });
      animation.onfinish = () => particle.remove();
    }
  }

  function revealBouquet() {
    scene.hidden = false;
    intro.inert = true;
    intro.classList.add("revealing");
    if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof CustomEvent === "function") {
      window.dispatchEvent(new CustomEvent("bouquet-revealed"));
    }
  }

  function finishIntro() {
    intro.remove();
    document.body.classList.remove("intro-active");
    scene.focus({ preventScroll: true });
    if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof CustomEvent === "function") {
      window.dispatchEvent(new CustomEvent("flowers-shown"));
    }
  }

  button.addEventListener("click", () => {
    if (button.disabled) return;
    button.disabled = true;

    if (reducedMotion.matches) {
      revealBouquet();
      finishIntro();
      return;
    }

    intro.classList.add("opening");
    setTimeout(() => {
      intro.classList.add("bursting");
      burst(100);
      setTimeout(() => burst(50, true), 250);
    }, 500);
    setTimeout(revealBouquet, 650);
    setTimeout(finishIntro, 2450);
  });
})();
