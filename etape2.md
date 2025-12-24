# Étape 2 : Diagrammes de Séquence MVC

## Objectif

Cette étape consiste à analyser en détail deux cas d'utilisation majeurs du système d'évaluation des enseignants en suivant une démarche **MVC (Modèle-Vue-Contrôleur)**. Les diagrammes de séquence permettent de visualiser les interactions entre les différents composants du système et de comprendre le flux de données et de contrôle.

### But de l'analyse

- **Comprendre les interactions** entre les acteurs et le système
- **Décomposer les fonctionnalités** selon l'architecture MVC
- **Identifier les scénarios principaux** et les alternatives
- **Documenter les flux de données** et les opérations métier
- **Préparer l'implémentation** en clarifiant les responsabilités de chaque composant

---

## Cas d'Utilisation Analysés

### 1. Remplir une Évaluation
**Fichier :** `02-sequence-remplir-evaluation.puml`  
**Acteur principal :** Étudiant

### 2. Consulter le Tableau de Bord
**Fichier :** `03-sequence-tableau-bord.puml`  
**Acteur principal :** Administrateur

---

## Architecture MVC Utilisée

### Principe MVC

L'architecture **Modèle-Vue-Contrôleur** sépare les préoccupations en trois couches :

- **Modèle (Model)** : Gère la logique métier et l'accès aux données
- **Vue (View)** : Gère l'affichage et l'interaction avec l'utilisateur
- **Contrôleur (Controller)** : Coordonne les interactions entre la Vue et le Modèle

### Avantages de cette approche

- **Séparation des responsabilités** : Chaque composant a un rôle clair
- **Maintenabilité** : Modifications isolées par couche
- **Réutilisabilité** : Composants réutilisables dans différents contextes
- **Testabilité** : Chaque couche peut être testée indépendamment

---

## Analyse Détaillée : Remplir une Évaluation

### Participants

- **Étudiant** : Acteur qui remplit l'évaluation
- **Vue Evaluation** : Interface utilisateur pour le formulaire
- **Contrôleur Evaluation** : Gère la logique de contrôle
- **Modèle Evaluation** : Gère les évaluations
- **Modèle Formulaire** : Gère les formulaires et questions
- **Modèle Brouillon** : Gère les brouillons d'évaluations

### Scénario Idéal

1. **Chargement du formulaire**
   - L'étudiant accède au formulaire
   - Le contrôleur charge le formulaire actif et ses questions
   - La vue affiche le formulaire

2. **Saisie des réponses** (boucle)
   - Pour chaque question, l'étudiant saisit une réponse
   - La vue valide le format en temps réel

3. **Sauvegarde optionnelle du brouillon**
   - L'étudiant peut sauvegarder son travail en cours
   - Le brouillon est enregistré pour reprise ultérieure

4. **Soumission de l'évaluation**
   - Validation des réponses
   - Si valides : création de l'évaluation, enregistrement des réponses, suppression du brouillon si existant, finalisation
   - Si invalides : affichage des erreurs avec conseils

### Alternatives

#### Alternative 1 : Évaluation déjà soumise
- Vérification de l'existence d'une évaluation précédente
- Affichage d'un message d'erreur si déjà soumise

#### Alternative 2 : Formulaire expiré
- Vérification de la disponibilité du formulaire
- Affichage d'un message si le formulaire n'est plus actif

#### Alternative 3 : Reprendre un brouillon
- Détection d'un brouillon existant
- Chargement du formulaire avec les réponses pré-remplies

### Opérateurs UML Utilisés

- **`loop`** : Itération sur les questions et réponses
- **`opt`** : Sauvegarde optionnelle du brouillon, suppression conditionnelle
- **`alt`** : Alternative entre validation réussie/échouée

---

## Analyse Détaillée : Consulter le Tableau de Bord

### Participants

- **Administrateur** : Acteur qui consulte le tableau de bord
- **Vue TableauBord** : Interface du tableau de bord
- **Contrôleur TableauBord** : Gère la logique de contrôle
- **Modèle Statistiques** : Gère les calculs statistiques
- **Modèle Rapport** : Gère la génération de rapports
- **Modèle Evaluation** : Gère les données d'évaluations

### Scénario Idéal

1. **Chargement des données**
   - Récupération des statistiques globales
   - Récupération du nombre d'évaluations
   - Calcul des moyennes par enseignant
   - Analyse de l'évolution temporelle
   - Identification des tendances

2. **Affichage du tableau de bord**
   - Présentation des graphiques de performance
   - Comparaisons entre enseignants
   - Visualisation des tendances temporelles
   - Affichage des indicateurs clés

### Alternatives

#### Alternative 1 : Filtrage par Période
- Sélection d'une période personnalisée
- Boucle sur les différents types de statistiques
- Affichage des données filtrées

#### Alternative 2 : Génération de Rapport
- Compilation des données complètes
- Génération selon le format (PDF, Excel, CSV)
- Téléchargement du rapport

