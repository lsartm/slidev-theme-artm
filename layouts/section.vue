<script setup lang="ts">
defineProps<{
  sectionNo?: string | number
  bgSrc?: string
  iconSrc?: string
}>()
</script>

<template>
  <div class="slidev-layout section">
    <!-- Teal wave background top-left -->
    <img class="section-bg" :src="bgSrc ?? '/artm-bg-section.png'" alt="" aria-hidden="true" />

    <!-- Large white circle left -->
    <div class="section-circle" />

    <!-- Right content -->
    <div class="section-right">
      <div class="section-no-row">
        <img class="section-arrow" :src="iconSrc ?? '/artm-arrow.png'" alt="" aria-hidden="true" />
        <span v-if="sectionNo" class="section-num">{{ sectionNo }}</span>
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
  left: 6.5%;
  top: 50%;
  transform: translateY(-50%);
  width: 43%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #EFF4F6;
  flex-shrink: 0;
}

/* Right content area */
.section-right {
  position: absolute;
  left: 52%;
  top: 50%;
  transform: translateY(-50%);
  width: 48%;
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
  height: 8em;
  width: auto;
}

.section-num {
  font-size: 8em;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
}

.section-text {
  padding-left: 10em;
}

.section-text :deep(h1),
.section-text :deep(h2),
.section-text :deep(p) {
  text-align: left;
}

.section-text :deep(h1) {
  font-size: 2em;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin: 0;
}

.section-text :deep(h2),
.section-text :deep(p) {
  font-size: 1em;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
  margin: 2em 0 0;
}
</style>
