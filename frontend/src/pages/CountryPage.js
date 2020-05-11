import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GraphList from '../components/GraphList';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import PageNotFound from '../components/PageNotFound';

import { getByCountry } from '../store/actions/trackerAction';

const CountryPage = props => {
    
    const country = useSelector(state => state.trackerReducer.country);

    const dispatch = useDispatch();
    const [ countryErr, setCountryErr ] = useState();
    const { countryName } = props.match.params;

    useEffect(()=> {
        getCountry(countryName ? countryName : null);
     }, [])

    const getCountry = async countryName => {
        try {
            await dispatch(getByCountry(countryName));
            setCountryErr();        
        } catch (err) {
            setCountryErr(err);        
        }
    }




        
    return (
        <section className = 'country-page-section'>
            <Navbar 
                getCountry = { getCountry } 
                country = { country }
                path = {`/${countryName}`}
            />
            {
                country && !countryErr
                    ? <GraphList 
                        graphCategories = { ['Confirmed', 'Active' ,'Recovered', 'Deaths'] }
                        country = { country }
                    />
                    : countryErr
                        ? <PageNotFound errValue = { countryErr }/>
                        : <Loader/>
            }
        </section>
    )
}

export default CountryPage;

