import types from '../types';

const initState = {
    country: null,
    countries: null,
    countriesName: []
};

const trackerReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_COUNTRIES: 
            return {
                ...state,
                countries: action.countries
            }
        case types.SET_COUNTRY: 
            return {
                ...state, 
                country: action.country
            }
        case types.SET_COUNTRIES_NAMES_LIST: 
            return {
                ...state,
                countriesNames: action.countriesNames
            }
        default: 
            return state;
    };
};

export default trackerReducer;