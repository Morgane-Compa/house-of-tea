import CallToActionButton from "components/CallToActionButton/CallToActionButton";
import style from "./PaymentForm.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormValue {
  ownerName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}
const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const submitForm = (data: any) => {
    console.log(data);
    navigate("/recap");
  };
  const navigate = useNavigate();

  return (
    <form className={style.form} onSubmit={handleSubmit(submitForm)}>
      <div className={style.flexColumn}>
        <label className={style.label}>Titulaire de la carte</label>
        <input
          type="text"
          id="ownerName"
          placeholder="Prénom Nom"
          autoFocus
          {...register("ownerName", { required: "Ce champ est requis" })}
        />
        {errors.ownerName && (
          <span className={style["form-error"]}>
            {errors.ownerName.message}
          </span>
        )}
        <label className={style.label}>N° de carte bancaire</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          {...register("cardNumber", {
            required: "Ce champ est requis",
            pattern: {
              value: /^[0-9]*$/,
              message: "Ce champ n'accepte que des valeurs numériques",
            },
            maxLength: {
              value: 16,
              message: "Ce champ doit contenir 16 caractères numériques",
            },
            minLength: {
              value: 16,
              message: "Ce champ doit contenir 16 caractères numériques",
            },
          })}
        />
        {errors.cardNumber && (
          <span className={style["form-error"]}>
            {errors.cardNumber.message}
          </span>
        )}
      </div>
      <div className={style.flexRow}>
        <div className={style.flexColumn}>
          <label className={style.label}>Date d'expiration</label>
          <input
            type="text"
            id="expirationDate"
            placeholder="MM/AA"
            {...register("expirationDate", {
              required: "Ce champ est requis",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/?2[3-9]$/,
                message: "La date doit être au format MM/AA",
              },
            })}
          />
          {errors.expirationDate && (
            <span className={style["form-error"]}>
              {errors.expirationDate.message}
            </span>
          )}
        </div>
        <div className={style.flexColumn}>
          <label className={style.label}>CVV</label>
          <input
            type="text"
            id="cvv"
            placeholder="XXX"
            {...register("cvv", {
              required: "Ce champ est requis",
              pattern: {
                value: /^[0-9]*$/,
                message: "Ce champ doit contenir 3 caractères numériques",
              },
              maxLength: {
                value: 3,
                message: "Ce champ doit contenir 3 caractères numériques",
              },
              minLength: {
                value: 3,
                message: "Ce champ doit contenir 3 caractères numériques",
              },
            })}
          />
          {errors.cvv && (
            <span className={style["form-error"]}>{errors.cvv.message}</span>
          )}
        </div>
      </div>
      <span className={style.total}>Total: 19,60€</span>
      <CallToActionButton
        buttonType="submit"
        title="Payer"
        callback={() => {}}
      />
    </form>
  );
};

export default PaymentForm;
