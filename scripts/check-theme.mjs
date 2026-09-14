#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

const rootDir = process.cwd()
let errorsCount = 0
let warningsCount = 0

function logPass(msg) {
  console.log(`\x1b[32m✔\x1b[0m ${msg}`)
}

function logFail(msg) {
  console.error(`\x1b[31m✖\x1b[0m ${msg}`)
  errorsCount++
}

function logWarn(msg) {
  console.warn(`\x1b[33m⚠\x1b[0m ${msg}`)
  warningsCount++
}

function logSection(title) {
  console.log(`\n\x1b[1m\x1b[36m=== ${title} ===\x1b[0m`)
}

// -------------------------------------------------------------
// 1. Check package.json
// -------------------------------------------------------------
logSection('1. Checking package.json')
const pkgPath = join(rootDir, 'package.json')
if (!existsSync(pkgPath)) {
  logFail('package.json not found')
} else {
  try {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

    // Name check
    if (pkg.name && pkg.name.startsWith('slidev-theme-')) {
      logPass(`Theme name: "${pkg.name}" matches "slidev-theme-*" pattern`)
    } else {
      logFail(`Theme name "${pkg.name}" MUST start with "slidev-theme-"`)
    }

    // Keywords check
    const keywords = pkg.keywords || []
    if (keywords.includes('slidev-theme') && keywords.includes('slidev')) {
      logPass('Keywords include "slidev-theme" and "slidev"')
    } else {
      logFail('Keywords must include both "slidev-theme" and "slidev"')
    }

    // Slidev config check
    if (pkg.slidev && typeof pkg.slidev === 'object') {
      if (['light', 'dark', 'both'].includes(pkg.slidev.colorSchema)) {
        logPass(`slidev.colorSchema: "${pkg.slidev.colorSchema}" is valid`)
      } else {
        logFail('slidev.colorSchema must be "light", "dark", or "both"')
      }

      if (pkg.slidev.defaults && typeof pkg.slidev.defaults === 'object') {
        logPass('slidev.defaults defined')
      } else {
        logWarn('slidev.defaults is recommended in package.json')
      }
    } else {
      logFail('package.json missing "slidev" configuration object')
    }

    // Engines check
    if (pkg.engines && pkg.engines.slidev) {
      logPass(`engines.slidev defined: "${pkg.engines.slidev}"`)
    } else {
      logWarn('engines.slidev should be defined (e.g. ">=0.50.0")')
    }
  } catch (e) {
    logFail(`Failed to parse package.json: ${e.message}`)
  }
}

// -------------------------------------------------------------
// 2. Check styles/index.css
// -------------------------------------------------------------
logSection('2. Checking styles/index.css')
const stylePath = join(rootDir, 'styles', 'index.css')
if (!existsSync(stylePath)) {
  logFail('styles/index.css is required for a Slidev theme')
} else {
  const css = readFileSync(stylePath, 'utf-8')
  if (css.includes('.slidev-layout')) {
    logPass('styles/index.css contains base .slidev-layout styles')
  } else {
    logFail('styles/index.css should define base .slidev-layout rules')
  }

  if (
    css.includes('--slidev-theme-primary') ||
    css.includes('--artm-primary')
  ) {
    logPass('styles/index.css defines design tokens/CSS variables')
  } else {
    logWarn(
      'styles/index.css should define theme color variables (e.g. --slidev-theme-primary)',
    )
  }
}

// -------------------------------------------------------------
// 3. Check layouts/*.vue
// -------------------------------------------------------------
logSection('3. Checking layouts/*.vue')
const layoutsDir = join(rootDir, 'layouts')
if (!existsSync(layoutsDir)) {
  logFail('layouts/ directory is missing')
} else {
  const layoutFiles = readdirSync(layoutsDir).filter((f) => f.endsWith('.vue'))
  if (layoutFiles.length === 0) {
    logFail('No layout files (.vue) found in layouts/')
  } else {
    logPass(`Found ${layoutFiles.length} layout(s): ${layoutFiles.join(', ')}`)
    for (const file of layoutFiles) {
      const name = file.replace(/\.vue$/, '')
      const content = readFileSync(join(layoutsDir, file), 'utf-8')

      // Check for <template> and root layout class
      if (!content.includes('<template>')) {
        logFail(`Layout ${file} is missing <template>`)
      }

      const hasLayoutClass =
        content.includes(`class="slidev-layout`) ||
        content.includes(`class='slidev-layout`) ||
        content.includes(`slidev-layout`)
      if (hasLayoutClass) {
        logPass(`Layout ${file} has .slidev-layout class`)
      } else {
        logFail(
          `Layout ${file} root element MUST have "slidev-layout ${name}" class`,
        )
      }

      // Check for slots
      if (!content.includes('<slot') && !content.includes('<Slot')) {
        logWarn(`Layout ${file} does not contain any <slot /> tag`)
      }
    }
  }
}

