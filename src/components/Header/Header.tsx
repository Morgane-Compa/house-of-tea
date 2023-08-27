import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <h1 className={style.title}>House of Tea</h1>
        <p className={style.subtitle}>Le bar à thés d'exception</p>
      </div>
      <div>
          <img
            src="/assets/icons/cart-icon.svg"
            alt="Cart"
            className={style.cart}
          />
        <Link to="/cart" className={style.redo}>
          Recommencer la commande
        </Link>
      </div>
    </header>
  );
};

export default Header;
