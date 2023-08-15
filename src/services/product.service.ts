import { PRODUCTS, SubCategoryType, IProduct } from "mocks/product.mock"

export const getProducts = () => {
    console.log('ok')
}

export const getAllProducts = (): IProduct[] => {
    return PRODUCTS; 
}
export const getProductsByCategory = (categoryId:number): IProduct[] => {
    return PRODUCTS.filter(product => product.category === categoryId);
}
export const getProductsBySubCategory = (products: IProduct[],subCategory: SubCategoryType ): IProduct[] => {
    return products.filter(product => product.subCategory === subCategory);
}