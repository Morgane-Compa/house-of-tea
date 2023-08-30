import { IProduct, PRODUCTS } from "mocks/product.mock";
import style from "./CartProductCard.module.scss";
import { formatNumber } from "services/globalMethods";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useLocation } from "react-router-dom";
import { ICartProduct, useCartContext } from "contextes/CartContext";
import { Link } from "react-router-dom";

interface CartProductCardProps {
  cartProduct: ICartProduct;
}

const CartProductCard = (props: CartProductCardProps) => {
  // const product: IProduct = PRODUCTS[0];
  const { cartProduct } = props;
  const { product } = cartProduct;
  const formatedPrice = formatNumber(product.price);
  const { removeOneById, getProductQuantity, removeOnlyOne, addOneToCart } =
    useCartContext();

  const location = useLocation();
  // ************* QuantityPicker (extraCard) *****************

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
        <Link to={`/product/${product.id}`} className={style.productImg}>
          <img src={product.image.src} alt={product.image.alt} />
        </Link>
        <div className={style.infos}>
          <span>{product.name}</span>
          <span>{cartProduct.finalPrice}€</span>

          {product.isCustomizable && (
            <span>
              {cartProduct.size?.name}, {cartProduct.intensity},
              {cartProduct.temp}
            </span>
          )}
          {cartProduct.extras?.length ? (
            <ul>
              Extras :
              {cartProduct.extras?.map((extra) => (
                <li key={extra.id}>
                  {extra.name}({extra.quantity}),{" "}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>

      {location.pathname === "/cart" ? (
        <div className={style.actions}>
          <QuantityPicker
            increment={increment}
            decrement={decrement}
            totalPicker={cartProduct.quantity}
          />
          <button
            className={style.trashButton}
            onClick={() => handleRemoveOne(cartProduct.id)}
          >
            <img src="/assets/icons/bin.svg" alt="bin icon" />
          </button>
        </div>
      ) : (
        <span className={style.quantity}>
          {getProductQuantity(cartProduct.id)}
        </span>
      )}
    </article>
  );
};

export default CartProductCard;
