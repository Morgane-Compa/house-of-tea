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
import { IProduct, ISizeChoice, SIZE_CHOICE } from "mocks/product.mock";
import { ActionFunctionArgs, useLoaderData } from "react-router-dom";
import { getProductById } from "services/product.service";

// productLoader qui utilise la méthode de recherche du produit par id du productService
export const oneProductLoader = async (args: ActionFunctionArgs): Promise<IProduct | undefined> => {
  const { params: { id } } = args;
  const productId = Number(id);
  const foundProduct = await getProductById(productId);

  // Faire la redirection en cas de non dispo (navigate)
  // if(!foundProduct) {
  //   throw new Response("", {
  //     status: 404,
  //     statusText: "Ce produit n'existe pas",
  //   })
  // }
  return foundProduct;
}

export interface IFormValue {
  product: IProduct,
  finalPrice: number,
  size?: ISizeChoice,
  temp?: string,
  intensity?: string,
  extras?: IExtra[],
  finalQuantity: number
}
// J'exporte pour l'utiliser dans ExtraList
export interface IExtra {
  id: number,
  name: string,
  initialPrice: number,
  finalPrice: number,
  quantity: number,
}

const ProductDetailsPage: React.FC = (extraPrice) => {

  const foundProduct = useLoaderData() as IProduct;

  // ******************************************************************
  // **********General QuantityPicker pour nombre d'items *************
  const { addToCart } = useCartContext();

  //Test de quantités du produit commandé => à développer


  // *** SIZE ***
  // Utilisée pour boucler dans le jsx
  const sizeList: ISizeChoice[] = SIZE_CHOICE;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [size, setSize] = useState<ISizeChoice>({
    id: 1,
    name: "Petit",
    icon: "/assets/icons/smallcup.png",
    price: 0,
    isSelected: true
  });
  const handleCallBackSize = (sizeChoice: ISizeChoice) => {
    setSize(sizeChoice);
    finalProduct.size = sizeChoice;
    setFinalProduct({ ...finalProduct });
  }

  // *** TEMPERATURE ***
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [temp, setTemp] = useState<string>("Chaud");
  const handleCallBackTemp = (temperature: string) => {
    setTemp(temperature);
    finalProduct.temp = temperature;
    setFinalProduct({ ...finalProduct });
  }

  // *** INTENSITY ***
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [int, setInt] = useState<string>("Délicat");
  const handleCallBackIntensity = (intensity: string) => {
    setInt(intensity);
    finalProduct.intensity = intensity;
    setFinalProduct({ ...finalProduct });
  }

  // *** EXTRALIST ***
  // Je passe la focntion de création d'une liste à l'enfant sous buildExtraList
  const [extraList, setExtraList] = useState<IExtra[]>([]);
  const getExtraList = (list: IExtra[]) => {
    setExtraList(list);
    finalProduct.extras = list;
    setFinalProduct({ ...finalProduct });
  }



  // *** GENERAL QUANTITY ***
  const [finalQuantity, setFinalQuantity] = useState<number>(1);

  const increment = () => {
    //Je modifie mes states extraQ et le extraP
    const quantity = finalQuantity + 1;
    setFinalQuantity(quantity);
    finalProduct.finalQuantity = quantity;
    setFinalProduct({ ...finalProduct });
  };

  const decrement = () => {
    if (finalQuantity >= 2) {
      const quantity = finalQuantity - 1;
      setFinalQuantity(quantity);
      finalProduct.finalQuantity = quantity;
      setFinalProduct({ ...finalProduct });
    }
  };

  // *** PRICE ***
  const [finalPrice, setFinalPrice] = useState<number>(foundProduct.price);

  // *** OBJET CUSTOMIZE ***
  const defaultProduct: IFormValue = {
    product: foundProduct,
    finalPrice: finalPrice,
    size: size,
    temp: temp,
    intensity: int,
    extras: extraList,
    finalQuantity: finalQuantity
  }

  // *** PRODUCT ***
  const [finalProduct, setFinalProduct] = useState<IFormValue>(defaultProduct)

  useEffect(() => {
    const getFinalPrice = () => {
      const extraPrice = extraList.reduce((totalPrice, extra) => {
        return totalPrice += extra.finalPrice
      }, 0)
      const price = foundProduct.price + size.price + extraPrice;
      setFinalPrice(price);
      finalProduct.finalPrice = price * finalQuantity;
      setFinalProduct({ ...finalProduct });
    }
    
    getFinalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, extraList, finalQuantity]);

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
            <ExtraList buildExtraList={getExtraList} product={foundProduct} />
          </>
          :
          <></>
      }
      <span className={style.interligne}></span>
      <div className={style.total}>
        <div className={style.totalPrice}>
          {/* Récupérer les datas des childs pour le total */}
          <span>{finalPrice * finalQuantity}€</span>
        </div>
        <div className={style.picker}>
          <QuantityPicker increment={increment} decrement={decrement} totalPicker={finalQuantity} />
        </div>
      </div>
      <CallToActionButton buttonType="button" title={"Ajouter au panier"} callback={() => { addToCart(finalProduct) }} />
  
    </form >
  );
};
export default ProductDetailsPage;
