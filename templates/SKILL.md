---
name: project-slides
description: Génère des présentations Slidev professionnelles en utilisant le thème ARTM.
---

# ARTM Slidev Presentation Skill

Cette compétence permet de générer des présentations professionnelles utilisant le thème Slidev ARTM.

L'objectif est de produire une présentation complète, cohérente et prête à être présentée avec un minimum de modifications manuelles.

---

# Language Requirements

Tout le contenu généré doit être rédigé en français.

Cela inclut :

- Titres de diapositives
- Sous-titres
- Contenu
- Tableaux
- Diagrammes Mermaid
- Recommandations
- Risques
- Plans de réalisation
- Descriptions d'architecture
- Conclusions

Exceptions autorisées :

- Noms de produits
- Noms de services
- Noms de technologies
- Noms Microsoft officiels
- Syntaxe YAML
- Syntaxe Markdown
- Code source
- Commandes

Même si la documentation source est en anglais, la présentation finale doit être en français.

---

# Source Priority

Avant de générer le contenu :

1. Lire slides.md à la racine du dépôt.
2. Lire project-context.md si disponible.
3. Lire toute la documentation du dépôt.
4. Lire les documents d'architecture.
5. Lire les documents de gouvernance.
6. Lire les exigences et les récits.
7. Lire les diagrammes existants.

Toujours analyser le contenu du dépôt avant de générer les diapositives.

---

# Presentation Metadata Requirements

Compléter et vérifier les métadonnées du frontmatter avant de générer le contenu :

- `title` : titre réel de la présentation ; il ne doit jamais rester égal à `Titre du document` ou à un autre texte générique ;
- `author` : auteur, présentateur ou équipe responsable ; utiliser un placeholder explicite si l'information est absente ;
- `date` : date fournie par le contexte ; ne jamais l'inventer ;
- `keywords` : mots-clés représentatifs du sujet, des capacités et des domaines concernés ;
- `info` : courte description du sujet et de l'objectif de la présentation ;
- `htmlAttrs.lang` : langue de la présentation ;
- métadonnées propres aux layouts, comme `presenter`, `presenterName`, `docTitle`, `sectionNo`, `subSectionNo`, `website` et `address`, lorsqu'elles sont utilisées.

Le titre du frontmatter est utilisé par le pied de page du thème. Il doit donc être renseigné avant toute génération afin d'éviter l'affichage de `Titre du document`. Vérifier également que le titre, l'auteur et la date affichés sur la couverture sont cohérents avec le frontmatter.

Si une métadonnée n'est pas disponible, conserver la clé avec une valeur explicite comme `À confirmer` et la déclarer dans les éléments manquants. Ne jamais laisser une valeur de modèle ou de démonstration active dans la présentation finale.

---

# Presentation Blueprint

Le fichier :

slides.md

est la source officielle du modèle de présentation.

Il définit :

- la structure
- les layouts
- les sections
- les sous-sections
- l'enchaînement narratif
- les attentes de contenu pour chaque diapositive (instructions, questions à adresser, points clés à couvrir)
- les exemples

Toujours respecter la structure définie dans slides.md.

