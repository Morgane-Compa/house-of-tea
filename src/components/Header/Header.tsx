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
        <a href="/" className={style.redo}>
          Recommencer la commande
        </a>
      </div>
    </header>
  );
};

export default Header;
