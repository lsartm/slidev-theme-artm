---
theme: ./
favicon: https://www.artm.quebec/wp-content/themes/adviztheme-child/assets/ico/favicon-96x96.png
info: |
  Gabarit Slidev ARTM pour les présentations au comité d’architecture.
  À adapter par les équipes techniques selon leur initiative.
routerMode: hash
layout: cover
title: Titre du document
author: Prénom Nom
date: "Date"
keywords: artm,architecture

fonts:
  sans: Arial
htmlAttrs:
  dir: ltr
  lang: fr
---

# Architecture de solution

Sous-titre – projet, initiative, etc.

---
layout: agenda
---

# Contenu de la présentation

---
layout: section
sectionNo: 01
---

# Mise en contexte

---
layout: default
---

# Mise en contexte

## Historique

- Décrire le contexte du projet/initiative/ajustement au produit qui nécessite de présenter une nouvelle architecture.
- Il faut également identifier l'objectif de la présentation (par opposition à l'objectif de l'architecture ou de l'initiative).  C'est-à-dire (Approbation, avis, orientations, autres) 
- On peut ajouter quelques éléments d'intérêts:
  - Les jalons importants à atteindre (peuvent également se retrouver dans les contraintes)
  - L'envergure de l'investissement global
  - Le promoteur ou les parties prenantes notables

---
layout: two-cols
---

### Motivations

- Motivation 1 - Décrire l’ensemble des motivations sous forme de petits descriptifs.  Qu’est-ce qui motive la réalisation de cette initiative.   Ce sont des motivations d’affaires, désuétudes, bogues, performance, préparation au futur, etc.
- Motivation 2 - Il peut y avoir plusieurs motivations….


::header::
# Mise en contexte
## Motivations et objectifs

::right::

### Objectifs

- Objectif 1 - Lister l’ensemble des objectifs qui seront atteints avec la solution proposée dans ce document
- Objectif 2 - L’ensemble des objectifs….
- Faire ressortir les éléments stratégiques dignes de mention.

---
layout: section
sectionNo: 02
---

# Contraintes

---
layout: section
sectionNo: 03
---

# Exigences

---
layout: section
sectionNo: 04
---

# Architecure cible

---
layout: subsection
subSectionNo: 4.1
---

# Architecture cible

## Résultat de la vigie

---
layout: two-cols
---

- Décrire la vigie et en faire un résumé.
- Il faut faire un résumé de la vigie correspondante (ou de l’ensemble des vigies pertinentes).   Ici on fait des choix par rapport à la vigie qui sont pertinents aux choix qui ont été faits pour la solution présentée.
- Mettre les liens vers les vigies pour pleine transparence.

::header::
# Architecture cible
## Résultat de la vigie

::right::

```plantuml
@startchart
title Titre de la figure
h-axis [2019, 2020, 2021]
v-axis 0 --> 2.50
bar "Lorem ipsum" [1.5, 1.4, 1.4] #003C60 labels
bar "Lorem ipsum 2" [1.45, 1.2, 1.3] #347272 labels
bar "Lorem ipsum 3" [1.75, 1.9, 1.9] #FF7171 labels
bar "Lorem ipsum 4" [1.45, 1.8, 1.8] #00B1AC labels
legend bottom
@endchart
```

<style>
.tc-header :deep(h2) {
  color: var(--artm-teal);
}
</style>

---
layout: statement
---

# Mission de l'ARTM

Assurer la coordination du transport collectif sur le territoire de la Communauté métropolitaine de Montréal.

---
layout: end
website: artm.quebec
address: "1001, boulevard Robert-Bourassa<br/>bureau 400<br/>Montréal (Québec) H3B 4L4"
---

# Merci !
