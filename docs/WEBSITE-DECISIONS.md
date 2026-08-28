# Aether Many website decisions and verification

**Updated:** 2026-08-27

**Objective:** Use the Business Builder website method to create and verify the strongest defensible initial public website for Aether after comparing it with current popular open and self-hosted agents.

**Primary action:** Read and follow the Community Edition plan in the public GitHub repository.

**Scope:** English vision and pre-release website, responsive implementation, current-category research, naming recommendation, publication, and domain connection. Email collection, analytics, account creation, and a product release are outside scope.

## Source of truth

- The project README defines the mission: counter concentration of AI power with user-owned, decentralized agents and, later, groups of specialized agents with many independent owners.
- The project records define Aether as a small agent runtime rather than an AI model. Its intended design separates model providers and optional capabilities from the core, keeps operating records readable, and uses Git for review and recovery.
- A private Aether instance runs Yusuf Young's personal agent on an Ubuntu VPS he controls. It has tools, skills, memory, hooks, autonomous operation, and cooperating agents.
- The public GitHub repository currently contains the mission and website, not an installable Community Edition.
- Company Native and Works Like Us are separate ventures. Aether Many is the underlying runtime project, not a company-AI service.

## Truth inventory

### Verified facts

- A private Aether runtime works on an owner-controlled Ubuntu 24.04 VPS.
- The private system uses tools, skills, memory, hooks, proactive wakeups, and cooperating agents. On 2026-08-27, its live workspace contained 133 tool files and 66 skill files; those counts are operating evidence, not adoption or quality claims.
- The running kernel is root-owned under `/opt/ai`, while the agent-changeable tools and skills are under `/home/ai`. Ordinary agent work cannot rewrite the kernel files.
- A kernel-controlled outbound boundary records actions in an append-only, hash-chained log and can allow, hold, or block transfers. HTTPS content is not fully inspected, the system is not a hardened native-code sandbox, and it has not had a public security audit.
- Privileged host changes use typed requests handled by a protected controller with validation, review, audit, health checks, rollback, and revocation for its supported effects.
- The intended core is separate from model providers and optional integrations.
- The intended design uses readable operating artifacts and Git-backed review, recovery, and repair.
- The default target is one Ubuntu server with root and bash; Docker and Kubernetes are not required.
- The public repository does not yet contain an installer or a public runtime release.

### Recorded plans stated as plans

- Community Edition is intended to be free and released through GitHub.
- The first public proof should be a documented install another operator can run safely on one Ubuntu server.
- The long-term direction is multiple specialized agents owned by different people and companies, able to cooperate under clear rules.
- The public license and exact release terms have not been settled in the records and therefore are not claimed on the website.

### Untested hypotheses

- “It doesn’t come finished. It becomes yours.” will make the self-building architecture feel more valuable and specific than generic memory, self-hosting, or skill claims.
- An OpenClaw or Hermes user will care enough about bottom-up capability growth above a protected foundation to follow an unreleased alternative.
- Showing the adaptation loop before the architecture will make the user benefit clear without implying that Community Edition can be installed today.
- “Aether Many” will be understood as one Aether project built for many independent owners, rather than as an awkward extension or a separate product.
- GitHub interest will be a useful first demand signal once the repository contains code people can evaluate.

## Current agent category research

The category check used official homepages, official repositories, and the GitHub API; OpenClaw, Hermes, and NanoClaw were refreshed on 2026-08-27. GitHub stars are a rough adoption signal, not a product-quality ranking.

