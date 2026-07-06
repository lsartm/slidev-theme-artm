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
        <slot />
      </div>
      <!-- Right column -->
      <div class="tc-right">
        <slot name="right" />
      </div>
    </div>
    <Footer :document-title="String($attrs.documentTitle || $slidev.configs.title)" />
  </div>
</template>

<style scoped>
.two-cols {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: var(--artm-bg, #FFFFFF);
}

.tc-header {
  padding: 4% 2.75% 0;
  flex-shrink: 0;
}

.tc-header :deep(h1) {
  font-size: 1.6em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  line-height: 1.2;
  margin: 0 0 0.4em;
  padding-bottom: 0.3em;
  border-bottom: 2px solid var(--artm-teal, #00B1AC);
}

.tc-header :deep(h2) {
  font-size: 1.2em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  line-height: 1;
  margin: 0 0 0.4em;
}

.tc-wrap {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3%;
  padding: 2% 2.75% 1.5%;
  overflow: hidden;
}

.tc-left :deep(h1) {
  font-size: 1.5em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  line-height: 1.2;
  margin: 0 0 0.4em;
  padding-bottom: 0.3em;
  border-bottom: 2px solid var(--artm-teal, #00B1AC);
}

.tc-left :deep(h3),
.tc-right :deep(h3) {
  font-size: 0.95em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  margin: 0 0 0.3em;
}

.tc-left :deep(p),
.tc-left :deep(ul),
.tc-left :deep(ol),
.tc-right :deep(p),
.tc-right :deep(ul),
.tc-right :deep(ol) {
  font-size: 0.82em;
  line-height: 1.55;
  margin: 0.3em 0;
  color: var(--artm-body, #000000);
}

.tc-left :deep(ul),
.tc-right :deep(ul) {
  list-style-type: disc;
  padding-left: 1.4em;
}
</style>
