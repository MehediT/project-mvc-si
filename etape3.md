# Étape 3 : Diagramme de Classes MVC

## Objectif

Cette étape consiste à représenter l'architecture complète du système d'évaluation des enseignants sous forme de diagramme de classes, en suivant le pattern **MVC (Modèle-Vue-Contrôleur)**. Le diagramme définit la structure statique du système, les classes, leurs attributs, leurs méthodes et les relations entre elles.

### But de l'analyse

- **Définir la structure** des classes du système
- **Identifier les responsabilités** de chaque composant MVC
- **Spécifier les relations** entre les classes
- **Documenter les types de données** et énumérations
- **Préparer l'implémentation** avec une architecture claire et modulaire

---

## Architecture MVC

Le système est organisé en trois packages principaux selon le pattern MVC :

### Package Model (Modèle)
Contient les classes métier et les classes d'accès aux données. Le modèle gère la logique métier et l'accès aux données sans exposer les détails d'implémentation.

### Package Contrôleur
Contient les contrôleurs qui orchestrent les interactions entre la vue et le modèle. Ils gèrent la logique de contrôle et la coordination.

### Package Vue
Contient les interfaces utilisateur qui affichent les données et capturent les interactions de l'utilisateur.

---

## Package Model

### Classes Métier

#### Utilisateur
**Description :** Classe de base représentant un utilisateur du système.

**Attributs :**
- `id` : Identifiant unique
- `nom`, `prenom` : Informations personnelles
- `email` : Adresse email
- `motDePasse` : Mot de passe (hashé)
- `role` : Rôle dans le système (enum Role)
- `dateCreation` : Date de création du compte

**Méthodes :**
- `authentifier()` : Authentification de l'utilisateur
- `obtenirProfil()` : Récupération du profil
- `mettreAJourProfil()` : Mise à jour du profil

**Relations :**
- Héritage : `Etudiant`, `Enseignant`, `Administrateur` héritent de `Utilisateur`

---

#### Etudiant
**Description :** Représente un étudiant qui peut remplir des évaluations.

**Attributs :**
- `niveauEtude` : Niveau d'études
- `departement` : Département d'appartenance

**Méthodes :**
- `remplirEvaluation()` : Remplir une évaluation
- `consulterCommentaires()` : Consulter ses commentaires

---

#### Enseignant
**Description :** Représente un enseignant qui reçoit des évaluations.

**Attributs :**
- `specialite` : Spécialité de l'enseignant
- `departement` : Département d'appartenance
- `dateEmbauche` : Date d'embauche

**Méthodes :**
- `consulterEvaluations()` : Consulter ses évaluations
- `repondreAuxCommentaires()` : Répondre aux commentaires
- `obtenirMoyenneGlobale()` : Calculer la moyenne globale

---

#### Administrateur
**Description :** Représente un administrateur avec des droits étendus.

**Attributs :**
- `permissionLevel` : Niveau de permission
- `dateNomination` : Date de nomination

**Méthodes :**
- `creerFormulaire()` : Créer un formulaire
- `gererUtilisateurs()` : Gérer les utilisateurs
- `genererRapports()` : Générer des rapports
- `configureAnonyme()` : Configurer l'anonymat

---

### Classes de Données

#### Formulaire
**Description :** Représente un formulaire d'évaluation.

**Attributs :**
- `id` : Identifiant unique
- `titre`, `description` : Informations du formulaire
- `enseignant` : Enseignant concerné
- `dateCreation`, `dateExpiration` : Période de validité
- `estActif` : Statut d'activation

**Méthodes :**
- `ajouterQuestion()` : Ajouter une question
- `supprimerQuestion()` : Supprimer une question
- `obtenirQuestions()` : Récupérer toutes les questions

**Relations :**
- Association avec `Enseignant` (1 formulaire → 1 enseignant)
- Composition avec `Question` (1 formulaire → * questions)

---

#### Question
**Description :** Représente une question dans un formulaire.