| Project | GitHub stars | What its official site leads with | What Aether should learn |
| --- | ---: | --- | --- |
| [OpenClaw](https://openclaw.ai/) | 387,841 | A personal assistant that completes familiar tasks from existing chat apps, followed immediately by a working install | Lead with a useful outcome, show the next action early, and make ownership concrete rather than philosophical |
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | 237,315 | An agent that learns from its owner, with fast installation, memory, scheduling, delegation, skill creation, and broad model choice | Learning, VPS operation, skill creation, delegation, and no lock-in are already strong category claims; Aether cannot present them as unique |
| [AutoGPT](https://agpt.co/) | 186,904 | Time saved, visible product surfaces, a marketplace, and commercial proof alongside a self-hosted GitHub path | Mature projects show the work and the proof; Aether must clearly mark what exists before it can imitate this structure |
| [OpenHands](https://www.openhands.dev/) | 85,199 | Coding agents as inspectable infrastructure, concrete automations, integrations, and separate open, team, and enterprise paths | Show real jobs and operating boundaries, but do not let future commercial paths blur the Community Edition promise |
| [Open Interpreter](https://www.openinterpreter.com/) | 68,162 | A coding agent for open models | A narrow, direct category sentence is easier to remember than a list of capabilities |
| [AutoGen](https://github.com/microsoft/autogen) | 60,643 | A programming framework for agentic AI | Framework language is crowded and mainly useful to developers |
| [CrewAI](https://www.crewai.com/) | 57,649 | Coordinated role-based agents | Multi-agent operation is established category territory, not a unique claim |
| [LangGraph](https://github.com/langchain-ai/langgraph) | 40,502 | Resilient, stateful agent building | Durable execution and human review are established expectations |
| [Letta](https://docs.letta.com/) | 24,453 | Stateful agents with memory that learn over time | Memory and self-improvement need a more specific ownership reason in Aether's story |
| [Agent Zero](https://www.agent-zero.ai/) | 18,978 | A transparent autonomous agent with a full computer, launcher, provider choice, and community plugins | Visible operation, guided setup, and a concrete machine boundary create trust better than abstract autonomy claims |
| [NanoClaw](https://github.com/nanocoai/nanoclaw) | 30,626 | A lightweight OpenClaw alternative that puts agent work in containers and leads with security boundaries | A small core and a security story are not unique by themselves; Aether must connect its protected floor to the value of self-built capabilities |

### Competitive conclusion

OpenClaw and Hermes already offer the installable, open, self-hosted, model-flexible agent story at enormous scale. Hermes also leads with learning, memory, skill creation, and delegation. NanoClaw makes a small, security-conscious runtime credible but also prevents Aether from treating that architecture alone as the category gap.

Aether Many is not yet a credible replacement for those projects. Its strongest honest position is the combination already visible in the private system: capability is meant to emerge bottom-up from one owner’s real work, while a root-owned foundation, outbound boundary, and privileged-change controller remain outside ordinary self-development. The website therefore leads with the agent becoming specifically yours, shows how progress compounds, then earns trust with the enforced separation and its current limits.

The visual lesson was also selective. The leading sites use one strong promise, a recognizable product character, an immediate install or product action, and visible proof. Aether Many borrows that clarity, not their mascots, dark terminal branding, feature language, layouts, or unsupported adoption signals.

## Relevant visitor roles

### Technical operator or contributor

Needs to know what Aether Many is, why it exists beside established open agents, what is real, what the first release is meant to do, and whether following the repository is worth the effort. The largest reason to leave is the absence of public code.

### Person or company planning to depend on agents

Needs to understand the practical meaning of ownership beyond server location. The largest risk is mistaking a long-term movement for a usable product today.

### Technical or security reviewer

Needs clear boundaries around hosting, model providers, memory, permissions, records, repair, and self-hosting claims. The largest trust risk is treating self-hosting as an automatic privacy or safety guarantee.

## Naming recommendation

**Recommended working brand: Aether Many.** “Many” names the mission: the future should contain many agents with many independent owners, not one dominant system. It also makes the project more distinguishable than “Aether” alone.

The need for a modifier is stronger than the first naming pass suggested. Current projects now use “Aether” for an open-source coding agent at [aether-agent.io](https://aether-agent.io/), a local model-sharing app at [goaether.net](https://goaether.net/), an AI observability tool, a 5G platform, and several other software products. The website should never present bare “Aether” as an unqualified unique name.

On 2026-08-26, the official `.com` and `.ai` RDAP services returned no registration record for both `aethermany.com` and `aethermany.ai`. GitHub's repository search returned no exact “Aether Many” name or description match. These checks are time-sensitive preliminary screens. They do not reserve either domain, prove registrar availability, or replace professional trademark clearance.

Alternatives reconsidered:

- **Aether Open:** both exact domains lacked registry records, but “open” is generic, the public runtime is not released, and another networking product already uses “Aether Open.”
- **Aether Union:** both exact domains lacked registry records and the name supports cooperation, but it says little about the product and can sound political or organizational.
- **Aetherstead:** both exact domains lacked registry records and the name suggests a home for an agent, but an exact-name game already exists and the word pushes the brand toward fantasy.
- **Aether Commons:** both exact domains lacked registry records, but the phrase already appears in an art exhibition and a technology-sovereignty proposal.
- **Aether alone:** rejected because of direct current agent and software collisions and unavailable exact domains.

Yusuf bought `aethermany.com` through GoDaddy on 2026-08-27. The purchase makes Aether Many the public working brand, but it does not replace professional trademark clearance.

## Earlier strategic directions for the adaptation-first remake

### 1. The agent that becomes yours — selected

Lead with the emotional and practical result of bottom-up development: the agent learns from real work, creates what it is missing, uses other agents, and becomes increasingly specific to one owner. Show a visible goal-to-capability loop in the first screen. This is the clearest answer to why an OpenClaw or Hermes user should care, while the private/public status line prevents the promise from sounding installable today.

### 2. Give it a goal and it keeps going

Lead with persistent objectives, proactive wakeups, and autonomous work between conversations. This is useful, but mature agents already promise schedules and background work, and the public edition has not yet proved a dependable goal-directed loop for another operator. It works better as a supporting benefit than the brand-defining promise.

### 3. Freedom above a protected floor

Lead with the root-owned kernel, changeable workspace, outbound checkpoint, and reviewed privileged actions. This is distinctive proof behind the architecture, but a security-first opening makes the user translate mechanisms into value and risks implying a hardened, audited product. It belongs immediately after the benefit rather than before it.

The selected direction uses direction 2 to show that the growing agent does useful work and direction 3 to answer the fear created by self-improvement. The headline and first visual stay about the owner’s outcome; the technical boundaries then earn belief without claiming an install, adoption, audit, or guarantee that does not exist.

## Current direction: put the six benefits in the open

Yusuf’s six direct benefits exposed the largest weakness in the adaptation-first page: the ideas were present, but they were spread across the hero, interaction, benefits, identity, safety, and FAQ. The page made visitors reconstruct the central promise themselves.

Three new directions were compared:

1. **The final outcome — selected:** “Your Aether becomes the agent you need.” Put adaptation, automatic learning, self-built abilities, other agents, layered protection, and goal-led change together immediately after the hero. This answers why the product matters before explaining how it works.
2. **The self-building mechanism:** “Aether learns what you need. Then it builds it.” This is specific and distinctive, but it makes the visitor begin with the mechanism rather than the larger result.
3. **Security first:** “A powerful agent you can trust with real work.” This answers an important fear but overstates the confidence justified by an unaudited private system and weakens the main reason to follow Aether.

The selected direction keeps the working visual system but replaces the scattered, indirect language with Yusuf’s benefit hierarchy. It says “abilities” instead of “functionalities,” keeps all six benefits together, and places the necessary privacy qualification directly beside the privacy benefit.

## Visitor journey and design system

- Hero: “Your Aether becomes the agent you need,” the four central benefits, a visible goal-to-new-ability example, the GitHub action, and the private/public status in one screen.
- Why your Aether: state the central difference first, then keep all six promises together—adaptation, automatic learning, self-built abilities, work with other agents, layered data protection, and continued change around the owner’s goals.
- Messaging: show how a person can ask their Aether for help from WhatsApp, Discord, Telegram, or the web, using clearly illustrative everyday examples rather than implying that the unreleased connections work today.
- Growth loop: show notice, learn, build, get help, and remember as a working, keyboard-operable explanation.
- Identity: show why the small beginning should produce a different agent for every owner.
- Safety: explain the part that grows, the part that cannot change, three real safeguards, and the current limits in ordinary language.
- Mission: explain “Many” as many independently shaped intelligences rather than one dominant blueprint.
- FAQ: answer installation, learning, category overlap, privacy, release terms, model choice, and the name.
- Final action: follow the build on GitHub; no form, fake install, account, or invented community proof.

The visual system retains deep green, warm paper, and a sharp chartreuse signal color. The mark is a bounded hexagonal system with six equal outside nodes and no dominant node. The new adaptation log, capability loop, layered boundary, and many-owner orbit make growth visible without copying the lobster, caduceus, container cat, terminal, or product-UI identities of the researched projects.

## Iteration and verification log

### 2026-08-28 make the personal agent explicit

- Replaced plain “Aether” with “your Aether” wherever the page means the visitor’s individual agent. This now appears in the hero, adaptation example, benefit section, messaging section, use cases, growth explanation, safety explanation, Q&A, dynamic growth text, page title, and social preview copy.
- Kept “Aether Many” for the project, brand, development status, release, and name explanation. Kept “Aether” in the hairdresser message because the person is directly addressing the agent by name.
- Changed both conversation speaker labels to “Your Aether,” including the proactive apartment update Yusuf annotated, so the examples clearly describe one agent shaped around one owner rather than a generic service.
- Rechecked the local page at 1117×892 and 390×844. The longer desktop navigation fits, both conversation overlays remain readable, the phone first screen still shows the GitHub action and development message, the growth diagram label fits, and there is no horizontal overflow.
- `index.html` and `404.html` pass `html-validate`; `script.js` passes Node’s syntax check; `git diff --check` is clean; Lighthouse reports 100% for accessibility, best practices, and SEO.
- Published the revision to the existing Cloudflare Pages project at `https://d0c18282.aether-many.pages.dev` and the canonical `.com`. The `.com`, `www`, deployment URL, and `20260828-2` JavaScript return HTTP 200; the custom missing page returns HTTP 404.
- Rechecked the real `.com` at 1117×892 and 390×844. The personalized hero, navigation, conversation labels, page title, and responsive width match the validated local version. The browser was returned to the desktop homepage.

### 2026-08-28 everyday-help examples

- Added a section after the messaging examples that answers a practical visitor question: “What could your Aether take off your plate?” It shows six possible uses across personal life, work, and free time.
- Kept the section as future-facing illustrative examples because there is no supported evidence that public users already use Aether. It does not present the scenes as customer stories.
- Reframed “best friend who can keep your biggest secrets because nothing is stored in the cloud” as a private thinking companion that remembers context and uses built-in protections. The page does not make an absolute storage or secrecy guarantee.
- Kept user control explicit for consequential actions: email replies wait for approval before sending, and weekend bookings and invitations happen with approval.
- Added six examples: talk through difficult decisions, keep long-term goals moving, draft inbox replies for approval, prepare requested work before the owner arrives, filter online sources into goal-relevant updates, and plan a weekend with friends.
- Generated three original 4:3 photorealistic scenes with the built-in image generator and saved optimized WebP assets as `aether-private-thinking.webp`, `aether-work-ready.webp`, and `aether-weekend-plans.webp`. The images contain no generated interface text; each is visibly labeled as an illustrative scene in accessible HTML.
- Prompt set: a woman calmly thinking with a notebook at a lived-in kitchen table; a professional arriving to review an already-prepared report; and three friends enjoying a pottery workshop that was coordinated for them. Each prompt requested candid editorial photography, the Aether green/cream/chartreuse palette, natural textures, no logos or readable text, and space for an HTML label.
- Rechecked the local page at 1117×892 and 390×844. The three desktop cards align, the phone cards remain readable, all images load at their native 4:3 size, and the document width matches the viewport at both sizes.
- `index.html` and `404.html` pass `html-validate`; `script.js` passes Node’s syntax check; `git diff --check` is clean; Lighthouse reports 100% for accessibility, best practices, and SEO.
- Published the revision to the existing Cloudflare Pages project at `https://ce0ad889.aether-many.pages.dev` and the canonical `.com`. The `.com`, `www`, deployment URL, `20260828-1` CSS and JavaScript, all three new images, and sitemap return HTTP 200; the custom missing page returns HTTP 404.
- Rechecked the real `.com` at 1117×892 and 390×844. All six examples and three images are present with no horizontal overflow. The browser was returned to the desktop homepage.

### 2026-08-27 direct-benefit revision

- Re-ran the Business Builder method after Yusuf identified the missing benefit hierarchy. The factual inventory, current competitor review, visitor roles, visual system, live deployment, and product state remained current; the message hierarchy was reopened.
- Replaced the hero with the final owner outcome and placed all six benefits together in the next section. Removed the separate fear cards and the second, weaker benefit grid because they forced visitors to combine scattered ideas.
- Rewrote visible mechanisms in ordinary language: “root-owned kernel” became “the protected part,” “outbound boundary” became “checks before data leaves,” and “privileged changes” became “powerful changes.”
- Kept the privacy limit beside the privacy benefit. The site promises layered protections, not that connected models and tools can never send or expose data.

### Direct-benefit cycle 1: the benefits were still scattered

- The previous page required visitors to move through several sections before finding adaptation, learning, new abilities, collaboration, security, and changing around goals.
- Consolidated the six benefits into one numbered grid directly after the hero. Desktop shows all six at once; mobile presents them as one uninterrupted sequence.

### Direct-benefit cycle 2: technical language weakened the promise

- A fresh copy pass found public phrases such as “root-owned,” “outbound,” “privileged,” “runtime,” “workspace,” and “proactive wakeups.” They were accurate but made the visitor translate architecture before understanding the benefit.
- Removed them from the main flow. The FAQ retains the few technical distinctions needed for an honest comparison without making them the page’s voice.

### Direct-benefit cycle 3: security needed a clear promise and a clear limit

- “Strong security protections in multiple layers” is supported by the changeable/protected split, action records, transfer checks, reviewed server changes, and recovery route.
- “It will not share your sensitive data” is not supportable as a guarantee because connected models and tools can still send data away and the system is unaudited. The page now states the benefit strongly, then puts that limit immediately underneath it.

### Direct-benefit final local review

- At the normal 1117×892 app-browser viewport, the hero states the final outcome, the four central benefits, the GitHub action, and the exact private/public status without horizontal overflow.
- At 390×844, the primary action and public-release warning stay in the first screen. The six benefits read as one sequence, the menu covers the page, and choosing a section closes the menu and restores scrolling.
- The growth tabs leave exactly one selected state and replace the visible explanation. The privacy FAQ opens to the direct “No” answer and the current limits.
- `index.html` and `404.html` pass `html-validate`; `script.js` passes Node’s syntax check; internal links resolve; all six required benefit headings are present; local page assets and both external actions return HTTP 200.
- Lighthouse reports 100% for accessibility, best practices, and SEO after the footer logo’s spoken label was changed to include its visible “Aether Many” text.
- A final cold read can say what Aether is, repeat all six benefits, distinguish the running private system from the unreleased public version, explain the basic safety split, understand why “Many” is in the name, and know that GitHub is the only current action.
- A subsequent claim challenge found no unsupported privacy guarantee, install claim, public-security claim, license claim, adoption claim, or promise that the public version already proves the private system’s behavior.

### Direct-benefit production verification

- Published the validated static source to the existing Cloudflare Pages project without changing the GoDaddy registration or custom-domain setup. The deployment is available at `https://7fda2e72.aether-many.pages.dev` and through the canonical `.com`.
- `https://aethermany.com/`, `https://www.aethermany.com/`, the deployment URL, versioned CSS and JavaScript, logo, and sitemap return HTTP 200. A missing route returns HTTP 404 with the revised custom error page.
- The live HTML contains the new headline, all six direct benefit headings, the privacy limit, and the `20260827-3` asset version.
- Rechecked the real domain at 1117×892 and 390×844. The desktop and phone first screens, phone menu, benefits sequence, current-state warning, privacy answer, cached assets, and responsive width all match the validated local version.
- Returned the live site to the normal desktop viewport after phone testing. No further copy change survived the final cold-visitor and truth challenge as a material improvement.

### 2026-08-27 owner-annotation revision: sell the vision

- Yusuf’s eight page annotations settled the next direction: the site should sell the vision and state that Aether is “coming soon,” not devote a large section to what has not been built.
- Removed the complete private-versus-public status section and its navigation link. Replaced the first-screen status line with “Coming soon. Aether Many is under development,” and changed the small brand badge to “In development.”
- Replaced the software-release example with an everyday goal: organize messages, calendar items, and tasks into a morning brief that learns the owner’s priorities and can ask a research agent for missing details.
- Shortened the safety headline to “It can change itself.” The diagrams still show the protected part that self-improvement cannot rewrite.
- Changed the benefit-level privacy message to the direct promise that Aether has built-in protections to keep private information private. Kept the specific mechanisms beside it and moved the unavoidable connected-service limit into the privacy Q&A answer.
- Replaced the comparison headline with “Your Aether becomes an extension of you—unique to you,” the FAQ heading with “Q&A,” and the final heading and button with “Follow us on GitHub.”
- Rechecked the revised local page at 1117×892 and 390×844. The new example fits, the coming-soon message is visible in the phone first screen, the status section is absent, the three-link phone menu covers the page, the identity message and GitHub ending fit without horizontal overflow, and the current action remains clear.
- A fresh vision-page challenge found one remaining main-flow risk disclaimer. Removed it from the sales story and kept the connected-service and unaudited-security limits inside the privacy Q&A answer.
- `index.html` and `404.html` pass `html-validate`; `script.js` passes Node’s syntax check; internal links resolve; local assets and both external actions return HTTP 200; Lighthouse reports 100% for accessibility, best practices, and SEO.
- Published the revision to the existing Cloudflare Pages project at `https://0f83ec03.aether-many.pages.dev` and the canonical `.com`. The `.com`, `www`, deployment URL, `20260827-4` CSS and JavaScript, and sitemap return HTTP 200; the custom missing page returns HTTP 404.
- Rechecked the real `.com` at 1117×892 and 390×844. The first-screen “Coming soon” message, everyday morning-brief example, shorter navigation, removed status section, phone menu, and responsive width match the validated local page. The removed negative phrases do not appear in the live HTML.

### 2026-08-27 owner-annotation revision: name Aether and show everyday access

- Replaced every “IT …” label in the hero example with “AETHER …” so the sequence cannot be mistaken for a company’s IT department.
- Made “Why Aether is different” the first section after the hero. Its heading now gives the comparison directly: most agents arrive with a set of features; Aether is meant to build itself around its owner.
- Added a messaging section for WhatsApp, Discord, Telegram, and the web. Because those public connections are not released, the section labels them as coming with the version in development.
- Generated two original photorealistic commuter scenes with the built-in image generator. The images contain no fake interface text; the readable conversations are accessible HTML overlays and are visibly labeled as illustrative examples.
- Used the owner’s hairdresser-and-calendar request as the main real-life scenario, then added a second Discord example that shows Aether asking another agent for help and returning the answer to the same conversation.
- Replaced that second reactive request after Yusuf asked to show proactive goal work instead. Aether now initiates an update about finding an apartment, explains that it answered an incoming email using known details, and commits to calling if the reply does not arrive Friday. The supporting caption now says directly that Aether keeps goals moving.
- Published the proactive example at `https://f4277b9e.aether-many.pages.dev` and the canonical `.com`. The `.com`, `www`, and deployment URL return HTTP 200; the old laptop wording is absent from the live HTML.
- Rechecked the live example at 1117×892 and 390×844. The complete update, short owner reply, new caption, and no-horizontal-overflow behavior match the validated local page. The browser was returned to the desktop homepage.
- Rechecked the local page at 1117×892 and 390×844. The five-link desktop navigation fits, the phone menu opens and closes correctly, the new anchor lands below the fixed header, both conversations remain readable, and the document width matches the viewport at both sizes.
- `index.html` and `404.html` pass `html-validate`; `script.js` passes Node’s syntax check; `git diff --check` is clean; Lighthouse again reports 100% for accessibility, best practices, and SEO.
- Published the revision to the existing Cloudflare Pages project at `https://4880a11e.aether-many.pages.dev` and the canonical `.com`. The `.com`, `www`, deployment URL, `20260827-5` CSS and JavaScript, both new images, and sitemap return HTTP 200; the custom missing page returns HTTP 404.
- Rechecked the real `.com` at 1117×892 and 390×844. The Aether-named hero labels, why-different section, messaging examples, new navigation link, phone menu, image loading, and responsive width match the validated local page. The live browser was returned to the desktop homepage.

### 2026-08-27 adaptation-first remake

- Re-read the mission, both recorded vision documents, the current VPS architecture and boundary documentation, and the March positioning record before rewriting the page.
- Verified the private runtime through its active services, current file ownership, workspace contents, protected kernel, outbound boundary, and privileged host-capability controller. No private memories, logs, or credentials were copied into the public project.
- Refreshed the official OpenClaw, Hermes, and NanoClaw sources plus their GitHub adoption counts. The review confirmed that self-hosting, learning, skill creation, delegation, small cores, and security language are already category claims; Aether needs to connect bottom-up capability growth with its protected floor.
- Replaced the ownership-first hero with the selected adaptation-first direction and added a concrete fear → growth → benefit → safety → proof → mission journey.

### Remake cycle 1: release status fell below the desktop fold

- At the default 1280×720 browser size, the first version put the private/public status line seven pixels below the visible screen.
- Reduced the desktop heading and top spacing without weakening the headline. The GitHub action and “Private Aether: running. Free Community Edition: not released yet” now both appear in the first screen.

### Remake cycle 2: the mobile menu did not cover the page

- At 390×844, the header’s backdrop effect created the wrong containing block for the full-screen navigation and let hero text show through the menu.
- Removed that effect at the mobile breakpoint, gave the menu an explicit viewport height and solid background, then rechecked every link and the close state. The menu now fully covers the page and returns the document to normal scrolling after selection.

### Remake cycle 3: the competitive status heading weakened the case

- The first status heading made Aether sound like an interesting experiment caused by its competitors and became an eight-line block on mobile.
- Replaced it with “Follow Aether if you want to raise an agent—not configure one.” The supporting paragraph still tells visitors to use mature projects when broad channels are the immediate need.

### Remake cycle 4: the hero example looked like a product screenshot

- The first adaptation illustration said “ADAPTATION LOG / ACTIVE,” which could make an invented release example look like a captured event from the private runtime.
- Changed the visible label to “CAPABILITY LOOP / ILLUSTRATIVE.” The example still explains the architecture but no longer pretends to be proof.

### Remake cycle 5: keyboard and contrast details needed repair

- Added an explicit skip-link handoff so activation moves focus to the main heading instead of relying on browser-specific anchor behavior.
- Verified arrow-key selection and focus for all five adaptation tabs. Each tab changes one labeled panel and leaves exactly one selected state.
- Removed the expanded FAQ answer’s negative top margin so its first line no longer touched the focus outline.
- The small “RUNNING” and “BUILDING” labels initially missed or approached small-text contrast requirements. Their final color pairs measure 5.20:1 and 8.47:1.

### Final local review passes

- The default 1280×720 first screen contains the useful promise, GitHub action, and the exact private/public status; the document width equals the viewport width.
- At 390×844, the primary action and release status remain in the first screen, the document has no horizontal overflow, the full-screen menu covers the page, and selecting a link restores scrolling.
- At 1000×800, the desktop navigation fits without colliding with the brand or action.
- The rendered growth loop, identity comparison, safety layers, current-state cards, mission, FAQ, and custom error page were inspected separately rather than inferred from source.
- `index.html` and `404.html` pass `html-validate`; `script.js` passes Node’s syntax check; every internal anchor resolves; the browser reports no warnings or errors.
- Homepage, CSS, JavaScript, both SVG assets, robots file, and sitemap return HTTP 200 locally. The not-found route returns HTTP 404, and Cloudflare Pages will serve the included custom `404.html` in production.
- A fresh cold read can answer what Aether is, why it helps, what its target user fears, how it differs from current mature agents, which private protections are real, which limits remain, what is not released, why the name matters, and what to do next.
- A subsequent claim challenge found no remaining unsupported guarantee. A subsequent OpenClaw-user challenge found no clearer defensible reason to follow Aether than the selected self-building-agent promise backed by the protected floor.

### Production cycle: cached assets broke the new hero

- The first production deployment served the new HTML while the browser reused the ownership-first site’s same-named CSS and JavaScript. The capability loop appeared as an unstyled list even though the deployment itself succeeded.
- Added a dated version query to the stylesheet and script references, redeployed, and verified that both custom domains now request the new assets. The capability window returned to its dark, bounded design and the new interactions loaded.

### Final production verification

- `https://aethermany.com/`, `https://www.aethermany.com/`, and the final Cloudflare Pages deployment all return HTTP 200 with the new headline, illustrative-loop label, and public-release warning.
- The versioned stylesheet and JavaScript, mark, sitemap, and other public assets return HTTP 200. A missing route returns HTTP 404 with the custom error-page copy.
- Rechecked the real `.com` at 1280×720 and 390×844. The desktop first screen, mobile first screen, mobile menu, growth tabs, privacy disclosure, responsive width, and final browser console all pass.
- The live browser was returned to its normal viewport after mobile testing. This remains a launch hypothesis; external installs, market response, public security review, license choice, and name clearance are still unvalidated.

### Earlier ownership-first launch

### Category-informed rewrite

- Replaced the manifesto-first opening with one direct outcome and made the pre-release state visible in the first screen.
- Added the free GitHub plan, the real private-runtime proof, and the public-installer gap beside each other.
- Reframed differentiation away from generic self-hosting, model choice, memory, self-improvement, and multi-agent claims already established by current projects.
- Added an honest answer to why Aether Many exists beside open agents and recorded the still-unsettled public license.

### Cycle 1: the primary action was below the first screen

- At the default 1470×854 Chrome viewport, the first rewritten headline used four lines and pushed the GitHub action below the fold.
- Shortened the headline to “AI agents you can keep,” reduced its maximum size, and reduced the hero's top padding.
- The GitHub action, current-state link, release gap, and private-runtime panel then appeared in the first desktop screen.

### Cycle 2: navigation and mobile release copy broke

- The longer desktop navigation labels collided. The navigation was reduced to the three decisions a visitor needs: why Aether, how it works, and current state.
- At 390×844, the release eyebrow left “GitHub” stranded on a second line. It was shortened to “Free Community Edition · GitHub next” and rendered on one line.
- The mobile width and document scroll width both measured 390 pixels after the repair, so there was no horizontal overflow.

### Cycle 3: keyboard skip behavior was imprecise

- The skip link targeted the entire `main` element, which did not consistently move focus to the start of the content.
- It now targets and focuses the main heading. From a fresh page entry, the first Tab focuses “Skip to the main content,” Enter moves focus to the hero heading, and the heading sits below the fixed navigation.

### Functional, responsive, and accessibility checks

- Verified the rendered page in Chrome at the default 1470×854 desktop viewport and a 390×844 mobile viewport, then reset Chrome to its default size.
- The mobile navigation opened as a full-height panel, showed every link, closed after selecting “Current state,” and landed the section below the fixed header.
- Runtime-map controls changed the visible explanation for model providers and stored artifacts.
- The FAQ opened and exposed the free-release answer through the native `details` control.
- The page has one `h1`, one `main`, one labeled navigation region, no unlabeled buttons, visible focus styling, reduced-motion handling, and no browser console errors in the final error check.
- `index.html` and `404.html` passed `html-validate`; `script.js` passed Node's syntax check.
- The homepage, CSS, JavaScript, both SVG assets, not-found page, and robots file returned HTTP 200 from the local server.
- The public GitHub repository, Yusuf Young site, sovereign AI thesis, and Works Like Us site returned HTTP 200 after redirects.

### Final rendered copy and challenge passes

- Read every heading, paragraph, label, button, metadata description, FAQ answer, and error-page message as a cold visitor on desktop and mobile.
- The page now distinguishes a verified private system, a planned free public edition, and a speculative long-term network without requiring project context.
- Removed any implication that self-hosting automatically creates privacy or safety, that Aether invented open agents, that Community Edition can be installed, or that a public license has been chosen.
- The final cold review can identify what the project is, why it exists beside current agents, what works, what does not exist, what the first public milestone is, and what to do next.
- A subsequent technical-trust challenge found no remaining material website issue. Further changes were aesthetic alternatives rather than better-supported decisions.

### Production launch

- Published the static site to the free Cloudflare Pages project `aether-many` and connected `aethermany.com` and `www.aethermany.com`.
- Kept GoDaddy as the registrar and moved authoritative DNS from the temporary SiteGround nameservers to Cloudflare.
- Added canonical and Open Graph URLs for `https://aethermany.com/`, plus a production sitemap referenced from `robots.txt`.
- Verified HTTP 200 responses for the homepage, `www` hostname, logo asset, and sitemap; the custom not-found page returns HTTP 404 as intended.
- Rechecked the live page in Chrome at 1470×854 and 390×844. The mobile menu, runtime explanation, FAQ, responsive width, and console all passed.
- Both custom hostnames reached Cloudflare Pages `active` status with HTTPS on 2026-08-27.

This is a verified initial website hypothesis, not market validation. Real visitor behavior, GitHub interest after code ships, external installs, operator feedback, the public license, and professional name clearance remain unknown.
