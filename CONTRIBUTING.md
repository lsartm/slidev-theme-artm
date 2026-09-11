# Contributing

Thanks for contributing to this Slidev theme.

## Scope

This repository has two contribution tracks:

1. Theme development and improvements for ARTM Slidev theme.
2. Reusable template assets to help other projects generate Slidev decks quickly.

## Local Workflow (Docker-first)

Use Docker commands (no local Node.js required):

```bash
docker compose up --build
```

Stop:

```bash
docker compose down
```

## What To Update

### Theme changes

When updating layouts/styles/assets:

1. Edit files in `layouts/`, `styles/`, `public/`, `slides.md` as needed.
2. Verify visual behavior in local preview.
3. Keep GitHub Pages compatibility in mind (base-aware assets, static hosting).

### Reusable template changes

When updating project-generation templates:

1. Update files in `templates/`:
   - `SKILL.md`
   - `project-context.md`
2. Update `.github/instructions/slidev-presentation.instructions.md` when generation or output-format rules change.
3. Update `.github/prompts/generate-artm-slides.prompt.md` when the reusable generation workflow changes.
4. Update prompt examples and reuse instructions in `README.md`.

## Target Repository Setup (for consumers)

For repositories reusing this template package:

1. Copy `templates/SKILL.md` to `.github/skills/project-slides/SKILL.md`.
2. Copy `templates/project-context.md` into the target repo `templates/` folder.
3. Copy `.github/instructions/slidev-presentation.instructions.md` into `.github/instructions/`.
4. Copy `.github/prompts/generate-artm-slides.prompt.md` into `.github/prompts/`.
5. Use `/generate-artm-slides` or the prompt examples from `README.md` in Copilot Chat.

## Pull Request Checklist

1. Changes are limited to the intended scope.
2. README instructions remain accurate.
3. New/updated template files are consistent with each other.
4. No secrets or sensitive data are committed.
