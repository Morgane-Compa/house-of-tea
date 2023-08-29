import CartProductCard from "components/CartProductCard/CartProductCard";
import style from "./RecapPage.module.scss";
import { useCartContext } from "contextes/CartContext";

const RecapPage = () => {
  const { cartProducts, orderNumber, getTotalCartPrice } = useCartContext();

  return (
    <section className={style.recap}>
      {orderNumber && <span className={style.orderNumber}>Commande n° {orderNumber}</span>}
      <ul className={style.cartProducts}>
        {cartProducts.map((item) => (
          <li key={item.id}>
            <CartProductCard cartProduct={item} />
          </li>
        ))}
      </ul>
      <span className={style.price}>{getTotalCartPrice()}€</span>
      <span className={style.payment}></span>
      <p>Votre commande est en cours de préparation.<br />N'oubliez pas votre ticket</p>
    </section>
  );
};

export default RecapPage;
