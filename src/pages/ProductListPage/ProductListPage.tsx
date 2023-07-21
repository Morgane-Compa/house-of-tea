import ProductCard from 'components/ProductCard/ProductCard'
import style from './ProductListPage.module.scss'
import CategoryButton from 'components/CategoryButton/CategoryButton'

const ProductListPage = () => {
    return(
        <>
            <div>
                <CategoryButton />
            </div>
            <ProductCard />
        </>
    )
}

export default ProductListPage