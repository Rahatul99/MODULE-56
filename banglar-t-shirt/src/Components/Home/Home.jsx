import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt =>{
        const exists = cart.find(ts => ts._id === tshirt._id)
        if(exists){
            toast('Here is your toast.')
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = id =>{
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className='t-shits-container'>
                {
                    tshirts.map(tshirt => <Tshirt 
                        key={tshirt._id} 
                        tshirt={tshirt} 
                        handleAddToCart={handleAddToCart}/>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}/>
            </div>
        </div>
    );
};

export default Home;