# Documentation des Cas d'Utilisation
## Système d'Évaluation des Enseignants

**Date de création :** 2025  
**Version :** 2.0  
**Dernière mise à jour :** Ajout de 13 nouvelles fonctionnalités

---

## Vue d'ensemble

Ce document décrit tous les cas d'utilisation du système d'évaluation des enseignants. Le système permet aux étudiants d'évaluer leurs enseignants, aux enseignants de consulter leurs évaluations et de recevoir des analyses avancées, et aux administrateurs de gérer le système et générer des rapports.

### Acteurs

- **Étudiant** : Utilisateur qui remplit les évaluations
- **Enseignant** : Utilisateur qui reçoit et consulte les évaluations
- **Administrateur** : Utilisateur qui gère le système (hérite des droits d'Enseignant)

---

## Fonctionnalités Étudiant

### 1. Remplir Évaluation

**Description :** L'étudiant peut remplir un formulaire d'évaluation pour un enseignant spécifique.

**Acteur principal :** Étudiant

**Préconditions :**
- L'étudiant est authentifié
- Un formulaire d'évaluation existe pour l'enseignant
- L'étudiant n'a pas déjà soumis une évaluation pour ce formulaire

**Scénario principal :**
1. L'étudiant accède au formulaire d'évaluation
2. L'étudiant répond aux questions (notes, commentaires)
3. L'étudiant peut sauvegarder un brouillon
4. L'étudiant soumet l'évaluation
5. Le système enregistre l'évaluation

**Postconditions :**
- L'évaluation est enregistrée dans le système
- L'étudiant ne peut plus modifier l'évaluation soumise

**Relations :**
- Inclut : "Créer Formulaire" (le formulaire doit exister)
- Étend : "Sauvegarder Brouillon" (optionnel pendant le remplissage)

---

### 2. Consulter Commentaires

**Description :** L'étudiant peut consulter les commentaires et réponses qu'il a laissés dans ses évaluations précédentes.

**Acteur principal :** Étudiant

**Préconditions :**
- L'étudiant est authentifié
- L'étudiant a soumis au moins une évaluation

**Scénario principal :**
1. L'étudiant accède à la section "Mes évaluations"
2. Le système affiche la liste de ses évaluations soumises
3. L'étudiant sélectionne une évaluation
4. Le système affiche les détails (questions, réponses, commentaires)

**Postconditions :**
- L'étudiant a consulté ses commentaires

---

### 3. Recevoir Rappels Automatiques

**Description :** Le système envoie automatiquement des rappels aux étudiants pour les évaluations en attente.

**Acteur principal :** Étudiant (récepteur passif)

**Préconditions :**
- L'étudiant est authentifié
- Il existe des évaluations non complétées assignées à l'étudiant

**Scénario principal :**
1. Le système détecte une évaluation en attente
2. Le système envoie un rappel (email, notification)
3. L'étudiant reçoit le rappel

**Fréquence :**
- Rappels programmés (ex: 3 jours avant échéance, 1 jour avant échéance)

**Postconditions :**
- L'étudiant a été notifié de l'évaluation en attente

---

### 4. Sauvegarder Brouillon

**Description :** L'étudiant peut sauvegarder son évaluation en cours comme brouillon pour la compléter plus tard.

**Acteur principal :** Étudiant

**Préconditions :**
- L'étudiant est authentifié
- L'étudiant a commencé à remplir une évaluation
- L'évaluation n'a pas encore été soumise

**Scénario principal :**
1. L'étudiant remplit partiellement le formulaire
2. L'étudiant choisit de sauvegarder comme brouillon
3. Le système enregistre l'état actuel
4. L'étudiant peut revenir plus tard pour compléter
5. L'étudiant peut modifier ou supprimer le brouillon

**Postconditions :**
- Un brouillon est sauvegardé
- L'étudiant peut continuer l'évaluation plus tard

**Relations :**
- Étendu par : "Remplir Évaluation"

---

### 5. Consulter Statistiques Globales

**Description :** L'étudiant peut consulter des statistiques globales anonymisées sur les évaluations (moyennes par département, tendances, etc.).

**Acteur principal :** Étudiant

**Préconditions :**
- L'étudiant est authentifié

**Scénario principal :**
1. L'étudiant accède à la section "Statistiques"
2. Le système affiche des statistiques anonymisées :
   - Moyennes par département
   - Tendances générales
   - Graphiques comparatifs
3. L'étudiant peut filtrer par période ou critère

**Postconditions :**
- Les statistiques globales sont affichées

---

## Fonctionnalités Enseignant

### 6. Consulter Évaluations Personnelles

**Description :** L'enseignant peut consulter toutes les évaluations qui le concernent, avec les notes, commentaires et statistiques.

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Il existe au moins une évaluation pour cet enseignant

**Scénario principal :**
1. L'enseignant accède à la section "Mes évaluations"
2. Le système affiche la liste de ses évaluations
3. L'enseignant peut filtrer par période, matière, etc.
4. L'enseignant consulte les détails d'une évaluation
5. Le système affiche les notes, commentaires et statistiques

**Postconditions :**
- L'enseignant a consulté ses évaluations

**Relations :**
- Inclus par : "Résumer Évaluations IA", "Détecter Sentiment", "Comparer avec Pairs", "Consulter Historique Améliorations"

---

### 7. Interagir avec Feedback

**Description :** L'enseignant peut interagir avec les commentaires reçus (répondre, marquer comme lu, etc.).

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Il existe des commentaires dans les évaluations

**Scénario principal :**
1. L'enseignant consulte une évaluation
2. L'enseignant lit les commentaires
3. L'enseignant peut répondre aux commentaires (si configuré)
4. L'enseignant peut marquer les commentaires comme lus

**Postconditions :**
- Les interactions sont enregistrées

---

### 8. Résumer Évaluations IA

**Description :** L'enseignant peut obtenir un résumé automatique généré par IA de toutes ses évaluations, avec les points clés, tendances et insights.

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Il existe des évaluations pour cet enseignant

**Scénario principal :**
1. L'enseignant demande un résumé IA
2. Le système analyse toutes les évaluations
3. L'IA génère un résumé avec :
   - Points forts identifiés
   - Points d'amélioration
   - Tendances générales
   - Statistiques clés
4. Le système affiche le résumé à l'enseignant

**Postconditions :**
- Un résumé IA est généré et disponible

**Relations :**
- Inclut : "Consulter Évaluations Personnelles"
- Inclus par : "Recevoir Recommandations Personnalisées"

---

### 9. Détecter Sentiment

**Description :** Le système analyse automatiquement le sentiment (positif, négatif, neutre) des commentaires dans les évaluations.

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Il existe des commentaires dans les évaluations

**Scénario principal :**
1. L'enseignant consulte ses évaluations
2. Le système analyse automatiquement le sentiment des commentaires
3. Le système affiche une visualisation du sentiment (graphique, pourcentages)
4. L'enseignant peut voir la répartition des sentiments

**Postconditions :**
- L'analyse de sentiment est disponible

**Relations :**
- Inclut : "Consulter Évaluations Personnelles"

---

### 10. Recevoir Recommandations Personnalisées

**Description :** Le système génère des recommandations personnalisées pour l'enseignant basées sur l'analyse de ses évaluations.

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Il existe des évaluations analysées

**Scénario principal :**
1. Le système analyse les évaluations de l'enseignant
2. Le système identifie les domaines d'amélioration
3. Le système génère des recommandations personnalisées
4. L'enseignant consulte les recommandations
5. Les recommandations peuvent inclure :
   - Suggestions d'amélioration pédagogique
   - Ressources recommandées
   - Actions prioritaires

**Postconditions :**
- Des recommandations sont générées et affichées

**Relations :**
- Inclut : "Résumer Évaluations IA"

---

### 11. Comparer avec Pairs

**Description :** L'enseignant peut comparer anonymement ses résultats avec ceux d'autres enseignants du même département ou domaine.

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Il existe des données comparatives disponibles

**Scénario principal :**
1. L'enseignant demande une comparaison avec ses pairs
2. Le système sélectionne un groupe de référence (même département, même matière)
3. Le système calcule les statistiques comparatives
4. Le système affiche la comparaison anonymisée :
   - Position par rapport à la moyenne
   - Percentiles
   - Graphiques comparatifs

**Postconditions :**
- Une comparaison anonymisée est affichée

**Relations :**
- Inclut : "Consulter Évaluations Personnelles"

---

### 12. Recevoir Notifications Email

**Description :** L'enseignant reçoit des notifications par email lorsqu'une nouvelle évaluation est disponible ou lorsque des événements importants se produisent.

**Acteur principal :** Enseignant (récepteur)

**Préconditions :**
- L'enseignant est authentifié
- L'enseignant a configuré ses préférences de notification

**Scénario principal :**
1. Un événement se produit (nouvelle évaluation, rapport généré, etc.)
2. Le système vérifie les préférences de l'enseignant
3. Le système envoie un email de notification
4. L'enseignant reçoit l'email

**Types de notifications :**
- Nouvelle évaluation disponible
- Rapport généré
- Alerte de tendance
- Badge obtenu

**Postconditions :**
- L'enseignant a été notifié par email

---

### 13. Consulter Badges

**Description :** L'enseignant peut consulter les badges qu'il a obtenus en fonction de ses performances et améliorations.

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié

**Scénario principal :**
1. L'enseignant accède à la section "Mes badges"
2. Le système affiche tous les badges disponibles
3. L'enseignant voit :
   - Badges obtenus
   - Badges en cours d'obtention
   - Progression vers les prochains badges

**Types de badges possibles :**
- "Excellent feedback"
- "Amélioration continue"
- "Très apprécié"
- "Engagement élevé"

**Postconditions :**
- L'enseignant a consulté ses badges

---

### 14. Consulter Historique Améliorations

**Description :** L'enseignant peut consulter l'historique de ses évaluations sur plusieurs périodes pour visualiser son évolution.

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Il existe des évaluations sur plusieurs périodes

**Scénario principal :**
1. L'enseignant accède à l'historique
2. Le système affiche les évaluations par période
3. L'enseignant peut visualiser :
   - Évolution des notes dans le temps
   - Tendances d'amélioration
   - Graphiques d'évolution
4. L'enseignant peut comparer différentes périodes

**Postconditions :**
- L'historique est affiché

**Relations :**
- Inclut : "Consulter Évaluations Personnelles"

---

### 15. Planifier Actions Amélioration

**Description :** L'enseignant peut créer et planifier des actions d'amélioration basées sur les recommandations reçues.

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Des recommandations sont disponibles

**Scénario principal :**
1. L'enseignant consulte les recommandations
2. L'enseignant sélectionne une recommandation
3. L'enseignant crée une action d'amélioration :
   - Description de l'action
   - Date prévue
   - Objectifs
4. L'enseignant enregistre le plan d'action
5. Le système peut envoyer des rappels

**Postconditions :**
- Un plan d'action est créé et enregistré

**Relations :**
- Inclut : "Recevoir Recommandations Personnalisées"

---

### 16. Répondre aux Commentaires

**Description :** L'enseignant peut répondre directement aux commentaires laissés par les étudiants dans les évaluations.

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Il existe des commentaires dans les évaluations
- La fonctionnalité de réponse est activée

**Scénario principal :**
1. L'enseignant consulte une évaluation
2. L'enseignant lit un commentaire
3. L'enseignant rédige une réponse
4. L'enseignant soumet la réponse
5. Le système enregistre la réponse
6. L'étudiant peut être notifié (si configuré)

**Postconditions :**
- Une réponse est enregistrée et associée au commentaire

**Relations :**
- Inclut : "Interagir avec Feedback"

---

### 17. Exporter Rapports Personnels

**Description :** L'enseignant peut exporter ses propres rapports d'évaluation dans différents formats pour usage personnel.

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Il existe des évaluations pour cet enseignant

**Scénario principal :**
1. L'enseignant consulte ses évaluations
2. L'enseignant sélectionne l'option d'export
3. L'enseignant choisit :
   - Format (PDF, Excel, CSV)
   - Période
   - Données à inclure
4. Le système génère le rapport
5. L'enseignant télécharge le fichier

**Postconditions :**
- Un rapport personnel est généré et téléchargé

**Relations :**
- Inclut : "Consulter Évaluations Personnelles"

---

### 18. Consulter Évaluations Temps Réel

**Description :** L'enseignant peut consulter les évaluations en temps réel au fur et à mesure qu'elles sont soumises (si configuré).

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Le mode temps réel est activé pour cet enseignant

**Scénario principal :**
1. L'enseignant active la vue temps réel
2. Le système affiche les évaluations au fur et à mesure
3. L'enseignant voit les nouvelles évaluations apparaître
4. Le système peut afficher des notifications pour les nouvelles soumissions

**Postconditions :**
- Les évaluations sont consultées en temps réel

**Relations :**
- Inclut : "Consulter Évaluations Personnelles"

---

### 19. Rechercher dans Évaluations

**Description :** L'enseignant peut effectuer des recherches avancées dans ses évaluations (par mots-clés, dates, notes, etc.).

**Acteur principal :** Enseignant

**Préconditions :**
- L'enseignant est authentifié
- Il existe des évaluations

**Scénario principal :**
1. L'enseignant accède à la fonction de recherche
2. L'enseignant saisit des critères :
   - Mots-clés dans les commentaires
   - Plage de dates
   - Plage de notes
   - Type de question
3. Le système effectue la recherche
4. Le système affiche les résultats correspondants
5. L'enseignant peut affiner la recherche

**Postconditions :**
- Les résultats de recherche sont affichés

**Relations :**
- Inclut : "Consulter Évaluations Personnelles"

---

## Fonctionnalités Administrateur

### 20. Consulter Tableau de Bord

**Description :** L'administrateur peut consulter un tableau de bord avec une vue d'ensemble du système, statistiques globales et indicateurs clés.

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié

**Scénario principal :**
1. L'administrateur accède au tableau de bord
2. Le système affiche :
   - Statistiques globales (nombre d'évaluations, utilisateurs, etc.)
   - Graphiques et visualisations
   - Indicateurs de performance
   - Alertes et notifications importantes
3. L'administrateur peut filtrer par période

**Postconditions :**
- Le tableau de bord est affiché

**Relations :**
- Inclut : "Générer Rapports"

---

### 21. Gérer Utilisateurs

**Description :** L'administrateur peut gérer tous les utilisateurs du système (créer, modifier, supprimer, changer les rôles).

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié

**Scénario principal :**
1. L'administrateur accède à la gestion des utilisateurs
2. L'administrateur peut :
   - Créer un nouvel utilisateur
   - Modifier les informations d'un utilisateur
   - Supprimer un utilisateur
   - Changer le rôle d'un utilisateur
   - Activer/désactiver un compte
3. Le système enregistre les modifications

**Postconditions :**
- Les modifications sont enregistrées

---

### 22. Créer Formulaire

**Description :** L'administrateur peut créer de nouveaux formulaires d'évaluation avec des questions personnalisées.

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié

**Scénario principal :**
1. L'administrateur accède à la création de formulaire
2. L'administrateur définit :
   - Titre et description du formulaire
   - Enseignant(s) concerné(s)
   - Période de validité
   - Questions (texte, type, options)
3. L'administrateur configure les paramètres (anonymat, obligatoire, etc.)
4. L'administrateur sauvegarde le formulaire
5. Le système active le formulaire

**Postconditions :**
- Un nouveau formulaire est créé et disponible

---

### 23. Générer Rapports

**Description :** L'administrateur peut générer des rapports détaillés sur les évaluations, statistiques et performances.

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié
- Il existe des données à rapporter

**Scénario principal :**
1. L'administrateur accède à la génération de rapports
2. L'administrateur sélectionne :
   - Type de rapport
   - Période
   - Filtres (département, enseignant, etc.)
3. Le système génère le rapport
4. Le système affiche ou exporte le rapport

**Types de rapports :**
- Rapport par enseignant
- Rapport global
- Rapport par département
- Rapport d'évolution

**Postconditions :**
- Un rapport est généré

**Relations :**
- Inclus par : "Consulter Tableau de Bord"

---

### 24. Configurer Anonymat

**Description :** L'administrateur peut configurer les paramètres d'anonymat pour les évaluations.

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié

**Scénario principal :**
1. L'administrateur accède aux paramètres d'anonymat
2. L'administrateur configure :
   - Niveau d'anonymat (total, partiel, aucun)
   - Règles d'anonymisation
   - Exceptions éventuelles
3. L'administrateur sauvegarde la configuration
4. Le système applique les règles d'anonymat

**Postconditions :**
- Les paramètres d'anonymat sont configurés

---

### 25. Visualiser Évolution

**Description :** L'administrateur peut visualiser l'évolution des évaluations et des performances dans le temps.

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié
- Il existe des données historiques

**Scénario principal :**
1. L'administrateur accède à la visualisation d'évolution
2. L'administrateur sélectionne :
   - Période à analyser
   - Indicateurs à visualiser
   - Niveau d'agrégation (global, par département, par enseignant)
3. Le système affiche :
   - Graphiques d'évolution
   - Tendances
   - Comparaisons temporelles
4. L'administrateur peut exporter les visualisations

**Postconditions :**
- Les visualisations d'évolution sont affichées

---

### 26. Exporter Données Multi-formats

**Description :** L'administrateur peut exporter les données du système dans différents formats (PDF, Excel, CSV, JSON).

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié
- Il existe des données à exporter

**Scénario principal :**
1. L'administrateur accède à l'export de données
2. L'administrateur sélectionne :
   - Données à exporter
   - Format d'export (PDF, Excel, CSV, JSON)
   - Filtres et options
3. Le système génère le fichier d'export
4. L'administrateur télécharge le fichier

**Formats disponibles :**
- PDF (pour rapports imprimables)
- Excel (pour analyses)
- CSV (pour traitement de données)
- JSON (pour intégration API)

**Postconditions :**
- Un fichier d'export est généré et téléchargé

---

### 27. Recevoir Alertes Tendances

**Description :** L'administrateur reçoit automatiquement des alertes lorsque des tendances significatives sont détectées (baisse de scores, anomalies, etc.).

**Acteur principal :** Administrateur (récepteur)

**Préconditions :**
- L'administrateur est authentifié
- Le système de détection d'alertes est actif

**Scénario principal :**
1. Le système analyse les données en continu
2. Le système détecte une tendance significative :
   - Baisse importante des scores
   - Anomalie statistique
   - Pic d'évaluations négatives
   - Problème système
3. Le système génère une alerte
4. L'administrateur reçoit l'alerte (email, notification)
5. L'administrateur peut consulter les détails

**Types d'alertes :**
- Baisse de performance
- Anomalie détectée
- Seuil atteint
- Problème technique

**Postconditions :**
- L'administrateur a été alerté

---

### 28. Exporter Données Anonymisées

**Description :** L'administrateur peut exporter les données anonymisées pour des fins de recherche académique ou d'analyse statistique.

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié
- Il existe des données à exporter

**Scénario principal :**
1. L'administrateur accède à l'export anonymisé
2. L'administrateur configure :
   - Niveau d'anonymisation
   - Données à inclure/exclure
   - Format d'export
3. Le système anonymise les données :
   - Suppression des identifiants personnels
   - Agrégation si nécessaire
   - Pseudonymisation
4. Le système génère le fichier anonymisé
5. L'administrateur télécharge le fichier

**Postconditions :**
- Un fichier de données anonymisées est généré

---

### 29. Gérer Périodes Évaluation

**Description :** L'administrateur peut créer, modifier et gérer les périodes d'évaluation (semestres, trimestres, etc.).

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié

**Scénario principal :**
1. L'administrateur accède à la gestion des périodes
2. L'administrateur peut :
   - Créer une nouvelle période
   - Définir les dates de début et fin
   - Associer des formulaires à la période
   - Modifier une période existante
   - Archiver une période terminée
3. Le système enregistre les modifications

**Postconditions :**
- Les périodes d'évaluation sont gérées

**Relations :**
- Inclut : "Créer Formulaire"

---

### 30. Configurer Seuils Alertes

**Description :** L'administrateur peut configurer les seuils et règles qui déclenchent les alertes automatiques.

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié

**Scénario principal :**
1. L'administrateur accède à la configuration des alertes
2. L'administrateur définit :
   - Seuils de baisse de performance (%)
   - Seuils de notes minimales
   - Règles d'anomalie
   - Fréquence de vérification
3. L'administrateur configure les destinataires
4. L'administrateur sauvegarde la configuration
5. Le système applique les règles

**Postconditions :**
- Les seuils d'alerte sont configurés

**Relations :**
- Inclut : "Recevoir Alertes Tendances"

---

### 31. Valider Évaluations

**Description :** L'administrateur peut valider, rejeter ou marquer des évaluations comme suspectes pour contrôle qualité.

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié
- Il existe des évaluations à valider

**Scénario principal :**
1. L'administrateur accède à la validation d'évaluations
2. Le système affiche les évaluations en attente ou suspectes
3. L'administrateur examine une évaluation
4. L'administrateur peut :
   - Valider l'évaluation
   - Rejeter l'évaluation (avec raison)
   - Marquer comme suspecte
   - Demander des modifications
5. Le système enregistre la décision

**Postconditions :**
- L'évaluation est validée, rejetée ou marquée

**Relations :**
- Inclut : "Consulter Tableau de Bord"

---

### 32. Gérer Départements

**Description :** L'administrateur peut gérer les départements, les associer aux enseignants et configurer les paramètres par département.

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié

**Scénario principal :**
1. L'administrateur accède à la gestion des départements
2. L'administrateur peut :
   - Créer un nouveau département
   - Modifier les informations d'un département
   - Supprimer un département
   - Associer des enseignants à un département
   - Configurer des paramètres spécifiques (règles d'évaluation, anonymat, etc.)
3. Le système enregistre les modifications

**Postconditions :**
- Les départements sont gérés

---

### 33. Analyser Qualité Données

**Description :** L'administrateur peut analyser la qualité des données collectées (complétude, cohérence, détection d'anomalies).

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié
- Il existe des données dans le système

**Scénario principal :**
1. L'administrateur accède à l'analyse de qualité
2. Le système analyse les données :
   - Taux de complétude des évaluations
   - Cohérence des réponses
   - Détection d'anomalies
   - Statistiques de qualité
3. Le système génère un rapport de qualité
4. L'administrateur consulte les résultats
5. L'administrateur peut prendre des actions correctives

**Postconditions :**
- Un rapport de qualité est généré

**Relations :**
- Inclut : "Générer Rapports"

---

### 34. Gérer Modèles IA

**Description :** L'administrateur peut gérer les modèles d'intelligence artificielle utilisés pour l'analyse des évaluations (résumé, sentiment, recommandations).

**Acteur principal :** Administrateur

**Préconditions :**
- L'administrateur est authentifié

**Scénario principal :**
1. L'administrateur accède à la gestion des modèles IA
2. L'administrateur peut :
   - Activer/désactiver des modèles
   - Configurer les paramètres des modèles
   - Entraîner de nouveaux modèles
   - Tester les performances
   - Gérer les versions de modèles
3. Le système applique les configurations
4. Les modèles sont utilisés pour les analyses

**Postconditions :**
- Les modèles IA sont configurés et opérationnels

**Relations :**
- Inclut : "Résumer Évaluations IA"

---

## Relations entre Cas d'Utilisation

### Relations d'Inclusion (<<include>>)

- **Remplir Évaluation** inclut **Créer Formulaire**
- **Remplir Évaluation** étend **Sauvegarder Brouillon** (optionnel)
- **Consulter Tableau de Bord** inclut **Générer Rapports**
- **Résumer Évaluations IA** inclut **Consulter Évaluations Personnelles**
- **Détecter Sentiment** inclut **Consulter Évaluations Personnelles**
- **Recevoir Recommandations Personnalisées** inclut **Résumer Évaluations IA**
- **Comparer avec Pairs** inclut **Consulter Évaluations Personnelles**
- **Consulter Historique Améliorations** inclut **Consulter Évaluations Personnelles**
- **Planifier Actions Amélioration** inclut **Recevoir Recommandations Personnalisées**
- **Répondre aux Commentaires** inclut **Interagir avec Feedback**
- **Exporter Rapports Personnels** inclut **Consulter Évaluations Personnelles**
- **Consulter Évaluations Temps Réel** inclut **Consulter Évaluations Personnelles**
- **Rechercher dans Évaluations** inclut **Consulter Évaluations Personnelles**
- **Gérer Périodes Évaluation** inclut **Créer Formulaire**
- **Configurer Seuils Alertes** inclut **Recevoir Alertes Tendances**
- **Valider Évaluations** inclut **Consulter Tableau de Bord**
- **Analyser Qualité Données** inclut **Générer Rapports**
- **Gérer Modèles IA** inclut **Résumer Évaluations IA**

### Relations d'Héritage

- **Administrateur** hérite de tous les droits d'**Enseignant**

---

## Notes Techniques

- Tous les acteurs doivent être authentifiés avant d'accéder aux fonctionnalités
- Le système respecte les règles de confidentialité et d'anonymat configurées
- Les fonctionnalités IA nécessitent un traitement asynchrone pour les grandes quantités de données
- Les notifications peuvent être configurées par utilisateur selon ses préférences

---

**Document généré à partir du diagramme PlantUML : `01-cas-utilisation.puml`**
