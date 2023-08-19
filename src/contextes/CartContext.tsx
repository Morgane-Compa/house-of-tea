import { IProduct, ISizeChoice } from "mocks/product.mock";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"

// Le produit de mon panier
export interface Iproduct {
    id: string,
    product: IProduct,
    size?: ISizeChoice,
    intensity?: string,
    temperature?: string,
    quantity: number
}

// Mon panier
interface ICart {
    products: Iproduct[];
    // on importe notre fonction addToCart dans le produit et on dit quelle ne renvoie rien
    addToCart: (newproduct: IProduct, newquantity: number, newSize?: ISizeChoice, newIntensity?: string,
        newTemperature?: string) => void
};

// On créer un Panier vide par defaut
const defaultCart: ICart = {
    products: [],
    // DefaultCart est de type ICart donc on doit aussi déclarer les fonctions qu'on à mis dans notre type et les déclarer comme vide 
    addToCart: () => { }
};

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
    const [cardProducts, setProducts] = useState<Iproduct[]>([])

    // dans mes arguments j'importe le type de mon mock
    const addToCart = (newproduct: IProduct, newquantity: number, newSize?: ISizeChoice, newIntensity?: string, newTemperature?: string) => {

        const newCartProduct: Iproduct = {
            id: uuidv4(),
            product: newproduct,
            quantity: newquantity,
            //Je ne sais pas comment signifier que les données si dessous sont optionnelle
            size: newSize,
            intensity: newIntensity,
            temperature: newTemperature
        }

        // On récupère le tableau du panier et on en créer un nouveau dans lequel on met notre tableau existant + le nouveau produit
        setProducts([...cardProducts, newCartProduct])
    }

    // Je définit mon panier 
    const cart: ICart = {
        products: [],
        addToCart
    }
    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}

// Attention de bien exporter le contexte grâce à cette fonction
export const useCartContext = () => {
    return useContext(CartContext);
}

export default CartProvider;

