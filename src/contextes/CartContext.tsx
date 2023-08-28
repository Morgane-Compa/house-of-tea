import { IProduct} from "mocks/product.mock";
import { IFormValue } from "pages/ProductDetailsPage/ProductDetailsPage";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"

// Le produit de mon panier
export interface ICartProduct {
    id: string,
    product: IProduct,
    quantity: number,
    finalPrice: number,
    size?: string,
    temp?: string,
    extras?:
        {
            name : string,
            quantity : number,
        } []

}

// Mon panier
interface ICart {
cartProducts: ICartProduct[];
    // on importe notre fonction addToCart dans le produit et on dit quelle ne renvoie rien
    addToCart: (newproduct: IFormValue, newquantity: number) => void;
    removeOneById: (productId: string) => void;
    removeAll: () => void;
    GetTotalProduct: () => number;
};

// On créer un Panier vide par defaut
const defaultCart: ICart = {
    cartProducts: [],
    // DefaultCart est de type ICart donc on doit aussi déclarer les fonctions qu'on à mis dans notre type et les déclarer comme vide 
    addToCart: () => { },
    removeOneById: () => { },
    removeAll: () => { },
    // ici on va retourner un chiffre par defaut, ici on met 0 par defaut car quand le panier est vide il y a 0 produits
    GetTotalProduct: () => 0
}

const CartContext = createContext<ICart>(defaultCart)

// Je prépare mon Provider, il va avoir besoin de children donc je créer une props pour les déclarer
interface CartProviderProps {
    // On ne met pas le | JSX.Element[] car on ne veut récupérer un seul élément HTML
    children: JSX.Element;
}



// Mon provier qui engloble le contexte pour l'utiliser ailleurs (mon paquet cadeau)
const CartProvider = (props: CartProviderProps) => {
    // J'appele mon children
    const { children } = props;

    // Une Fois le contexte et le provider, on peux faire des fonction avec des hook pour ajouter au panier, afficher les prix...
    const [cardProducts, setProducts] = useState<ICartProduct[]>([])

    // dans mes arguments j'importe le type de mon mock
    const addToCart = (newproduct: IFormValue, newquantity: number, ) => {

        const newCartProduct: ICartProduct = {
            id: uuidv4(), 
            product: newproduct.product,
            quantity: newquantity,
            finalPrice: newproduct.finalPrice,
            size: newproduct.size,
            temp: newproduct.temp,
            extras: newproduct.extras
        }

        const newCart = [...cardProducts, newCartProduct];

        // On récupère le tableau du panier et on en créer un nouveau dans lequel on met notre tableau existant + le nouveau produit
        setProducts(newCart);
        // console.log("mon produit", newproduct)
    }

    // ma fonction pour ne retirer qu'un seul produit de mon panier 
    const removeOneById = (productId: string) => {
        const updatedCart = cardProducts.filter(product => product.id !== productId);
        setProducts(updatedCart);
    };

    // Ma fonction pour vider tout le panier
    const removeAll = () => {
        setProducts([]); // Retire tous les éléments du panier
    }; 

    // Ma fonction pour retourner le nombre de produits dans mon panier
    const GetTotalProduct = () => {
        return cardProducts.reduce((total, cartProduct) => total + cartProduct.quantity, 0);
    };


    // Je définit mon panier 
    const cart: ICart = {
        cartProducts: cardProducts,
        // Mes fonctions
        addToCart,
        removeOneById,
        removeAll,
        GetTotalProduct,
    }
    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}



// Attention de bien exporter le contexte grâce à cette fonction
export const useCartContext = () => {
    return useContext(CartContext);
}

export default CartProvider;

