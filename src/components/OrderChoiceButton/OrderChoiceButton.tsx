import { Link } from 'react-router-dom'
import style from './OrderChoiceButon.module.scss'

interface OrderChoiceButtonProps {
    text: string;
    css : string;
}

const OrderChoiceButton = (props: OrderChoiceButtonProps) => {

    const {text, css} = props;
    return (
        <>
            <div className={style.content}>
                <Link to='/products' className={css}>{text}</Link>
            </div>
        </>
    )
}

export default OrderChoiceButton;