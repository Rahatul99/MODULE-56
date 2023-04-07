import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import './Cart.css';

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
            <h2 className={cart.length === 1 ? 'blue' : 'green'}>Order summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'green' : 'red'}`}>Conditional CSS class</p>
            {cart.length > 2 ? 
            <span className='purple'>Aro kino</span> 
            : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => <p
                     key={tshirt._id}>
                        {tshirt.name}
                        <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length === 2 && <p>Double Bonanza!!!</p>
            }
            {
                cart.length !==3 || <h3>4 tah tho hoilo nah</h3>
            }
        </div>
    );
};

export default Cart;