**Attributs :**
- `id` : Identifiant unique
- `texte` : Texte de la question
- `type` : Type de question (enum TypeQuestion)
- `ordreAffichage` : Ordre d'affichage
- `estObligatoire` : Question obligatoire ou non

**Méthodes :**
- `validerReponse(contenu)` : Valider une réponse
- `obtenirOptions()` : Obtenir les options (pour choix multiple)

**Relations :**
- Association avec `Formulaire` (* questions → 1 formulaire)

---

#### Evaluation
**Description :** Représente une évaluation remplie par un étudiant.

**Attributs :**
- `id` : Identifiant unique
- `formulaire` : Formulaire évalué
- `etudiant` : Étudiant qui a rempli
- `dateDebut`, `dateSoumission` : Dates importantes
- `statut` : Statut de l'évaluation (enum StatutEvaluation)
- `anonyme` : Évaluation anonyme ou non

**Méthodes :**
- `sauvegarder()` : Sauvegarder l'évaluation
- `soumettre()` : Soumettre l'évaluation

**Relations :**
- Association avec `Formulaire` (* évaluations → 1 formulaire)
- Association avec `Etudiant` (* évaluations → 1 étudiant)
- Composition avec `Reponse` (1 évaluation → * réponses)

---

#### Reponse
**Description :** Représente une réponse à une question.

**Attributs :**
- `id` : Identifiant unique
- `evaluation` : Évaluation parente
- `question` : Question répondue
- `contenu` : Contenu de la réponse
- `score` : Score attribué (si applicable)

**Méthodes :**
- `enregistrer()` : Enregistrer la réponse
- `valider()` : Valider la réponse

**Relations :**
- Association avec `Evaluation` (* réponses → 1 évaluation)
- Association avec `Question` (* réponses → 1 question)

---

#### Brouillon
**Description :** Représente un brouillon d'évaluation non finalisée.

**Attributs :**
- `id` : Identifiant unique
- `etudiant` : Étudiant propriétaire
- `formulaire` : Formulaire concerné
- `reponsesPartielles` : Réponses partiellement remplies
- `dateModification` : Dernière modification

**Méthodes :**
- `sauvegarder()` : Sauvegarder le brouillon
- `charger()` : Charger le brouillon

**Relations :**
- Association avec `Etudiant` (* brouillons → 1 étudiant)
- Association avec `Formulaire` (* brouillons → 1 formulaire)

---

#### Commentaire
**Description :** Représente un commentaire associé à une réponse.

**Attributs :**
- `id` : Identifiant unique
- `reponse` : Réponse commentée
- `auteur` : Auteur du commentaire
- `texte` : Texte du commentaire
- `dateCreation` : Date de création
- `estAnonyme` : Commentaire anonyme ou non

**Méthodes :**
- `poster()` : Poster le commentaire
- `repondre()` : Répondre au commentaire

**Relations :**
- Association avec `Reponse` (* commentaires → 1 réponse)
- Association avec `Utilisateur` (* commentaires → 1 utilisateur)

---

#### Statistiques
**Description :** Représente les statistiques d'un enseignant.

**Attributs :**
- `id` : Identifiant unique
- `enseignant` : Enseignant concerné
- `periode` : Période analysée
- `moyenneGlobale` : Moyenne globale
- `nombreEvaluations` : Nombre d'évaluations
- `tendance` : Tendance (amélioration, stabilité, baisse)

**Méthodes :**
- `calculerMoyenne()` : Calculer la moyenne
- `obtenirEvolution()` : Obtenir l'évolution
- `comparerAvecPaires()` : Comparer avec les pairs

**Relations :**
- Association avec `Enseignant` (1 statistique → 1 enseignant)

---

#### Rapport
**Description :** Représente un rapport généré.

**Attributs :**
- `id` : Identifiant unique
- `enseignant` : Enseignant concerné
- `dateGeneration` : Date de génération
- `periodeDebut`, `periodeFin` : Période couverte

**Méthodes :**
- `calculerStatistiques()` : Calculer les statistiques

**Relations :**
- Association avec `Enseignant` (1 rapport → 1 enseignant)

---

### Classes d'Accès aux Données (Modèles)

