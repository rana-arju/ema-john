import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import {addToDb, getStoredCart} from "../../utilities/fakedb";
import "./Shop.css";
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [products, setProduct] = useProducts();
    useEffect(() => {
        const storeCart = getStoredCart();
        const saveCart = [];
        for (const id in storeCart){
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quentity = storeCart[id];
                addedProduct.quentity = quentity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    },[products])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
       addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key = {product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart }
                        />)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart} >
                <Link to="/order">
                    <button>Review Order</button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;