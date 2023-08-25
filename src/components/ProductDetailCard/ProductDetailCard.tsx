import { PRODUCTS } from 'mocks/product.mock'
import style from './ProductDetailCard.module.scss'
import { formatNumber } from 'services/globalMethods';
import { useParams } from "react-router-dom";

const ProductDetailCard: React.FC = () => {
    // Je récupère l'id de l'url
    const { id } = useParams<{ id: string }>(); 
    // Si l'id n'existe pas, je gère l'erreur (Si message "may be undefined" et rejet de l'id : 
    // => la gestion de l'éventuelle erreur requise)
    if (!id) {
        return <div>Invalid product ID</div>;
    } 
    // Ancien code => const product: IProduct = PRODUCTS[0];
    // Je passe l'ID de string à Number
    const parsedId = parseInt(id, 10);
    // Je vais chercher quel idProduit correspond à l'id de l'url
    const product = PRODUCTS.find(product => product.id === parsedId);
    const formatedPrice = formatNumber(product!.price);

    return (
        <article className={`${style.productCard}`}>
            <img src={product!.image.src} alt={product!.image.alt} />
            <div className={`${style.infos}`}>
                <h2>{product!.name}</h2>
                <span>{formatedPrice}€</span>
                <span>{product!.description}</span>
            </div>
        </article>)
}

export default ProductDetailCard