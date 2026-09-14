<!--
  Usage:
```md
---
layout: two-cols
---

# Left
This shows on the left

::header::
This spans both

::right::

# Right
This shows on the right


<style>
.tc-header {
  ...
}
</style>
```
-->

<script setup lang="ts">
defineProps<{
  docTitle?: string
  subTitle?: string
}>()
</script>

<template>
  <div class="slidev-layout two-cols">
    <!-- Title above both columns -->
    <div v-if="$slots.header" class="tc-header">
      <slot name="header" />
    </div>
    <div class="tc-wrap">
      <!-- Left column -->
      <div class="tc-left">
        <slot name="left"><slot /></slot>
      </div>
      <!-- Right column -->
      <div class="tc-right">
        <slot name="right" />
      </div>
    </div>
    <Footer
      :document-title="String($attrs.documentTitle || $slidev.configs.title)"
    />
  </div>
</template>

<style scoped>
.two-cols {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: var(--artm-bg, #ffffff);
  position: relative;
}

.tc-header {
  padding: 3.5% 2.75% 0;
  flex-shrink: 0;
}

.tc-header :deep(h1) {
  font-size: 1.5em;
  font-weight: 700;
  color: var(--artm-primary, #003c60);
  line-height: 1.2;
  margin: 0 0 0.25em;
  padding-bottom: 0.25em;
  border-bottom: 2px solid var(--artm-teal, #00b1ac);
}

.tc-header :deep(h2) {
  font-size: 1.05em;
  font-weight: 700;
  color: var(--artm-primary, #003c60);
  line-height: 1.3;
  margin: 0 0 0.3em;
  white-space: normal;
  word-wrap: break-word;
}

.tc-wrap {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3%;
  padding: 1.5% 2.75% 32px;
  overflow: hidden;
}

.tc-left,
.tc-right {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
}

.tc-left :deep(h1) {
  font-size: 1.5em;
  font-weight: 700;
  color: var(--artm-primary, #003c60);
  line-height: 1.2;
  margin: 0 0 0.4em;
  padding-bottom: 0.3em;
  border-bottom: 2px solid var(--artm-teal, #00b1ac);
}

.tc-left :deep(h3),
.tc-right :deep(h3) {
  font-size: 0.95em;
  font-weight: 700;
  color: var(--artm-primary, #003c60);
  margin: 0 0 0.3em;
}

.tc-left :deep(p),
.tc-left :deep(ul),
.tc-left :deep(ol),
.tc-right :deep(p),
.tc-right :deep(ul),
.tc-right :deep(ol) {
  font-size: 0.82em;
  line-height: 1.45;
  margin: 0.25em 0;
  color: var(--artm-body, #000000);
}

.tc-left :deep(ul),
.tc-right :deep(ul) {
  list-style-type: disc;
  padding-left: 1.4em;
}

.tc-left :deep(blockquote),
.tc-right :deep(blockquote) {
  font-size: 0.82em;
  line-height: 1.4;
  margin: 0.25em 0;
  padding-left: 0.8em;
}

.tc-left :deep(table),
.tc-right :deep(table) {
  font-size: 0.72em;
}

.tc-left :deep(.mermaid),
.tc-right :deep(.mermaid),
.tc-left :deep(.slidev-mermaid),
.tc-right :deep(.slidev-mermaid) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  max-height: 310px;
  margin: auto 0;
}
</style>
