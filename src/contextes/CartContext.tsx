import { IProduct, ISizeChoice } from "mocks/product.mock";
import { IExtra, IFormValue } from "pages/ProductDetailsPage/ProductDetailsPage";
import { createContext, useContext, useState } from "react";
import { formatNumber } from "services/globalMethods";
import { v4 as uuidv4 } from "uuid"

// Le produit de mon panier
export interface ICartProduct {
    id: string,
    product: IProduct,
    quantity: number,
    finalPrice: number,
    size?: ISizeChoice,
    temp?: string,
    intensity?: string,
    extras?: IExtra[]
}

// Mon panier
interface ICart {
    cartProducts: ICartProduct[];
    orderNumber: number | undefined;
    orderMode: string;
    // on importe notre fonction addToCart dans le produit et on dit quelle ne renvoie rien
    addToCart: (newProduct: IFormValue, newQuantity: number) => void;
    addOneToCart: (cartProductId: string) => void;
    removeOneById: (productId: string) => void;
    removeOnlyOne: (cartProductId: string) => void;
    removeAll: () => void;
    getTotalProduct: () => number;
    getTotalCartPrice: () => number;
    getProductQuantity: (productId: string) => number;
    createOrderNumber: () => void;
    chooseOrderMode: (mode: string) => void;
};

// On créer un Panier vide par defaut
const defaultCart: ICart = {
    cartProducts: [],
    orderNumber: undefined,
    orderMode: 'A emporter',
    // DefaultCart est de type ICart donc on doit aussi déclarer les fonctions qu'on à mis dans notre type et les déclarer comme vide 
    addToCart: () => { },
    addOneToCart: () => {},
    removeOneById: () => { },
    removeOnlyOne: () => { },
    removeAll: () => { },
    // ici on va retourner un chiffre par defaut, ici on met 0 par defaut car quand le panier est vide il y a 0 produits
    getTotalProduct: () => 0,
    getTotalCartPrice: () => 0,
    getProductQuantity: () => 0,
    createOrderNumber: () => {},
    chooseOrderMode: () => {}
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
    const addToCart = (newProduct: IFormValue, newQuantity: number) => {

        const newCartProduct: ICartProduct = {
            id: uuidv4(),
            product: newProduct.product,
            quantity: newQuantity,
            finalPrice: newProduct.finalPrice,
            size: newProduct.size,
            temp: newProduct.temp,
            intensity: newProduct.intensity,
            extras: newProduct.extras
        }
        //je regarde si le produit n'existe pas déja
        const foundProduct = cardProducts.find((p) =>
         p.product === newCartProduct.product 
         && p.intensity === newCartProduct.intensity 
         && p.size?.name === newCartProduct.size?.name
         && p.temp === newCartProduct.temp
         && p.finalPrice === newCartProduct.finalPrice
        && JSON.stringify(p.extras) === JSON.stringify(newCartProduct.extras)
         );
         

        // Si mon produit n'existe pas, le créer
        if (!foundProduct) {
            setProducts([...cardProducts, newCartProduct]);
        } else { //Si mon produit existe, ajouter +1 a sa quantité
            foundProduct.quantity += newQuantity;
            setProducts([...cardProducts]);
        }
    }

    const addOneToCart = (cartProductId: string) => {
        const foundProduct = cardProducts.find((p) => p.id === cartProductId);
                // Si mon produit n'existe pas, le créer
                if (!foundProduct) {
                    return;
                } else { //Si mon produit existe, ajouter +1 a sa quantité
                    foundProduct.quantity += 1;
                    setProducts([...cardProducts]);
                }
                console.log('ajouté')
    }    

    // ma fonction pour retirer un produit par son Id (si il y a deux produit avec la même id il les retirera tout les deux) 
    const removeOneById = (productId: string) => {
        const updatedCart = cardProducts.filter(product => product.id !== productId);
        setProducts(updatedCart);
    };

    // Ma fonction pour ne retirer qu''un seul produit
    const removeOnlyOne = (cartProductId: string) => {
        //je regarde si le produit n'existe pas déja
        const foundProduct = cardProducts.find((p) => p.id === cartProductId);
        console.log('retiré')
        // Si mon produit n'existe pas alors ne rien retourner
        if(!foundProduct) {
            return;
        } else {
            if (foundProduct.quantity > 1) {
                foundProduct.quantity -= 1;
                setProducts([...cardProducts]);
            } else {
                removeOneById(foundProduct.id);
            }
        } 
        
    }

    // Ma fonction pour vider tout le panier
    const removeAll = () => {
        setProducts([]); // Retire tous les éléments du panier
    };

    // Ma fonction pour retourner le nombre de produits dans mon panier
    const getTotalProduct = () => {
        return cardProducts.reduce((total, cartProduct) => total + cartProduct.quantity, 0);
    };

    // Ma fonction pour retourner le prix total de mon panier
    const getTotalCartPrice = () => {
        const totalPrice = cardProducts.reduce((totalPrice, cartProduct) => {
            return totalPrice + cartProduct.finalPrice * cartProduct.quantity;
        }, 0);
        return formatNumber(totalPrice);
    };

    // Ma fonction pour récupérer la quantité d'un produit de mon panier
    const getProductQuantity = (cartProductId: string) => {
        const cartProduct = cardProducts.find(product => product.id === cartProductId);
        return cartProduct ? cartProduct.quantity : 0;
    };

    const [orderNumber, setOrderNumber] = useState<number>(145263)
    const createOrderNumber = () => {
        const order = orderNumber + 1  ;
        setOrderNumber(order);
    }

    const [orderMode, setOrderMode] = useState<string>('A emporter')
    const chooseOrderMode = (mode: string) => {
        setOrderMode(mode);
    }
    // Je définit mon panier 
    const cart: ICart = {
        cartProducts: cardProducts,
        orderNumber: orderNumber,
        orderMode: orderMode,
        createOrderNumber,
        // Mes fonctions
        addToCart,
        addOneToCart,
        removeOneById,
        removeOnlyOne,
        removeAll,
        getTotalProduct,
        getTotalCartPrice,
        getProductQuantity,
        chooseOrderMode
    }
    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}


// Attention de bien exporter le contexte grâce à cette fonction
export const useCartContext = () => {
    return useContext(CartContext);
}

export default CartProvider;

