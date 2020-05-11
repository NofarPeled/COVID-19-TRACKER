import React from 'react';

const PageNotFound = props => {
    const  { errValue } = props;
    
    return (
        <section className = 'page-not-found'>
            <h2 className = 'error-msg'>
                { errValue }
            </h2>
            <img 
                src = { require('../assets/img/404.gif') }
                alt = 'error message'
                className = 'error-gif'
            />
        </section>
    )
}

export default PageNotFound;