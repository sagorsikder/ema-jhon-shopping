import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Order summary from cart component</h1>
            <p>Product Selected : {cart.length}</p>
        </div>
    );
};

export default Cart;