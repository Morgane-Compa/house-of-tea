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
import { useParams } from "react-router-dom";

const ProductDetailsPage: React.FC = () => {

  // ******************************************************************
  // ************* QuantityPicker pour nombre d'items *****************
  const [picker, setPicker] = useState(Number);
  const total = picker;
  const { addToCart } = useCartContext();
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

  // ******************************************************************
  // ************* Remontées des sélections utlisateurs ***************
  // *** ID ***
  const { id } = useParams<{ id: string }>();
  const productId = id;
  // Si l'id n'existe pas, je gère l'erreur (Si message "may be undefined" et rejet de l'id : 
  // => la gestion de l'éventuelle erreur requise)
  if (!id) {
    return <div>Invalid product ID</div>;
  }
  // Je passe l'ID de string à Number
  const parsedId = parseInt(id, 10);
  // Je vais chercher quel idProduit correspond à l'id de l'url
  const product = PRODUCTS.find(product => product.id === parsedId);
  if (productId) {
    console.log("Le produit sélectionné à l'id ", productId)
  } else {
    console.log("pas de produit correspondant");
  }
  // *** SIZE ***
  // const [size, setSize] = useState<number>();
  let size: number;
  const handleCallBackSize = (data: number) => {
    // setSize(data);
    size = data;
    console.log("Le prix de la size sélectionnée est de", size, "€");
  }
  // *** TEMPERATURE ***
  let temp: String;
  const handleCallBackTemp = (data: String) => {
    temp = data;
    console.log("La température de la boisson sélectionnée est", temp);
  }
  // *** INTENSITY ***
  let intensity: String;
  const handleCallBackIntensity = (data: String) => {
    intensity = data;
    console.log("L'intensité de la boisson sélectionnée est", intensity);
  }
  // *** EXTRALIST ***
  // *** OBJET CUSTOMIZE ***

  return (
    <>
      <form className={style.extraContainer}>
        <ProductDetailCard />
        <span className={style.interligne}></span>
        <SizeChoiceList sendSizeToDetailsPage={handleCallBackSize} />
        {/* Condition apparition de l'intensité */}
        {
          product?.customization?.isIntense ?
            <>
              <span className={style.interligne}></span>
              <TemperatureChoiceList sendTempToDetailsPage={handleCallBackTemp} />
              <span className={style.interligne}></span>
              <p className={style.intense}>Intensité</p>
              <IntensityChoiceList sendIntensityToDetailsPage={handleCallBackIntensity} />
              <span className={style.interligne}></span>
              <ExtraList />
            </>
            :
            <></>

        }
        <span className={style.interligne}></span>
        <div className={style.total}>
          <div className={style.totalPrice}>
            {/* Récupérer les datas des childs pour le total */}
            9.90€
          </div>
          <div className={style.picker}>
            <QuantityPicker increment={increment} decrement={decrement} totalPicker={total} />
          </div>
        </div>
        <CallToActionButton title={"Ajouter au panier"} callback={() => { addToCart(testProduct, testQuantity) }} />
      </form >
    </>
  );
};

export default ProductDetailsPage;
