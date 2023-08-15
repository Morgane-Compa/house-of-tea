export type CategoryType = "infusions" | "drinks" | "sides";
export type SubCategoryType =
  | "tea"
  | "tisane"
  | "coffee"
  | "chocolate"
  | "juice"
  | "pastry"
  | "dessert";
type AllergenType =
  | "tanin"
  | "théine"
  | "caféine"
  | "fruit à coques"
  | "lactose"
  | "gluten"
  | "fructose"
  | "vegan"
  | "sans gluten";

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
  subCategories: ISubCategory[];
}

export interface IExtraIngredients {
  id: number;
  name: string;
  image: IImage;
  price: number;
  maxQuantity: number;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: IImage;
  allergens: AllergenType[];
  category: number;
  subCategory: SubCategoryType;
  isCustomizable: boolean;
  customization?: {
    isIntense: boolean;
    extras: IExtraIngredients[];
  };
  isAvailable: boolean;
}
export const CATEGORIES: ICategory[] = [
  {
    id: 1,
    type: "infusions",
    name: "Autour du thé",
    subCategories: [
      {
        id: 1,
        type: "tea",
        name: "Thés",
        image: {
          src: "/assets/subcategory-images/tea-subcategory.svg",
          alt: "sous catégorie thés ",
        },
      },
      {
        id: 2,
        type: "tisane",
        name: "Tisanes",
        image: {
          src: "/asset/subcategory-image/tisane-subcategory.svg",
          alt: "sous catégorie tisanes ",
        },
      },
    ],
  },
  {
    id: 2,
    type: "drinks",
    name: "Boissons",
    subCategories: [
      {
        id: 3,
        type: "coffee",
        name: "Cafés",
        image: {
          src: "/assets/subcategory-images/coffee-subcategory.svg",
          alt: "sous catégorie cafés ",
        },
      },
      {
        id: 4,
        type: "chocolate",
        name: "Chocolats",
        image: {
          src: "/asset/subcategory-image/hot-chocolate-subcategory.svg",
          alt: "sous catégorie chocolats ",
        },
      },
      {
        id: 5,
        type: "juice",
        name: "Jus",
        image: {
          src: "/asset/subcategory-image/juice-subcategory.svg",
          alt: "sous catégorie jus de fruits ",
        },
      },
    ],
  },
  {
    id: 3,
    type: "sides",
    name: "Accompagnements",
    subCategories: [
      {
        id: 6,
        type: "pastry",
        name: "Patisseries",
        image: {
          src: "/assets/subcategory-images/pastry-subcategory.svg",
          alt: "sous catégorie patisseries ",
        },
      },
      {
        id: 7,
        type: "dessert",
        name: "Desserts",
        image: {
          src: "/asset/subcategory-image/desserts-subcategory.svg",
          alt: "sous catégorie desserts ",
        },
      },
    ],
  },
];

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: "Thé des moines",
    description: "Thé vert et noir floral",
    price: 4.3,
    image: {
      src: "/assets/products/teas/thé blanc.svg",
      alt: "image du thé des moines",
    },
    allergens: ["théine", "tanin"],
    category: 1,
    subCategory: "tea",
    isCustomizable: true,
    customization: {
      isIntense: true,
      extras: [
        {
          id: 1,
          name: "Sucre",
          image: {
            src: "/assets/products/extras/sucre-removebg-preview 1.svg",
            alt: "image de sucre pour extra",
          },
          price: 0,
          maxQuantity: 10,
        },
        {
          id: 2,
          name: "Lait",
          image: {
            src: "/assets/products/extras/Milk in different containers vector illustrations set.svg",
            alt: "image de lait pour extra",
          },
          price: 0,
          maxQuantity: 5,
        },
        {
          id: 3,
          name: "Miel",
          image: {
            src: "/assets/products/extras/nids-abeilles-frais.svg",
            alt: "image de miel pour extra",
          },
          price: 3,
          maxQuantity: 5,
        },
        {
          id: 4,
          name: "Citron",
          image: {
            src: "/assets/products/extras/citron.svg",
            alt: "image de citron pour extra",
          },
          price: 1,
          maxQuantity: 2,
        },
        {
          id: 5,
          name: "Menthe",
          image: {
            src: "/assets/products/extras/feuilles-menthe-fraiche-isolees.svg",
            alt: "image de feuille de menthe pour extra",
          },
          price: 2,
          maxQuantity: 5,
        },
        {
          id: 6,
          name: "Cannelle",
          image: {
            src: "/assets/products/extras/cannelle-anis-removebg-preview 1.svg",
            alt: "image de baton de cannelle pour extra",
          },
          price: 3,
          maxQuantity: 1,
        },
        {
          id: 7,
          name: "Vanille",
          image: {
            src: "/assets/products/extras/baton-vanille.svg",
            alt: "image de gousse de vanille pour extra",
          },
          price: 4,
          maxQuantity: 1,
        },
        {
          id: 8,
          name: "Fruit rouges",
          image: {
            src: "/assets/products/extras/baies-fraiches-forets-blanc (1).svg",
            alt: "image de fruits rouges pour extra",
          },
          price: 3,
          maxQuantity: 3,
        },
      ],
    },
    isAvailable: true,
  },
];

export const SIZE_CHOICE: ISizeChoice[] = [];

export const TEMPERATURE_CHOICE: string[] = ["chaud", "glacé"];

export const INTENSITY_CHOICE: string[] = ["délicat", "moyen", "puissant"];
