<script setup lang="ts">
defineProps<{
  presenter?: string
  date?: string
  coverBg?: string
  logoSrc?: string
}>()
</script>

<template>
  <div class="slidev-layout cover">
    <img class="cover-bg" :src="coverBg ?? '/artm-bg-cover.png'" alt="" aria-hidden="true" />
    <img class="cover-logo" :src="logoSrc ?? '/artm-logo.png'" alt="ARTM" />
    <div class="cover-content">
      <slot />
    </div>
    <div v-if="presenter || date" class="cover-presenter">
      <div class="cover-label">Présenté par</div>
      <div v-if="presenter" class="cover-name">{{ presenter }}</div>
      <div v-if="date" class="cover-date">{{ date }}</div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #EFF4F6;
  font-family: Arial, 'Helvetica Neue', sans-serif;
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
  color: #003C60;
  line-height: 1.15;
  margin: 0 0 0.4em;
}

.cover-content :deep(p) {
  font-size: 1.1em;
  font-weight: 700;
  color: #003C60;
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
  color: #333333;
  font-weight: 400;
}

.cover-name,
.cover-date {
  font-size: 0.72em;
  color: #000000;
  font-weight: 700;
}
</style>
