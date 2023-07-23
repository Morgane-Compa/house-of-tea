import style from './BackButton.module.scss';

interface BackButtonProps {
    callback: () => void;
}

const BackButton = (props: BackButtonProps) => {

    const {callback} = props;

    return(
        <>
        <button className={style.backButton} onClick={callback}><img src="/assets/icons/go-back-icon.svg" alt="retour" className={style.svg}/></button>
        </>
    )
}

export default BackButton;