Ces classes encapsulent l'accès aux données et implémentent la logique métier liée à la persistance.

#### ModeleFormulaire
**Description :** Gère l'accès aux données des formulaires.

**Méthodes :**
- `obtenirFormulaireActif(enseignantID)` : Récupérer le formulaire actif d'un enseignant
- `obtenirQuestions(formulaireID)` : Récupérer les questions d'un formulaire
- `verifierDisponibilite(formulaireID)` : Vérifier si un formulaire est disponible
- `estExpire(formulaireID)` : Vérifier si un formulaire est expiré

**Relations :**
- Utilise `Formulaire` pour les opérations

---

#### ModeleEvaluation
**Description :** Gère l'accès aux données des évaluations.

**Méthodes :**
- `verifierEvaluationExistante(etudiantID, formulaireID)` : Vérifier si une évaluation existe déjà
- `validerReponses(reponses, formulaireID)` : Valider les réponses
- `creerEvaluation(etudiantID, formulaireID)` : Créer une nouvelle évaluation
- `enregistrerReponse(evaluationID, questionID, contenu)` : Enregistrer une réponse
- `finaliserEvaluation(evaluationID)` : Finaliser une évaluation
- `obtenirNombreEvaluations()` : Obtenir le nombre total d'évaluations
- `obtenirEvaluationsDetaillees()` : Obtenir les évaluations détaillées

**Relations :**
- Utilise `Evaluation` pour les opérations

---

#### ModeleBrouillon
**Description :** Gère l'accès aux données des brouillons.

**Méthodes :**
- `obtenirBrouillon(etudiantID, formulaireID)` : Récupérer un brouillon
- `creerOuMettreAJourBrouillon(etudiantID, formulaireID, reponses)` : Créer ou mettre à jour un brouillon
- `supprimerBrouillon(etudiantID, formulaireID)` : Supprimer un brouillon

**Relations :**
- Utilise `Brouillon` pour les opérations

---

#### ModeleStatistiques
**Description :** Gère les calculs et l'accès aux statistiques.

**Méthodes :**
- `obtenirStatistiquesGlobales()` : Obtenir les statistiques globales
- `obtenirStatistiquesParPeriode(dateDebut, dateFin)` : Obtenir les statistiques pour une période
- `obtenirMoyennesParEnseignant()` : Obtenir les moyennes par enseignant
- `obtenirEvolutionTemporelle()` : Obtenir l'évolution temporelle
- `obtenirTendances()` : Obtenir les tendances
- `obtenirDonneesFiltrees(type, dateDebut, dateFin)` : Obtenir des données filtrées
- `obtenirNouvellesDonnees()` : Obtenir les nouvelles données (temps réel)
- `obtenirStatistiquesCompletes()` : Obtenir les statistiques complètes
- `filtrerDonnees(criteres)` : Filtrer les données selon des critères

**Relations :**
- Utilise `Statistiques` pour les opérations

---

#### ModeleRapport
**Description :** Gère la génération et l'export de rapports.

**Méthodes :**
- `compilerDonneesRapport(parametres)` : Compiler les données pour un rapport
- `genererPDF(donnees)` : Générer un rapport PDF
- `genererExcel(donnees)` : Générer un rapport Excel
- `genererCSV(donnees)` : Générer un rapport CSV
- `exporter(donnees, format)` : Exporter dans un format donné

**Relations :**
- Utilise `Rapport` pour les opérations

---

## Package Contrôleur

Les contrôleurs orchestrent les interactions entre la vue et le modèle. Ils ne contiennent pas de logique métier mais coordonnent les opérations.

### ControleurAuthentification
**Description :** Gère l'authentification des utilisateurs.

**Attributs :**
- `utilisateurCourant` : Utilisateur actuellement connecté

**Méthodes :**
- `login(email, password)` : Authentifier un utilisateur
- `logout()` : Déconnecter l'utilisateur
- `verifierSession()` : Vérifier la session active

---

### ControleurEvaluation
**Description :** Gère le processus d'évaluation (remplir, soumettre, brouillons).

