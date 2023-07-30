import SizeCustomizationButton from "components/SizeCustomizationButton/SizeCustomizationButton";
import style from "./SizeChoiceList.module.scss";

const SizeChoiceList = () => {

  return (
    <div className={style.inline}>
      <SizeCustomizationButton
        icon={"/assets/icons/small-cup.svg"}
        price={0}
        id={1}
      />
      <SizeCustomizationButton
        icon={"/assets/icons/mid-cup.svg"}
        price={2}
        id={2}
      />
      <SizeCustomizationButton
        icon={"/assets/icons/big-cup.svg"}
        price={3}
        id={3}
      />
    </div>
  );
};

export default SizeChoiceList;