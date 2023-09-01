import style from './ProductListPage.module.scss'
import { CATEGORIES, ICategory, IProduct, ISubCategory } from 'mocks/product.mock'
import CategoryButton from 'components/CategoryButton/CategoryButton'
import FilterList from 'components/FilterList/FilterList'
import { getAllProducts, getProductsByCategory, getProductsBySubCategory } from 'services/product.service'
import { useLoaderData } from 'react-router-dom'
import ProductsList from 'components/ProductsList/ProductsList'
import { useEffect, useState } from 'react'

export const productsLoader = async (): Promise<IProduct[]> => {
    const products = await getAllProducts();
    return products;
};
const ProductListPage = () => {
    const [products, setProducts] = useState<IProduct[]>(useLoaderData() as IProduct[])
    const [category, setCategory] = useState<ICategory | undefined>();
    const [subCategory, setSubCategory] = useState<ISubCategory | undefined>();
    const getCategory = (cat: ICategory) => {
        setCategory(cat);
        setSubCategory(undefined);
        setProducts(getProductsByCategory(cat.id));
    } 
    const getSubCategory = (subCategory: ISubCategory) => {
        setSubCategory(subCategory);
        setProducts(getProductsBySubCategory(subCategory.type));
    }
    useEffect(() =>{
        window.scrollTo({ top: 0 , left: 0, behavior: 'smooth' });
       
      },[])
    return(
        <section className={style['products-list']}>
            <ul className={style['category-list']}>
                {CATEGORIES.map((category) => <li key={category.id}><CategoryButton category={category} selectCategory={getCategory}/></li>)}
            </ul>
            <FilterList filters={category?.subCategories} getSubCategory={getSubCategory}/>
            <ProductsList products={products} />
        </section>
    )
}

export default ProductListPage