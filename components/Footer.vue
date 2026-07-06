<template>
  <footer class="artm-footer">
    <div>
      <div class="artm-footer__brand">
        <img :src="withBase('artm-logo-footer.png')"  alt="" aria-hidden="true" />
      </div>
      <div class="artm-footer__title">{{ documentTitle }}</div>
    </div>
    <div class="artm-footer__page"><SlideCurrentNo /></div>
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