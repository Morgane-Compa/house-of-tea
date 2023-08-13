import ProductCard from 'components/ProductCard/ProductCard'
import style from './ProductListPage.module.scss'
import { CATEGORIES } from 'mocks/product.mock'
import CategoryButton from 'components/CategoryButton/CategoryButton'
import FilterList from 'components/FilterList/FilterList'

const ProductListPage = () => {
    return(
        <>
            <ul className={style['category-list']}>
                {CATEGORIES.map((category) => <li key={category.id}><CategoryButton category={category}/></li>)}
            </ul>
            <FilterList />
            <ProductCard />
        </>
    )
}

export default ProductListPage