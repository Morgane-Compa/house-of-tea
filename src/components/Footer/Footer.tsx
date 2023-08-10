import style from './Footer.module.scss'

const Footer = () => {
    return(
        
        <footer className={style.footer}>
            <h2 className={style.title}>House of tea</h2>
            <img src="assets\other-images\logo-hot.svg" alt="Logo de la marque HOT" className= {style.logo} />
            <p className={style.slogan} >Le bar à thé d'exception</p>
        </footer>
        
    )
}

export default Footer