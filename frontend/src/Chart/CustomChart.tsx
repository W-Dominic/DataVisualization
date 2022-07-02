import React, { Component, useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

function CustomChart(){
    const chartData = [
    {
        quarter: 'Q1',
        spending: 450,
    },
    {
        quarter: 'Q2',
        spending: 560,
    },
    {
        quarter: 'Q3',
        spending: 600,
    },
    {
        quarter: 'Q4',
        spending: 700,
    },
    ];

    const [options] = useState(
    {
        options: {
            data: chartData,
            series: [{
                xKey: 'quarter',
                yKey: 'spending',
            }],
        }
    });

    return (
    <AgChartsReact options={options} />
    );
}

export default CustomChart;