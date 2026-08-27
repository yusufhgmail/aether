# Aether website decisions and verification

**Updated:** 2026-08-26

**Objective:** Build the strongest defensible initial public website for Aether before real visitor evidence exists.

**Primary action:** Follow the Community Edition build in the public GitHub repository.
**Scope:** English vision website, responsive implementation, working local preview, naming and domain recommendation. No publication, domain purchase, email collection, analytics, or account creation was authorized.

## Source of truth

- The project README defines Aether as a user-owned, decentralized, auditable, composable and self-improving agent runtime, and records the long-term agent-force vision.
- The VPS archive records the philosophy, architecture, edition model, Git-backed repair approach, Ubuntu-first default and earlier Community Edition plans.
- The current cross-project record says one private Aether instance runs Yusuf Young's personal agent on an Ubuntu VPS with tools, memory, skills, hooks, autonomous operation and cooperating agents.
- Company Native and Works Like Us are separate ventures. Company Native builds custom CRM systems; Works Like Us builds company-specific AI systems. Aether is the underlying runtime, not another services website.

## Truth inventory

### Verified facts

- A private Aether instance runs on an Ubuntu 24.04 VPS controlled by Yusuf.
- That instance has tools, memory, skills, hooks, autonomous operation and support for cooperating agents.
- The public GitHub repository currently contains the vision record, not an installable Community Edition.
- The intended core separates the runtime from model providers and optional integrations.
- The design uses plain operational artifacts and recommends Git for review, recovery and repair.
- The default target is one Ubuntu server with root and bash; containers and Kubernetes are not required.

### Reasonable inferences used on the website

- The first useful public audience is technically capable operators and contributors who care about control, inspectability and provider choice.
- A future company buyer can understand the long-term value, but a commercial company-AI enquiry belongs to Works Like Us rather than this site.
- Following the GitHub repository is the smallest honest action before an installer or public community exists.
- An ownership-led explanation gives the technical design a clear purpose without requiring visitors to share the full political thesis first.

### Untested hypotheses

- “Your AI should belong to you” will make the project clearer and more compelling than a developer-framework or dystopian-risk opening.
- “Aether Many” will be remembered as a coherent continuation of Aether rather than as an unrelated rename.
- The first public users will value a single-server, plain-file and Git-backed default enough to choose it over more established agent frameworks.
- GitHub follows will be a useful early signal of relevant demand.

## Relevant visitor roles

### Technical operator or contributor

Wants to understand what the runtime is, why it differs from other agent frameworks, what it will require, what is real today, and whether the project is worth following. The largest trust risk is mistaking a vision for released software.

### Company or product leader

Wants to understand why ownership matters and how an owned runtime could reduce dependency. The largest comprehension risk is confusing Aether with the Works Like Us service.

### Technical or security reviewer

Wants concrete boundaries around hosting, providers, memory, permissions, logging and change control. The largest trust risk is treating self-hosting as an automatic privacy or safety guarantee.

## Naming recommendation

**Recommended working brand: Aether Many.** It keeps the existing Aether identity while naming the mission: intelligence should have many independent owners rather than one central platform.

On 2026-08-26, both `aethermany.com` and `aethermany.ai` returned no registration in their registry RDAP services and GoDaddy presented both exact domains as available to add to the cart. A focused public-web search found no obvious exact-name software or company collision. This is a time-sensitive availability check and a preliminary public collision screen, not a reservation, purchase or professional trademark clearance.

Alternatives considered:

- **Aether Commons:** strong open ecosystem meaning and both domains appeared available, but the exact phrase is already the name of a 2026 art exhibition and appears in another technology-sovereignty proposal.
- **Aether Helm:** both domains appeared available and “helm” implies control, but it creates a strong Kubernetes association that conflicts with Aether's no-Kubernetes-required default.
- **Aether Local:** both domains appeared available and it explains control, but it makes a remote owner-controlled VPS sound excluded.
- **Aether alone:** preserves the current name but the exact `.com` and `.ai` are registered and multiple current AI and software projects already use Aether.

No domain was purchased. Keep the brand recommendation reversible until Yusuf authorizes a purchase or chooses another name.

## Website directions compared

### 1. Ownership first — selected

Lead with “Your AI should belong to you.” Explain the dependency in plain language, show the owner boundary, prove the idea with the current private instance, and end with the many-owner vision. This gives both technical and nontechnical visitors a reason to care before asking them to understand the runtime.

### 2. Dystopian manifesto

