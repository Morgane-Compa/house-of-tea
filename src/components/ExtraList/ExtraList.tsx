import ExtraCard from "components/ExtraCard/ExtraCard";
import { PRODUCTS } from "../../mocks/product.mock";
import style from './ExtraList.module.scss';
import { useParams } from "react-router-dom";

const ExtraList = () => {
        // Je récupère l'id de l'url
        const { id } = useParams<{ id: string }>(); 
        // Si l'id n'existe pas, je gère l'erreur (Si message "may be undefined" et rejet de l'id : 
        // => la gestion de l'éventuelle erreur requise)
        if (!id) {
            return <div>Invalid product ID</div>;
          }
        // Je passe l'ID de string à Number
        const parsedId = parseInt(id, 10);
        // Je vais chercher quel idProduit correspond à l'id de l'url
        const product = PRODUCTS.find(product => product.id === parsedId);

    return (
        <div className={style.container}>
            {
            product?.customization?.extras.map((extra, index) => {
                //console.log(index);
                return <ExtraCard key={index} id={extra.id} name={extra.name} image={extra.image.src} price={extra.price} maxQuantity={extra.maxQuantity} />})
            }
        </div>
    )
};

export default ExtraList;