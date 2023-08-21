import CartProductCard from 'components/CartProductCard/CartProductCard'
import style from './RecapPage.module.scss'
import { useCartContext } from 'contextes/CartContext';

const RecapPage = () => {

    const { cartProducts } = useCartContext();

    return (
        <ul>
            {cartProducts.map((item) => <li key={item.id}> <CartProductCard cartProduct={item} /></li>)}
        </ul>
    )
}

export default RecapPage