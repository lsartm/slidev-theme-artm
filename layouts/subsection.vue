<script setup lang="ts">
defineProps<{
  subSectionNo?: string | number
  bgSrc?: string
  iconSrc?: string
}>()

const withBase = (path: string) => {
  const base = ((import.meta as any).env?.BASE_URL as string | undefined) ?? '/'
  return `${base}${path.replace(/^\//, '')}`
}
</script>

<template>
  <div class="slidev-layout section">
    <!-- Teal wave background top-left -->
    <img class="section-bg" :src="bgSrc ?? withBase('artm-bg-subsection.png')" alt="" aria-hidden="true" />

    <!-- Large white circle right -->
    <div class="section-circle" />

    <!-- Left content -->
    <div class="section-left">
      <div class="section-no-row">
        <img class="section-arrow" :src="iconSrc ?? withBase('artm-icon.png')" alt="" aria-hidden="true" />
        <span v-if="subSectionNo" class="subsection-num">{{ subSectionNo }}</span>
      </div>
      <div class="section-text">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #003C60;
  display: flex;
  align-items: center;
  font-family: Arial, 'Helvetica Neue', sans-serif;
}

.section-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
  pointer-events: none;
}

/* Large white circle on left */
.section-circle {
  position: absolute;
  right: 11%;
  top: 33%;
  transform: translateY(-50%);
  width: 29%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #003C60;
  flex-shrink: 0;
}

/* Left content area */
.section-left {
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 44%;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.section-no-row {
  display: flex;
  align-items: center;
  gap: 0.2em;
  line-height: 1;
}

.section-arrow {
  height: 6em;
  width: auto;
}

.subsection-num {
  font-size: 8em;
  font-weight: 700;
  color: #003C60;
  line-height: 1;
}

.section-text {
  padding-left: 5em;
}

.section-text :deep(h1) {
  font-size: 2em;
  font-weight: 700;
  color: #003C60;
  line-height: 1.2;
  margin: 0;
  text-align: left;
}

.section-text :deep(h2),
.section-text :deep(p) {
  font-size: 1em;
  font-weight: 700;
  color: #003C60;
  margin: 2em 0 0;
  text-align: left;
}
</style>
