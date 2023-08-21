import { IProduct} from "mocks/product.mock";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"

// Le produit de mon panier
export interface ICartProduct {
    id: string,
    product: IProduct,
    quantity: number
}

// Mon panier
interface ICart {
cartProducts: ICartProduct[];
    // on importe notre fonction addToCart dans le produit et on dit quelle ne renvoie rien
    addToCart: (newproduct: IProduct, newquantity: number) => void
};

// On créer un Panier vide par defaut
const defaultCart: ICart = {
    cartProducts: [],
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
    const [cardProducts, setProducts] = useState<ICartProduct[]>([])

    // dans mes arguments j'importe le type de mon mock
    const addToCart = (newproduct: IProduct, newquantity: number) => {

        const newCartProduct: ICartProduct = {
            id: uuidv4(),
            product: newproduct,
            quantity: newquantity,
        }

        const newCart = [...cardProducts, newCartProduct];

        // On récupère le tableau du panier et on en créer un nouveau dans lequel on met notre tableau existant + le nouveau produit
        setProducts(newCart);
        // console.log("mon produit", newproduct)
    }

    // Je définit mon panier 
    const cart: ICart = {
        cartProducts: cardProducts,
        addToCart
    }
    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}

// Attention de bien exporter le contexte grâce à cette fonction
export const useCartContext = () => {
    return useContext(CartContext);
}

export default CartProvider;

