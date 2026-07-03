# Slidev - Thème ARTM

Thème Slidev de l'**ARTM** – Autorité Régionale de Transport Métropolitain.

Converti depuis le gabarit PowerPoint `GabaritComitéArch_Architecture de solutions TI - ARTM.potx`.

Afin de faciliter l'adoption de cet outil, un thème Slidev aux couleurs de l'ARTM a été développé. Celui-ci permet de produire rapidement des présentations respectant l'identité visuelle de l'organisation tout en bénéficiant des avantages d'une approche moderne, collaborative et orientée automatisation.
Cette solution est particulièrement intéressante pour les architectes, analystes, spécialistes M365, équipes TI et toute personne produisant régulièrement de la documentation technique, des formations ou des présentations de projets.

## Slidev

Slidev est un outil de création de présentations basé sur Markdown, conçu à l'origine pour les développeurs et les spécialistes des technologies. Contrairement à PowerPoint, les diapositives sont décrites sous forme de texte dans un fichier source, puis générées automatiquement en une présentation moderne, interactive et entièrement personnalisable. Slidev permet également d'intégrer facilement du code source, des démonstrations interactives, des diagrammes et des composants Web.

https://sli.dev/

## Prérequis

- [Docker](https://www.docker.com/) + Docker Compose (aucun Node.js requis en local)

## Aperçu local (Docker)

```bash
docker compose up --build
# → http://localhost:3030
```

Pour arrêter :

```bash
docker compose down
```

Pour repartir de zéro (vider le cache npm) :

```bash
docker compose down -v
docker compose up --build
```

## Installation dans une présentation

![alt text](assets/image.png)

```yaml
---
theme: slidev-theme-artm          # publié sur npm
# ou chemin local :
theme: ../slidev-theme-artm
---
```

## Mises en page disponibles

| Layout | Frontmatter | Description |
|--------|-------------|-------------|
| `cover` | `presenter`, `date` | Diapositive de titre avec fond teal et logo |
| `default` | `docTitle` | Contenu standard, titre avec séparateur teal |
| `section` | `sectionNo` | Page de section – cercle blanc + icône + numéro |
| `subsection` | `sectionNo` | Page de sous-section |
| `two-cols` | `docTitle` | Deux colonnes avec slot `::header::` optionnel |
| `statement` | — | Fond marine complet – mission, vision |
| `end` | `website`, `address` | Conclusion avec « Merci ! » |

### `cover`

```yaml
---
layout: cover
presenterName: "Prénom Nom"
date: "Janvier 2025"
---

# Titre de la présentation

Sous-titre ou description
```

### `section`

```yaml
---
layout: section
sectionNo: "01"
---

# Titre de la section

Sous-titre optionnel
```

### `two-cols` — titre au-dessus des deux colonnes

```md
---
layout: two-cols
---

Contenu colonne gauche

::header::
# Titre au-dessus des deux colonnes

::right::

Contenu colonne droite
```

> **Note :** Le contenu avant tout `::marker::` va dans la colonne gauche (slot par défaut).

### `end`

```yaml
---
layout: end
website: artm.quebec
address: "700, rue De La Gauchetière Ouest, bureau 400, Montréal (Québec) H3B 5M2"
---

# Merci !
```