import style from './CallToActionButton.module.scss';

interface CallToActionButtonProps {
    title: string;
    buttonType: "submit" | "button" | "reset" | undefined;
    callback: () => void; // pas besoin puisque submit
}

const CallToActionButton = (props: CallToActionButtonProps) => {

    const {title, callback, buttonType} = props;
    return <button type={buttonType} onClick={() => {callback()}} className={style.submit}>{title}</button>
}

export default CallToActionButton;