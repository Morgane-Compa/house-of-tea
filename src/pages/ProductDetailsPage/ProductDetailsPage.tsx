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
import { IProduct, ISizeChoice, PRODUCTS } from "mocks/product.mock";
import { useParams } from "react-router-dom";
import { CurrencyFormater } from "utilities/CurrencyFormater";



  export interface IFormValue {
    product: IProduct,
    finalPrice: number,
    size?: string,
    temp?: string,
    extras?:
        {
            name : string,
            quantity : number,
        } []

}



const ProductDetailsPage: React.FC = (extraPrice) => {

  // ******************************************************************
  // ************* Gneneral QuantityPicker pour nombre d'items *****************
  const [picker, setPicker] = useState(1);
  const total = picker;
  const { addToCart } = useCartContext();

  const testProduct: IFormValue = {
      product: PRODUCTS[0],
      finalPrice: 2,
      size: 'Moyen',
      temp: 'chaud',
      extras: [
        {
          name : "Lait",
          quantity : 2
        },
        {
          name : "Miel",
          quantity : 2
        }
      ]

  }
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
    // console.log("Le produit sélectionné à l'id ", productId)
  } else {
    // console.log("pas de produit correspondant");
  }
  // *** SIZE ***
  const [size, setSize] = useState<number>();
  // let size: number = 0;
  const handleCallBackSize = (data: number) => {
    setSize(data);
    // size = data;
    console.log("Le prix de la size sélectionnée est de", size, "€");
    //return size;
  }
  // *** TEMPERATURE ***
  //let temp: String = "";
  const [temp, setTemp] = useState<string>();
  const handleCallBackTemp = (data: String) => {
    setTemp(data);
    //temp = data;
    console.log("La température de la boisson sélectionnée est", temp);
    // temp;
  }
  // *** INTENSITY ***
  let int: String = "";
  const [int, setInt] = useState<string>();
  const handleCallBackIntensity = (data: String) => {
    setInt(data);
    // int = data;
    console.log("L'intensité de la boisson sélectionnée est", int);
    //return int;
  }
  // *** EXTRALIST ***

  // *** OBJET CUSTOMIZE ***
  const landingProduct = {
    productId,
    size : size,
    temperature : temp,
    intensity : int
  }
  console.log(landingProduct);

  return (
    <>
      {product?.isAvailable ?
        <form className={style.extraContainer}>
          <ProductDetailCard />
          {/* Condition apparition de la taille */}
          {
            product?.category === 1 ?
              <> <span className={style.interligne}></span>
                <SizeChoiceList sendSizeToDetailsPage={handleCallBackSize} /></>
              :
              <></>
          }
          {/* Condition apparition de la température et de l'intensité */}
          {
            product?.customization ?
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
              {CurrencyFormater(product?.price * total)}
            </div>
            <div className={style.picker}>
              <QuantityPicker increment={increment} decrement={decrement} totalPicker={total} />
            </div>
          </div>
          <CallToActionButton buttonType="button" title={"Ajouter au panier"} callback={() => { addToCart(testProduct, testQuantity) }} />
        </form >
        :
        // Faire une redirection à la 404 ou plutôt en amont dans la page products au moment du click sur le produit
        <p>Le produit est momentanément indisponible.</p>
      }
    </>
  );
};

export default ProductDetailsPage;
