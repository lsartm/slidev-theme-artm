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
- les exemples

Toujours respecter la structure définie dans slides.md.

Ne jamais inventer une autre structure lorsque slides.md fournit déjà un modèle.

---

# Standard ARTM Presentation Structure

La présentation ARTM standard contient environ 30 diapositives.

Sauf indication contraire, générer toutes les diapositives applicables du blueprint.

Structure attendue :

01. Couverture

02. Contexte et objectif

Section — Mise en contexte

03. Historique

04. Motivations et objectifs

Section — Contraintes

05. Contraintes d'affaires et technologiques

Section — Exigences

06. Exigences obligatoires

07. Exigences non fonctionnelles

Section — Architecture cible

08. Résultats de la vigie

09. Requis fonctionnels

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

Privilégier :

- Diagrammes
- Tableaux
- Vues d'architecture
- Résumés visuels

Éviter :

- Longs paragraphes
- Répétition
- Texte inutile

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