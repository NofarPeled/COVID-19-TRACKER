import React from  'react';

const FilterBySelect = props => {
   const { select } = props;
    
   const selectList = select.options.map( option => {
       return (
            <option key = { option.title } value = { option.value } name = { select.name } >
                { option.title }
            </option>
        ) 
   })

    return (
        <select 
            className = "filter-by-select" 
            defaultValue = {select.default} 
            onChange = { 
                ev => { 
                    props.filterSelected( 
                    { name: select.name, value: ev.target.value} )
                } 
            }
        >   
            {
                selectList
            }
        </select>
    )
}

export default FilterBySelect;