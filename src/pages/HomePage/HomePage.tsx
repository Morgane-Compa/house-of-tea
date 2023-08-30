import style from "./HomePage.module.scss"
import OrderChoiceButton from "components/OrderChoiceButton/OrderChoiceButton"

const HomePage = () => {
    return(
        <>
            <main className={style.main}>
                    <img src="/assets/other-images/bg-img.svg" alt="accueil" className={style.background}/>
                <div className={style.content}>
                    <OrderChoiceButton text={"Sur place"} css={style.button}/>
                    <OrderChoiceButton text={"A emporter"} css={style.takeAway}/>
                </div>
            </main>
        </>
    )
}

export default HomePage