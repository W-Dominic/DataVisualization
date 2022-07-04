import React, { Component, useState, useMemo } from 'react';
import { DataItem } from '../Common/DataItem/model';
import { AxisOptions, Chart } from 'react-charts';

interface ChartData {
    label:string,
    rowData: DataItem[],
    colData:any
} 

function MyChart(props:ChartData){
    type Series = {
        label: string,
        data: DataItem[]
    }
    const data: Series[] = [
        {
            label: props.label,
            data: props.rowData
        }
    ]

    //creating the chart
    const primaryAxis:any = useMemo( 
        (): AxisOptions<DataItem> => ({
            getValue: (datum: DataItem) => datum.AccountValue,
        }),
        []
    )
    const secondaryAxes:any = useMemo(
        (): AxisOptions<DataItem>[] => [
        {
            getValue: (datum: DataItem) => datum.Date,
        }
        ],[]
        )
    return (
        <Chart 
            options={{
                data,
                primaryAxis,
                secondaryAxes
            }}
        />
    );

}

export default MyChart;