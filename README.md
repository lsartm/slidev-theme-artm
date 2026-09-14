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

## Validation et conformité (Checker)

Pour valider l'intégrité du thème (structure `package.json`, styles CSS, layouts Vue, composants, `slides.md` et règles de présentation) et vérifier le build Slidev :

```bash
# Validation complète (linter de thème + build Slidev)
docker compose run --rm slidev npm run check

# Ou linter seul
docker compose run --rm slidev npm run lint:theme
```

Un workflow GitHub Actions automatisé ([.github/workflows/check.yml](.github/workflows/check.yml)) valide également chaque Pull Request et push sur `main` / `develop`.

## Installation dans une présentation

![alt text](assets/image.png)

```yaml
---
theme: slidev-theme-artm # publié sur npm
# ou chemin local :
theme: ../slidev-theme-artm
---
```

## Réutilisation pour un autre projet

Les fichiers réutilisables sont dans ce repo:

- `templates/SKILL.md`
- `templates/project-context.md`
- `.github/instructions/slidev-presentation.instructions.md`
- `.github/prompts/generate-artm-slides.prompt.md`

Pour un repo qui réutilise ce thème:

1. Copier `templates/SKILL.md` vers `.github/skills/project-slides/SKILL.md` dans le repo cible.
2. Copier `templates/project-context.md` dans `templates/` du repo cible.
3. Copier `.github/instructions/slidev-presentation.instructions.md` vers `.github/instructions/` dans le repo cible.
4. Copier `.github/prompts/generate-artm-slides.prompt.md` vers `.github/prompts/` dans le repo cible.
5. Utiliser `templates/project-context.md` pour collecter le contexte.
6. Utiliser `/generate-artm-slides` dans Copilot Chat, ou un des prompts ci-dessous.
7. Générer puis adapter `slides.md` directement a partir du contexte projet.

Structure recommandee dans le repo cible:

```text
<repo-cible>/
	.github/
		skills/
			project-slides/
				SKILL.md
		instructions/
			slidev-presentation.instructions.md
		prompts/
			generate-artm-slides.prompt.md
	templates/
		project-context.md
```

### Utiliser le skill et l'instruction

Le skill `project-slides` décrit les règles générales de génération des présentations ARTM. L'instruction `slidev-presentation.instructions.md` s'applique automatiquement lorsque Copilot crée ou modifie `slides.md`.

Pour générer une présentation :

1. Fournir dans le prompt le contexte du projet et les éléments d'architecture disponibles.
2. Demander à Copilot de lire `slides.md`, `project-context.md` et la documentation pertinente.
3. Demander la génération ou la mise à jour de `slides.md` en respectant le skill et l'instruction.
4. Vérifier le compte rendu final : fichier produit, contenu couvert, hypothèses, éléments manquants et contrôles effectués.

L'instruction impose notamment la conservation et la complétion de la première diapositive, la conservation strictement à l'identique de la deuxième diapositive et la conservation des deux dernières diapositives.

Le prompt `/generate-artm-slides` demande les informations variables suivantes : sujet, audience, contexte projet, éléments d'architecture, source documentaire brute et contenu à ajouter ou modifier. Il génère ou met à jour `slides.md` et produit le compte rendu standardisé défini dans l'instruction. La source brute peut être un compte rendu d'atelier, des notes ou un contenu Markdown collé directement dans le prompt.

Les présentations générées doivent être autoportantes : la lecture des diapositives dans l'ordre doit suffire à comprendre le contexte, les contraintes, les besoins, les enjeux, les décisions et les solutions, sans narrateur, speaker, notes orales ou consultation de la documentation source. Les diagrammes, tableaux, chiffres, acronymes et termes spécialisés doivent être suffisamment contextualisés.

Les métadonnées du frontmatter doivent également être traitées : titre réel, auteur ou équipe, date, mots-clés, description, langue et propriétés utilisées par les layouts. Le titre est repris dans le pied de page ; il ne doit donc jamais rester `Titre du document`. Lorsqu'une information manque, utiliser `À confirmer` et la déclarer dans les éléments manquants.

