import { IProduct, PRODUCTS } from "mocks/product.mock";
import style from "./CartProductCard.module.scss";
import { formatNumber } from "services/globalMethods";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useState } from "react";
import { ICartProduct, useCartContext } from "contextes/CartContext";

interface CartProductCardProps {
  cartProduct: ICartProduct
}

const CartProductCard = (props: CartProductCardProps) => {
  // const product: IProduct = PRODUCTS[0];
  const { cartProduct } = props;
  const { product } = cartProduct;
  const formatedPrice = formatNumber(product.price);
  const { removeOneById, getProductQuantity, removeOnlyOne, addOneToCart} = useCartContext();

  const extrasMock: { extra: string; quantity: number }[] = [
    {
      extra: "sucre",
      quantity: 2,
    },
    {
      extra: "menthe",
      quantity: 1,
    },
    {
      extra: "miel",
      quantity: 1,
    },
  ];

  // ************* QuantityPicker (extraCard) *****************
  // const [picker, setPicker] = useState(Number);

  // const total = picker;

  const increment = () => {
   addOneToCart(cartProduct.id);
  };

  const decrement = () => {
    removeOnlyOne(cartProduct.id);
    
  };


  // ************* CartContext fonction *****************
  // ************* enlever un produit par son id *****************
  const handleRemoveOne = (productId: string) => {
    removeOneById(productId);
  };

  return (
    <article className={style.card}>
      <div className={style.details}>
        <img src={product.image.src} alt={product.image.alt} />
        <div className={style.infos}>
          <span>{product.name} {cartProduct.quantity}</span>
          <span>{formatedPrice}€</span>
          <span>{cartProduct.intensity}, Chaud</span>
          <ul>
            Extras : <li>Sucre(2)</li>,<li>Menthe</li>,<li>Miel</li>,
          </ul>
        </div>
      </div>
      <div className={style.actions}>
        <QuantityPicker
          increment={increment}
          decrement={decrement}
          totalPicker={cartProduct.quantity}
        />
        <button className={style.trashButton} onClick={() => handleRemoveOne(cartProduct.id)}>
          <img src="/assets/icons/bin.svg" alt="bin icon" />
        </button>

      </div>
    </article>
  );
};

export default CartProductCard;
