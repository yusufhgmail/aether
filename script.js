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
    kicker: "Notice the real work",
    title: "It sees where the job slows down.",
    copy: "Structured logs, outcomes, corrections, and recurring tasks reveal what the agent still cannot do well.",
    signals: ["WORK", "FEEDBACK", "OUTCOME"],
  },
  reflect: {
    kicker: "Find the reusable lesson",
    title: "It asks what should change next.",
    copy: "Instead of patching one mistake, Aether can compare attempts and look for the missing knowledge, instruction, or capability behind them.",
    signals: ["LOGS", "PATTERN", "GAP"],
  },
  build: {
    kicker: "Create the missing ability",
    title: "It changes the part it owns.",
    copy: "Aether can write or revise tools, skills, memory, and workflows in its workspace while the protected foundation remains unchanged.",
    signals: ["TOOL", "SKILL", "WORKFLOW"],
  },
  collaborate: {
    kicker: "Use the right minds",
    title: "It forms a team around the problem.",
    copy: "For larger goals, Aether can give focused parts to other agents, compare their work, and combine the useful results.",
    signals: ["RESEARCHER", "BUILDER", "REVIEWER"],
  },
  keep: {
    kicker: "Make progress compound",
    title: "The next attempt starts stronger.",
    copy: "Useful preferences, methods, and capabilities remain available after the conversation ends, so progress can accumulate over time.",
    signals: ["MEMORY", "PREFERENCE", "CAPABILITY"],
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
