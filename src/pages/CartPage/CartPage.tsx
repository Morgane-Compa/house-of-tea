import CartProductCard from 'components/CartProductCard/CartProductCard'
import style from './CartPage.module.scss'
import { useCartContext } from 'contextes/CartContext'

const CartPage = () => {
    const { cartProducts, removeAll } = useCartContext();
    console.log(cartProducts);
    return (
        <main>
            <div className={style.firstSection}>
                <h2>Panier</h2>
                <span  onClick={removeAll} >Vider le panier</span>
            </div>
            <ul>
                {cartProducts.map((item) => <li key={item.id}> <CartProductCard cartProduct={item} /></li>)}
            </ul>
        </main>

    )
}

export default CartPage