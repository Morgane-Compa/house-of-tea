import React, { useEffect, useState } from "react";
import style from "./App.module.scss";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import BackButton from "components/BackButton/BackButton";
import { NavLink } from "react-router-dom";
import ProductListPage from "pages/ProductListPage/ProductListPage";
import { NAV_LINKS } from "mocks/navigation.mock";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";

function App() {

  // BackButton
  const submit = () => {
    // Créer la méthode de retour
    console.log("submit");
  };

  // QuantityPicker (à copier dans le composant parent)
  const [picker, setPicker] = useState(Number);
  const total = picker;

  const increment = () => {
    if (picker === 6) {
      return;
    } else {
      setPicker(picker + 1);
    }
    // console.log(`${picker}`);
  };

  const decrement = () => {
    if (picker === 0) {
      return;
    }
    setPicker(picker - 1);
    // console.log(`${picker}`);
  };

  return (
    <>
      <Header />
      <Hero />
      <BackButton callback={submit} />
      <QuantityPicker
        increment={increment}
        decrement={decrement}
        totalPicker={total}
      />

      <main>
        <ul className={style.navigation}>
          {" "}
          Menu temporaire :
          {NAV_LINKS.map((navLink) => (
            <li key={navLink.id}>
              <NavLink
                className={({ isActive }) => (isActive ? style.activeLink : "")}
                to={navLink.path}
              >
                {navLink.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
