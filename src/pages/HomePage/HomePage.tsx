import { useEffect } from "react";
import style from "./HomePage.module.scss"
import OrderChoiceButton from "components/OrderChoiceButton/OrderChoiceButton"

const HomePage = () => {
    useEffect(() =>{
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
       
      },[])
    return(
        <>
            <main className={style.main}>
                <div className={style.image}>
                    <img src="/assets/other-images/bg-img.svg" alt="accueil" className={style.background}/>
                </div>
                <div className={style.content}>
                    <OrderChoiceButton text={"Sur place"} css={style.button}/>
                    <OrderChoiceButton text={"À emporter"} css={style.takeAway}/>
                </div>
            </main>
        </>
    )
}

export default HomePage