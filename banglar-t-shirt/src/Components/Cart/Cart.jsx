import React from 'react';
import Tshirt from '../Tshirt/Tshirt';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please Add some products</p>
    }
    else{
        message = <div>Thanks for wasting your money</div>
    }
    return (
        <div>
            <h2>Order summary: {cart.length}</h2>
            {message}
            {
                cart.map(tshirt => <p
                     key={tshirt._id}>
                        {tshirt.name}
                        <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;