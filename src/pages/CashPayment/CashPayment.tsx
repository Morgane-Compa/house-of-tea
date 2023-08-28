import CallToActionButton from 'components/CallToActionButton/CallToActionButton'
import style from './CashPayment.module.scss';
import { useNavigate } from "react-router-dom";

const CashPayment = () => {
    const navigate = useNavigate();
    return(
        <div className={style['cash-payment']}>
            <p>Récupérez votre ticket à la prochaine étape <br /> pour régler à la caisse</p>
            <span className={style.total}>Total: 19,60€</span>
            <CallToActionButton title="Récapitulatif" buttonType='button' callback={() => {navigate('/recap')}}/>
        </div>
    )
}

export default CashPayment