import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

const Grandpa = () => {
    const ring = 'dimond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
            <Father ring={ring} />
            <Uncle />
            <Aunty ring={ring}/>
            </section>
        </div>
    );
};

export default Grandpa;