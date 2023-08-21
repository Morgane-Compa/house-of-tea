import CartProductCard from 'components/CartProductCard/CartProductCard'
import style from './CartPage.module.scss'
import { useCartContext } from 'contextes/CartContext'

const CartPage = () => {
    const { cartProducts } = useCartContext();
    console.log(cartProducts);
    return (
        <ul>
            {cartProducts.map((item) => <li key={item.id}> <CartProductCard cartProduct={item} /></li>)}
        </ul>

    )
}

export default CartPage