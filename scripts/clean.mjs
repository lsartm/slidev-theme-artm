#!/usr/bin/env node
import { rmSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const rootDir = process.cwd()

const targets = [
  'dist',
  '.slidev',
  join('node_modules', '.vite'),
  join('node_modules', '.cache'),
]

console.log('\x1b[36mCleaning build artifacts and cache directories...\x1b[0m')

for (const target of targets) {
  const fullPath = join(rootDir, target)
  if (existsSync(fullPath)) {
    try {
      rmSync(fullPath, { recursive: true, force: true })
      console.log(`\x1b[32m✔\x1b[0m Removed ${target}`)
    } catch (err) {
      console.warn(
        `\x1b[33m⚠\x1b[0m Failed to remove ${target}: ${err.message}`,
      )
    }
  } else {
    console.log(`\x1b[90m- ${target} (not present)\x1b[0m`)
  }
}

console.log('\x1b[32m✔ Clean complete.\x1b[0m\n')
