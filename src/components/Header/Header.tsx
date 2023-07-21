import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <h1 className={style.title}>House of Tea</h1>
        <p>Le bar à thés d'exception</p>
      </div>
      <div>
        <img src="/assets/icons/cart-icon.svg" alt="Cart" />
        <a href="/">Recommencer la commande</a>
      </div>
    </header>
  );
};

export default Header;
