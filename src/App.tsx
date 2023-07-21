import React from "react";
import style from "./App.module.scss";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import BackButton from "components/BackButton/BackButton";
import { NavLink } from "react-router-dom";
import ProductListPage from "pages/ProductListPage/ProductListPage";
import { NAV_LINKS } from "mocks/navigation.mock";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <BackButton />
      <main>
      <ul className={style.navigation}> Menu temporaire : 
        {NAV_LINKS.map((navLink) =>  <li key={navLink.id}><NavLink  className={({isActive}) => isActive ? style.activeLink : ""}to={navLink.path}>{navLink.name}</NavLink></li>)}
      </ul>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
