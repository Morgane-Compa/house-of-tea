// import SizeCustomizationButton from "components/SizeCustomizationButton/SizeCustomizationButton";
import { useState } from 'react';
import { CurrencyFormater } from 'utilities/CurrencyFormater';
import style from "./SizeChoiceList.module.scss";


const SizeChoiceList = (props: any) => {

  const [isSmall, setIsSmall] = useState(true);
  const [isMid, setIsMid] = useState(false);
  const [isBig, setIsBig] = useState(false);

  function getSize(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const size: HTMLButtonElement = event.currentTarget;
    if(size.id === "small") {
      props.sendSizeToDetailsPage(Number(0))
      setIsSmall(true)
      setIsMid(false)
      setIsBig(false)
    }
    if(size.id === "mid") {
      props.sendSizeToDetailsPage(Number(2))
      setIsSmall(false)
      setIsMid(true)
      setIsBig(false)
    }
    if(size.id === "big") {
      props.sendSizeToDetailsPage(Number(4))
      setIsSmall(false)
      setIsMid(false)
      setIsBig(true)
    }
    // console.log(size.id);
    // console.log(size.value);
    return size.id && Number(size.value);
  }

  return (
    <div className={style.container}>
      <button className={isSmall ? style.yellow : style.white} id="small" value="0" onClick={getSize}>
      <div className={style.responsive}>
        <img src="../assets/icons/small-cup.svg" alt="size" className={style.icon} />
        <div className={style.price}>Regular</div>
      </div>
      </button>
      <button className={isMid ? style.yellow : style.white}  id="mid" value="2" onClick={getSize}>
      <div className={style.responsive}>
        <img src="../assets/icons/mid-cup.svg" alt="size" className={style.icon} />
        <div className={style.price}>{CurrencyFormater(2)}</div>
      </div>
      </button>
      <button className={isBig ? style.yellow : style.white}  id="big" value="4" onClick={getSize}>
      <div className={style.responsive}>
        <img src="../assets/icons/big-cup.svg" alt="size" className={style.icon} />
        <div className={style.price}>{CurrencyFormater(4)}</div>
      </div>
      </button>
    </div>
  )
};

export default SizeChoiceList;
