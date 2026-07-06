<template>
  <footer class="artm-footer">
    <div>
      <div class="artm-footer__brand">
        <img :src="withBase('artm-logo-footer.png')"  alt="" aria-hidden="true" />
      </div>
      <div class="artm-footer__title">{{ documentTitle }}</div>
    </div>
    <div class="artm-footer__page"><SlideCurrentNo /> / <SlidesTotal /></div>
  </footer>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  documentTitle?: string
}>(), {
  documentTitle: 'Titre du document'
})

const withBase = (path: string) => {
  const base = ((import.meta as any).env?.BASE_URL as string | undefined) ?? '/'
  return `${base}${path.replace(/^\//, '')}`
}
</script>

<style scoped>
.artm-footer__brand,
.artm-footer__brand > img,
.artm-footer__title {
  display: inline-block;
}
.artm-footer__brand::after {
  content: '⟩';
  display: inline-block;
  margin: 0 0.5em;
  color: #6a6c70;
}
.artm-footer__title {
  vertical-align: text-top;
}
</style>