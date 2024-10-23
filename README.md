# LuxoBid - Plateforme d'enchères en ligne

**LuxoBid ** est une plateforme d'enchères en ligne, conçue pour permettre aux utilisateurs de vendre et d'enchérir sur des articles facilement et en toute sécurité. La plateforme offre une expérience utilisateur fluide, avec des fonctionnalités de gestion des enchères, des paiements, et des notifications en temps réel.

## Fonctionnalités Principales

- **Inscription et Connexion Utilisateur** : Inscription sécurisée avec choix du rôle (Enchérisseur ou Vendeur).
- **Rôle Utilisateur** :
  - **Enchérisseurs** : Placer des enchères sur les articles publiés.
  - **Vendeurs** : Publier et gérer leurs articles mis aux enchères.
- **Notifications** : Notifications automatiques pour l'enchérisseur gagnant et mise à jour des enchères.
- **Vérification de Paiement** : Preuve de paiement après la clôture d'une enchère gagnante.
- **Tableau de Bord Admin** : Gestion des utilisateurs, des articles et des enchères.
- **Automatisation des Tâches** : Système d’automatisation pour la gestion des paiements et des commissions.

## Comment Fonctionne LuxoBid 

1. **Inscription Utilisateur** : Les utilisateurs peuvent s'inscrire en tant que "Enchérisseur" ou "Vendeur aux enchères".
2. **Processus d'Enchère** : Les enchérisseurs placent leurs enchères sur des articles, tandis que les vendeurs peuvent ajouter et gérer leurs articles.
3. **Notification d'Enchère Gagnante** : L'enchérisseur gagnant reçoit un email avec les informations de paiement du vendeur.
4. **Vérification de Paiement** : Après la transaction, le vendeur envoie une preuve de paiement, validée par l'admin pour ajuster les commissions.
5. **Commission** : Le vendeur est tenu de verser une commission de 5% du montant total à la plateforme.
6. **Republication** : En cas de non-paiement, l'article peut être republicié gratuitement par le vendeur.

## Technologies Utilisées

- **Frontend** : React.js, Tailwind CSS pour une interface utilisateur réactive.
- **Backend** : Node.js, Express.js.
- **Base de Données** : MongoDB avec Mongoose.
- **Authentification** : JSON Web Tokens (JWT) pour gérer les sessions utilisateurs.
- **Envoi de Notifications** : Nodemailer pour les notifications par email.
- **Vérification des Paiements** : Téléchargement de preuve de paiement par le vendeur.

## Structure du Projet

```bash
ChicBid/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── App.js
├── package.json
└── README.md
