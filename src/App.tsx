import style from "./App.module.scss";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import BackButton from "components/BackButton/BackButton";
import { NAV_LINKS } from "mocks/navigation.mock";


function App() {

  // ************* BackButton *****************
  const navigate = useNavigate();
  const back = (): void => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <Hero />
      <BackButton callback={back} />

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
