# Aether

**Created:** 2026-08-22 by Yusuf Young
**Status:** Active development. Public website live; Community Edition is next.

## The Guiding Star

Your AI agent. Less on your plate.

Give Aether a goal. It remembers the details, follows through on the next steps, and builds the abilities it needs—around the way you work. Yours to shape. Yours to run. Built to stay yours.

## The Problem

Your agent will come to know your work, relationships, plans, and private thoughts. It could become the most personal thing you have. The more you depend on it, the more important it is that it belongs to you.

Aether’s mission is complete ownership: your data, memory, personality, instructions, abilities, the software that runs your agent, and ultimately the model itself. You should be able to decide what it becomes and keep building on it for years.

The public edition is in development. Using a hosted model still means sending it data and accepting its provider’s limits. Complete model ownership and reliable migration between models remain goals.

## What Aether Is

Aether is an **agent runtime** that runs on infrastructure you control. It is:

- **User-owned:** your agents run on your server, not someone else's cloud
- **Decentralized by default:** millions of independent operators, not one central platform
- **Auditable:** clear paper trail of what happened and why
- **Composable:** integrations and opinions live in optional layers, not the core
- **Self-improving:** the agent learns, grows, and gets better over time

A sufficiently general, self-improving agent that runs on your own server can, over time, replace most bespoke software.

## The Future: Agent Forces

Every person and every company will have their own **agent force**: multiple specialized agents working together as a unit, owned and controlled by that entity.

Each person and company should own the agent they depend on. Those agents can develop differently and work together while remaining under their own owners’ control.

### The Stakes

Every correction, remembered preference, and useful tool makes the agent more valuable to its owner. That investment should stay under their control as their needs change. Protection of private information and clear boundaries on powerful actions make useful delegation possible.

## Design Principles

1. **Non-opinionated core:** loading config, coordinating agent loops, provider abstraction, durable tasking, logging. Everything else lives in optional skills/editions.
2. **Markdown-first artifacts:** task queues, review proposals, extension manifests. Plain text makes audits and diffs natural.
3. **Reliability is a feature:** provider abstraction, circuit breakers, deterministic logging, explicit retries.
4. **Memory is optional:** powerful but risky. Explicit and inspectable when enabled, easy to disable.
5. **Repair over mutation:** fixer work happens on separate branches, proposed as PR-style patches, merged as deliberate human-reviewable actions.

## Operational Stance

- **VPS-first, Ubuntu-first:** designed for a single Ubuntu server where you have root + bash. No containers or Kubernetes required.
- **Git as operational ledger:** the working directory is the state store. Git makes changes auditable and recoverable.
- **No harm-glorification:** the project is about resilience, ownership, and repair.

## The Thesis: The UI of the Future Is AI

The next interface layer is not a dashboard, an app, or a portal. It is a conversation with an AI that does things for you. It is proactive, owned, trusted, and portable. It learns about you and presents information the way you need it. The interface is flexible: chat in any channel, visual presentation layer, voice layer.

This is what Aether is. The core thesis is general: the UI of the future is owned, sovereign AI that acts for you. Specific adaptations of that thesis serve specific audiences.

## Aether for CEOs (Commercial Arm)

The first commercial adaptation of Aether targets SMB CEOs. Their problem: too many things on their plate, too much to do, no overview.

**What it is:** Aether as the CEO's first AI employee. Pre-hired and pre-trained: the same engine, onboarded for the role from day one. Ships with:
- Dashboard / visual presentation layer
- Pre-built connectors (email, calendar, WhatsApp, messaging)
- Proactive monitoring and briefing capabilities
- Task management and follow-up tracking
- Safeguards (approval gates, outbound filters)
- Templates for common CEO workflows
- Support and onboarding

**The employee model:** Every Aether is an employee that works for you. It talks, it learns your procedures, it takes on more responsibility as you trust it. Aether for CEOs is that employee, pre-built for the executive role. Aether CE is the raw engine for builders who want to hire and train their own. Aether for Companies scales the same model to a workforce: an agent force where the first employee hires the next one.

**Planned delivery:** Setup, workflows, and support for the CEO’s day, running on the client’s own server with permissions they set. Its stored knowledge and tools stay on the company’s infrastructure. Provider choice does not mean every model is compatible or fully portable.

**Why ownership matters:** The company’s decisions, relationships, strategy, and ways of working become part of its agent. The company should be able to inspect, back up, and keep improving that work. Connected models and services still receive the data sent to them.

**What we sell:** Setup, prepared workflows, and support that help owners get useful work done sooner. The Community Edition is planned to be free; its license will be published with the public release.

**Relationship to Aether CE:** The editions share the same core. Aether for CEOs adds instructions, workflows, and integrations for the role. The community edition feeds the commercial arm; the commercial arm funds the community.

## Aether for Companies

The broader path to adoption: bring self-owned agents into real company workflows, then scale out to multi-agent collaboration as the default unit of software.

Aether agents can:
- Run company operations (CRM, support, analytics, marketing)
- Learn from company data and workflows
- Replace generic SaaS with custom-fit software
- Cooperate with other agents in the company's agent force

## Connection to Other Ventures

- **CRM As A Service:** Aether agents power the observation/learning/spec engine that builds custom CRM replacements.
- **Enterprise LLM:** Aether is the runtime. Enterprise LLM is the business: bringing sovereign AI to companies.
- **Event Risk Trainer / FIRE Platform:** Aether already runs Yusuf's personal agent (this one). The FIRE platform demonstrates what Aether-powered agents can build.

## Current State

- Aether CE (Community Edition) runs Yusuf's personal AI agent on a VPS
- The agent has tools, memory, skills, hooks, and autonomous operation
- Multiple agents can cooperate (Claude Code, Codex, Aether)
- Not yet published as a community tool for others to use
- The public website is live at [aethermany.com](https://aethermany.com), under the working brand **Aether Many**; it has been compared with current popular agent projects and verified on desktop and mobile
- `aethermany.com` was purchased through GoDaddy on 2026-08-27 and is hosted on Cloudflare Pages; the name has not received professional trademark clearance

## Website Preview

Live site: <https://aethermany.com/>

Run the site from this directory so its links and assets behave as they will on a static host:

```bash
python3 -m http.server 4173
```

Then open <http://127.0.0.1:4173/>. Website decisions, naming research, assumptions, and verification are recorded in [`docs/WEBSITE-DECISIONS.md`](docs/WEBSITE-DECISIONS.md).

## What Happens Next

1. Ship Aether CE as a public, usable community edition
2. Onboard first external users (builders hiring their own employee)
3. Build Aether for CEOs (the first commercial arm: the pre-hired executive employee)
4. Scale to Aether for Companies (one employee to a workforce, multi-agent cooperation)

## Philosophy Source

Historical philosophy document: `/home/ai/publish/archive/aether-ce/philosophy.md`. The revised ownership mission above supersedes its earlier concentration-of-power framing.
