import React, { useState } from 'react';

const CountriesCasesTable = props => {
    const { countries } = props;
    const [ sortBy, setSort ] = useState({order: 1, key: 'Total Cases'});

    // creates a table header jsx
    const tableHead = countries.data ? Object.keys(countries.data[0]).map(title => {
        return (
            <th 
                key = { title }
                onClick = { () => setSort({ 
                    order: sortBy.key === title 
                        ? parseInt(sortBy.order)*(-1) 
                        : sortBy.order, key: title})
                }> 
                <h4 className = 'table-header-title'>
                    {
                        title
                    } 
                    <span className = 'sort-arrow'>
                        &#8597;
                    </span>
                </h4>
            </th>
            )
        }) : false;

    // sort countries by sortBy        
    const sortedCountriesList = countries.data ? countries.data.sort((a, b) => {
        const firstCountry = sortBy.order === -1 ? a : b;
        const secondCountry = sortBy.order === -1 ? b : a;
        
        return isFinite(firstCountry[sortBy.key] - secondCountry[sortBy.key]) 
            ? firstCountry[sortBy.key] - secondCountry[sortBy.key] 
            : isFinite(firstCountry[sortBy.key]) ? -1 : 1;
    }) : [];

    // transfer sorted countries array into jsx
    const countriesList = sortedCountriesList.map(country => {
        return (
            <tr key = { `${country['Country, Other']}-tr` }>
                { Object.values(country).map((val,idx) => {
                    return (
                        <td key = { `${idx}-${country['Country, Other']}-td` }>
                            { val }
                        </td>
                    )
                })}
            </tr>
        )
    
    })
    

    return (
        <section className = 'country-cases-section'>
            <table className = 'country-case-table'>
                <thead>
                    <tr>
                        {
                            tableHead 
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        countriesList
                    }
                </tbody>
            </table>
        </section>
    )
}

export default CountriesCasesTable;