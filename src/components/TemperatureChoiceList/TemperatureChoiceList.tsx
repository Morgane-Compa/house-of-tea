import { useState } from 'react';
import style from './TemperatureChoiceList.module.scss'

const TemperatureChoiceList = (props: any) => {
    const [isHot, setIsHot] = useState(true);
    const [isCold, setIsCold] = useState(false);

  
    function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
      event.preventDefault();
      const temp: HTMLButtonElement = event.currentTarget;
  
      if(temp.id === "hot") {
        props.sendTempToDetailsPage("chaud")
        setIsHot(true)
        setIsCold(false)
      }
      if(temp.id === "cold") {
        props.sendTempToDetailsPage("glacé")
        setIsHot(false)
        setIsCold(true)
      }
      // console.log(temp.id);
    }
  
    return (
      <div className={style.container}>
        <button className={isHot ? style.yellow : style.white} id="hot" onClick={handleOnClick}>
        <p>Chaud</p>
        </button>
        <button className={isCold ? style.yellow : style.white}  id="cold" onClick={handleOnClick}>
        <p>Glacé</p>
        </button>
      </div>
    )
}

export default TemperatureChoiceList;