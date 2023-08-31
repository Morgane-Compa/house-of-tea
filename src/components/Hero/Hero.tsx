import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={style.hide}>
      <img src="/assets/other-images/hero.svg" alt="Bannière"/>
    </div>
  );
};
export default Hero;
