---
name: project-slides
description: Generate a reusable Slidev project presentation from project context for teams reusing the ARTM Slidev theme.
---

# Project Slides Skill Template

Use this template in target repositories to generate project presentations quickly and consistently.

## Setup In Target Repository

1. Copy this file to `.github/skills/SKILL.md`.
2. Copy `templates/reusable-prompt.md`, `templates/project-context.md`, and `templates/slides.blueprint.md`.
3. Open Copilot Chat in the target repository and ask for a project deck.

## Rules

1. Do not invent project facts.
2. Use placeholders for missing information.
3. Keep one key message per slide.
4. Use repository layouts: `cover`, `section`, `subsection`, `default`, `two-cols`, `statement`, `end`.
5. Include Docker-first preview/build commands.
6. Keep output compatible with static hosting (GitHub Pages).

## Required Outputs

1. `slides.md`
2. Slide-by-slide outline
3. Unresolved placeholders list
4. Docker commands

## Recommended Deck Flow

1. Cover
2. Objective
3. Context and problem
4. Current state
5. Target state
6. Options and trade-offs
7. Recommendation
8. Plan and milestones
9. Risks and mitigations
10. Decisions and next steps
11. End
