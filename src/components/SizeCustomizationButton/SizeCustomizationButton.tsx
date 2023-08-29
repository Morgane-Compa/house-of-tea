import { useState } from "react";
import { CurrencyFormater } from "utilities/CurrencyFormater";
import style from "./SizeCustomizationButton.module.scss";
import "./SizeCustomizationButton.module.scss";

// !!!! COMPOSANT PAS UTILISE !!!!
interface SizeCustomizationButtonProps {
  id: number;
  icon: string;
  price: any;
}

const SizeCustomizationButton = (props: SizeCustomizationButtonProps) => {

  const { id, icon, price } = props;
  const [isSelected, setIsSelected] = useState(false);
  const [buttonId, setButtonId] = useState(id);

  function handleClick() {
    setIsSelected(!isSelected);
    setButtonId(id);
  }

  return (
    <button
      onClick={handleClick}
      className={`${isSelected === true ? style.yellow : style.white}`}
    >
      <div className={style.responsive}>
        <img src={icon} alt="size" className={style.icon} />
        <div className={style.price}>{CurrencyFormater(price)}</div>
      </div>
    </button>
  );
};

export default SizeCustomizationButton;
