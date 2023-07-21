import { IProduct } from "mocks/product.mock";
import style from "./ProductCard.module.scss";
import { formatNumber } from "services/globalMethods";

const ProductCard = () => {
  const product: IProduct = {
    id: 1,
    name: "Thé noir",
    description: "Thé noir d'Inde de qualité",
    price: 4.9,
    image: {
      src: "/assets/products/teas/black-tea.svg",
      alt: "the-noir",
    },
    allergens: ["tanin", "théine"],
    category: 1,
    subCategory: "tea",
    isCustomizable: true,
    customization: {
      isIntense: true,
      extras: [
        {
          id: 1,
          name: "sucre",
          image: {
            src: "",
            alt: "",
          },
          maxQuantity: 5,
        },
      ],
    },
    isAvailable: true,
  };

  const formatedPrice = formatNumber(product.price);
  return (
    <article className={`${style.productCard}`}>
      <img src={product.image.src} alt={product.image.alt} />
      <div>
        <p>{formatedPrice}€</p>
      </div>
      <h4>{product.name}</h4>
      <ul>
        Allergènes:
        {product.allergens.map((allergen, index) => (
          <li key={index}>{allergen}, </li>
        ))}
      </ul>
      <button className={style.selectProductBtn}>Sélectionner</button>
    </article>
  );
};

export default ProductCard;
