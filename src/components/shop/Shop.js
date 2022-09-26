import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart]= useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
   
    const handleAddToCart = (product) =>{
        const newProduct =[...cart,product] ;
        setCart(newProduct);
    }
   

    return (
        <div className='shop-container'>
            <div className="product-container">

           {

           products.map(product=><Product product ={product }
           
           addToCart = {handleAddToCart}
           key ={product.id}
           ></Product>)
         

           }


          
               
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
           
            </div>
        </div>
    );
};

export default Shop;