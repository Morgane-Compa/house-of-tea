import { IProduct } from "mocks/product.mock";
import { IFormValue } from "pages/ProductDetailsPage/ProductDetailsPage";
import { createContext, useContext, useState } from "react";
import { formatNumber } from "services/globalMethods";
import { v4 as uuidv4 } from "uuid"

// Le produit de mon panier
export interface ICartProduct {
    id: string,
    product: IProduct,
    quantity: number,
    finalPrice: number,
    size?: string,
    temp?: string,
    intensity?: string,
    extras?:
    {
        name: string,
        quantity: number,
    }[]

}

// Mon panier
interface ICart {
    cartProducts: ICartProduct[];
    // on importe notre fonction addToCart dans le produit et on dit quelle ne renvoie rien
    addToCart: (newproduct: IFormValue, newquantity: number) => void;
    removeOneById: (productId: string) => void;
    removeOnlyOne: (product: IProduct) => void;
    removeAll: () => void;
    GetTotalProduct: () => number;
    getTotalCartPrice: () => number;
    getProductQuantity: (productId: string) => number;
};

// On créer un Panier vide par defaut
const defaultCart: ICart = {
    cartProducts: [],
    // DefaultCart est de type ICart donc on doit aussi déclarer les fonctions qu'on à mis dans notre type et les déclarer comme vide 
    addToCart: () => { },
    removeOneById: () => { },
    removeOnlyOne: () => { },
    removeAll: () => { },
    // ici on va retourner un chiffre par defaut, ici on met 0 par defaut car quand le panier est vide il y a 0 produits
    GetTotalProduct: () => 0,
    getTotalCartPrice: () => 0,
    getProductQuantity: () => 0,
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
    const addToCart = (newproduct: IFormValue, newquantity: number) => {

        const newCartProduct: ICartProduct = {
            id: uuidv4(),
            product: newproduct.product,
            quantity: newquantity,
            finalPrice: newproduct.finalPrice,
            size: newproduct.size,
            temp: newproduct.temp,
            intensity: newproduct.intensity,
            extras: newproduct.extras
        }
        //je regarde si le produit n'existe pas déja
        const foundProduct = cardProducts.find((p) => p.product === newCartProduct.product);

        // Si mon produit n'existe pas, le créer
        if (!foundProduct) {
            setProducts([...cardProducts, newCartProduct]);
        } else { //Si mon produit existe, ajouter +1 a sa quantité
            foundProduct.quantity += 1;
            setProducts([...cardProducts]);
        }
    }

    // ma fonction pour retirer un produit par son Id (si il y a deux produit avec la même id il les retirera tout les deux) 
    const removeOneById = (productId: string) => {
        const updatedCart = cardProducts.filter(product => product.id !== productId);
        setProducts(updatedCart);
    };

    // Ma fonction pour ne retirer qu''un seul produit
    const removeOnlyOne = (product: IProduct) => {
        //je regarde si le produit n'existe pas déja
         const foundProduct = cardProducts.find((p) => p.product.id === product.id);
        // Si mon produit n'existe pas alors ne rien retourner
        if(!foundProduct) {
            return;
        } else {
            // if (foundProduct.quantity > 1) {
                foundProduct.quantity -= 1;
                setProducts([...cardProducts]);
            // } else {
                
            //     setProducts([...cardProducts]);
            // }
        } 
    }

    // Ma fonction pour vider tout le panier
    const removeAll = () => {
        setProducts([]); // Retire tous les éléments du panier
    };

    // Ma fonction pour retourner le nombre de produits dans mon panier
    const GetTotalProduct = () => {
        return cardProducts.reduce((total, cartProduct) => total + cartProduct.quantity, 0);
    };

    // Ma fonction pour retourner le prix total de mon panier
    const getTotalCartPrice = () => {
        const totalPrice = cardProducts.reduce((totalPrice, cartProduct) => {
            return totalPrice + cartProduct.product.price * cartProduct.quantity;
        }, 0);
        return formatNumber(totalPrice);
    };

    // Ma fonction pour récupérer la quantité d'un produit de mon panier
    const getProductQuantity = (productId: string) => {
        const cartProduct = cardProducts.find(product => product.id === productId);
        return cartProduct ? cartProduct.quantity : 0;
    };


    // Je définit mon panier 
    const cart: ICart = {
        cartProducts: cardProducts,
        // Mes fonctions
        addToCart,
        removeOneById,
        removeOnlyOne,
        removeAll,
        GetTotalProduct,
        getTotalCartPrice,
        getProductQuantity
    }
    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}


// Attention de bien exporter le contexte grâce à cette fonction
export const useCartContext = () => {
    return useContext(CartContext);
}

export default CartProvider;

