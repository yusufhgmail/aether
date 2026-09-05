# Aether

**Created:** 2026-08-22 by Yusuf Young
**Status:** Active development. Public website live; Community Edition is next.

## The Guiding Star

The world must not rely on four frontier models. Every company must have its own sovereign AI, trained in-house, under its own control.

Sovereign AI > rented intelligence. Your model, your data, your control, your future. Not a rented brain you can lose access to tomorrow.

## The Problem

Four companies (OpenAI, Anthropic, Google, Meta) are on track to control the world's intelligence infrastructure. Every company that uses their APIs is building a dependency that can be revoked, priced up, or steered at any time. This is not a technology problem. It is a sovereignty problem.

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

The mission is to enable this transformation in a way that:
1. **Preserves individuality** - each agent force remains under its owner's control
2. **Creates a rules-based ecosystem** - agents cooperate AND compete within structured constraints
3. **Prevents concentration of power** - the system architecture itself must make it impossible for a single smarter agent to become "dictator"

### The Stakes

When AI reaches an autonomy tipping point, hyper-competition will follow. Without deliberate counterbalance, one dominant AI system could emerge and concentrate power. The only defense: millions of decentralized, user-owned agents that can recognize when their freedom is at stake and stand together.

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

**What it is:** Aether CE pre-packaged as a complete AI operating system for a CEO. Same engine, different package. Ships with:
- Dashboard / visual presentation layer
- Pre-built connectors (email, calendar, WhatsApp, messaging)
- Proactive monitoring and briefing capabilities
- Task management and follow-up tracking
- Safeguards (approval gates, outbound filters)
- Templates for common CEO workflows
- Support and onboarding

**How it's delivered:** Installed on a VPS the client owns. Runs on any model. Fully portable. They own the data and the harness. It is literally their most sensitive business asset, and it is fully under their control.

**Why on-prem finally makes sense:** This is not a CRM or a chatbot. It is the CEO's operational brain: their inbox, their decisions, their relationships, their strategy. No CEO should host that on someone else's cloud, subject to model changes, price hikes, or data access by a provider.

**Relationship to Aether CE:** Aether CE stays minimal and open source. Aether for CEOs is a branch: the same codebase pre-loaded with plugins, instructions, dashboard, and integrations. The community edition feeds the commercial arm; the commercial arm funds the community.

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
2. Onboard first external users
3. Build Aether for CEOs (the first commercial arm)
4. Scale to Aether for Companies (multi-agent cooperation)
5. Scale to multi-agent cooperation

## Philosophy Source

Full philosophy document: `/home/ai/publish/archive/aether-ce/philosophy.md`
