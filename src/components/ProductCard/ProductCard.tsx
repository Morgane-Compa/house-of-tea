import { IProduct } from "mocks/product.mock";
import style from "./ProductCard.module.scss";
import { formatNumber } from "services/globalMethods";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: IProduct;
}
const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  return (
    <Link to={`/product/${product.id}`}>
      <article className={`${style.productCard}`}>
        <img src={product.image.src} alt={product.image.alt} />
        <div className={style.priceCard}>
          <p>{product.price.toFixed(2)}€</p>
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
    </Link>
  );
};

export default ProductCard;
