import { IProduct } from 'mocks/product.mock'
import style from './ProductDetailCard.module.scss'


interface ProductDetailCardProps{
    product: IProduct
}
const ProductDetailCard = (props: ProductDetailCardProps) => {
    const {product} = props;

    return (
        <article className={`${style.productCard}`}>
            <img src={product.image.src} alt={product.image.alt} />
            <div className={`${style.infos}`}>
                <h2>{product.name}</h2>
                <span>{product.price}€</span>
                <span>{product.description}</span>
            </div>
        </article>)
}

export default ProductDetailCard