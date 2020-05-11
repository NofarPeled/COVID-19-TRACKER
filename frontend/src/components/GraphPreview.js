import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const GraphPreview = props => {
    const { title, numList, xList } = props.graphInfo;
    
    const options = {
        title: {
            text: title
        },
        series: [{
            data: numList,
            title: 'Confimed'
        }],
        xAxis: {
            categories: xList
        },
        colors: ['green']
    }

    return (
        <div 
            className = 'high-charts-graph'
        >
            <HighchartsReact 
                 
                Highcharts = { Highcharts } 
                options = { options }
            />
        </div>

    )
}

export default GraphPreview;