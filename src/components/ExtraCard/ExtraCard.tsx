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

    // ************* QuantityPicker (extraCard) *****************
    const [picker, setPicker] = useState(Number);
    const [extraName, setExtraName] = useState("");
    const [extraPrice, setExtraPrice] = useState(0);
    const total = picker;

    const increment = () => {
        setPicker(picker + 1);
        setExtraName(name);
        console.log(extraName);
        setExtraPrice(price);
        console.log(extraPrice * total);
        console.log(picker);
        if (picker === 6) {
            return;
        }
        return extraName && extraPrice * total && picker;
    };

    const decrement = () => {
        setPicker(picker - 1);
        setExtraName(name);
        console.log(extraName);
        setExtraPrice(price);
        console.log(extraPrice * total);
        console.log(picker);
        if (picker === 0) {
            return;
        }
        return extraName && extraPrice * total && picker;
    };

    const { name, image, price } = props;

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
            decrement={decrement} totalPicker={total}            />
        </div>
    )
}

export default ExtraCard;