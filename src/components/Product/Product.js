import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    
const {name,img,price,ratings,seller} = props.product;
 
    return (
        <div  className='product' >
          
            
            <img src={img} alt="" />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p className='product-price'>Price : ${price}</p>
            <p className='product-manufacturer'>Manufacturer : {seller}</p>
            <p className='product-rating'>Rating : {ratings} star</p>

           </div>

          
            <button onClick={()=>props.addToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>
                    Add To Cart
                </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            {/* { console.log(props.product)} */}
        </div>
    );
};

export default Product;