**Attributs :**
- `evaluationCourante` : Évaluation en cours
- `modeleEvaluation` : Référence au modèle d'évaluation
- `modeleFormulaire` : Référence au modèle de formulaire
- `modeleBrouillon` : Référence au modèle de brouillon

**Méthodes :**
- `chargerFormulaire(enseignantID)` : Charger un formulaire d'évaluation
- `soumettreEvaluation(formulaireID, reponses)` : Soumettre une évaluation
- `sauvegarderBrouillon(formulaireID, reponsesPartielles)` : Sauvegarder un brouillon
- `validerEvaluation()` : Valider une évaluation

**Relations :**
- Dépend de `ModeleEvaluation`, `ModeleFormulaire`, `ModeleBrouillon`

---

### ControleurTableauBord
**Description :** Gère l'affichage et la gestion du tableau de bord.

**Attributs :**
- `modeleStatistiques` : Référence au modèle de statistiques
- `modeleEvaluation` : Référence au modèle d'évaluation
- `modeleRapport` : Référence au modèle de rapport

**Méthodes :**
- `chargerTableauBord()` : Charger le tableau de bord (surcharge)
- `chargerTableauBord(dateDebut, dateFin)` : Charger avec filtrage par période
- `genererRapport(format, parametres)` : Générer un rapport
- `actualiserDonnees()` : Actualiser les données (temps réel)
- `exporterDonnees(criteres, format)` : Exporter des données spécifiques

**Relations :**
- Dépend de `ModeleStatistiques`, `ModeleEvaluation`, `ModeleRapport`

---

### ControleurFormulaire
**Description :** Gère la création et la modification des formulaires.

**Attributs :**
- `modeleFormulaire` : Référence au modèle de formulaire

**Méthodes :**
- `creerFormulaire()` : Créer un nouveau formulaire
- `modifierFormulaire(id)` : Modifier un formulaire existant
- `supprimerFormulaire(id)` : Supprimer un formulaire
- `ajouterQuestion(formulaire)` : Ajouter une question
- `previewFormulaire(id)` : Prévisualiser un formulaire

**Relations :**
- Dépend de `ModeleFormulaire`

---

### ControleurUtilisateurs
**Description :** Gère les utilisateurs du système.

**Méthodes :**
- `listerUtilisateurs()` : Lister tous les utilisateurs
- `creerUtilisateur(donnees)` : Créer un nouvel utilisateur
- `modifierUtilisateur(id)` : Modifier un utilisateur
- `supprimerUtilisateur(id)` : Supprimer un utilisateur
- `importerUtilisateurs(fichier)` : Importer des utilisateurs depuis un fichier

---

### ControleurRapports
**Description :** Gère la génération et l'export de rapports.

**Attributs :**
- `modeleRapport` : Référence au modèle de rapport

**Méthodes :**
- `genererRapport(enseignantID, periode)` : Générer un rapport
- `exporterPDF(rapport)` : Exporter en PDF
- `exporterExcel(rapport)` : Exporter en Excel
- `planifierGeneration(parametres)` : Planifier une génération

**Relations :**
- Dépend de `ModeleRapport`

---

## Package Vue

Les vues gèrent l'affichage et l'interaction avec l'utilisateur. Elles ne contiennent pas de logique métier.

### VueAuthentification
**Description :** Interface d'authentification.

**Attributs :**
- `formulaireLogin` : Formulaire de connexion

**Méthodes :**
- `afficherPageLogin()` : Afficher la page de connexion
- `afficherErreurAuthentification()` : Afficher une erreur d'authentification
- `redirigerVersAccueil()` : Rediriger vers l'accueil

**Relations :**
- Utilise `ControleurAuthentification`

---

### VueEvaluation
**Description :** Interface pour remplir une évaluation.

**Attributs :**
- `formulaire` : Formulaire actuel
- `questions` : Liste des questions
- `reponses` : Réponses saisies

