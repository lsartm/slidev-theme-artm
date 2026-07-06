<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  date?: string
  coverBg?: string
  logoSrc?: string
}>()

const withBase = (path: string) => {
  const base = ((import.meta as any).env?.BASE_URL as string | undefined) ?? '/'
  return `${base}${path.replace(/^\//, '')}`
}
</script>

<template>
  <div class="slidev-layout cover">
    <img class="cover-bg" :src="props.coverBg ?? withBase('artm-bg-cover.png')" alt="" aria-hidden="true" />
    <img class="cover-logo" :src="props.logoSrc ?? withBase('artm-logo.png')" alt="ARTM" />
    <div class="cover-content">
      <slot />
    </div>
    <div v-if="$slidev.configs.author || props.date" class="cover-presenter">
      <div v-if="$slidev.configs.author" class="cover-label">Présenté par &nbsp;</div>
      <div v-if="$slidev.configs.author" class="cover-name">{{ $slidev.configs.author }}</div>
      <div v-if="props.date" class="cover-date">{{ props.date }}</div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: var(--artm-bg, #FFFFFF);
}

.cover-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
  pointer-events: none;
}

.cover-logo {
  position: absolute;
  top: 12.9%;
  left: 6%;
  width: 22%;
  z-index: 1;
}

.cover-content {
  position: absolute;
  top: 33%;
  left: 6%;
  width: 44%;
  z-index: 1;
}

.cover-content :deep(h1) {
  font-size: 2em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  line-height: 1.15;
  margin: 0 0 0.4em;
}

.cover-content :deep(p) {
  font-size: 1.1em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  margin: 0;
  line-height: 1.3;
}

.cover-presenter {
  position: absolute;
  bottom: 13%;
  left: 6%;
  z-index: 1;
  line-height: 1.4;
}

.cover-label {
  font-size: 0.72em;
  color: var(--artm-darkGrey, #333333);
  font-weight: 400;
  display: inline-block;
}

.cover-name {
  display: block;
}

.cover-name,
.cover-date {
  font-size: 0.72em;
  color: var(--artm-body, #000000);
  font-weight: 700;
}
</style>
