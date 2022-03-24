import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handleAddToCart = (product) => {
        const newCart = [...cart];
        setCart(newCart)
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
                <h3>order Summary</h3>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;