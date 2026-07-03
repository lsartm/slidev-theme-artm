<!--
  End / Conclusion layout
  Dark navy background with "Merci!" in green.
-->
<script setup lang="ts">
defineProps<{
  address?: string
  website?: string
  logoSrc?: string
  iconSrc?: string
}>()

const withBase = (path: string) => {
  const base = ((import.meta as any).env?.BASE_URL as string | undefined) ?? '/'
  return `${base}${path.replace(/^\//, '')}`
}
</script>

<template>
  <div class="slidev-layout end">
    <div class="end-content">
      <img class="end-arrow" :src="iconSrc ?? withBase('artm-arrow.png')" alt="" aria-hidden="true" />
      <slot />
    </div>
    <div class="end-branding">
      <img :src="logoSrc ?? withBase('artm-logo-white.png')" class="end-logo" alt="ARTM" />
      <div class="end-info">
        <div v-if="website" class="end-website">{{ website }}</div>
        <div v-if="address" class="end-address" v-html="address"></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.end {
  background-color: #003C60;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-family: Arial, 'Helvetica Neue', sans-serif;
}

.end-arrow {
  height: 5em;
  width: auto;
  display: inline-block;
}

.end-content {
  text-align: center;
}

.end-content :deep(h1) {
  font-size: 4.5em;
  font-weight: 700;
  color: rgba(255, 255, 255);
  line-height: 1.1;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
}

.end-content :deep(p) {
  font-size: 1em;
  color: rgba(255, 255, 255, 0.75);
  margin: 0.6em 0 0;
}

.end-branding {
  position: absolute;
  bottom: 5%;
  right: 4%;
  text-align: right;
}

.end-logo {
  width: 250px;
  display: block;
  margin-left: auto;
  opacity: 0.75;
}

.end-info {
  margin-left: 100px;
  text-align: left;
  color: rgba(255, 255, 255, 0.75);
}

.end-address,
.end-website {
  font-size: 0.55em;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 700;
  margin-top: 4px;
  line-height: 1.4;
}
</style>
