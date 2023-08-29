import { CurrencyFormater } from "utilities/CurrencyFormater";
import style from "./SizeChoiceList.module.scss";
import { ISizeChoice, SIZE_CHOICE } from 'mocks/product.mock';

interface SizeChoiceListProps {
  CallBackSize: (data: ISizeChoice) => void;
  size: ISizeChoice
}

const SizeChoiceList = (props: SizeChoiceListProps) => {

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
        <img src={size.icon} alt={size.name} className={style.icon} />
        <div className={style.price}>+{CurrencyFormater(size.price)}</div>
      </button>
  )
};

export default SizeChoiceList;
