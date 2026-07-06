---
name: project-slides
description: Generate professional Slidev presentations using the ARTM Slidev theme.
---

# ARTM Slidev Presentation Skill

This skill helps GitHub Copilot generate professional presentations using the ARTM Slidev theme.

The objective is to produce presentation-ready Slidev decks that are visually consistent, concise, executive-friendly, reusable, and aligned with project objectives.

## Setup In Target Repository

1. Copy this file to `.github/skills/SKILL.md`.
2. Copy supporting templates:
	- `templates/project-context.md`
3. Optional: add these templates in the target repository if you maintain them there:
	- `templates/reusable-prompt.md`
	- `templates/slides.blueprint.md`
4. Complete `project-context.md`.
5. Open GitHub Copilot Chat in the target repository.
6. Ask Copilot to generate the presentation.

Example prompt:

```text
Generate a complete Slidev presentation based on project-context.md using the ARTM theme.
```

## Required Inputs

Use all relevant repository content when generating a presentation.

Priority sources:

- `project-context.md`

Optional priority sources when present:

- `reusable-prompt.md`
- `slides.blueprint.md`

Additional sources:

- Architecture documents
- Project charters
- Business cases
- RFCs
- ADRs
- Requirements
- User stories
- Backlog items
- Meeting notes
- Governance documentation
- Security documentation
- Operational documentation

Never ignore relevant repository content.

## Content Discovery Requirements

Before generating slides:

1. Analyze the repository.
2. Identify project objectives.
3. Identify stakeholders.
4. Identify architecture elements.
5. Identify risks.
6. Identify decisions.
7. Identify delivery milestones.
8. Identify governance constraints.
9. Identify security requirements.
10. Identify operational considerations.

Extract as much information as possible before creating slides.

Do not generate a presentation solely from `project-context.md` if additional relevant information exists.

## Golden Rules

### Do Not Invent Facts

Never invent:

- Project status
- Dates
- Costs
- Risks
- Architectural decisions
- Milestones
- Dependencies
- Resource assignments
- Technical details

If information is unavailable:

- Use placeholders
- State assumptions explicitly
- Add unresolved questions

### One Message Per Slide

Each slide must communicate one primary idea.

Avoid:

- Multiple unrelated topics
- Excessive information density
- Large text blocks

Prefer:

- Clear takeaways
- Concise bullets
- Diagrams
- Tables
- Visual summaries

### Executive First

Lead with conclusions. Before presenting details, include:

1. Recommendation
2. Impact
3. Benefits
4. Risks
5. Supporting information

Decision-makers should understand the key message in less than 30 seconds.

### Minimal Narrative

Avoid long paragraphs.

Preferred content:

- Bullets
- Tables
- Diagrams
- Timelines
- Architecture views
- Comparison matrices

## Presentation Completeness

The objective is to generate a complete presentation, not a skeleton.

Whenever sufficient information is available:

- Populate all slides with meaningful content.
- Expand all sections.
- Add supporting rationale.
- Add impacts and outcomes.
- Add architecture content.
- Add governance content.
- Add security content.
- Add operational content.
- Add implementation considerations.
- Add recommendations.

Avoid:

- Empty slides
- Placeholder-only slides
- Single bullet point slides
- Slides containing only titles
- "To be completed" sections when information exists

Every slide must provide value.

The generated deck should be presentation-ready with minimal manual editing.

Only use placeholders when information is genuinely unavailable.

## Slide Generation Strategy

When generating a presentation:

1. Analyze available content.
2. Extract facts.
3. Build a coherent narrative.
4. Populate every applicable slide.
5. Generate diagrams whenever relevant.
6. Generate tables whenever relevant.
7. Explain recommendations.
8. Explain trade-offs.
9. Explain impacts.
10. Explain risks.
11. Explain the implementation approach.

The final deck should be a complete first version, not a draft outline.

## Theme and Repository Rules

1. Use repository layouts: `cover`, `section`, `subsection`, `default`, `two-cols`, `statement`, `end`.
2. Keep output compatible with static hosting (GitHub Pages).
3. Include Docker-first preview/build commands.

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
