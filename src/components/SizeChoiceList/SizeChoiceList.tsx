// import SizeCustomizationButton from "components/SizeCustomizationButton/SizeCustomizationButton";
import { useState } from 'react';
import { CurrencyFormater } from 'utilities/CurrencyFormater';
import style from "./SizeChoiceList.module.scss";

const SizeChoiceList = () => {
  // Je n'arrive pas à avoir un comportement "individuel" pour chaque btn au click
  // return (
  //   <div className={style.inline}>
  //     {/* small */}
  //     <SizeCustomizationButton
  //       icon={"/assets/icons/small-cup.svg"}
  //       price={0}
  //       id={1}
  //     />
  //     {/* medium */}
  //     <SizeCustomizationButton
  //       icon={"/assets/icons/mid-cup.svg"}
  //       price={2}
  //       id={2}
  //     />
  //     {/* big */}
  //     <SizeCustomizationButton
  //       icon={"/assets/icons/big-cup.svg"}
  //       price={3}
  //       id={3}
  //     />
  //   </div>
  // );

  const [isSmall, setIsSmall] = useState(true);
  const [isMid, setIsMid] = useState(false);
  const [isBig, setIsBig] = useState(false);

  function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const size: HTMLButtonElement = event.currentTarget;

    if(size.id === "small") {
      setIsSmall(true)
      setIsMid(false)
      setIsBig(false)
    }
    if(size.id === "mid") {
      setIsSmall(false)
      setIsMid(true)
      setIsBig(false)
    }
    if(size.id === "big") {
      setIsSmall(false)
      setIsMid(false)
      setIsBig(true)
    }

    console.log(size.id);
  }

  return (
    <div className={style.container}>
      <button className={isSmall ? style.yellow : style.white} id="small" onClick={handleOnClick}>
      <div className={style.responsive}>
        <img src="../assets/icons/small-cup.svg" alt="size" className={style.icon} />
        <div className={style.price}>Regular</div>
      </div>
      </button>
      <button className={isMid ? style.yellow : style.white}  id="mid" onClick={handleOnClick}>
      <div className={style.responsive}>
        <img src="../assets/icons/mid-cup.svg" alt="size" className={style.icon} />
        <div className={style.price}>{CurrencyFormater(2)}</div>
      </div>
      </button>
      <button className={isBig ? style.yellow : style.white}  id="big" onClick={handleOnClick}>
      <div className={style.responsive}>
        <img src="../assets/icons/big-cup.svg" alt="size" className={style.icon} />
        <div className={style.price}>{CurrencyFormater(4)}</div>
      </div>
      </button>
    </div>
  )
};

export default SizeChoiceList;
