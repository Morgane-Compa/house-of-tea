import style from "./App.module.scss";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import { Outlet, useNavigate, NavLink, useLocation } from "react-router-dom";
import BackButton from "components/BackButton/BackButton";
import { NAV_LINKS } from "mocks/navigation.mock";
import { useEffect } from "react";


function App() {
  // ************* BackButton *****************
  const navigate = useNavigate();
  const back = (): void => {
    navigate(-1);
  };
  const location = useLocation();
  useEffect(() =>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   
  },[])
  
  if(location.pathname !== "/recap" && location.pathname !== "/products" && location.pathname !== "/"){
    return (
      <>
        <Header />
        <Hero />
          <BackButton callback={back} />
      
        <main>
            <Outlet />
        </main>
        <Footer />
      </>
    ) 
  } else if(location.pathname === "/") {
    return (
      <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Hero />
        <main>
            <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
