import Header from 'components/Header/Header'
import style from './NotFoundPage.module.scss'
import Footer from 'components/Footer/Footer'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <main className={style.main}>
                <div className={style.background}>
                    <img src="/assets/other-images/bg-img.svg" alt="not-found" />
                </div>
                <div className={style.content}>
                    <h2>Oups,</h2>
                    <p>Il semble que ce produit ne soit plus disponible</p>
                    
                    <Link to='/products' className={style.button}>Choisir un autre produit</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NotFoundPage