// -------------------------------------------------------------
// 4. Check components/*.vue
// -------------------------------------------------------------
logSection('4. Checking components/*.vue')
const componentsDir = join(rootDir, 'components')
if (existsSync(componentsDir)) {
  const componentFiles = readdirSync(componentsDir).filter((f) =>
    f.endsWith('.vue'),
  )
  logPass(`Found ${componentFiles.length} component(s)`)
  for (const file of componentFiles) {
    const content = readFileSync(join(componentsDir, file), 'utf-8')
    if (!content.includes('<template>')) {
      logFail(`Component ${file} is missing <template>`)
    } else {
      logPass(`Component ${file} is a valid Vue SFC`)
    }
  }
} else {
  logPass('No custom components directory (optional)')
}

// -------------------------------------------------------------
// 5. Check slides.md (Slidev Deck & Quality Rules)
// -------------------------------------------------------------
logSection('5. Checking slides.md (Slidev Deck & Quality Rules)')
const slidesPath = join(rootDir, 'slides.md')
if (!existsSync(slidesPath)) {
  logFail('slides.md not found in root directory')
} else {
  const rawContent = readFileSync(slidesPath, 'utf-8')

  // Robust Slidev Markdown parser
  function parseSlidevDeck(content) {
    const rawLines = content.split(/\r?\n/)

    // First, identify code fences to avoid splitting on '---' inside code blocks
    const chunks = []
    let currentChunk = []
    let inCodeFence = false

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i]
      if (line.trim().startsWith('```') || line.trim().startsWith('~~~')) {
        inCodeFence = !inCodeFence
      }

      if (line.trim() === '---' && !inCodeFence) {
        chunks.push(currentChunk.join('\n'))
        currentChunk = []
      } else {
        currentChunk.push(line)
      }
    }
    chunks.push(currentChunk.join('\n'))

    if (inCodeFence) {
      logFail('Unclosed code fence (``` or ~~~) detected in slides.md')
    }

    const parsedSlides = []
    let chunkIdx = 0
    if (chunks.length > 0 && chunks[0].trim() === '') {
      chunkIdx = 1
    }

    // Slide 1
    const headmatter = chunks[chunkIdx] || ''
    chunkIdx++
    const slide1Body = chunks[chunkIdx] || ''
    chunkIdx++

    parsedSlides.push({
      index: 1,
      frontmatterText: headmatter,
      bodyText: slide1Body,
    })

    while (chunkIdx < chunks.length) {
      const chunk = chunks[chunkIdx]
      const lines = chunk.split('\n').filter((l) => l.trim().length > 0)
      const isLikelyFrontmatter =
        lines.length > 0 &&
        lines.every((l) => {
          const trimmed = l.trim()
          return (
            !trimmed.startsWith('#') &&
            (trimmed.includes(':') ||
              trimmed.startsWith('- ') ||
              trimmed.startsWith(' ') ||
              trimmed.startsWith('/*'))
          )
        })

      if (isLikelyFrontmatter && chunkIdx + 1 < chunks.length) {
        const fmText = chunk
        const bodyText = chunks[chunkIdx + 1]
        chunkIdx += 2
        parsedSlides.push({
          index: parsedSlides.length + 1,
          frontmatterText: fmText,
          bodyText: bodyText,
        })
      } else {
        parsedSlides.push({
          index: parsedSlides.length + 1,
          frontmatterText: '',
          bodyText: chunk,
        })
        chunkIdx++
      }
    }

    return parsedSlides
  }

  const slides = parseSlidevDeck(rawContent)
  logPass(`Detected ${slides.length} slide(s) in slides.md`)

  // Check Slide 1 Frontmatter
  if (slides.length > 0) {
    const s1Fm = slides[0].frontmatterText
    if (s1Fm.includes('title: Titre du document')) {
      logFail(
        'Slide 1 frontmatter still contains default placeholder "title: Titre du document"',
      )
    } else if (s1Fm.includes('title:')) {
      logPass('Slide 1 frontmatter title is customized')
    } else {
      logWarn('Slide 1 frontmatter missing "title:"')
    }

    if (s1Fm.includes('author: Prénom Nom')) {
      logFail(
        'Slide 1 frontmatter still contains default placeholder "author: Prénom Nom"',
      )
    } else {
      logPass('Slide 1 frontmatter author is valid')
    }

    if (s1Fm.includes('date: "Date"')) {
      logFail(
        'Slide 1 frontmatter still contains default placeholder "date: "Date""',
      )
    } else {
      logPass('Slide 1 frontmatter date is valid')
    }
  }

  // Check Slide 2 (Agenda)
  if (slides.length >= 2) {
    const s2 = slides[1]
    const hasAgendaLayout =
      s2.frontmatterText.includes('layout: agenda') ||
      s2.bodyText.includes('layout: agenda')
    const hasAgendaTitle = s2.bodyText.includes('# Contenu de la présentation')

    if (hasAgendaLayout && hasAgendaTitle) {
      logPass(
        'Slide 2 correctly preserved with "layout: agenda" and "# Contenu de la présentation"',
      )
    } else {
      logFail(
        `Slide 2 MUST be preserved strictly as "layout: agenda" with "# Contenu de la présentation"`,
      )
    }
  } else {
    logFail('Presentation must have at least 2 slides')
  }

  // Check Final 2 slides (Statement + End)
  if (slides.length >= 4) {
    const secondLast = slides[slides.length - 2]
    const last = slides[slides.length - 1]

    if (
      secondLast.frontmatterText.includes('layout: statement') ||
      secondLast.bodyText.includes('layout: statement')
    ) {
      logPass(`Slide ${secondLast.index} has "layout: statement"`)
    } else {
      logFail(
        `Second to last slide (Slide ${secondLast.index}) MUST have "layout: statement"`,
      )
    }

    if (
      (last.frontmatterText.includes('layout: end') ||
        last.bodyText.includes('layout: end')) &&
      last.bodyText.includes('# Merci !')
    ) {
      logPass(
        `Final slide (Slide ${last.index}) has "layout: end" and "# Merci !"`,
      )
    } else {
      logFail(
        `Final slide (Slide ${last.index}) MUST have "layout: end" with "# Merci !"`,
      )
    }
  }

  // Check section and subsection slides: only headings allowed
  let nonConformingSections = 0
  for (const slide of slides) {
    const fullText = slide.frontmatterText + '\n' + slide.bodyText
    const layoutMatch = fullText.match(/layout:\s*([a-zA-Z0-9_-]+)/)
    const layout = layoutMatch ? layoutMatch[1] : null

    if (layout === 'section' || layout === 'subsection') {
      const bodyLines = slide.bodyText.split('\n')
      for (let l = 0; l < bodyLines.length; l++) {
        const line = bodyLines[l].trim()
        if (!line || line.startsWith('<!--') || line.endsWith('-->')) continue
        if (!line.startsWith('#')) {
          logFail(
            `Slide ${slide.index} (${layout}) contains unauthorized body content: "${line}". Section/subsection slides must contain titles only.`,
          )
          nonConformingSections++
        }
      }
    }

    // Check two-cols slot ordering if header is used
    if (layout === 'two-cols') {
      const bodyLines = slide.bodyText.split('\n')
      const headerIdx = bodyLines.findIndex((l) => l.trim() === '::header::')
      const rightIdx = bodyLines.findIndex((l) => l.trim() === '::right::')
      if (headerIdx !== -1 && headerIdx === 0) {
        logWarn(
          `Slide ${slide.index} (two-cols): ::header:: is at line 0. Left column should be defined first or use ::left:: slot.`,
        )
      }
      if (headerIdx !== -1 && rightIdx !== -1 && headerIdx > rightIdx) {
        logWarn(
          `Slide ${slide.index} (two-cols): ::header:: appears after ::right::. Standard order is Left -> Header -> Right.`,
        )
      }
    }

    // Check Mermaid diagrams
    if (slide.bodyText.includes('```mermaid')) {
      const mermaidMatches =
        slide.bodyText.match(/```mermaid[\s\S]*?```/g) || []
      for (const block of mermaidMatches) {
        const inner = block
          .replace(/^```mermaid[^\n]*\n/, '')
          .replace(/```$/, '')
          .trim()
        const firstWord = inner.split(/[\s\n(]/)[0]
        const validTypes = [
          'flowchart',
          'graph',
          'sequenceDiagram',
          'classDiagram',
          'stateDiagram',
          'stateDiagram-v2',
          'erDiagram',
          'journey',
          'gantt',
          'pie',
          'quadrantChart',
          'requirementDiagram',
          'gitGraph',
          'C4Context',
          'mindmap',
          'timeline',
          'sankey-beta',
          'xychart-beta',
          'block-beta',
        ]
        if (!validTypes.includes(firstWord)) {
          logWarn(
            `Slide ${slide.index}: Mermaid diagram starts with unusual keyword "${firstWord}".`,
          )
        }
      }
    }
  }

  if (nonConformingSections === 0) {
    logPass('All section/subsection slides conform to title-only rule')
  }
}

// -------------------------------------------------------------
// Summary
// -------------------------------------------------------------
logSection('Summary')
console.log(`Errors: ${errorsCount}, Warnings: ${warningsCount}`)

if (errorsCount > 0) {
  console.error('\x1b[31mTheme validation FAILED with errors.\x1b[0m\n')
  process.exit(1)
} else {
  console.log('\x1b[32mTheme validation PASSED successfully.\x1b[0m\n')
  process.exit(0)
}
