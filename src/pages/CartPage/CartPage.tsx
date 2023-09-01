import CartProductCard from 'components/CartProductCard/CartProductCard'
import style from './CartPage.module.scss'
import { useCartContext } from 'contextes/CartContext'
import { Link, useNavigate } from 'react-router-dom';
import CallToActionButton from 'components/CallToActionButton/CallToActionButton';
import { useEffect } from 'react';

const CartPage = () => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate("/payment")
    };
    useEffect(() =>{
        window.scrollTo({ top: 0 , left: 0, behavior: 'smooth' });
       
      },[])
    const { cartProducts, removeAll, getTotalProduct, getTotalCartPrice } = useCartContext();

    return (
        <section className={style.cart}>
            <div className={style.firstSection}>
                <h2>Panier</h2>
                <span onClick={removeAll} >Vider le panier</span>
            </div>

            <ul className={style.ProductCard}>
                {cartProducts.map((item) => <li key={item.id}> <CartProductCard cartProduct={item} /></li>)}
            </ul>
            
            <div className={style.lastSection}>
                <p>Articles : </p>
                <p>{getTotalProduct()}</p>
            </div>
            <div className={style.lastSection}>
                <p>Total : </p>
                <p>{getTotalCartPrice().toFixed(2)} €</p>
            </div>

            <Link to='/products' className={style.link}>Ajouter des produits</Link>

            <div className={style.button}>
                <CallToActionButton buttonType="button" title={"Valider le panier"} callback={redirect} />
            </div>
            </section>
    )
}

export default CartPage