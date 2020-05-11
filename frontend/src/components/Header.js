import React from 'react';

const Header = () => {
    
    return (
        <section className = 'header-section'>
            <img 
                src = { require('../assets/img/corona-virus.png')}
                alt = 'corona-virus-img'
                className = 'header-logo'
            />       
            <span className = 'header-circle-clip-path'/>     
            <h2 className = 'header-title'>Coronavirus Tracker</h2>
        </section>
    )
}

export default Header;