import ProductCard from 'components/ProductCard/ProductCard'
import style from './ProductListPage.module.scss'
import { CATEGORIES } from 'mocks/product.mock'
import CategoryButton from 'components/CategoryButton/CategoryButton'

const ProductListPage = () => {
    return(
        <>
            <ul className={style['category-list']}>
                {CATEGORIES.map((category) => <li key={category.id}><CategoryButton category={category}/></li>)}
            </ul>
            <ProductCard />
        </>
    )
}

export default ProductListPage