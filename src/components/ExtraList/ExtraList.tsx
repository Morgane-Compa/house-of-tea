import ExtraCard from "components/ExtraCard/ExtraCard";
import { PRODUCTS } from "../../mocks/product.mock";
import style from './ExtraList.module.scss';

const ExtraList = () => {

    return (
        <div className={style.container}>
            {/* J'itère le produit [0] => voir si plsr produits dans le mock */}
            {PRODUCTS[0].customization?.extras.map((extra, index) => {
                //console.log(index);
                return <ExtraCard key={index} 
                name={extra.name} 
                image={extra.image.src} 
                price={extra.price} />})
            }
        </div>
    )
};

export default ExtraList;