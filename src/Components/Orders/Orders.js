import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReveiwItem from '../ReviewItem/ReveiwItem';


const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handdleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='review-item-container'>
                {
                    cart.map(product => <ReveiwItem
                        key={product.id}
                        product ={product}
                        handdleRemoveProduct = {handdleRemoveProduct}
                    ></ReveiwItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} > 
                {/* <Link to="order">
                    <button>Review Order</button>
                </Link> */}
                </Cart>
            </div>
        </div>
    );
};

export default Orders;