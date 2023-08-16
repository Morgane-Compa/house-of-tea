import style from './ProductListPage.module.scss'
import { CATEGORIES, IProduct } from 'mocks/product.mock'
import CategoryButton from 'components/CategoryButton/CategoryButton'
import FilterList from 'components/FilterList/FilterList'
import { getAllProducts } from 'services/product.service'
import { useLoaderData } from 'react-router-dom'
import ProductsList from 'components/ProductsList/ProductsList'

export const productsLoader = async (): Promise<IProduct[]> => {
    const products = await getAllProducts();
    return products;
};
const ProductListPage = () => {
    const products = useLoaderData() as IProduct[];
    return(
        <>
            <ul className={style['category-list']}>
                {CATEGORIES.map((category) => <li key={category.id}><CategoryButton category={category}/></li>)}
            </ul>
            <FilterList />
            <ProductsList products={products} />
        </>
    )
}

export default ProductListPage