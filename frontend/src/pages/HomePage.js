import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GraphPreview from '../components/GraphPreview';
import CountriesCasesTable from '../components/CountriesCasesTable';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import PageNotFound from '../components/PageNotFound';

import utilService from '../services/utilService';
import { getAllCountries, getByCountry } from '../store/actions/trackerAction';

const HomePage = () => {

    const country = useSelector(state => state.trackerReducer.country);
    const countries = useSelector(state => state.trackerReducer.countries);

    const dispatch = useDispatch();

    const [ countryErr, setCountryErr ] = useState();
    const [ countriesErr, setCountriesErr ] = useState();

    useEffect(()=> {
        if (!countries || countries.createdAt !== utilService.getFormatDate()) getCountries();
        if (!country || country.createdAt !== utilService.getFormatDate()) getCountry();
    }, [])

    const getCountry = async countryName => {
        try {
            await dispatch(getByCountry(countryName));
            setCountryErr();
        } catch (err) {
            setCountryErr(err);
        };
    };

    const getCountries = async () => {
        try {
            await dispatch(getAllCountries());
            setCountriesErr();
        } catch (err) {
            setCountriesErr(err);
        };
    };

    const graphInfo = country
        ? {
            numList: country.data.map(val => {
                return val.Confirmed
            }),
            xList: country.data.map(val => {
                return utilService.getFormatDate(val.Date)
            }),
            title: `Total Coronavirus Cases in ${country.data[0].Country}` 
        }
        : null
     
    return (
        <section className = 'home-page-section'>
            <Navbar 
                country = { country } 
                countries = { countries } 
                getCountry = { getCountry } 
                getCountries = { getCountries }
            />
            {
                country && !countryErr
                    ? <GraphPreview graphInfo = { graphInfo }/>
                    : countryErr  
                        ? <PageNotFound errValue = { countryErr }/>
                        : <Loader/>
            }
            {
                countries 
                    ? <CountriesCasesTable countries = { countries }/>
                    : countriesErr
                        ? <PageNotFound errValue = { countriesErr }/>
                        : <Loader/>
            }
        </section>
    )
}

export default HomePage;