# Aether

**Created:** 2026-08-22 by Yusuf Young
**Status:** Active development. Public website live; Community Edition is next.

## The Guiding Star

Get more done with an AI agent that’s yours to keep.

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

## Company Release Plan

**Have your own sovereign AI workforce. Don't outsource your company's unique advantage.**

1. **Release Aether:** Publish a usable Community Edition and establish useful work for external owners.
2. **Build company workforces through consulting:** Configure multiple specialist Aether employees with company knowledge, tools, responsibilities, and working handoffs.
3. **Build the management layer:** Coordinate employees and show humans their work, results, responsibilities, costs, and collaboration.

**Long term:**

4. **Train company-specific specialist LLMs:** Aim for better task performance, lower cost, better collaboration, and clearer division of responsibility.
5. **Automate specialist-training decisions:** Decide which specialists to train, what they should learn, and how to evaluate and improve them.

The full [Company Release Plan](docs/COMPANY-RELEASE-PLAN.md) defines the sequence, ownership promise, GrokBot comparison agenda, and proposed relationship to Enterprise LLM. These are planned stages, not released capabilities.

_<<--[CODEX] 2026-09-15: Updated the company plan to Yusuf's release → consulting → management sequence, followed by specialist training and autonomous training decisions.>>_

## Aether for CEOs

An executive assistant remains a possible first specialist: company briefings, email and calendar work, task follow-up, and decision support. It is a role within the workforce service, rather than a required separate product before company deployments.

## Aether for Companies

The commercial direction is to build specialist employees around a company's actual work, then provide the management layer that coordinates them. Early employees specialize through instructions, knowledge, tools, and workflows; dedicated model training comes later.

The company should control its workforce's stored knowledge, tools, and runtime. External models and connected services still receive the data sent to them. Company-controlled specialist weights are a long-term goal.

## Connection to Other Ventures

- **CRM As A Service:** Aether agents power the observation/learning/spec engine that builds custom CRM replacements.
- **Enterprise LLM / Works Like Us:** The Aether workforce is a proposed branch of the company-owned AI vision. Aether supplies employees and coordination; Enterprise LLM could supply company-trained specialist models. See the [relationship summary](https://github.com/yusufhgmail/enterprise-llm/blob/main/BUSINESS_CONTEXT.md#aether-workforce-branch-proposed).
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
3. Choose a first company workflow and deliver collaborating specialist employees through consulting
4. Use those deployments to define the management layer; see the [full release plan](docs/COMPANY-RELEASE-PLAN.md) for the long-term training direction

## Philosophy Source

Historical philosophy document: `/home/ai/publish/archive/aether-ce/philosophy.md`. The revised ownership mission above supersedes its earlier concentration-of-power framing.
