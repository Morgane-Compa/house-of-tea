import React from "react";
import "./App.module.scss";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import BackButton from "components/BackButton/BackButton";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <BackButton />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
