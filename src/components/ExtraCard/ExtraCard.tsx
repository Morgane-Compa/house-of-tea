import QuantityPicker from 'components/QuantityPicker/QuantityPicker';
import { useState } from 'react';
import style from './ExtraCard.module.scss'
import { formatNumber } from 'services/globalMethods';
import { IExtraIngredients } from 'mocks/product.mock';
import { IExtra } from 'pages/ProductDetailsPage/ProductDetailsPage';

interface IExtraCardProps {
    extra: IExtraIngredients
    extraCallBack: (chosenExtra: IExtra) => void
}

const ExtraCard = (props: IExtraCardProps) => {
    // Je déstructure mes props pour les utiliser
    const { extra, extraCallBack } = props;
    // Je déstructure "extra" des props qui est de type IExtraIngredient
    // => j'ai accès à chacune des propriétés
    const { id, name, image, price, maxQuantity } = extra;

    // ************* QuantityPicker (extraCard) *****************
    const [extraQuantity, setExtraQuantity] = useState<number>(0);
    const [extraPrice, setExtraPrice] = useState<number>(0);

    const addExtra = () => {
        if (extraQuantity < maxQuantity) {
            //Je modifie mes states extraQ et le extraP
            const quantity = extraQuantity + 1;
            setExtraQuantity(quantity);
            const interPrice = price * quantity;
            setExtraPrice(interPrice);
            // Création d'un etxraProduct de type IExtra (IExtra est crééé dans le parent => ProductDetailsPage) et
            // lui passe les propriétés destructurées
            const extraProduct: IExtra = {
                id: id,
                name: name,
                initialPrice: price,
                finalPrice: interPrice,
                quantity: quantity
            }
            // Je passe l'objet à la callback des props
            extraCallBack(extraProduct);
        }
    }
    const removeExtra = () => {
        if (extraQuantity >= 1) {
            const quantity = extraQuantity - 1
            setExtraQuantity(quantity)
            const interPrice = price * quantity;
            setExtraPrice(interPrice)
            const extraProduct: IExtra = {
                id,
                name: name,
                initialPrice: price,
                finalPrice: interPrice,
                quantity: quantity
            }
            extraCallBack(extraProduct);

        }
    }
    // ******** Récupération des données dans un tableau*********
    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <div>
                    <img src={image.src} alt={image.alt} className={style.responsive} />
                </div>
                <div>
                    <p>{name}</p>
                </div>
                <div>
                    <span>{formatNumber(price)},00€</span>
                </div>
            </div>
                <QuantityPicker increment={addExtra}
                    decrement={removeExtra} totalPicker={extraQuantity} />
        </div>
    )

}

export default ExtraCard;