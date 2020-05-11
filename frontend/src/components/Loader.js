import React from 'react';

const Loader = () => {

    return (
        <section className = 'loader-section'>
            <img 
                src = { require('../assets/img/loader.svg')} 
                className = 'loader-img'
                alt = 'loading'
            />
        </section>
    )
}

export default Loader;