import style from './CallToActionButton.module.scss';

interface CallToActionButtonProps {
    title: string;
    buttonType: "submit" | "button" | "reset" | undefined;
    callback: () => void | undefined | string; 
}

const CallToActionButton = (props: CallToActionButtonProps) => {

    const {title, callback, buttonType} = props;
    return <button type={buttonType} onClick={() => {callback()}} className={style.submit}>{title}</button>
}

export default CallToActionButton;