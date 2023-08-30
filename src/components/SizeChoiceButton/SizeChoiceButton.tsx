import { formatNumber } from "services/globalMethods";
import style from "./SizeChoiceButton.module.scss";
import { ISizeChoice, SIZE_CHOICE } from 'mocks/product.mock';

interface SizeChoiceButtonProps {
  CallBackSize: (data: ISizeChoice) => void;
  size: ISizeChoice;
}

const SizeChoiceButton = (props: SizeChoiceButtonProps) => {

  const {CallBackSize, size} = props;

  const selectSize = () => {
    CallBackSize(size);
    // Pour que la couleur jaune se désactive au cliqk d'un autre btn
    // Tous les btn se mettre en blanc
    SIZE_CHOICE.map(item => item.isSelected = false);
    // ... et celui qui est actif prend sa couleur jaune
    size.isSelected = !size.isSelected;
  }

  return (
      <button className={`${style.button} ${size.isSelected === true && style.isActive}`} type="button" onClick={() => selectSize()}>
        <p className={style.text}>{size.name}</p>
        {/* <img src={size.icon} alt={size.name} className={style.icon} /> */}
        <div className={style.price}>+{formatNumber(size.price)},00€</div>
      </button>
  )
};

export default SizeChoiceButton;
