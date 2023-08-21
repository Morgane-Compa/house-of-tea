import Header from 'components/Header/Header'
import style from './NotFoundPage.module.scss'
import Footer from 'components/Footer/Footer'
import CallToActionButton from 'components/CallToActionButton/CallToActionButton'

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <main className={style.main}>
                <div className={style.background}>
                    <img src="/assets/other-images/bg-img.svg" alt="" />
                </div>
                <div className={style.content}>
                    <h2>Oups,</h2>
                    <p>Il semble que ce produit ne soit plus disponible</p>

                    
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NotFoundPage