**Méthodes :**
- `afficherFormulaire(formulaire, questions)` : Afficher le formulaire
- `afficherProgress()` : Afficher la progression
- `validerFormatReponse(reponse)` : Valider le format d'une réponse
- `afficherValidation()` : Afficher la validation
- `afficherConfirmation()` : Afficher la confirmation
- `afficherErreurs(erreurs)` : Afficher les erreurs
- `afficherBrouillonCharge()` : Afficher qu'un brouillon a été chargé

**Relations :**
- Utilise `ControleurEvaluation`

---

### VueTableauBord
**Description :** Interface du tableau de bord administrateur.

**Attributs :**
- `graphiques` : Liste des graphiques
- `statistiques` : Statistiques globales

**Méthodes :**
- `afficherTableauBord(donnees)` : Afficher le tableau de bord
- `afficherGraphiques()` : Afficher les graphiques
- `afficherFiltres()` : Afficher les filtres
- `afficherStatistiques()` : Afficher les statistiques
- `mettreAJourAffichage(donnees)` : Mettre à jour l'affichage (temps réel)
- `afficherErreur(message)` : Afficher une erreur
- `afficherAvertissement(message)` : Afficher un avertissement

**Relations :**
- Utilise `ControleurTableauBord`

---

### VueGestionFormulaires
**Description :** Interface de gestion des formulaires.

**Méthodes :**
- `afficherListeFormulaires()` : Afficher la liste des formulaires
- `afficherEditeurFormulaire()` : Afficher l'éditeur de formulaire
- `afficherPreview()` : Afficher la prévisualisation

**Relations :**
- Utilise `ControleurFormulaire`

---

### VueGestionUtilisateurs
**Description :** Interface de gestion des utilisateurs.

**Méthodes :**
- `afficherListeUtilisateurs()` : Afficher la liste des utilisateurs
- `afficherEditeurUtilisateur()` : Afficher l'éditeur d'utilisateur
- `afficherImportDialog()` : Afficher le dialogue d'import

**Relations :**
- Utilise `ControleurUtilisateurs`

---

### VueRapports
**Description :** Interface de gestion des rapports.

**Méthodes :**
- `afficherListeRapports()` : Afficher la liste des rapports
- `afficherRapport()` : Afficher un rapport
- `afficherExportOptions()` : Afficher les options d'export

**Relations :**
- Utilise `ControleurRapports`

---

### VueCommentaires
**Description :** Interface de gestion des commentaires.

**Méthodes :**
- `afficherCommentaires()` : Afficher les commentaires
- `afficherFormulaireReponse()` : Afficher le formulaire de réponse
- `afficherNotifications()` : Afficher les notifications

**Relations :**
- Utilise `ControleurEvaluation`

---

## Types de Données et Énumérations

### Types de Données

#### ValidationResult
**Description :** Résultat d'une validation.

**Attributs :**
- `estValide` : Indique si la validation a réussi
- `erreurs` : Liste des erreurs trouvées

---

#### DonneesFormulaire
**Description :** Données d'un formulaire avec ses questions.

**Attributs :**
- `formulaire` : Le formulaire
- `questions` : Liste des questions

---

#### ResultatSoumission
**Description :** Résultat de la soumission d'une évaluation.

**Attributs :**
- `succes` : Indique si la soumission a réussi
- `evaluationID` : Identifiant de l'évaluation créée
- `erreurs` : Liste des erreurs (si échec)

---

#### DonneesTableauBord
**Description :** Données complètes du tableau de bord.

**Attributs :**
- `statistiques` : Statistiques globales
- `moyennes` : Moyennes par enseignant
- `evolution` : Évolution temporelle
- `tendances` : Tendances identifiées

---

#### DonneesActualisees
**Description :** Données mises à jour pour le temps réel.

**Attributs :**
- `nouvellesDonnees` : Indique s'il y a de nouvelles données
- `donnees` : Les données actualisées

---

### Énumérations

#### StatutEvaluation
**Valeurs :**
- `BROUILLON` : Évaluation en brouillon
- `EN_COURS` : Évaluation en cours de remplissage
- `SOUMISE` : Évaluation soumise
- `FINALISEE` : Évaluation finalisée

---

