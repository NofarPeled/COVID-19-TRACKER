import React from 'react';

import GraphPreview from './GraphPreview';
import Loader from './Loader';
import PageNotFound  from './PageNotFound';

import utilService from '../services/utilService';

const GraphList = props => {
    const { graphCategories, country } = props;

    const graphList = graphCategories.map((category, idx) => {
        return (
            <li className = 'graph-preview-li' key = { `${idx}-graph-preview` }>
                <GraphPreview
                    graphInfo = {{
                        numList: country.data.map(val => {
                            return val[category]
                        }), 
                        xList: country.data.map(val => {
                            return utilService.getFormatDate(val.Date)
                        }),
                        title: `${ category } Coronavirus Cases in ${ country.data[0].Country }` 
                    }}
                />
            </li>
        )
    });

    return (
        <ul className = 'graph-list-section clean-list'>
            {
                country 
                    ? country.data[0].Country 
                        ? graphList
                        : <PageNotFound errValue = 'Country' />
                    : <Loader/>
            }
        </ul>
    )
}

export default GraphList;