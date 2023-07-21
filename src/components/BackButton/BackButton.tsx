import style from './BackButton.module.scss';

const BackButton = () => {

    return(
        <>
        <button className={style.backButton}><img src="/assets/icons/go-back-icon.svg" alt="retour" className={style.svg}/></button>
        </>
    )
}

export default BackButton;