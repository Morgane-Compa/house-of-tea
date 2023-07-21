import React from "react";
import "./App.module.scss";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
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

export default App;
