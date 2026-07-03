<!--
  Statement layout – "Mission" style
  Full dark navy background. Use for mission, vision, or
  any full-bleed statement slide.
-->
<script setup lang="ts">
defineProps<{
  iconSrc?: string
}>()

const withBase = (path: string) => {
  const base = ((import.meta as any).env?.BASE_URL as string | undefined) ?? '/'
  return `${base}${path.replace(/^\//, '')}`
}
</script>

<template>
  <div class="slidev-layout statement">
    <img class="statement-arrow" :src="iconSrc ?? withBase('artm-arrow.png')" alt="" aria-hidden="true" />
    <div class="statement-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.statement {
  background-color: #003C60;
  display: inline-table;
  align-items: baseline;
  justify-content: normal;
  width: 100%;
  height: 100%;
  font-family: Arial, 'Helvetica Neue', sans-serif;
  padding: 2em;
}

.statement-arrow {
  height: 6em;
  width: auto;
  left: -30px;
  position: relative;
}

.statement-content {
  width: 100%;
  text-align: left;
  padding-top: 2em;
}

.statement-content :deep(h1),
.statement-content :deep(h2) {
  font-size: 2em;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25;
  margin: 0 0 0.4em;
  text-align: left;
}

.statement-content :deep(p) {
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  margin: 0.4em 0 0;
  text-align: left;
}

.statement-content :deep(ul),
.statement-content :deep(ol) {
  font-size: 1em;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  padding-left: 1.4em;
  text-align: left;
  display: inline-block;
  margin: 0.5em auto 0;
}

.statement-content :deep(li::marker) {
  color: var(--artm-teal, #00B1AC);
}
</style>
