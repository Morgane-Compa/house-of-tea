import { Link } from 'react-router-dom'
import style from './OrderChoiceButon.module.scss'
import { useCartContext } from 'contextes/CartContext';
import {useNavigate } from "react-router-dom";

interface OrderChoiceButtonProps {
    text: string;
    css : string;
}

const OrderChoiceButton = (props: OrderChoiceButtonProps) => {
    const {chooseOrderMode} = useCartContext()
    const navigate = useNavigate()
    const setOrderMode = (mode: string) => {
        chooseOrderMode(mode);
        navigate('/products')
    }
    const {text, css} = props;
    return (
        <>
            <div className={style.content}>
                <button className={css} onClick={() => {setOrderMode(text)}}>{text} </button>
            </div>
        </>
    )
}

export default OrderChoiceButton;