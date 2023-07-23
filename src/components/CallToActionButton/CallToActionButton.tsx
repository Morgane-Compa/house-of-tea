import style from './CallToActionButton.module.scss';

interface CallToActionButtonProps {
    title: string;
    callback: () => void;
}

const CallToActionButton = (props: CallToActionButtonProps) => {
    const {title, callback} = props;

    return(<button type="submit" onClick={callback} className={style.submit}>{title}</button>)
}

export default CallToActionButton;