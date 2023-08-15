import { IProduct} from "mocks/product.mock";
import style from "./ProductCard.module.scss";
import { formatNumber } from "services/globalMethods";

interface ProductCardProps {
    product: IProduct
}
const ProductCard = (props: ProductCardProps) => {
  const {product} = props;

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
