---
name: "ARTM Slidev Presentation"
description: "Use when validating a presentation prompt, architecture context, or generating and reviewing slides.md with the ARTM Slidev theme."
applyTo: "slides.md"
---

# ARTM Slidev Presentation Instructions

Utiliser ces instructions avec le skill `project-slides` situé dans `.github/skills/project-slides/SKILL.md`.

## Mission

À partir du prompt fourni, du contexte projet et des éléments d'architecture, produire ou mettre à jour une présentation Slidev complète, cohérente et prête à présenter dans `slides.md`.

## Validation avant génération

Avant toute modification de `slides.md` :

1. Lire `slides.md` et l'utiliser comme blueprint officiel lorsqu'il existe déjà.
2. Lire `templates/project-context.md` ou `project-context.md` lorsqu'il est disponible.
3. Analyser les documents du dépôt pertinents : architecture, exigences, gouvernance, sécurité, exploitation et FinOPS.
4. Comparer le prompt avec les informations disponibles.
5. Identifier explicitement les informations manquantes, les hypothèses et les éléments qui ne peuvent pas être confirmés.

Ne jamais inventer de faits, de dates, de coûts, de décisions, de risques ou de recommandations. En cas d'information absente, utiliser un espace réservé explicite et l'ajouter à la liste des éléments manquants.

## Métadonnées de présentation

Avant de compléter les slides, renseigner et contrôler le frontmatter de `slides.md` :

- `title` doit contenir le titre réel et ne doit jamais rester `Titre du document` ;
- `author` et `date` doivent être renseignés ou marqués explicitement `À confirmer` si l'information manque ;
- `keywords` doit refléter le sujet, les capacités et les domaines concernés ;
- `info` doit décrire brièvement le sujet et l'objectif ;
- `htmlAttrs.lang` doit correspondre à la langue du deck ;
- les propriétés utilisées par les layouts, notamment `presenter`, `presenterName`, `docTitle`, `sectionNo`, `subSectionNo`, `website` et `address`, doivent être cohérentes et complètes.

Le titre du frontmatter alimente le pied de page du thème. Vérifier qu'aucun texte générique ou placeholder de démonstration n'est visible dans le footer ou sur la couverture.

## Règles de génération

- Rédiger le contenu de la présentation en français, sauf les noms propres, noms de produits, technologies, commandes et extraits de code.
- Respecter la structure et les layouts définis dans `slides.md`.
- Compléter les diapositives applicables avec le contexte fourni.
- Ajouter les vues d'architecture pertinentes : contextuelle, fonctionnelle ou applicative, données et opérationnelle.
- Utiliser Mermaid ou un tableau lorsque cela rend l'information plus claire.
- Une diapositive doit porter un message principal clair.
- Formuler des titres et sous-titres concis et percutants (privilégier moins de 60 caractères pour les sous-titres `##` dans `two-cols`) afin d'éviter les débordements de hauteur d'en-tête.
- Veiller à ce que les diagrammes Mermaid restent compacts et adaptés à l'espace vertical disponible (notamment dans les colonnes `two-cols`), sans jamais dépasser ni passer sous le pied de page.
- La présentation doit être autoportante et compréhensible sans narrateur, speaker, notes orales ou consultation de la documentation source.
- Donner le contexte nécessaire aux diagrammes, tableaux, chiffres, acronymes et termes spécialisés.
- Relier explicitement le contexte, les contraintes, les besoins, les enjeux, les décisions et la ou les solutions.
- Les layouts `section` et `subsection` doivent contenir uniquement leur frontmatter et leurs titres ; placer tout contenu détaillé dans les slides suivantes.
- Pour les slides en layout `two-cols` avec `::header::`, structurer impérativement le contenu dans l'ordre : contenu colonne gauche d'abord (slot par défaut), puis `::header::` avec `# Titre` et `## Sous-titre`, puis `::right::` avec le contenu colonne droite.
- Sur la diapositive « Composition de la Qualité Globale et axes prioritaires », utiliser un diagramme Mermaid `pie` à gauche et le tableau à 8 axes à droite (`#1 SDLC`, `#2 Performance`, `#3 Sécurité`, `#4 Résilience`, `#5 Compétence`, `#6 Doc`, `#7 Inefficacité`, `#8 FinOps`). Les valeurs chiffrées de la colonne `Quantification` doivent être déduites du contexte ou qualifiées, et correspondre **exactement** aux valeurs du diagramme `pie`.
- Ne pas générer une présentation vide, un simple squelette ou des diapositives constituées uniquement de placeholders lorsque l'information est disponible.

## Modèle et nombre de slides

- Le nombre de slides peut évoluer selon la quantité et la complexité du contenu.
- Remplir d'abord les slides du modèle `slides.md`, qui constituent la base commune et les attentes connues des architectes.
- Ajouter des slides lorsque nécessaire pour faire tenir tout le contenu de manière lisible et autoportante.
- Ne supprimer une slide du modèle que si le contexte ne permet réellement pas de la renseigner ou si elle est manifestement hors périmètre.
- Justifier toute suppression exceptionnelle dans le compte rendu final.
- Ne jamais supprimer une slide uniquement pour raccourcir la présentation ou réduire le nombre de slides.

## Slides obligatoires

Les diapositives suivantes doivent toujours être conservées :

- la première diapositive doit être complétée et ne doit jamais être supprimée ;
- la deuxième diapositive ne doit jamais être supprimée ni altérée, y compris son frontmatter, son layout, son titre et son contenu ;
- les deux dernières diapositives ne doivent jamais être supprimées et doivent être complétées lorsque le contexte le permet.

Ne pas supprimer ces diapositives pour réorganiser, raccourcir ou simplifier la présentation. Si leur contenu est incomplet, conserver la structure et documenter les éléments manquants.

## Format de sortie attendu

La modification principale doit être réalisée dans `slides.md`.

À la fin du travail, fournir un court compte rendu structuré avec exactement les rubriques suivantes :

1. `Fichier produit` : confirmer le chemin et le nombre de diapositives.
2. `Contenu couvert` : résumer les sections et vues d'architecture générées.
3. `Hypothèses` : lister uniquement les hypothèses réellement utilisées.
4. `Éléments manquants` : lister les informations absentes ou non confirmées.
5. `Contrôles effectués` : confirmer la conservation des slides obligatoires, la langue française, la cohérence des layouts, le caractère autoportant de la présentation et la complétude des métadonnées.

Ne pas produire d'autre fichier de présentation sans demande explicite. Ne pas remplacer `slides.md` par un fichier de synthèse ou un plan incomplet.
