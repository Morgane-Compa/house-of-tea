import PaymentForm from "components/PaymentForm/PaymentForm";
import style from "./PaymentPage.module.scss";
import {useEffect, useState} from "react";
import CashPayment from "components/CashPayment/CashPayment";

const PaymentPage = () => {
  useEffect(() =>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   
  },[])
  const [payByCard, setPayByCard] = useState<boolean>(true)
  return (
    <section className={style.payment}>
      <p className={style.titre}>Paiement</p>
      <div className={style['payment-choice']}>
        <button onClick={() => {setPayByCard(true)}} className={`${style['payment-option']} ${payByCard && style.isSelected}`}>
          Carte bleue
        </button>
        <button onClick={() => {setPayByCard(false)}} className={`${style['payment-option']} ${!payByCard && style.isSelected}`}>
          Espèces
        </button>
      </div>
     {payByCard && <PaymentForm />}
     {!payByCard && <CashPayment/>}
    </section>
  );
};

export default PaymentPage;
