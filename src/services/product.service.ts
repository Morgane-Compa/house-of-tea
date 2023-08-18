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
export const getProductsBySubCategory = (subCategory: SubCategoryType ): IProduct[] => {
    return PRODUCTS.filter(product => product.subCategory === subCategory);
}