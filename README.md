# Description du projet "House Of Tea"

Diambéré, Morgane et Jérôme ont été approchés par la gérante de House Of Tea, Madame Maria Paffoto afin de développer une version de type "borne" et "mobile"
d'une application de gestion et de vente des produits House Of Tea. 
House Of Tea est une jeune entreprise, spécialisée dans la vente sur place ou à emporter, de thés d'exceptions mais également de diverses boissons, 
snacks et patisseries. L'enseigne lance sa première boutique dans le 18ème arrondissement de Paris.

### Description des techonologies et descriptif de l'installation du projet

- Application développée en React + Typescript
- Dépendances spécifiques => Sass (scss), react-router-don, react-hook-form, uuid
- Cloner le projet 
    - **git clone https://github.com/Morgane-Compa/house-of-tea.git**
    - Faire un **npm install** afin d'installer les dépendances nécessaires au projet

### Organisation du travail de développement et documents

- Organisation
  - **https://trello.com/b/JYDUwoCm/unprojetparfait**
- Documents de travail
  - **https://www.figma.com/file/IeKDOv6NGnujRhZP33rpEg/House-of-Tea?type=design&node-id=41-326&mode=design&t=DIMhknbULts9yqWs-0**
  - **https://www.canva.com/design/DAFl5YlsXmc/ur_ewfJ220MmSOuDi5lhdw/edit?utm_content=DAFl5YlsXmc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton**

### Statut V1 du projet "House Of Tea"

La présente version du projet est fonctionnelle (pas de persistance des données):
- Page "Home" pour le choix de consommation "sur place" ou "à emporter" (CTA);
- Page "Liste des produits" avec affichage de tous les produits, menu d'accès aux catégories produits (CTA), un produit est sélectionnable (CTA);
- Page "Détails du Produit" avec affichage des customisations possibles (selon le produit), liste et quantités modifiables des extras (selon le produit),
  quantité totale du produit sélectionné modifiable + mise en panier (CTA);
- Page "Panier" avec liste des articles sélectionnés, prix unitaire des articles, liste des éventuels extras sélectionnés et liés à chaque article, quantités modifiables et
  suppression possible de chaque article, quantité totale de tous les articles + prix total facturé et accès à la page de paiement (CTA);
- Page "Paiement" avec la sélection possible du réglement en espèces ou en carte bancaire (CTA):
  => La sélection des espèces renvoie à un affichage du total à régler et le message d'impression du ticket à présenter au comptoir => il est possible d'accéder
  à la page "Récapitulatif de commande" décrite ci-après (CTA);
  => La sélection du paiement par CB est présélectionnée et le formulaire est sur la même page
  => Les champs de formulaire sont gérés avec des Regex et renvoient les erreurs de format (longueur, omission, ...);
- Page "Récapitulatif de commande" qui indique le numéro de commande, les produits séléctionnés, les quantités et leurs éventuels extras, les quantités produits,
  le montant total facturé et le mode de consommation du client;
- Page 404 en cas de mauvaise redirection ou produit indisponible
- L'application est responsive
 
### Bugs à corriger (B) & Améliorations (A) prévues sur la V2

- (A) Mise en place de la persistance des données avec le LocalStorage, voir mise en place d'une base de données mySql;
- (A) Envisager la possibilité d'utiliser un Context pour la gestion de la customisation d'un produit (props pour le moment)
- (A) Optimiser le poids des photos pour le chargement rapide des pages
- (A) Modale pour confirmer l'abandon de la commande
- (A) Nombre d'articles dans le panier rappelé au niveau de l'icône "basket" du header
- (A) Système de notation des thés
- (A) Ajouter l'affichage de la TVA
- (A) Ajouter un numéro de table au récapitulatif pour les consommations sur place


You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
