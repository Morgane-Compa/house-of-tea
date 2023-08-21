import SizeChoiceList from "components/SizeChoiceList/SizeChoiceList";
import style from "./ProductDetailsPage.module.scss";
import TemperatureChoiceList from "components/TemperatureChoiceList/TemperatureChoiceList";
import IntensityChoiceList from "components/IntensityChoiceList/IntensityChoiceList";
import ExtraList from "components/ExtraList/ExtraList";
import CallToActionButton from "components/CallToActionButton/CallToActionButton";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useState } from "react";
import ProductDetailCard from "components/ProductDetailCard/ProductDetailCard";
import { useCartContext } from "contextes/CartContext";
import { PRODUCTS } from "mocks/product.mock";


const ProductDetailsPage = () => {

  // ************* QuantityPicker (extraCard) *****************
  const [picker, setPicker] = useState(Number);
  const total = picker;
  const {addToCart} = useCartContext();
  const testProduct = PRODUCTS[0];
  const testQuantity = 1;

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

  // ************* Données du formulaire *****************
  // Je crée un type pour créer mon produit customizé
  type custom = {
    size: string,
    temp: string,
    intensity: string,
    extra: [
      {
        name: string,
        quantity: number,
        price: number
      }
    ]
  };

  // Je récupère les données du formulaire dans un objet 
  let customizedObject: custom = 
    {
      size: "",
      temp: "",
      intensity: "",
      extra: [
        {
          name: "",
          quantity: 0,
          price: 0
        }
      ]
    };


  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    // Au submit, je modifie customizedObject avec les datas du form
    customizedObject = {
      size: "",
      temp: "",
      intensity: "",
      extra: [
        {
          name: "",
          quantity: 0,
          price: 0
        }
      ]
    }
    console.log(customizedObject);
  }

  return (
    <>
      <form className={style.extraContainer} onSubmit={handleSubmit}>
        <ProductDetailCard />
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
        <CallToActionButton title={"Ajouter au panier"} callback={() => {addToCart(testProduct, testQuantity)}}/>
      </form >
    </>
  );
};

export default ProductDetailsPage;
