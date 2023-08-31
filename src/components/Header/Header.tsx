import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./Header.module.scss";
import { useCartContext } from "contextes/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { removeAll, getTotalProduct } = useCartContext();
  const restart = () => {
    navigate("/");
    removeAll();
  };
  if (location.pathname !== '/recap' && location.pathname !== '/'){
    return (
      <header className={style.header}>
          <Link to="/products" className={style.houseOfTea}>
            <h1 className={style.title}>House of Tea</h1>
            <p className={style.subtitle}>Le bar à thés d'exception</p>
          </Link>
        <div className={style.lastSection}>
          <Link to="/cart" className={style.goToCart}>
            <div className={style.itemNumber}>
              <span>{getTotalProduct()}</span>
            </div>
            <img
              src="/assets/icons/cart-icon.svg"
              alt="Cart"
              className={style.cart}
            />
          </Link>
          <button
            className={style.redo}
            onClick={() => {
              restart();
            }}
          >
            Recommencer la commande
          </button>
        </div>
      </header>
    );
  } else {
    return (
      <header className={style.header}>
      <div className={style.houseOfTea}>
        <h1 className={style.title}>House of Tea</h1>
        <p className={style.subtitle}>Le bar à thés d'exception</p>
      </div>
  </header>
    )
  }
 
};

export default Header;
