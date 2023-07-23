import style from "./QuantityPicker.module.scss";

interface QuantityPickerProps {
  increment: () => void;
  totalPicker: any;
  decrement: () => void;
}

const QuantityPicker = (props: QuantityPickerProps) => {
  const { increment, totalPicker, decrement } = props;
  return (
    <div className={style.picker}>
      <button className={style.decrease} onClick={decrement}>
        -
      </button>
      <span className={style.quantity}>{totalPicker}</span>
      <button className={style.increase} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantityPicker;
