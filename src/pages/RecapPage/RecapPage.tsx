import CartProductCard from "components/CartProductCard/CartProductCard";
import style from "./RecapPage.module.scss";
import { useCartContext } from "contextes/CartContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RecapPage = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState<number>(10);
  const maximumTime = 0;
  const { cartProducts, orderNumber, getTotalCartPrice, orderMode, removeAll } =
    useCartContext();

  const getTimer = () => {
    if (timer > 0) {
      const temps = timer - 1;
      setTimer(temps);
    } else {
      setTimer(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTimer(), 1000);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      // removeAll();
      console.log()
      // navigate("/");
    }, 10000);
    // setTimeout(() => {clearTimeout(timeout) }, 10001)
  }, [timer]);

  return (
    <section className={style.recap}>
      <p>
        Vous serez redirigés vers l'accueil dans <br />
        <span className={style.timer}>{timer}s.</span>
      </p>
      {orderNumber && (
        <span className={style.orderNumber}>Commande n° {orderNumber}</span>
      )}
      <ul className={style.cartProducts}>
        {cartProducts.map((item) => (
          <li key={item.id}>
            <CartProductCard cartProduct={item} />
          </li>
        ))}
      </ul>
      <span className={style.price}>{getTotalCartPrice()}€</span>
      <span className={style.orderMode}>{orderMode}</span>
      <span className={style.payment}></span>
      <p>Votre commande est en cours de préparation.</p>
      <p>N'oubliez pas votre ticket</p>
    </section>
  );
};

export default RecapPage;
