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
export const getProductById = (id: number) => {
    const result = PRODUCTS.find(product => product.id === id);
    if(result) return result;
}
