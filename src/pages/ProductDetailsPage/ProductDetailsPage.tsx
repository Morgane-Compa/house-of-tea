import SizeChoiceList from "components/SizeChoiceList/SizeChoiceList";
import style from "./ProductDetailsPage.module.scss";
import TemperatureChoiceList from "components/TemperatureChoiceList/TemperatureChoiceList";
import IntensityChoiceList from "components/IntensityChoiceList/IntensityChoiceList";
import ExtraList from "components/ExtraList/ExtraList";
import CallToActionButton from "components/CallToActionButton/CallToActionButton";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useEffect, useState } from "react";
import ProductDetailCard from "components/ProductDetailCard/ProductDetailCard";
import { useCartContext } from "contextes/CartContext";
import { IProduct, ISizeChoice, PRODUCTS, SIZE_CHOICE } from "mocks/product.mock";
import { ActionFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import { getProductById } from "services/product.service";

// Loader
export const oneProductLoader = async(args: ActionFunctionArgs): Promise<IProduct | undefined> => {
  const {params: {id}} = args;
  const productId = Number(id);
  const foundProduct = await getProductById(productId);

  // if(!foundProduct) {
  //   throw new Response("", {
  //     status: 404,
  //     statusText: "Ce produit n'existe pas",
  //   })
  // }
  console.log(id);
  return foundProduct;
}

export interface IFormValue {
  product: IProduct,
  finalPrice: number,
  size?: string,
  temp?: string,
  intensity?: string,
  extras?:
  {
    name: string,
    quantity: number,
  }[]
}

const ProductDetailsPage: React.FC = (extraPrice) => {

  const foundProduct = useLoaderData() as IProduct;

  // ******************************************************************
  // **********General QuantityPicker pour nombre d'items *************
  const [picker, setPicker] = useState(1);
  const total = picker;
  const { addToCart } = useCartContext();


  const testProduct: IFormValue = {
    product: PRODUCTS[0],
    finalPrice: 2,
    size: 'Moyen',
    temp: 'chaud',
    intensity: 'délicat',
    extras: [
      {
        name: "Lait",
        quantity: 2
      },
      {
        name: "Miel",
        quantity: 2
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





  // *** SIZE ***
  // Utilisée pour boucler dans le jsx
  const sizeList: ISizeChoice[] = SIZE_CHOICE;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [size, setSize] = useState<ISizeChoice>();
  const handleCallBackSize = (data: ISizeChoice) => {
    setSize(data);
    console.log(data);
  }

  // *** TEMPERATURE ***
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [temp, setTemp] = useState<any>();
  const handleCallBackTemp = (data: String) => {
    setTemp(data);
    console.log("La température de la boisson sélectionnée est", temp);
  }

  // *** INTENSITY ***
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [int, setInt] = useState<any>();
  const handleCallBackIntensity = (data: String) => {
    setInt(data);
    console.log("L'intensité de la boisson sélectionnée est", int);
  }

  // *** EXTRALIST ***

  // *** OBJET CUSTOMIZE ***
  const landingProduct: IFormValue = {
    product: foundProduct,
    finalPrice: 2,
    size: size?.name,
    temp: temp,
    intensity: int,
    extras: [
      {
        name: "Lait",
        quantity: 2
      },
      {
        name: "Miel",
        quantity: 2
      }
    ]
  }
  console.log(landingProduct);

  return (
    <form className={style.extraContainer}>
      <ProductDetailCard product={foundProduct} />
      {/* Condition apparition de la taille */}
      {
        foundProduct.category === 1 &&
        <> <span className={style.interligne}></span>
          <ul className={style.size}>
            {sizeList.map((item) => <li key={item.id}>
              <SizeChoiceList CallBackSize={handleCallBackSize} size={item} />
            </li>)
            }
          </ul>
        </>
      }
      {/* Condition apparition de la température et de l'intensité */}
      {
        foundProduct.customization ?
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
        </div>
        <div className={style.picker}>
          <QuantityPicker increment={increment} decrement={decrement} totalPicker={total} />
        </div>
      </div>
      <CallToActionButton buttonType="button" title={"Ajouter au panier"} callback={() => { addToCart(landingProduct, testQuantity) }} />
    </form >
  );
};
export default ProductDetailsPage;
