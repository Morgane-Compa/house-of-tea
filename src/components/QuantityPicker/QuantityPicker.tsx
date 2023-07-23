import style from "./QuantityPicker.module.scss";

const QuantityPicker = () => {
  return (
    <div className={style.picker}>
      <button className={style.decrease}>-</button>
      <span className={style.quantity}>0</span>
      <button className={style.increase}>+</button>
    </div>
  );
};

export default QuantityPicker;
