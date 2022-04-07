import { FaRegTrashAlt } from 'react-icons/fa';

import React from 'react';
import "./ReviewItem.css";

const ReveiwItem = (props) => {
    const {product, handdleRemoveProduct} = props;
    const {name, price, shipping, quantity, img} = props.product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="details-container">
                <div className='details'>
                    <h4 className='product-name' title={name}>
                        {name.length > 15 ? name.slice(0,15) + "...": name }
                        </h4>
                        
                    <p>Price: <span className='price-color'> $ {price}</span></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="removeBtn">
                    <button className='btn' onClick={() =>handdleRemoveProduct(product)}>
                      <p><FaRegTrashAlt /></p> 

                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReveiwItem;