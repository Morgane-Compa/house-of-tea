import CartProductCard from 'components/CartProductCard/CartProductCard'
import style from './CartPage.module.scss'
import { useCartContext } from 'contextes/CartContext'

const CartPage = () => {
    const { cartProducts, removeAll, GetTotalProduct, getTotalCartPrice} = useCartContext();
    console.log(cartProducts);
    return (
        <main>
            <div className={style.firstSection}>
                <h2>Panier</h2>
                <span  onClick={removeAll} >Vider le panier</span>
            </div>
            <ul className={style.ProductCard}>
                {cartProducts.map((item) => <li key={item.id}> <CartProductCard cartProduct={item} /></li>)}
            </ul>
            <div className={style.lastSection}>
                <p>Articles : </p>
                <p>{GetTotalProduct()}</p>
            </div>
            <div className={style.lastSection}>
                <p>Total : </p>
                <p>{getTotalCartPrice()} €</p>
            </div>
        </main>

    )
}

export default CartPage