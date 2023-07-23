import CallToActionButton from "components/CallToActionButton/CallToActionButton";
import style from "./PaymentForm.module.scss";

const PaymentForm = () => {

  const submit = () => {
    // Méthode de soumission du formulaire
    console.log("submit");
  };

  return (
    <form className={style.form}>
      <div className={style.container}>
        <label className={style.label}>Titulaire de la carte</label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          placeholder="Prénom Nom"
          required
          autoFocus
        />
        <label className={style.label}>N° de carte bancaire</label>
        <input
          type="text"
          id="cardNumbers"
          name="cardsNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          required
        />
        <div className={style.flexRow}>
          <div className={style.flexColumn}>
            <label className={style.label}>Date d'expiration</label>
            <input
              type="month"
              id="validityDate"
              name="validityDate"
              placeholder="MM/AA"
              required
            />
          </div>
          <div className={style.flexColumn}>
            <label className={style.label}>CVV</label>
            <input
              type="password"
              id="digits"
              name="digits"
              placeholder="XXX"
              required
            />
          </div>
        </div>
        <span className={style.total}>Total: 19,60€</span>
        <CallToActionButton title="Payer" callback={submit} />
      </div>
    </form>
  );
};

export default PaymentForm;