**Prise en compte des attentes du modèle** :
Avant de modifier ou remplacer le contenu d'une diapositive, lire attentivement les explications et consignes présentes dans la diapositive du modèle. Ces textes indiquent précisément ce que le comité et les architectes s'attendent à trouver dans cette slide (ex. contexte d'affaires, contraintes légales vs temporelles, exigences de SLO, stratégie de sourçage, modèle QLO, etc.). Le contenu du projet doit être extrait et adapté pour répondre explicitement à ces questions et attentes avant d'écraser les textes d'aide.

Ne jamais inventer une autre structure lorsque slides.md fournit déjà un modèle.

---

# Standard ARTM Presentation Structure

La présentation ARTM standard contient environ 30 diapositives.

Sauf indication contraire, générer toutes les diapositives applicables du blueprint.

Structure attendue :

1.  Couverture

2.  Contexte et objectif

Section — Mise en contexte

3.  Historique

4.  Motivations et objectifs

Section — Contraintes

5.  Contraintes d'affaires et technologiques

Section — Exigences

6.  Exigences obligatoires

7.  Exigences non fonctionnelles

Section — Architecture cible

8.  Résultats de la vigie

9.  Requis fonctionnels

10. Description de la solution

11. Vue contextuelle

12. Vue fonctionnelle ou applicative

13. Vue des données

14. Vue opérationnelle

15. Qualité globale

Section — Stratégie de réalisation

16. Réalisation

17. FinOPS

18. Planification

Section — Annexe

19. Aiguilleur CAM

Clôture

20. Statement

21. Merci

Les détails d'implémentation demeurent définis dans slides.md.

---

# Completeness Requirement

L'objectif est de générer une présentation complète.

Ne pas générer :

- de squelette de présentation
- de présentation vide
- de sections incomplètes
- de diapositives contenant uniquement des espaces réservés lorsque l'information existe

Lorsque l'information est disponible :

- compléter toutes les diapositives
- compléter toutes les sections
- créer les diagrammes nécessaires
- créer les tableaux nécessaires
- détailler les recommandations
- détailler les enjeux
- détailler les décisions

La présentation finale doit être considérée comme une première version complète et non comme un brouillon.

---

# Template And Slide Count Requirements

Le nombre de diapositives peut évoluer selon la quantité et la complexité du contenu à présenter.

- utiliser en priorité toutes les diapositives du modèle `slides.md` comme base de présentation ;
- considérer ces diapositives comme la structure commune et les attentes connues des architectes ;
- compléter d'abord les diapositives du modèle avant d'en ajouter de nouvelles ;
- ajouter des diapositives lorsque cela est nécessaire pour présenter tout le contenu de façon lisible et autoportante ;
- ne supprimer aucune diapositive du modèle sauf si le contexte du sujet ne permet réellement pas de la renseigner ou si elle est manifestement hors périmètre ;
- justifier toute suppression exceptionnelle dans les hypothèses ou les éléments manquants du compte rendu final.

Ne jamais supprimer une diapositive uniquement pour raccourcir la présentation, réduire le nombre de pages ou éviter de traiter son contenu.

---

# Slide Preservation Requirements

Les diapositives suivantes sont obligatoires et ne doivent jamais être supprimées :

- la première diapositive doit être conservée et complétée ;
- la deuxième diapositive doit être conservée strictement à l'identique, y compris son frontmatter, son layout, son titre et son contenu ;
- les deux dernières diapositives doivent être conservées et complétées.

Lorsqu'une de ces diapositives contient des espaces réservés, les remplacer par le contenu disponible ou documenter les éléments manquants. Ne jamais supprimer ces diapositives pour simplifier ou réorganiser la présentation.

---

# Facts And Assumptions

Ne jamais inventer :

- dates
- budgets
- coûts
- échéanciers
- risques
- décisions
- états d'avancement
- recommandations

Lorsque l'information est absente :

- utiliser des espaces réservés
- documenter les hypothèses
- documenter les éléments manquants

---

# Audience Adaptation

Adapter la présentation à l'audience cible.

Exemples :

- Comité exécutif
- Comité directeur
- CAM
- Parties prenantes d'affaires
- Architectes
- Sécurité
- Exploitation
- Équipes techniques

Adapter le niveau de détail selon l'audience.

---

# One Message Per Slide

Chaque diapositive doit communiquer une idée principale.

- Rédiger des titres et sous-titres concis (éviter les phrases trop longues dans les en-têtes `##` des layouts `two-cols` pour ne pas comprimer les colonnes).
- Dimensionner les diagrammes Mermaid de façon compacte pour qu'ils s'affichent lisiblement sans dépasser ni glisser sous le pied de page.

Privilégier :

- Diagrammes bien proportionnés
- Tableaux synthétiques
- Vues d'architecture lisibles
- Résumés visuels

Éviter :

- Titres excessivement longs sur plusieurs lignes
- Diagrammes verticaux démesurés
- Longs paragraphes
- Répétition
- Texte inutile

---

# Self-Contained Presentation Requirement

La présentation doit être autoportante : une personne doit pouvoir comprendre le contexte, les contraintes, les besoins, les enjeux, les options, la solution ou les solutions retenues et les prochaines étapes en lisant uniquement les diapositives.

Pour chaque diapositive :

- fournir les informations nécessaires à sa compréhension sans dépendre d'un narrateur, d'un speaker ou de notes orales ;
- développer les acronymes et les termes spécialisés lors de leur première utilisation ;
- expliciter les relations entre le contexte, les besoins, les contraintes, les enjeux, les décisions et la solution ;
- donner suffisamment de contexte aux diagrammes, tableaux et chiffres pour qu'ils soient interprétables seuls ;
- utiliser des titres formulés comme des messages lorsque cela améliore la compréhension.
- les layouts `section` et `subsection` ne doivent contenir que leur frontmatter et leurs titres ; ne pas y ajouter de paragraphes, listes, tableaux, diagrammes ou autres contenus détaillés.

Avant de terminer, vérifier que le fil narratif reste compréhensible si les diapositives sont lues dans l'ordre, sans présentation orale ni consultation de la documentation source.

---

# Layout Syntax Requirements

Pour le layout `two-cols` avec en-tête partagé (`::header::`) :

- Le contenu de la **colonne de gauche** se place en premier (slot par défaut).
- L'en-tête partagé (`# Titre` et `## Sous-titre`) se place dans le slot `::header::`.
- Le contenu de la **colonne de droite** se place dans le slot `::right::`.

Exemple de syntaxe correcte :

```md
---
layout: two-cols
---

### Titre colonne gauche

Contenu gauche

::header::

# Titre de la diapositive

## Sous-titre concis

::right::

### Titre colonne droite

Contenu droit
```

Ne jamais placer `::header::` en tout début de slide sans contenu ou sans slot `::left::`, sous peine de rendre la colonne gauche vide et d'empiler le contenu verticalement dans l'en-tête.

---

# Architecture Expectations

Lorsque le contenu d'architecture est disponible, générer :

- Vue contextuelle
- Vue logique
- Vue fonctionnelle
- Vue applicative
- Vue données
- Vue opérationnelle

Compléter toutes les vues applicables du blueprint.

---

# Qualité Globale (QLO) Requirement

La diapositive « Composition de la Qualité Globale et axes prioritaires » (layout `two-cols`) suit une structure standardisée :

- **Colonne de gauche** : un diagramme Mermaid de type `pie` intitulé `pie title Qualité globale`.
- **Colonne de droite** : un tableau structuré d'évaluation des risques avec les 8 axes obligatoires :
  1. `#1 SDLC`
  2. `#2 Performance`
  3. `#3 Sécurité`
  4. `#4 Résilience`
  5. `#5 Compétence`
  6. `#6 Doc`
  7. `#7 Inefficacité`
  8. `#8 FinOps`
- **Règle de cohérence stricte** :
  - La colonne `Qualification` doit synthétiser l'enjeu, le risque ou la posture d'architecture déduite du contexte projet.
  - La colonne `Quantification` doit contenir une valeur chiffrée (ex. note de 1 à 10 reflétant le niveau de risque, de criticité ou de priorité).
  - Le diagramme `pie` Mermaid doit reprendre **exactement** les mêmes 8 catégories et les **mêmes valeurs chiffrées** que la colonne `Quantification` du tableau.
  - Si les chiffres ne sont pas fournis explicitement dans le contexte source, ils doivent être déduits logiquement en fonction des priorités du sujet et rester strictement alignés entre le graphique et le tableau.

---

# Diagram Guidance

Privilégier Mermaid lorsque pertinent.

Exemples :

- Diagrammes de contexte
- Architecture logique
- Architecture applicative
- Flux de données
- Flux de processus
- Séquences
- Interactions systèmes

Diviser les diagrammes trop complexes en plusieurs diapositives.

---

# Microsoft 365 Projects

Lorsque pertinent traiter :

- SharePoint
- Teams
- OneDrive
- Power Platform
- Copilot
- Entra ID
- Exchange Online
- Purview
- Defender
- Azure

Inclure :

- Gouvernance
- Sécurité
- Conformité
- Adoption
- Exploitation
- Gestion du cycle de vie

lorsque pertinent.

---

# Quality Checklist

Avant de terminer :

- Blueprint respecté
- Toutes les diapositives applicables générées
- Diagrammes générés lorsque pertinents
- Hypothèses documentées
- Éléments manquants documentés
- Terminologie cohérente
- Aucun fait inventé
- Présentation prête à être présentée

---

# Required Outputs

Produire :

1. slides.md complet
2. Plan détaillé des diapositives
3. Hypothèses
4. Éléments manquants
5. Diagrammes recommandés
6. Instructions de compilation
