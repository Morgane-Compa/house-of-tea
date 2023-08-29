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
  isSelected: boolean
}


export interface IImage {
  src: string;
  alt: string;
}
export interface ISubCategory {
  id: number;
  type: SubCategoryType;
  name: string;
  image: IImage;
  isSelected: boolean;
}
export interface ICategory {
  id: number;
  type: CategoryType;
  name: string;
  isSelected: boolean;
  subCategories: ISubCategory[];
}

export interface IExtraIngredients {
  id: number;
  name: string;
  image: IImage;
  price: number
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
    isSelected: false,
    subCategories: [
      {
        id: 1,
        type: "tea",
        name: "Thés",
        image: {
          src: "/assets/subcategory-images/tea-subcategory.svg",
          alt: "sous catégorie thés ",
        },
        isSelected: false
      },
      {
        id: 2,
        type: "tisane",
        name: "Tisanes",
        image: {
          src: "/assets/subcategory-images/tisane-subcategory.svg",
          alt: "sous catégorie tisanes ",
        },
        isSelected: false
      },
    ],
  },
  {
    id: 2,
    type: "drinks",
    name: "Boissons",
    isSelected: false,
    subCategories: [
      {
        id: 3,
        type: "coffee",
        name: "Cafés",
        image: {
          src: "/assets/subcategory-images/coffee-subcategory.svg",
          alt: "sous catégorie cafés ",
        },
        isSelected: false
      },
      {
        id: 4,
        type: "chocolate",
        name: "Chocolats",
        image: {
          src: "/assets/subcategory-images/hot-chocolate-subcategory.svg",
          alt: "sous catégorie chocolats ",
        },
        isSelected: false
      },
      {
        id: 5,
        type: "juice",
        name: "Jus",
        image: {
          src: "/assets/subcategory-images/juice-subcategory.svg",
          alt: "sous catégorie jus de fruits ",
        },
        isSelected: false
      },
    ],
  },
  {
    id: 3,
    type: "sides",
    name: "Accompagnements",
    isSelected: false,
    subCategories: [
      {
        id: 6,
        type: "pastry",
        name: "Patisseries",
        image: {
          src: "/assets/subcategory-images/pastry-subcategory.svg",
          alt: "sous catégorie patisseries ",
        },
        isSelected: false
      },
      {
        id: 7,
        type: "dessert",
        name: "Desserts",
        image: {
          src: "/assets/subcategory-images/desserts-subcategory.svg",
          alt: "sous catégorie desserts ",
        },
        isSelected: false
      },
    ],
  },
];

