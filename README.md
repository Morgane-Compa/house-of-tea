# Description du projet "House Of Tea"

Diambéré, Morgane et Jérôme ont été approché par la gérante de House Of Tea, Madame Machin afin de développer une version de type "borne" et "mobile"
d'une application de gestion et de vente des produits House Of Tea. 
House Of Tea est une jeune entreprise, spécialisée dans la vente sur place ou à emportée, de thés d'exceptions mais également de diverses boissons, 
snacks et patisseries. L'enseigne lance sa première boutique dans le 18ème arrondissement.

## Statut du projet "House Of Tea"

La présente version du projet est fonctionnelle :
- Page "Home" pour le choix d'une consommation "sur place" ou "à emporter";
- Page "Liste des produits" avec affichage de tous les produits, un menu d'accès aux catégories produits, un produit est sélectionnable;
- Page "Détails du Produit" avec affichage, sélection et quantité modifiable des extras possible selon le produit, quantité sélectionnable du produit sélectionné et mise en panier;
- Page "Panier" avec liste des articles sélectionnés, prix unitaire du articles, liste des éventuels extras sélectionnés liée à chaque article, quantités modifiables et
  suppression possible pour chaque article, quantité totale des articles indiquée + prix total facturé et accès à la page de paiement;
- Page "Paiement" avec la sélection possible du réglement en espèces ou en carte bancaire :
  => La sélection des espèces renvoie à un affichage du total à régler et le message d'impression du ticket à présenter au comptoir => il est possible d'accéder
  à la page "Récapitulatif de commande" décrite ci-après via CTA;
  => La sélection du paiement CB est présélectionnée et le formulaire est sur la même page
  => Les champs de formulaire sont gérés avec des Regex et renvoient les erreurs de format (longueur, omission, ...);
- Page "Récapitulatif de commande" qui indique le numéro de commande, les produits séléctionnés, leurs éventuels extras et quantités, les quantités produits,
  le montant total facturé et le mode de consommation du client;
  - Page 404 en cas de mauvaise redirection ou produit indisponible


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
