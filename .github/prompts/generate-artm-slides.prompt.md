---
name: "Générer une présentation ARTM"
description: "Génère ou met à jour slides.md à partir d'un contexte projet et d'éléments d'architecture, avec validation du format et des slides obligatoires."
argument-hint: "Sujet, audience, contexte projet et éléments d'architecture à intégrer"
agent: "agent"
---

Génère ou mets à jour une présentation Slidev complète en français dans `slides.md`.

## Paramètres fournis

- Sujet : ${input:sujet:Sujet de la présentation}
- Audience : ${input:audience:Audience cible}
- Contexte projet : ${input:contexte:Contexte, objectifs et contraintes du projet}
- Éléments d'architecture : ${input:architecture:Composants, flux, exigences et décisions d'architecture}
- Source documentaire brute : ${input:source:Compte rendu, notes d'atelier ou contenu collé à analyser}
- Contenu à ajouter ou à modifier : ${input:contenu:Contenu attendu ou changement demandé}

## Sources et règles

Avant de modifier le fichier :

1. Lire `slides.md` et le respecter comme blueprint officiel.
2. Lire `templates/project-context.md` ou `project-context.md` s'il existe.
3. Analyser les documents pertinents du dépôt, notamment l'architecture, les exigences, la gouvernance, la sécurité, l'exploitation et le FinOPS.
4. Traiter la source documentaire brute comme une source de faits et de besoins, en supprimant les artefacts de présentation tels que les balises HTML, les styles CSS et les liens de suivi inutiles.
5. Distinguer les besoins confirmés, les souhaits, les options à évaluer, les recommandations et les éléments non décidés.
6. Respecter `.github/skills/project-slides/SKILL.md` et `.github/instructions/slidev-presentation.instructions.md` lorsqu'ils sont présents.

Ne jamais inventer de faits, de coûts, de dates, de décisions, de risques ou de recommandations. Signaler les informations absentes et utiliser des placeholders explicites lorsque nécessaire.

## Production attendue

- Compléter toutes les diapositives applicables au contexte.
- Produire les vues d'architecture pertinentes : contextuelle, fonctionnelle ou applicative, données et opérationnelle.
- Transformer les informations fournies en une progression narrative couvrant au minimum le contexte, la qualification du besoin, les parties prenantes, les cas d'usage, les contraintes, les exigences, les enjeux, les options, la solution cible et les prochaines étapes lorsque les informations sont disponibles.
- Utiliser les layouts existants et ajouter des diagrammes Mermaid ou des tableaux lorsque pertinent.
- Donner une idée principale claire à chaque diapositive.
- Rendre la présentation autoportante : sa lecture seule doit suffire à comprendre le contexte, les contraintes, les besoins, les enjeux, les options, la solution ou les solutions et les prochaines étapes.
- Donner le contexte nécessaire aux diagrammes, tableaux et chiffres, et développer les acronymes et termes spécialisés lors de leur première utilisation.
- Relier explicitement le contexte, les besoins, les contraintes, les enjeux, les décisions et la solution sans dépendre d'un narrateur, d'un speaker ou de notes orales.
- Pour les layouts `section` et `subsection`, conserver uniquement le frontmatter et les titres ; ne jamais y placer de paragraphes, listes, tableaux, diagrammes ou contenu détaillé.
- Le nombre de slides peut évoluer : remplir d'abord toutes les slides du modèle `slides.md`, puis ajouter des slides si le contenu ne peut pas être présenté lisiblement et de façon autoportante dans celles-ci.
- Ne supprimer une slide du modèle que si le contexte ne permet réellement pas de la renseigner ou si elle est manifestement hors périmètre ; justifier toute suppression exceptionnelle dans le compte rendu.
- Ne jamais supprimer une slide uniquement pour raccourcir la présentation ou réduire le nombre de slides.
- Conserver et compléter la première diapositive.
- Conserver la deuxième diapositive strictement à l'identique, sans modifier son frontmatter, son layout, son titre ou son contenu.
- Conserver et compléter les deux dernières diapositives.
- Ne supprimer aucune de ces diapositives obligatoires.

## Compte rendu final

Après la modification, fournir uniquement un compte rendu court avec ces rubriques :

1. `Fichier produit` : chemin et nombre de diapositives.
2. `Contenu couvert` : sections et vues d'architecture générées ou mises à jour.
3. `Hypothèses` : hypothèses réellement utilisées.
4. `Éléments manquants` : informations absentes ou non confirmées.
5. `Contrôles effectués` : conservation des slides obligatoires, langue française, cohérence des layouts et caractère autoportant de la présentation.
