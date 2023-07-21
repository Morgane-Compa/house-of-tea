type CategoryType = 'infusions' | 'drinks' | 'sides';
type SubCategoryType = 'tea' | 'tisane' | 'coffee' | 'chocolate' | 'juice' | 'pastry' | 'dessert';
type AllergenType = 'tanin' | 'théine' | 'caféine'| 'fruit à coques' | 'lactose' |'gluten' | 'fructose' | 'vegan' | 'sans gluten'; 

export interface ISizeChoice {
    id: number;
    name: string;
    icon: string;
    price: number;
} 

// Mette un / le chemin relatif
export interface IImage {
    src: string;
    alt: string;
}
export interface ISubCategory {
    id: number;
    type: SubCategoryType;
    name: string;
    image: IImage;
}
export interface ICategory {
    id: number;
    type: CategoryType;
    name: string; 
    subCategories: ISubCategory[]
}

export interface IExtraIngredients {
    id: number;
    name: string;
    image: IImage;
    maxQuantity: number;
}

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    image: IImage;
    allergens: AllergenType[];
    category: ICategory;
    subCategory: SubCategoryType;
    isCustomizable: boolean;
    customization? : {
        isIntense: boolean;
        extras: IExtraIngredients[]
    };
    isAvalable: boolean

}
export const CATEGORIES: ICategory[] = [];
export const PRODUCTS: IProduct[] = [];
export const SIZE_CHOICE: ISizeChoice[] = []

export const TEMPERATURE_CHOICE: string[] = [
    'chaud',
    'glacé'
]
export const INTENSITY_CHOICE: string[] = [
    'délicat',
    'moyen',
    'puissant',
]