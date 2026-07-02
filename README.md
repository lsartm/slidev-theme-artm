# slidev-theme-artm

Thème Slidev officiel de l'**ARTM** – Autorité Régionale de Transport Métropolitain.

Converti depuis le gabarit PowerPoint `GabaritComitéArch_Architecture de solutions TI - ARTM.potx`.

## Prérequis

- [Docker](https://www.docker.com/) + Docker Compose (aucun Node.js requis en local)

## Aperçu local (Docker)

```bash
docker compose up --build
# → http://localhost:3030
```

> Le premier démarrage installe les dépendances dans un volume Docker isolé (~30 s).
> Les démarrages suivants sont instantanés.

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
presenter: "Prénom Nom"
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

## Palette ARTM2021

| Variable CSS | Hex | Usage |
|---|---|---|
| `--artm-primary` | `#003C60` | Titres, arrière-plans foncés |
| `--artm-teal` | `#00B1AC` | Accents, séparateurs |
| `--artm-blue` | `#0089DC` | Accent secondaire |
| `--artm-coral` | `#FF7171` | Accent chaud |
| `--artm-green` | `#71BD50` | Liens, succès |
| `--artm-bg-light` | `#EFF4F6` | Fond clair |

## Assets publics

Tous les fichiers image sont dans `public/` et servis par Vite à `/artm-*.png` :

| Fichier | Usage |
|---|---|
| `artm-logo.png` | Logo ARTM couleur |
| `artm-logo-grey.png` | Logo ARTM gris |
| `artm-logo-white.png` | Logo ARTM blanc |
| `artm-icon.png` | Icône `>` ARTM |
| `artm-bg-cover.png` | Fond vague teal (cover, section) |
| `artm-bg-section.png` | Fond page de section |
| `artm-bg-subsection.png` | Fond page de sous-section |
| `artm-bus-corner.png` | Illustration bus coin inférieur droit |
| `artm-arrow.png` | Flèche décorative |

> Ces assets sont la **source unique** – l'addon `slidev-addon-artm` les utilise via `/artm-*.png` sans les dupliquer.
