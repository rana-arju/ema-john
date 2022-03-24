import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import {addToDb, getStoredCart} from "../../utilities/fakedb";

import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
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
                <Cart cart = {cart} />
            </div>
        </div>
    );
};

export default Shop;