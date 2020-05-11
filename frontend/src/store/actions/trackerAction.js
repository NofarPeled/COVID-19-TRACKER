import types from '../types';
import trackerService from '../../services/trackerService';

const setCountry = country => {
    return {
        type: types.SET_COUNTRY,
        country
    };
};

const setCountries = countries => {
    return {
        type: types.SET_COUNTRIES,
        countries
    };
};

const setCountriesNamesList = countriesNames => {
    return {
        type: types.SET_COUNTRIES_NAMES_LIST,
        countriesNames
    }
}

export const getByCountry = country => {
    return async dispatch => {
        try {            
            const countryData = await trackerService.getByCountry(country);
            await dispatch(setCountry(countryData));
        } catch (err) {
            throw err;
        };
    };
};

export const getAllCountries = () => {
    return async dispatch => {
        try {
            const countriesData = await trackerService.getAllCountries();
            dispatch(setCountries(countriesData));
        } catch (err) {
            throw err;
        };
    };
};

export const getCountriesNamesList = () => {
    return async dispatch => {
        try {
            const countriesNamesList = await trackerService.getCountriesNamesList();
            dispatch(setCountriesNamesList(countriesNamesList));
        } catch (err) {
            throw err;
        };
    };
}