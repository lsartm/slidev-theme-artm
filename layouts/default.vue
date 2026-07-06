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
    <Footer :document-title="String($attrs.documentTitle || $slidev.configs.title)" />
  </div>
</template>

<style scoped>
.default {
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: var(--artm-bg, #FFFFFF);
}

.slide-inner {
  flex: 1;
  padding: 5% 2.75% 1.5%;
  overflow: hidden;
}

.slide-inner :deep(h1) {
  font-size: 1.6em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  line-height: 1.2;
  margin: 0 0 0.5em;
  padding-bottom: 0.3em;
  border-bottom: 2px solid var(--artm-teal, #00B1AC);
}

.slide-inner :deep(h2) {
  font-size: 1.05em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  margin: 0 0 0.6em;
}

.slide-inner :deep(h3) {
  font-size: 0.9em;
  font-weight: 700;
  color: var(--artm-primary);
  margin: 0.5em 0 0.2em;
}

.slide-inner :deep(p) {
  font-size: 0.85em;
  line-height: 1.55;
  margin: 0.35em 0;
  color: var(--artm-body, #000000);
}

.slide-inner :deep(ul),
.slide-inner :deep(ol) {
  font-size: 0.85em;
  line-height: 1.55;
  padding-left: 1.4em;
  margin: 0.3em 0;
  color: var(--artm-body, #000000);
  list-style-type: disc;
}

.slide-inner :deep(li) {
  margin: 0.2em 0;
}

.slide-inner :deep(li::marker) {
  color: var(--artm-teal, #00B1AC);
}
</style>


<style scoped>
.default {
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
}

.slide-inner {
  flex: 1;
  padding: 5% 2.75% 1.5%;
  overflow: hidden;
}

/* Title styling with teal bottom border acting as separator */
.slide-inner :deep(h1) {
  font-size: 1.6em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  line-height: 1.2;
  margin: 0 0 0.5em;
  padding-bottom: 0.3em;
  border-bottom: 2px solid var(--artm-teal, #00B1AC);
}

/* Subtitle */
.slide-inner :deep(h2) {
  font-size: 1.05em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  margin: 0 0 0.6em;
}

.slide-inner :deep(h3) {
  font-size: 0.9em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  margin: 0.5em 0 0.2em;
}

.slide-inner :deep(p) {
  font-size: 0.85em;
  line-height: 1.55;
  margin: 0.35em 0;
}

.slide-inner :deep(ul),
.slide-inner :deep(ol) {
  font-size: 0.85em;
  line-height: 1.55;
  padding-left: 1.4em;
  margin: 0.3em 0;
}

.slide-inner :deep(li) {
  margin: 0.2em 0;
}

.slide-inner :deep(li::marker) {
  color: var(--artm-teal, #00B1AC);
}
</style>
