import { IProduct, PRODUCTS } from 'mocks/product.mock'
import style from './ProductDetailCard.module.scss'
import { formatNumber } from 'services/globalMethods';

const ProductDetailCard = () => {
    const product: IProduct = PRODUCTS[0];
    const formatedPrice = formatNumber(product.price);

    return (
        <article className={`${style.productCard}`}>
            <img src={product.image.src} alt={product.image.alt} />
            <div className={`${style.infos}`}>
                <h2>{product.name}</h2>
                <p>{formatedPrice}€</p>
                <p>{product.description}</p>
            </div>
        </article>)
}

export default ProductDetailCard