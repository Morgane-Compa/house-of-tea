import { useState } from "react";
import { CurrencyFormater } from "utilities/CurrencyFormater";
import style from "./SizeCustomizationButton.module.scss";
import './SizeCustomizationButton.module.scss';

interface SizeCustomizationButtonProps {
  icon: string;
  price: any;
}

const SizeCustomizationButton = (props: SizeCustomizationButtonProps) => {
  const { icon, price } = props;
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected(!isSelected);
    console.log(isSelected);
  }

  return (
    <button
      onClick={handleClick}
      className={
        `${isSelected === true ? style.yellow : style.white}`
      }
    >
      <div>
        <img src={icon} alt="size" className={style.icon}/>
      </div>
      <div>
        <span className={style.price}>{CurrencyFormater(price)}</span>
      </div>
    </button>
  );
};

export default SizeCustomizationButton;