export const PRODUCTS: IProduct[] = [
  
  // thés
  {
    id: 1,
    name: "Thé des moines",
    description: "Thé vert et noir floral",
    price: 3,
    image: {
      src: "/assets/products/teas/the-stevia-dans-tasse-verre-table.svg",
      alt: "image du thé des moines",
    },
    allergens: ["théine", "tanin", "vegan", "sans gluten"],
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
  {
    id: 2,
    name: "Thé des songes blanc",
    description: "Thé blanc aux fragrances floral",
    price: 3,
    image: {
      src: "/assets/products/teas/thé blanc.svg",
      alt: "image du thé des songes blanc",
    },
    allergens: ["théine", "tanin", "vegan", "sans gluten"],
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

  
  // cafés
  {
    id: 3,
    name: "Cappuccino",
    description: " café expresso, mélangé avec du lait et coiffé d'une mousse de lait crémeuse",
    price: 4,
    image: {
      src: "/assets/products/coffees/cappucino.svg",
      alt: "image de cappuccino",
    },
    allergens: ["caféine", "lactose", "sans gluten"],
    category: 2,
    subCategory: "coffee",
    isCustomizable: false,
    isAvailable: true,
  },
  {
    id: 4,
    name: "Expresso",
    description: " café court est un café très corsé avec un fort arôme, obtenu par percolation sous haute pression",
    price: 3.5,
    image: {
      src: "/assets/products/coffees/expresso.svg",
      alt: "image d'expresso'",
    },
    allergens: ["caféine", "vegan", "sans gluten"],
    category: 2,
    subCategory: "coffee",
    isCustomizable: false,
    isAvailable: true,
  },


  // Chocolats
  {
    id: 5,
    name: "Chocolat liégeois",
    description: "Chocolat chaud surplombé d'une crème chantilly",
    price: 4,
    image: {
      src: "/assets/products/chocolates/chocolat-viennois.svg",
      alt: "image de chocolat viennois'",
    },
    allergens: ["lactose"],
    category: 2,
    subCategory: "chocolate",
    isCustomizable: false,
    isAvailable: true,
  },
  {
    id: 6,
    name: "Chocolat à l'ancienne",
    description: "Chocolat chaud préparé de fançon ancienne, moins sucré et plus onctueux",
    price: 4,
    image: {
      src: "/assets/products/chocolates/old-chocolate.svg",
      alt: "image de chocolat à l'ancienne",
    },
    allergens: ["lactose"],
    category: 2,
    subCategory: "chocolate",
    isCustomizable: false,
    isAvailable: false,
  },


  // jus
  {
    id: 7,
    name: "smootie fraise citron",
    description: "Recette traditionnelle de boisson crémeuse mixée avec des fraises, du citron, du yaourt et de la glace pilé ",
    price: 4,
    image: {
      src: "/assets/products/juice/cocktail fraise-citron.svg",
      alt: "image de smmothie fraise citron",
    },
    allergens: ["lactose", "fructose", "sans gluten"],
    category: 2,
    subCategory: "juice",
    isCustomizable: false,
    isAvailable: true,
  },
  {
    id: 8,
    name: "smootie banane annanas",
    description: "Recette traditionnelle de boisson crémeuse mixée avec des babanes, de l'annanas, du yaourt et de la glace pilé ",
    price: 4,
    image: {
      src: "/assets/products/juice/verre-cocktails-glaces-plage-mer 1.svg",
      alt: "image de smoothie banane ananas",
    },
    allergens: ["lactose", "fructose", "sans gluten"],
    category: 2,
    subCategory: "juice",
    isCustomizable: false,
    isAvailable: true,
  },


  // desserts
  {
    id: 9,
    name: "Mi-cuit au chocolat",
    description: "Gateau au chocolat avec un coeur fondant",
    price: 5,
    image: {
      src: "/assets/products/desserts/moelleux-chocolat.svg",
      alt: "image de moelleux au chocolat",
    },
    allergens: ["lactose", "fruit à coques", "gluten", "fructose"],
    category: 3,
    subCategory: "dessert",
    isCustomizable: false,
    isAvailable: true,
  },
  {
    id: 10,
    name: "Assortiment de six macarons",
    description: "Petits gâteaux français à l'amande, granuleux et moelleux, à la forme arrondie et à la ganache gout chocolat, framboise, pistache et café",
    price: 6,
    image: {
      src: "/assets/products/desserts/macarrons.svg",
      alt: "image de macarons de différent gouts",
    },
    allergens: ["lactose", "fruit à coques", "gluten"],
    category: 3,
    subCategory: "dessert",
    isCustomizable: false,
    isAvailable: true,
  },

  // Patisseries
  {
    id: 11,
    name: "Croissant au beurre",
    description: " viennoiserie à base d'une pâte levée feuilletée spécifique, la pâte à croissant, qui comporte de la levure et une proportion importante de beurre.",
    price: 2.2,
    image: {
      src: "/assets/products/pastrys/croissants.svg",
      alt: "image de croissants",
    },
    allergens: ["lactose", "gluten"],
    category: 3,
    subCategory: "pastry",
    isCustomizable: false,
    isAvailable: true,
  },
  {
    id: 12,
    name: " Cinnamon roll",
    description: " viennoiserie originaire de Suède composé de brioche roulé avec de la pâte d'épice, notament de la canelle",
    price: 2.2,
    image: {
      src: "/assets/products/pastrys/cinnamon-roll.svg",
      alt: "image de croissants",
    },
    allergens: ["lactose", "gluten"],
    category: 3,
    subCategory: "pastry",
    isCustomizable: false,
    isAvailable: true,
  }
];

export const SIZE_CHOICE: ISizeChoice[] = [
  {
    id: 1,
    name: "Petit",
    icon: "/assets/icons/smallcup.png",
    price: 0,
    isSelected: true
  },
  {
    id: 2,
    name: "Moyen",
    icon: "/assets/icons/midcup.png",
    price: 2,
    isSelected: false
  },
  {
    id: 3,
    name: "Grand",
    icon: "/assets/icons/bigcup.png",
    price: 4,
    isSelected: false
  },
];

export const TEMPERATURE_CHOICE: string[] = ["chaud", "glacé"];

export const INTENSITY_CHOICE: string[] = ["délicat", "moyen", "puissant"];
