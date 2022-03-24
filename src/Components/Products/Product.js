import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {name, img, price, seller, ratings} = props.product;

    return(
        <div>
            <div className="product">
            <img src={img} alt=""/>
            <div className="product-info">
            <h4 className='prd-name'>{name}</h4>
            <p>Price: ${price}</p>
            <p><small>Saller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
            </div>
            <button className='cart-btn' onClick={() => props.handleAddToCart(props.product)}>
                <p >Add To Cart</p>          
            </button>
            </div>
           
        </div>
    );
};

export default Product;