#### Alternative 3 : Erreur d'Accès aux Données
- Gestion de trois types d'erreurs :
  - **Erreur de connexion** : Message d'erreur
  - **Données insuffisantes** : Affichage partiel avec avertissement
  - **Aucune donnée** : Message informatif

#### Alternative 4 : Actualisation en Temps Réel
- Mode optionnel d'actualisation automatique
- Boucle périodique de mise à jour
- Mise à jour conditionnelle si nouvelles données

#### Alternative 5 : Export de Données Spécifiques
- Filtrage selon des critères
- Export dans le format demandé
- Gestion des formats non supportés

### Opérateurs UML Utilisés

- **`loop`** : Itération sur les types de statistiques, actualisation périodique
- **`opt`** : Mode temps réel optionnel, export conditionnel
- **`alt`** : Choix du format d'export, gestion des différents types d'erreurs

---

## Points Clés de l'Analyse

### 1. Séparation des Responsabilités

Chaque composant MVC a des responsabilités claires :

- **Vue** : Affichage, validation côté client, interaction utilisateur
- **Contrôleur** : Orchestration, validation métier, coordination
- **Modèle** : Logique métier, accès aux données, calculs

### 2. Gestion des Erreurs

Les diagrammes montrent une gestion complète des erreurs :
- Validation des données
- Gestion des cas limites
- Messages d'erreur explicites

### 3. Flexibilité et Extensibilité

L'architecture permet :
- Ajout de nouvelles fonctionnalités
- Modification d'une couche sans impact sur les autres
- Réutilisation des composants

### 4. Absence de SQL Direct

**Important** : Les diagrammes n'exposent pas de requêtes SQL directes. Toutes les opérations sur les données passent par des méthodes du modèle qui encapsulent l'accès à la base de données. Cela garantit :
- **Abstraction** : La vue et le contrôleur ne connaissent pas les détails de stockage
- **Maintenabilité** : Les changements de structure de base de données n'affectent que le modèle
- **Sécurité** : Protection contre les injections SQL
- **Testabilité** : Possibilité de mocker les accès aux données

### 5. Opérateurs UML pour la Clarté

L'utilisation des opérateurs UML (`loop`, `opt`, `alt`) permet :
- **Visualisation claire** des flux conditionnels
- **Documentation** des itérations et alternatives
- **Compréhension** rapide des scénarios complexes

---

## Méthodes du Modèle Identifiées

### Pour le Cas "Remplir Évaluation"

**Modèle Formulaire :**
- `obtenirFormulaireActif(enseignantID)`
- `obtenirQuestions(formulaireID)`

**Modèle Evaluation :**
- `verifierEvaluationExistante(etudiantID, formulaireID)`
- `validerReponses(reponses, formulaireID)`
- `creerEvaluation(etudiantID, formulaireID)`
- `enregistrerReponse(evaluationID, questionID, contenu)`
- `finaliserEvaluation(evaluationID)`

**Modèle Brouillon :**
- `obtenirBrouillon(etudiantID, formulaireID)`
- `creerOuMettreAJourBrouillon(etudiantID, formulaireID, reponses)`
- `supprimerBrouillon(etudiantID, formulaireID)`

### Pour le Cas "Tableau de Bord"

**Modèle Statistiques :**
- `obtenirStatistiquesGlobales()`
- `obtenirStatistiquesParPeriode(dateDebut, dateFin)`
- `obtenirMoyennesParEnseignant()`
- `obtenirEvolutionTemporelle()`
- `obtenirTendances()`
- `obtenirDonneesFiltrees(type, dateDebut, dateFin)`
- `obtenirNouvellesDonnees()`
- `obtenirStatistiquesCompletes()`
- `filtrerDonnees(criteres)`

**Modèle Evaluation :**
- `obtenirNombreEvaluations()`
- `obtenirEvaluationsDetaillees()`

**Modèle Rapport :**
- `compilerDonneesRapport(parametres)`
- `genererPDF(donnees)`
- `genererExcel(donnees)`
- `genererCSV(donnees)`
- `exporter(donnees, format)`

---

## Conclusion

Cette étape 2 permet de :

1. **Comprendre en profondeur** le fonctionnement de deux fonctionnalités clés
2. **Définir l'architecture** MVC pour l'implémentation
3. **Identifier tous les scénarios** possibles (idéal et alternatives)
4. **Documenter les interactions** entre les composants
5. **Préparer l'implémentation** avec une structure claire

Les diagrammes de séquence servent de référence pour :
- Les développeurs lors de l'implémentation
- Les testeurs pour créer les cas de test
- Les architectes pour valider l'architecture
- Les documentalistes pour la documentation technique

---

**Fichiers associés :**
- `02-sequence-remplir-evaluation.puml` : Diagramme de séquence pour "Remplir une Évaluation"
- `03-sequence-tableau-bord.puml` : Diagramme de séquence pour "Consulter le Tableau de Bord"
