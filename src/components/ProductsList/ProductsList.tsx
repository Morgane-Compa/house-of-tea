import { IProduct } from 'mocks/product.mock'
import style from './ProductsList.module.scss'
import ProductCard from 'components/ProductCard/ProductCard';

interface ProductsListProps {
    products: IProduct[]
}
const ProductsList = (props: ProductsListProps) => {
    const {products} = props;
    return(
        <ul className={style.productList}>
            {products.map(product => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
            ))}
        </ul>
    )
}

export default ProductsList