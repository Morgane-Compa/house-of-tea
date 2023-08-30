import { Link } from "react-router-dom"
import style from "./HomePage.module.scss"

const HomePage = () => {
    return(
        <>
            <main className={style.main}>
                    <img src="/assets/other-images/bg-img.svg" alt="accueil" className={style.background}/>
                <div className={style.content}>
                    <Link to='/products' className={style.button}>Sur place</Link>
                    <Link to='/products' className={style.takeAway}>A emporter</Link>
                </div>
            </main>
        </>
    )
}

export default HomePage