Lead with concentration of AI power and the risk of one dominant system. This is faithful to the long-term philosophy, but it makes the project sound more speculative and adversarial than useful. It also delays the practical explanation of what Aether is.

### 3. Developer runtime

Lead with an auditable Ubuntu-first runtime, Markdown artifacts and provider abstraction. This is immediately concrete for engineers, but it hides why the design choices matter and makes the project look like a smaller version of existing orchestration frameworks.

The selected direction keeps the technical specificity of direction 3 and the stakes of direction 2, but orders them around the visitor's practical question: who controls the agent?

## Category evidence used

Current official documentation shows that established alternatives already claim important parts of the category: Letta emphasizes stateful, self-improving agents and self-hosting; OpenHands offers an open agent SDK and remote runtimes; LangGraph emphasizes durable execution and human review. Aether should not claim those capabilities as unique. The clearer initial distinction is the combined operating stance: one owner-controlled Ubuntu server, an intentionally small core, optional memory and integrations, plain artifacts, and repair through reviewable Git changes.

## Visitor journey and design system

- Hero: owner benefit, plain product explanation, honest pre-release note and GitHub action.
- Problem: the difference between owning data and owning the agent runtime.
- Runtime map: models enter through replaceable providers; Aether coordinates the work; tasks, logs, state and skills remain inspectable.
- Growth path: one agent, deliberate capabilities, reviewable improvement, then agent forces.
- Principles: the design rules that preserve control.
- Current state: separate what runs privately, what is being prepared and what remains a long-term direction.
- FAQ: resolve availability, model, infrastructure, privacy and venture-boundary objections.
- Final action: follow the build or read the founding thesis.

The visual system uses deep green, warm paper and a sharp chartreuse signal color. The mark is a bounded hexagonal system with six equal outside nodes and no throne-like dominant node. System type, diagrams and restrained motion support the operational character without generic brains, sparkles, humanoid robots or glowing network art.

## Verification log

### Initial implementation pass

- Built the complete one-page journey, custom SVG identity, responsive navigation, interactive runtime map, FAQ, metadata, favicon, robots policy and custom not-found page.
- Kept the primary action on GitHub rather than adding a form or pretending that Community Edition is ready to install.
- Rendered the site in Chrome at 1440×1000 and 390×844. The headline, owner-boundary diagram, comparison, runtime map, principles, current-state timeline, long-term vision, FAQ and final action remained legible.

### Largest issue and repair

- The first mobile audit found that the open navigation did not fully cover the page underneath because the header's blur established a containing block for the fixed menu. The menu was changed to a full-height panel positioned from the bottom of the fixed header.
- The mobile menu was then reopened at 390×844. Its links, background, close state and GitHub action rendered correctly. Selecting “Current state” closed the menu, changed the URL to `#status` and placed the current-state answer below the header.

### Functional, responsive and accessibility checks

- The runtime-map buttons changed the visible explanation for model providers, the core and stored artifacts.
- The FAQ opened and exposed its answer through the native `details` control.
- Keyboard focus reached the skip link first and Enter moved the URL to `#main`.
- Mobile width was 390 CSS pixels and document scroll width was also 390, so there was no horizontal overflow. Desktop width and document scroll width both measured 1440 pixels.
- The page loaded with no browser console warnings or errors after the final reload.
- `index.html` and `404.html` passed `html-validate` with no errors.
- The homepage, CSS, JavaScript, two SVG assets, not-found page and robots file all returned HTTP 200 from the local server.
- The public GitHub repository, Yusuf Young site, sovereign AI thesis and Works Like Us site all returned HTTP 200 after redirects.
- The not-found page rendered with a clear explanation and a working home link.

### Final copy, truth and challenge passes

- Read the rendered page from top to bottom at desktop and mobile sizes. Every heading now states what the section helps the visitor understand; technical terms are explained in the body.
- Kept the current private system, the planned public release and the long-term agent-force vision visibly separate.
- Removed the need for invented customers, outcomes, prices, security claims, download promises, urgency or signup collection.
- The cold review could identify the product, owner benefit, operating boundary, current proof, release gap and next action from the page alone.
- A separate challenge pass focused on the strongest reasons to distrust the project: it added or retained direct answers about the missing installer, provider choice, Docker and Kubernetes, self-hosting limits and the boundary with Works Like Us. No further material website issue remained after the mobile-menu repair.

The website is a verified initial hypothesis, not market validation. Real visitor behavior, GitHub follows, external installs and operator feedback remain unknown. The recommended name is also still reversible because neither domain has been purchased.
