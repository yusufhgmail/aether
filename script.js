const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-nav]");
const growthExplorer = document.querySelector("[data-growth-explorer]");
const skipLink = document.querySelector(".skip-link");
const heroTitle = document.querySelector("#hero-title");

skipLink?.addEventListener("click", (event) => {
  event.preventDefault();
  heroTitle?.scrollIntoView({ block: "start" });
  heroTitle?.focus({ preventScroll: true });
  window.history.replaceState(null, "", "#hero-title");
});

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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuButton?.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMenu();
});

const setHeaderState = () => {
  header?.classList.toggle("scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

document.documentElement.classList.add("has-reveal");
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
    { rootMargin: "0px 0px -7%", threshold: 0.08 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const growthStages = {
  observe: {
    kicker: "Notice what is missing",
    title: "It sees where the job slows down.",
    copy: "Its work, your corrections, and repeated problems show what it still cannot do well.",
    signals: ["WORK", "FEEDBACK", "OUTCOME"],
  },
  reflect: {
    kicker: "Learn from the result",
    title: "It works out what would help.",
    copy: "Aether can compare what happened and decide whether it needs better knowledge, a clearer instruction, or a new ability.",
    signals: ["RESULT", "PATTERN", "NEED"],
  },
  build: {
    kicker: "Build what is missing",
    title: "It adds or improves an ability.",
    copy: "Aether can create a tool, improve how it works, or change what it remembers. The protected part stays unchanged.",
    signals: ["TOOL", "METHOD", "MEMORY"],
  },
  collaborate: {
    kicker: "Bring in other agents",
    title: "It gets help when the goal is bigger.",
    copy: "Aether can give focused parts of the work to other agents, compare what they return, and combine the best parts.",
    signals: ["RESEARCHER", "BUILDER", "REVIEWER"],
  },
  keep: {
    kicker: "Keep what worked",
    title: "The next job starts stronger.",
    copy: "Useful preferences, ways of working, and new abilities stay available after the conversation ends.",
    signals: ["MEMORY", "PREFERENCE", "ABILITY"],
  },
};

const growthTabs = Array.from(growthExplorer?.querySelectorAll("[data-growth-step]") ?? []);
const growthPanel = growthExplorer?.querySelector("[role='tabpanel']");
const stageKicker = growthExplorer?.querySelector("[data-stage-kicker]");
const stageTitle = growthExplorer?.querySelector("[data-stage-title]");
const stageCopy = growthExplorer?.querySelector("[data-stage-copy]");
const stageSignals = Array.from(growthExplorer?.querySelectorAll("[data-stage-signal] span") ?? []);

const activateGrowthStage = (tab, moveFocus = false) => {
  const stageName = tab.dataset.growthStep;
  const stage = growthStages[stageName];
  if (!stage || !growthExplorer || !growthPanel || !stageKicker || !stageTitle || !stageCopy) return;

  growthTabs.forEach((item) => {
    const active = item === tab;
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
  });

  growthExplorer.dataset.active = stageName;
  growthPanel.setAttribute("aria-labelledby", tab.id);
  stageKicker.textContent = stage.kicker;
  stageTitle.textContent = stage.title;
  stageCopy.textContent = stage.copy;
  stageSignals.forEach((signal, index) => {
    signal.textContent = stage.signals[index] ?? "";
  });

  if (moveFocus) tab.focus();
};

growthTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateGrowthStage(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % growthTabs.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + growthTabs.length) % growthTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = growthTabs.length - 1;
    if (nextIndex === null) return;
    event.preventDefault();
    activateGrowthStage(growthTabs[nextIndex], true);
  });
});

if (growthTabs[0]) activateGrowthStage(growthTabs[0]);
