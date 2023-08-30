import { useState } from "react";

import style from './IntensityChoiceList.module.scss';

const IntensityChoiceList = (props: any) => {

    const [isSoft, setIsSoft] = useState(true);
    const [isRegular, setIsRegular] = useState(false);
    const [isStrong, setIsStrong] = useState(false);
    
    function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const intensity: HTMLButtonElement = event.currentTarget;
    
    if(intensity.id === "soft") {
      props.sendIntensityToDetailsPage("Délicat")
      setIsSoft(true)
      setIsRegular(false)
      setIsStrong(false)
    }
    if(intensity.id === "regular") {
      props.sendIntensityToDetailsPage("Moyen")
      setIsSoft(false)
      setIsRegular(true)
      setIsStrong(false)
    }
    if(intensity.id === "strong") {
      props.sendIntensityToDetailsPage("Puissant")
      setIsSoft(false)
      setIsRegular(false)
      setIsStrong(true)
    }
    // console.log(intensity.id);
    }
    
      return (
        <div className={style.container}>
          <button className={isSoft ? style.yellow : style.white} id="soft" onClick={handleOnClick}>
          <p>Délicat</p>
          </button>
          <button className={isRegular ? style.yellow : style.white}  id="regular" onClick={handleOnClick}>
          <p>Moyen</p>
          </button>
          <button className={isStrong ? style.yellow : style.white}  id="strong" onClick={handleOnClick}>
          <p>Puissant</p>
          </button>
        </div>
      )
}

export default IntensityChoiceList;

  