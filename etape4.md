# Étape 4 : Prototypes d'Interface (IHM) - Version Statique

## Objectif

Créer des prototypes d'interface utilisateur **statiques** pour le système d'évaluation des enseignants. Les prototypes sont uniquement visuels - tous les boutons et éléments sont visibles mais ne déclenchent aucune action. Site statique sans dynamisme.

---

## Prompt pour Figma AI / Lovable

### Contexte

Je souhaite créer des **maquettes statiques** (wireframes/mockups) pour un système d'évaluation des enseignants. L'objectif est uniquement de créer l'interface visuelle, sans aucune fonctionnalité interactive. Tous les éléments sont visuels et statiques.

**Type :** Site web statique (HTML/CSS ou composants visuels uniquement)
**Style :** Moderne, professionnel, épuré
**Palette :** Bleus professionnels (#2563EB), verts (#10B981), gris neutres (#6B7280)

---

## Structure des Pages à Créer

### Pages Principales

#### 1. Page de Connexion
**Éléments visuels :**
- Logo du système (en haut, centré)
- Titre "Connexion" ou "Se connecter"
- Champ "Email" (input visible mais non fonctionnel)
- Champ "Mot de passe" (input visible mais non fonctionnel)
- Bouton "Se connecter" (visible, pas d'action)
- Lien "Mot de passe oublié ?" (texte visible)
- Design centré, formulaire visuel

---

#### 2. Dashboard Étudiant
**Éléments visuels :**
- **Header** : Logo, nom de l'étudiant, icône notifications, icône profil
- **Sidebar** : Menu avec "Dashboard", "Mes évaluations", "Statistiques"
- **Section principale** :
  - Titre "Évaluations en attente"
  - 3-4 cartes d'évaluations avec :
    - Nom de l'enseignant
    - Matière
    - Date limite
    - Bouton "Remplir" (visible, pas d'action)
  - Titre "Mes évaluations soumises"
  - Liste de 2-3 évaluations avec statut "Soumise"
  - Titre "Brouillons"
  - 1-2 brouillons avec bouton "Reprendre" (visible)

**Note :** Tous les éléments sont statiques, pas de clics fonctionnels.

---

#### 3. Page "Remplir une Évaluation"
**Éléments visuels :**
- **En-tête** : Nom de l'enseignant, matière, barre de progression (50% remplie visuellement)
- **Question 1** : 
  - Texte de la question
  - Options radio (visibles, non sélectionnables)
  - Indicateur "Question obligatoire"
- **Question 2** :
  - Texte de la question
  - Slider de notation 1-5 (visible, positionné à 3)
- **Question 3** :
  - Texte de la question
  - Zone de texte (textarea visible avec texte exemple)
- **Actions en bas** :
  - Bouton "Sauvegarder comme brouillon" (visible)
  - Bouton "Soumettre l'évaluation" (visible)
- **Message** : "Cette évaluation est anonyme" (texte informatif)

**Note :** Tous les champs sont visuels avec du contenu exemple, pas d'interaction.

---

#### 4. Dashboard Enseignant
**Éléments visuels :**
- **Header** : Logo, nom enseignant, notifications, profil
- **Sidebar** : Menu avec "Dashboard", "Mes évaluations", "Analyse IA", "Badges", "Paramètres"
- **Section principale** :
  - **Carte statistiques** : 
    - "Moyenne globale : 4.2/5" (texte)
    - Graphique en barres (image statique ou forme simple)
    - Indicateur "↑ +0.3" (texte vert)
  - **Section "Évaluations récentes"** :
    - 3 cartes avec date, note, nombre de commentaires
    - Badge "Positif" (vert) ou "Négatif" (rouge) - visuel uniquement
  - **Section "Actions rapides"** :
    - 4 boutons : "Voir toutes", "Analyser IA", "Comparer pairs", "Badges"
  - **Section "Recommandations"** :
    - 2 cartes avec suggestions (texte statique)

**Note :** Graphiques = formes simples ou images statiques, pas de données dynamiques.

---

#### 5. Page "Mes Évaluations" (Enseignant)
**Éléments visuels :**
- **Filtres en haut** :
  - Dropdown "Période" (visuel, texte "Semestre 1" affiché)
  - Dropdown "Matière" (visuel, texte "Toutes" affiché)
  - Barre de recherche (input visible avec texte "Rechercher...")
- **Tableau** :
  - En-têtes : Date, Note, Commentaires, Sentiment, Actions
  - 5 lignes d'exemple avec :
    - Dates (ex: "15/12/2024")
    - Notes (ex: "4.5/5")
    - Nombre de commentaires (ex: "12")
    - Badge de sentiment (vert/rouge/jaune)
    - Bouton "Voir" (visible)
- **Pagination** : "Page 1 sur 3" avec flèches (visuelles, non cliquables)

**Note :** Tableau statique avec données exemple, pas de tri ni filtrage fonctionnel.

---

#### 6. Page "Analyse IA des Évaluations"
**Éléments visuels :**
- **Section "Résumé IA"** :
  - Texte de résumé (2-3 paragraphes exemple)
  - Liste "Points forts" avec 3 items (texte)
  - Liste "Points d'amélioration" avec 3 items (texte)
- **Section "Analyse de sentiment"** :
  - Graphique circulaire (forme simple colorée)
  - Légende : "Positif 65%", "Négatif 20%", "Neutre 15%"
- **Section "Tendances"** :
  - Graphique linéaire simple (ligne avec points)
  - Axes avec labels (mois, notes)
- **Section "Recommandations"** :
  - 3 cartes avec titre, description, badge "Priorité haute/moyenne"
  - Bouton "Ajouter au plan" (visible)

**Note :** Tous les graphiques sont des formes statiques, pas de données réelles.

---

#### 7. Tableau de Bord Administrateur
**Éléments visuels :**
- **Header** : Logo, "Administrateur", notifications, profil
- **Sidebar** : Menu complet (Dashboard, Utilisateurs, Formulaires, Rapports, Configuration)
- **Section principale** :
  - **4 cartes statistiques** :
    - "Total utilisateurs : 1,234" (nombre, icône)
    - "Total évaluations : 5,678" (nombre, icône)
    - "Taux complétion : 87%" (pourcentage, barre visuelle)
    - "Alertes : 3" (nombre, badge rouge)
  - **Graphique principal** : Graphique en barres (forme simple)
  - **Section "Alertes"** :
    - 3 cartes d'alertes avec texte exemple
  - **Section "Actions rapides"** :
    - 4 boutons : "Créer formulaire", "Générer rapport", "Gérer utilisateurs", "Configurer"

**Note :** Tous les chiffres sont statiques, graphiques = formes simples.

---

#### 8. Page "Gestion des Utilisateurs"
**Éléments visuels :**
- **Barre d'actions** :
  - Bouton "Ajouter utilisateur" (visible)
  - Bouton "Importer CSV" (visible)
  - Barre de recherche (input visible)
- **Tableau** :
  - En-têtes : Nom, Email, Rôle, Département, Statut, Actions
  - 8-10 lignes d'exemple avec :
    - Noms fictifs
    - Emails exemple
    - Badges "Étudiant", "Enseignant", "Admin"
    - Départements
    - Toggle "Actif" (visuel, positionné)
    - Boutons "Modifier", "Supprimer" (visibles)
- **Pagination** : "Page 1 sur 2" avec flèches (visuelles)

**Note :** Tableau statique, toggles = images/icônes, pas d'état changeant.

---

#### 9. Page "Création de Formulaire"
**Éléments visuels :**
- **Formulaire principal** :
  - Champ "Titre" (input avec texte exemple)
  - Champ "Description" (textarea avec texte exemple)
  - Dropdown "Enseignant" (visuel, texte "Sélectionner..." affiché)
  - Date picker "Date début" (visuel, date affichée)
  - Date picker "Date fin" (visuel, date affichée)
  - Toggle "Actif" (visuel, positionné)
- **Section "Questions"** :
  - Titre "Questions du formulaire"
  - 3 questions exemple avec :
    - Type (dropdown visuel)
    - Texte de la question
    - Options (si choix multiple)
    - Checkbox "Obligatoire" (visuel, coché)
    - Boutons "Modifier", "Supprimer" (visibles)
  - Bouton "Ajouter une question" (visible)
- **Boutons actions** :
  - "Prévisualiser" (visible)
  - "Sauvegarder" (visible)
  - "Annuler" (visible)

**Note :** Tous les champs ont du contenu exemple, pas de saisie réelle.

---

#### 10. Page "Génération de Rapports"
**Éléments visuels :**
- **Formulaire de paramètres** :
  - Dropdown "Type de rapport" (visuel, texte affiché)
  - Date picker "Période début" (visuel)
  - Date picker "Période fin" (visuel)
  - Checkboxes "Départements" (visuelles, certaines cochées)
  - Radio buttons "Format" : PDF, Excel, CSV (visuels, PDF sélectionné)
- **Section "Prévisualisation"** :
  - Zone avec texte "Aperçu du rapport" (rectangle gris clair)
  - Texte exemple de rapport
- **Bouton "Générer le rapport"** (visible)
- **Section "Historique"** :
  - Liste de 3 rapports précédents avec date, format, bouton "Télécharger" (visible)

**Note :** Prévisualisation = zone statique avec texte exemple.

---

## Spécifications Visuelles

### Couleurs
- **Primaire** : #2563EB (bleu)
- **Succès** : #10B981 (vert)
- **Attention** : #F59E0B (orange)
- **Danger** : #EF4444 (rouge)
- **Gris texte** : #6B7280
- **Gris fond** : #F3F4F6
- **Blanc** : #FFFFFF

### Typographie
- **Titres** : Police sans-serif, gras, 24-32px
- **Sous-titres** : 18-20px
- **Corps** : 16px, gris foncé
- **Labels** : 14px, gris moyen

### Composants Visuels

**Boutons :**
- Fond coloré, texte blanc, coins arrondis (8px)
- Padding : 12px 24px
- Hauteur : 40-48px

**Inputs :**
- Bordure grise, coins arrondis (8px)
- Padding : 12px
- Hauteur : 40px
- Texte placeholder en gris clair

**Cards :**
- Fond blanc, ombre légère
- Coins arrondis (12px)
- Padding : 20px
- Bordure grise fine (optionnelle)

**Badges :**
- Petit rectangle coloré
- Texte blanc, padding 4px 8px
- Coins arrondis (4px)

**Graphiques :**
- Formes simples (rectangles, cercles, lignes)
- Couleurs distinctes
- Légendes avec texte

### Layout

**Header :**
- Hauteur : 64px
- Fond blanc, ombre légère
- Logo à gauche, actions à droite

**Sidebar :**
- Largeur : 240px (desktop)
- Fond gris clair
- Menu vertical avec icônes + texte

**Contenu principal :**
- Padding : 24-32px
- Largeur max : 1200px (centré)

### Responsive (Optionnel)

- **Mobile** : Sidebar → menu hamburger, cards empilées
- **Tablet** : Sidebar collapsible
- **Desktop** : Layout complet

---

## Instructions pour Figma AI / Lovable

**Objectif :** Créer des **maquettes statiques uniquement**. Aucune interaction, aucun dynamisme.

**Pour chaque page :**
1. Créer la structure (header, sidebar, contenu)
2. Ajouter tous les éléments visuels
3. Remplir avec du contenu exemple (textes, nombres, données fictives)
4. Styliser avec les couleurs et espacements définis
5. **Ne pas** ajouter d'interactions, d'animations, ou de fonctionnalités

**Éléments à créer :**
- Tous les boutons sont visibles mais non cliquables
- Tous les inputs affichent du texte exemple
- Tous les graphiques sont des formes statiques
- Tous les tableaux ont des données exemple
- Tous les dropdowns affichent une valeur (non changeable)
- Tous les toggles sont dans une position fixe

**Résultat attendu :**
Un site web statique où l'utilisateur peut voir toutes les interfaces mais ne peut rien modifier ni interagir. C'est purement visuel pour présentation/démonstration.

---

## Checklist

- [ ] Toutes les pages sont créées
- [ ] Tous les éléments sont visuels (pas de fonctionnalités)
- [ ] Le contenu exemple est présent partout
- [ ] Les couleurs sont cohérentes
- [ ] La typographie est uniforme
- [ ] Les espacements sont réguliers
- [ ] Les graphiques sont des formes simples
- [ ] Les boutons sont visibles mais non fonctionnels
- [ ] Le design est professionnel et moderne

---

**Résultat final :** Maquettes statiques complètes pour présentation visuelle du système d'évaluation des enseignants.
