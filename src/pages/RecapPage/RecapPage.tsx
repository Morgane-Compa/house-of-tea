import CartProductCard from "components/CartProductCard/CartProductCard";
import style from "./RecapPage.module.scss";
import { useCartContext } from "contextes/CartContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RecapPage = () => {
  useEffect(() =>{
    window.scrollTo({ top: 0 , left: 0, behavior: 'smooth' });
   
  },[])

  const navigate = useNavigate();
  const [timer, setTimer] = useState<number>(10);
  const { cartProducts, orderNumber, getTotalCartPrice, orderMode, removeAll, paymentMode } =
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
    return () => {clearInterval(interval)};
  }, [timer]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAll();
      console.log();
      navigate("/");
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  },[]);

  return (
    <section className={style.recap}>
      <div className={style.redirection}>
        <p>Vous serez redirigé vers l'accueil dans </p>
        <span className={style.timer}>{timer}s.</span>
      </div>
      <div className={style["order-infos"]}>
        {orderNumber && (
          <span className={style.orderNumber}>Commande n° {orderNumber}</span>
        )}
        <span className={style.orderMode}>{orderMode}</span>
      </div>
      <ul className={style.cartProducts}>
        {cartProducts.map((item) => (
          <li key={item.id}>
            <CartProductCard cartProduct={item} />
          </li>
        ))}
      </ul>
      <div className={style["more-infos"]}>
       <div className={style["payment-mode"]}>
        <span className={style.price}>{getTotalCartPrice().toFixed(2)}€</span>
        <span className={style.payment}>{paymentMode}</span>
      </div>
        <p>Votre commande est en cours de préparation.</p>
        <p>N'oubliez pas votre ticket</p>
      </div>
    </section>
  );
};

export default RecapPage;
