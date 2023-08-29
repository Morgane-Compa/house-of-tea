import CallToActionButton from 'components/CallToActionButton/CallToActionButton'
import style from './CashPayment.module.scss';
import { useNavigate } from "react-router-dom";
import { useCartContext } from 'contextes/CartContext';

const CashPayment = () => {
    const navigate = useNavigate();
    const {getTotalCartPrice, createOrderNumber} = useCartContext();
    const validatePayment = () => {
        createOrderNumber();
        navigate('/recap');
    }
    return(
        <div className={style['cash-payment']}>
            <p>Récupérez votre ticket à la prochaine étape <br /> pour régler à la caisse</p>
            <span className={style.total}>Total: {getTotalCartPrice()}€</span>
            <CallToActionButton title="Récapitulatif" buttonType='button' callback={() => {validatePayment()}}/>
        </div>
    )
}

export default CashPayment