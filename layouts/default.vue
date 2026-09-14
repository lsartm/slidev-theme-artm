<script setup lang="ts">
defineProps<{
  docTitle?: string
}>()
</script>

<template>
  <div class="slidev-layout default">
    <div class="slide-inner">
      <slot />
    </div>
    <Footer
      :document-title="String($attrs.documentTitle || $slidev.configs.title)"
    />
  </div>
</template>

<style scoped>
.default {
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: var(--artm-bg, #ffffff);
  position: relative;
}

.slide-inner {
  flex: 1;
  min-height: 0;
  padding: 3.5% 2.75% 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.slide-inner :deep(h1) {
  font-size: 1.5em;
  font-weight: 700;
  color: var(--artm-primary, #003c60);
  line-height: 1.2;
  margin: 0 0 0.25em;
  padding-bottom: 0.25em;
  border-bottom: 2px solid var(--artm-teal, #00b1ac);
}

.slide-inner :deep(h2) {
  font-size: 1.05em;
  font-weight: 700;
  color: var(--artm-primary, #003c60);
  line-height: 1.3;
  margin: 0 0 0.35em;
  white-space: normal;
  word-wrap: break-word;
}

.slide-inner :deep(h3) {
  font-size: 0.9em;
  font-weight: 700;
  color: var(--artm-primary);
  margin: 0.35em 0 0.2em;
}

.slide-inner :deep(p) {
  font-size: 0.82em;
  line-height: 1.45;
  margin: 0.25em 0;
  color: var(--artm-body, #000000);
}

.slide-inner :deep(ul),
.slide-inner :deep(ol) {
  font-size: 0.82em;
  line-height: 1.45;
  padding-left: 1.4em;
  margin: 0.2em 0;
  color: var(--artm-body, #000000);
  list-style-type: disc;
}

.slide-inner :deep(li) {
  margin: 0.15em 0;
}

.slide-inner :deep(li::marker) {
  color: var(--artm-teal, #00b1ac);
}

.slide-inner :deep(.mermaid),
.slide-inner :deep(.slidev-mermaid) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 310px;
  margin: auto 0;
}
</style>
