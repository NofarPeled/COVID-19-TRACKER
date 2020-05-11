import httpService from './httpService';
import utilService from './utilService';
import axios from 'axios';

export default {
    getAllCountries, 
    getByCountry,
    getCountriesNamesList
}

const COUNTRY_API_KEY = 'country';
const TRACKER_API_KEY = 'tracker';

async function getAllCountries () {
    try {
        return await httpService.get(TRACKER_API_KEY);
    } catch (err) {
        throw 'Couldn\'t Get Countries Table, Please Try Again Later or Refresh the Page';
    };
};

async function getByCountry(country) {
    
    country = country 
        ? country
        : localStorage.getItem(COUNTRY_API_KEY) 
            ? localStorage.getItem(COUNTRY_API_KEY)
            : 'Israel';

    try {
        const res = await axios.get(`https://api.covid19api.com/total/country/${ country }`);  

        if (!res.data.length) return Promise.reject('No Data About this County');

        localStorage.setItem(COUNTRY_API_KEY, country);  
        return { 
            data: res.data,
            createdAt: utilService.getFormatDate(new Date())
        }

    } catch {
        throw `Couldn't Find ${country 
            ? 'Country ' + country 
            : 'this Country'}
        `;
    };
};


async function getCountriesNamesList() {
    try {
        const res = await axios.get('https://api.covid19api.com/countries'); 
        const sortedCountries = res.data.sort((a, b)=> {
            return a.Country < b.Country ? -1 : 1
        })
        return sortedCountries;
    } catch {
        throw 'Couldn\'t Get Countries List, Please Try Again Later or Refresh the Page';
    };
};