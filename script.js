const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-nav]");
const runtimeMap = document.querySelector("[data-runtime-map]");
const mapExplanation = document.querySelector("[data-map-explanation]");

const closeMenu = () => {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMenu();
});

const setHeaderState = () => {
  header?.classList.toggle("scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const explanations = {
  providers: {
    label: "Replaceable intelligence",
    text: "Model providers sit outside the core. The owner can change an API or add a local model without moving the agent’s whole operating record.",
  },
  core: {
    label: "Stable owner-run layer",
    text: "The runtime is the stable layer on the owner’s server. Models and optional capabilities can change around it.",
  },
  artifacts: {
    label: "Inspectable work",
    text: "Tasks, logs, state, and skills remain visible so the owner can review what the agent did and what changed.",
  },
};

runtimeMap?.querySelectorAll("[data-map-target]").forEach((control) => {
  const activate = () => {
    const target = control.dataset.mapTarget;
    const explanation = explanations[target];
    if (!explanation || !mapExplanation) return;
    runtimeMap.dataset.active = target;
    mapExplanation.innerHTML = `<span>${explanation.label}</span>${explanation.text}`;
  };

  control.addEventListener("click", activate);
  control.addEventListener("focus", activate);
});
