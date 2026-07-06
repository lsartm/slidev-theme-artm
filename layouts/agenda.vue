<script setup lang="ts">
const props = defineProps<{
  coverBg?: string
}>()

const withBase = (path: string) => {
  const base = ((import.meta as any).env?.BASE_URL as string | undefined) ?? '/'
  return `${base}${path.replace(/^\//, '')}`
}
</script>

<template>
  <div class="slidev-layout agenda">
    <img class="cover-bg" :src="props.coverBg ?? withBase('artm-bg-content.jpg')" alt="" aria-hidden="true" />
    <slot />
    <div class="artm-agenda-grid">
      <article><div class="illustration"><img :src="withBase('artm-bus-corner.png')" alt="" aria-hidden="true" /></div><h2>Mise en contexte</h2><p>Architecture actuelle, motivations et objectifs</p></article>
      <article><div class="illustration"><img :src="withBase('artm-bus-panel.png')" alt="" aria-hidden="true" /></div><h2>Contraintes</h2><p>Contraintes d’affaires et technologiques actuelles</p></article>
      <article><div class="illustration"><img :src="withBase('artm-bus-checklist.png')" alt="" aria-hidden="true" /></div><h2>Exigences</h2><p>Exigences technologiques</p></article>
      <article><div class="illustration"><img :src="withBase('artm-bus-destination.png')" alt="" aria-hidden="true" /></div><h2>Architecture cible</h2><p>Vigie, requis fonctionnels et diagrammes</p></article>
      <article><div class="illustration"><img :src="withBase('artm-bus-engine.png')" alt="" aria-hidden="true" /></div><h2>Stratégie de réalisation</h2><p>Sourçage, efforts, déploiement ou migration</p></article>
    </div>
    <Footer :document-title="String($attrs.documentTitle || $slidev.configs.title)" />
  </div>
</template>

<style scoped>
.agenda {
  flex: 1;
  padding: 5% 2.75% 1.5%;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: transparent;
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
  z-index: -1;
}

.slidev-layout :deep(h1) {
  font-size: 1.6em;
  font-weight: 700;
  color: var(--artm-primary, #003C60);
  line-height: 1.2;
  margin: 0 0 0.5em;
  padding-bottom: 0.3em;
  border-bottom: none;
}

.artm-agenda-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  margin: 42px auto;
  border: 1px solid var(--artm-primary, #003C60);
  max-width: 90%;
}

.artm-agenda-grid article {
  background-color: var(--artm-primary, #003C60);
  min-height: 235px;
  border-bottom: 1px solid var(--artm-primary, #003C60);
  border-top: 1px solid var(--artm-primary, #003C60);
}

.artm-agenda-grid article .illustration {
    padding: 20px;
    width: 100%;
    height: 150px;
}

.artm-agenda-grid article img {
    width: auto;
    max-height: 100%;
    margin: auto;
}

.artm-agenda-grid article:first-child {
  border-left: 1px solid var(--artm-primary, #003C60);
}

.artm-agenda-grid article:last-child {
  border-right: 1px solid var(--artm-primary, #003C60);
}

.artm-agenda-grid h2 {
  background: #f4f7f7;
  color: var(--artm-darkGrey, #333333);
  font-size: 18px;
  text-align: center;
  display: grid;
  align-items: center;
  font-weight: 600;
  min-height: 55px;
  border-bottom: 1px solid var(--artm-primary, #003C60);
  padding: 0 8%;
}

.artm-agenda-grid p {
    background-color: var(--artm-bg, #FFFFFF);
    font-size: .6rem;
    padding: 8px;
    min-height: 50px;
    text-align: center;
    display: grid;
    align-items: center;
}
</style>