import CallToActionButton from 'components/CallToActionButton/CallToActionButton'
import style from './CashPayment.module.scss';
import { useNavigate } from "react-router-dom";
import { useCartContext } from 'contextes/CartContext';

const CashPayment = () => {
    const navigate = useNavigate();
    const {getTotalCartPrice, createOrderNumber, choosePaymentMode} = useCartContext();
    const validatePayment = () => {
        createOrderNumber();
        choosePaymentMode('Espèces');
        navigate('/recap');
    }
    return(
        <div className={style['cash-payment']}>
            <p>Récupérez votre ticket à la prochaine étape <br /> pour régler à la caisse</p>
            <span className={style.total}>Total: {getTotalCartPrice().toFixed(2)}€</span>
            <CallToActionButton title="Récapitulatif" buttonType='button' callback={() => {validatePayment()}}/>
        </div>
    )
}

export default CashPayment