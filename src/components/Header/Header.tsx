import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { useCartContext } from "contextes/CartContext";

const Header = () => {

  const {removeAll} = useCartContext()

  return (
    <header className={style.header}>
      <div>
        <Link to="/products" >
          <h1 className={style.title}>House of Tea</h1>
          <p className={style.subtitle}>Le bar à thés d'exception</p>
        </Link>
      </div>
      <div className={style.lastSection}>
        <Link to="/cart">
        <img
          src="/assets/icons/cart-icon.svg"
          alt="Cart"
          className={style.cart}
        />
        </Link>
        <Link to="/cart" className={style.redo} onClick={removeAll}>
          Recommencer la commande
        </Link>
      </div>
    </header>
  );
};

export default Header;