#### TypeQuestion
**Valeurs :**
- `CHOIX_MULTIPLE` : Question à choix multiple
- `TEXTE_LIBRE` : Question à texte libre
- `NOTE` : Question de notation
- `OUI_NON` : Question oui/non

---

#### FormatExport
**Valeurs :**
- `PDF` : Format PDF
- `EXCEL` : Format Excel
- `CSV` : Format CSV
- `JSON` : Format JSON

---

#### Role
**Valeurs :**
- `ETUDIANT` : Rôle étudiant
- `ENSEIGNANT` : Rôle enseignant
- `ADMINISTRATEUR` : Rôle administrateur

---

## Relations Principales

### Relations d'Héritage
- `Etudiant`, `Enseignant`, `Administrateur` héritent de `Utilisateur`

### Relations d'Association
- **Formulaire ↔ Enseignant** : Un formulaire appartient à un enseignant (1 → 1)
- **Question ↔ Formulaire** : Plusieurs questions appartiennent à un formulaire (* → 1)
- **Evaluation ↔ Formulaire** : Plusieurs évaluations pour un formulaire (* → 1)
- **Evaluation ↔ Etudiant** : Plusieurs évaluations par un étudiant (* → 1)
- **Reponse ↔ Evaluation** : Plusieurs réponses par évaluation (* → 1)
- **Reponse ↔ Question** : Plusieurs réponses pour une question (* → 1)
- **Brouillon ↔ Etudiant** : Plusieurs brouillons par étudiant (* → 1)
- **Brouillon ↔ Formulaire** : Plusieurs brouillons pour un formulaire (* → 1)
- **Commentaire ↔ Reponse** : Plusieurs commentaires par réponse (* → 1)
- **Commentaire ↔ Utilisateur** : Plusieurs commentaires par utilisateur (* → 1)
- **Statistiques ↔ Enseignant** : Une statistique par enseignant (1 → 1)
- **Rapport ↔ Enseignant** : Un rapport par enseignant (1 → 1)

### Relations de Dépendance
- **Contrôleurs → Modèles** : Les contrôleurs utilisent les modèles
- **Vues → Contrôleurs** : Les vues utilisent les contrôleurs
- **Modèles → Classes Métier** : Les modèles utilisent les classes métier

---

## Points Clés de l'Architecture

### 1. Séparation des Responsabilités

- **Model** : Logique métier et accès aux données
- **Contrôleur** : Orchestration et coordination
- **Vue** : Affichage et interaction utilisateur

### 2. Encapsulation des Accès aux Données

Les classes `Modele*` encapsulent tous les accès aux données, permettant :
- Abstraction de la couche de persistance
- Facilité de test (mock possible)
- Évolutivité (changement de SGBD sans impact)

### 3. Réutilisabilité

Les classes sont conçues pour être réutilisables :
- Modèles utilisables par plusieurs contrôleurs
- Contrôleurs utilisables par plusieurs vues
- Types de données partagés

### 4. Extensibilité

L'architecture permet d'ajouter facilement :
- De nouvelles classes métier
- De nouveaux contrôleurs
- De nouvelles vues
- De nouveaux types de données

### 5. Cohérence avec les Diagrammes de Séquence

Le diagramme de classes est cohérent avec les diagrammes de séquence de l'étape 2 :
- Les méthodes identifiées dans les séquences sont présentes dans les classes
- Les relations correspondent aux interactions
- Les types de données correspondent aux paramètres et retours

---

## Conclusion

Cette étape 3 permet de :

1. **Définir la structure complète** du système en classes
2. **Spécifier les responsabilités** de chaque composant
3. **Documenter les relations** entre les classes
4. **Préparer l'implémentation** avec une architecture claire
5. **Assurer la cohérence** avec les étapes précédentes

Le diagramme de classes sert de référence pour :
- Les développeurs lors de l'implémentation
- Les architectes pour valider l'architecture
- Les testeurs pour comprendre les dépendances
- Les documentalistes pour la documentation technique

---

**Fichier associé :**
- `04-diagramme-classes-mvc.puml` : Diagramme de classes MVC complet
