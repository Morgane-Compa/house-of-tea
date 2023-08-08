import SizeChoiceList from "components/SizeChoiceList/SizeChoiceList";
import style from "./ProductDetailsPage.module.scss";
import TemperatureChoiceList from "components/TemperatureChoiceList/TemperatureChoiceList";
import IntensityChoiceList from "components/IntensityChoiceList/IntensityChoiceList";
import ExtraList from "components/ExtraList/ExtraList";
import CallToActionButton from "components/CallToActionButton/CallToActionButton";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useState } from "react";


const ProductDetailsPage = () => {

  // ************* QuantityPicker (extraCard) *****************
  const [picker, setPicker] = useState(Number);
  const total = picker;

  const increment = () => {
    if (picker === 6) {
      return;
    }
    setPicker(picker + 1);
  };

  const decrement = () => {
    if (picker === 0) {
      return;
    }
    setPicker(picker - 1);
  };

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    console.log("Formlaire envoyé !!!");
  }

  return (
    <>
      <form className={style.extraContainer} onSubmit={handleSubmit}>
        <span className={style.interligne}></span>
        <SizeChoiceList />
        <span className={style.interligne}></span>
        <TemperatureChoiceList />
        <span className={style.interligne}></span>
        <p className={style.intense}>Intensité</p>
        <IntensityChoiceList />
        <span className={style.interligne}></span>
        <ExtraList />
        <span className={style.interligne}></span>
        <div className={style.total}>
          <div className={style.totalPrice}>
            9.90€
          </div>
          <div className={style.picker}>
            <QuantityPicker increment={increment} decrement={decrement} totalPicker={total} />
          </div>
        </div>
        <CallToActionButton title={"Ajouter au panier"} />
      </form >
    </>
  );
};

export default ProductDetailsPage;
