import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FilterCountries from './FilterCountries';

const Navbar = props => {
    const { country, countries, path } = props;
    const countriesNameList = useSelector(state => state.trackerReducer.countriesNames);
    
    const filterSelected = value => {
        props.getCountry(value);
    }

    const updateData = () => {
        props.getCountry(country ? country.data[0].Country : '');
        if (props.getCountries) {
            props.getCountries()
        }
    }
    
    return (
        <section className = 'navbar-section'>
            {
                countriesNameList && country
                    ?   <FilterCountries 
                            filterSelected = { filterSelected }
                            country = { country.data[0].Country } 
                            countriesNameList = { countriesNameList }
                        />
                : false
            }
            {
                path && country 
                    ? <NavLink className = 'navbar-navlink' to = { process.env.PUBLIC_URL + '/' } >Home Page</NavLink>
                        : !path && country
                            ? <NavLink className = 'navbar-navlink' to = { process.env.PUBLIC_URL + `/country/${country.data[0].Country}` }>{country.data[0].Country} Status Page</NavLink>
                            : false
            }
            <h6 
                onClick = { updateData }
                className = 'last-update-time'>
                    Last Update Date { countries ? countries.createdAt : country ? country.createdAt : 'Unknown'} ⟳
            </h6>
        </section>
    )
}

export default Navbar;