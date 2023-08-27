import QuantityPicker from 'components/QuantityPicker/QuantityPicker';
import { useState } from 'react';
import style from './ExtraCard.module.scss'
import { CurrencyFormater } from 'utilities/CurrencyFormater';

interface IExtraCardProps {
    id?: number;
    name: string;
    image: string;
    price: number;
    maxQuantity?: number;
}

const ExtraCard = (props: IExtraCardProps) => {
    
    const { name, image, price, maxQuantity} = props;

    
    // ************* QuantityPicker (extraCard) *****************
    const [picker, setPicker] = useState(Number);
    const [extraName, setExtraName] = useState<String>("");
    const [extraPrice, setExtraPrice] = useState(Number);
    // let picker: number = 0;
    // let extraName: string = "";
    // let extraPrice: number = 0;

    const increment = () => {
        if (picker !== maxQuantity) {
            setExtraName(name);
            setPicker(picker + 1);
            setExtraPrice(price*picker);
            // extraName = name;
            // picker++;
            // extraPrice = price*picker;
            console.log(extraName);
            console.log(picker);
            console.log(extraPrice);
        } else {
            console.log("limite atteinte");
            return;
        }
        return extraName && extraPrice && picker;
    };

    const decrement = () => {
        if (picker !== 0) {
            setExtraName(name);
            setPicker(picker - 1);
            setExtraPrice(price*picker);
            // extraName = name;
            // picker--;
            // extraPrice = price*picker;
            console.log(extraName);
            console.log(picker);
            console.log(extraPrice);
        } else {
            return;
        }
        return extraName && extraPrice && picker;
    };


    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <div>
                    <img src={image} alt={name} className={style.responsive} />
                </div>
                <div>
                    <p>{name}</p>
                </div>
                <div>
                    <span>{CurrencyFormater(price)}</span>
                </div>
            </div>
            {/* Il faut que je communique au picker le name et le price */}
            <QuantityPicker increment={increment}
            decrement={decrement} totalPicker={picker} />
        </div>
    )
}

export default ExtraCard;