Le nombre de slides peut évoluer. Les slides du modèle `slides.md` doivent d'abord être complétées, car elles représentent la base commune et les attentes connues des architectes. Chaque diapositive du modèle contient des indications et des questions clés : il faut les analyser pour identifier les informations à extraire du contexte projet avant de remplacer les textes d'aide. Des slides peuvent ensuite être ajoutées si nécessaire pour faire tenir tout le contenu de manière lisible et autoportante. Une slide ne peut être supprimée que si le contexte ne permet réellement pas de la renseigner ou si elle est manifestement hors périmètre ; toute suppression exceptionnelle doit être justifiée.

La diapositive « Qualité Globale » doit obligatoirement utiliser un diagramme Mermaid `pie` dont les catégories et valeurs chiffrées reprennent fidèlement la colonne `Quantification` du tableau des 8 axes (`#1 SDLC`, `#2 Performance`, `#3 Sécurité`, `#4 Résilience`, `#5 Compétence`, `#6 Doc`, `#7 Inefficacité`, `#8 FinOps`), avec des qualifications déduites du contexte d'affaires et d'architecture.

### Exemple de prompt (générique)

```md
Génère une présentation Slidev complète en français.

Lis :

- slides.md
- project-context.md
- toute la documentation du dépôt

Respecte toutes les règles définies dans SKILL.md.

Respecte également `.github/instructions/slidev-presentation.instructions.md`.

Utilise slides.md comme blueprint officiel.

Génère toutes les diapositives applicables.

Complète les sections autant que possible.

Ajoute des diagrammes Mermaid lorsque pertinent.

Produis :

1. slides.md complet
2. Compte rendu avec les rubriques `Fichier produit`, `Contenu couvert`, `Hypothèses`, `Éléments manquants` et `Contrôles effectués`
```

### Exemple de prompt (ARTM architecture)

```md
Génère une présentation d'architecture complète en français utilisant le thème Slidev ARTM.

Avant de commencer :

1. Lire slides.md et l'utiliser comme blueprint officiel.
2. Lire project-context.md.
3. Analyser tout le contenu du dépôt.
4. Respecter le skill `project-slides` et l'instruction `.github/instructions/slidev-presentation.instructions.md`.

Analyser notamment :

- Architecture
- Exigences
- Gouvernance
- Sécurité
- Exploitation
- FinOPS

Exigences :

- Générer toutes les diapositives du blueprint applicables.
- Compléter toutes les sections.
- Générer des diagrammes Mermaid lorsque pertinent.
- Produire les vues contextuelle, fonctionnelle, applicative, données et opérationnelle.
- Produire les risques, la feuille de route et les recommandations.
- Ne pas produire un squelette de présentation.
- Ne pas inventer de faits.

La présentation finale doit être prête à être présentée et compréhensible sans narrateur, speaker ou consultation de la documentation source.

Produire :

1. slides.md complet
2. Compte rendu avec les rubriques `Fichier produit`, `Contenu couvert`, `Hypothèses`, `Éléments manquants` et `Contrôles effectués`
3. Diagrammes suggérés mais impossibles à générer faute d'information
```

## Mises en page disponibles

| Layout       | Frontmatter          | Description                                     |
| ------------ | -------------------- | ----------------------------------------------- |
| `cover`      | `presenter`, `date`  | Diapositive de titre avec fond teal et logo     |
| `default`    | `docTitle`           | Contenu standard, titre avec séparateur teal    |
| `section`    | `sectionNo`          | Page de section – cercle blanc + icône + numéro |
| `subsection` | `sectionNo`          | Page de sous-section                            |
| `two-cols`   | `docTitle`           | Deux colonnes avec slot `::header::` optionnel  |
| `statement`  | —                    | Fond marine complet – mission, vision           |
| `end`        | `website`, `address` | Conclusion avec « Merci ! »                     |

### `cover`

```yaml
---
layout: cover
presenterName: 'Prénom Nom'
date: 'Janvier 2025'
---
# Titre de la présentation

Sous-titre ou description
```

### `section`

```yaml
---
layout: section
sectionNo: '01'
---
# Titre de la section
```

Les layouts `section` et `subsection` sont des séparateurs visuels : ils doivent contenir uniquement leur frontmatter et leurs titres. Placer les paragraphes, listes, tableaux et diagrammes dans les diapositives de contenu suivantes.

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
address: '700, rue De La Gauchetière Ouest, bureau 400, Montréal (Québec) H3B 5M2'
---
# Merci !
```
