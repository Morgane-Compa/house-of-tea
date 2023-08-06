import SizeChoiceList from "components/SizeChoiceList/SizeChoiceList";
import style from "./ProductDetailsPage.module.scss";
// import ExtraCard from "components/ExtraCard/ExtraCard";
import TemperatureChoiceList from "components/TemperatureChoiceList/TemperatureChoiceList";
import IntensityChoiceList from "components/IntensityChoiceList/IntensityChoiceList";
import ExtraList from "components/ExtraList/ExtraList";

const ProductDetailsPage = () => {

  return (
    <>
    <SizeChoiceList />
    <TemperatureChoiceList />
    <IntensityChoiceList />
    {/* <div className={style.extraContainer}>
    <ExtraCard name={"sugar"} image={"/assets/products/extras/citron.svg"} price={0}/>
    <ExtraCard name={"vanille"} image={"/assets/products/extras/baton-vanille.svg"} price={2}/>
    <ExtraCard name={"miel"} image={"/assets/products/extras/nids-abeilles-frais.svg"} price={4}/>
    <ExtraCard name={"baies"} image={"/assets/products/extras/baies-fraiches-forets-blanc (1).svg"} price={4}/>
    </div> */}
    <ExtraList />
    </>
  );
};

export default ProductDetailsPage;
