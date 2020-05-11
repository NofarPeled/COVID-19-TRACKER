import React from 'react';

import FilterBySelect from './FilterBySelect';

const FilterCountries = props => {
    const { country, countriesNameList } = props;
    
    const selectList = countriesNameList.map(currCountry => {
        return {
            value: currCountry.Country,
            title: currCountry.Country,
        }
    })

    const filterSelected = target => {
        props.filterSelected(target.value);
    }

    return (
        <section className = 'filter-countries-section'>
            <FilterBySelect 
                select = {{
                    name: 'country',
                    options: selectList,
                    default: country
                }}
                filterSelected = { filterSelected }
            />
        </section>
    )
}


export default FilterCountries