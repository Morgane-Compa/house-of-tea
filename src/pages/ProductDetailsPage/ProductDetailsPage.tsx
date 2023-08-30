import SizeChoiceButton from "components/SizeChoiceButton/SizeChoiceButton";
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
import { ActionFunctionArgs, useLoaderData, useNavigate } from "react-router-dom";
import { getProductById } from "services/product.service";

// productLoader qui utilise la méthode de recherche du produit par id du productService
export const oneProductLoader = async (args: ActionFunctionArgs): Promise<IProduct | undefined> => {
  const { params: { id } } = args;
  const productId = Number(id);
  const foundProduct = await getProductById(productId);
  return foundProduct;
}

export interface IFormValue {
  product: IProduct,
  finalPrice: number,
  size?: ISizeChoice,
  temp?: string,
  intensity?: string,
  extras?: IExtra[],
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



  const navigate = useNavigate()
  const foundProduct = useLoaderData() as IProduct;
  const { addToCart } = useCartContext();
  const addProductToCart = (product: IFormValue, quantity: number) => {
    addToCart(product, quantity);
    navigate('/cart');
  }
  useEffect(() => {
    if(!foundProduct.isAvailable){
      navigate('/unknown')
    }
  },[foundProduct, navigate])

  // *** SIZE ***
  // Utilisée pour boucler dans le jsx
  const sizeList: ISizeChoice[] = SIZE_CHOICE;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defaultSize = !foundProduct.isCustomizable ? undefined : SIZE_CHOICE[0];
  const [size, setSize] = useState<ISizeChoice | undefined>(defaultSize);
  const handleCallBackSize = (sizeChoice: ISizeChoice) => {
    setSize(sizeChoice);
    finalProduct.size = sizeChoice;
    setFinalProduct({ ...finalProduct });
  }
  useEffect(() => {
    SIZE_CHOICE.filter((item) => { 
      return item.id !== 1; 
    }).map((size) => size.isSelected = false);
    SIZE_CHOICE[0].isSelected = true;
  },[])

  // *** TEMPERATURE ***
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defaultTemp = !foundProduct.isCustomizable ? undefined : 'Chaud';
  const [temp, setTemp] = useState<string | undefined>(defaultTemp);
  const handleCallBackTemp = (temperature: string) => {
    setTemp(temperature);
    finalProduct.temp = temperature;
    setFinalProduct({ ...finalProduct });
  }

  // *** INTENSITY ***
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defaultIntensity = !foundProduct.isCustomizable ? undefined : 'Délicat';
  const [int, setInt] = useState<string | undefined>(defaultIntensity);
  const handleCallBackIntensity = (intensity: string) => {
    setInt(intensity);
    finalProduct.intensity = intensity;
    setFinalProduct({ ...finalProduct });
  }

  // *** EXTRALIST ***
  // Je passe la fonction de création d'une liste à l'enfant sous buildExtraList
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
  };

  const decrement = () => {
    if (finalQuantity >= 2) {
      const quantity = finalQuantity - 1;
      setFinalQuantity(quantity);
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
  }

  // *** PRODUCT ***
  const [finalProduct, setFinalProduct] = useState<IFormValue>(defaultProduct)

  useEffect(() => {
    const getFinalPrice = () => {
      const extraPrice = extraList.reduce((totalPrice, extra) => {
        return totalPrice += extra.finalPrice
      }, 0)
      if(size){
        const price = foundProduct.price + size.price + extraPrice;
        setFinalPrice(price);
        finalProduct.finalPrice = price;
        setFinalProduct({ ...finalProduct });
      }else{
        const price = foundProduct.price + extraPrice;
        setFinalPrice(price);
        finalProduct.finalPrice = price;
        setFinalProduct({ ...finalProduct });
      }
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
              <SizeChoiceButton CallBackSize={handleCallBackSize} size={item} />
            </li>)
            }
          </ul>
        </>
      }
      {/* Condition apparition de la température et de l'intensité */}
      {
        foundProduct.isCustomizable ?
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
      <CallToActionButton buttonType="button" title={"Ajouter au panier"} callback={() => {addProductToCart(finalProduct, finalQuantity) }} />
    </form >
  );
};
export default ProductDetailsPage;
