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

    const { name, image, price } = props;

    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <p>{name}</p>
                </div>
                <div>
                    <span>{CurrencyFormater(price)}</span>
                </div>
            </div>
            <QuantityPicker increment={increment}
                decrement={decrement}
                totalPicker={total}
            />
        </div>
    )
}

export default ExtraCard;