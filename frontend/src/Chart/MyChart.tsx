import React, { useMemo } from 'react';
import { DataItem } from '../Common/DataItem/model';
import { AxisOptions, Chart } from 'react-charts';

interface ChartData {
    label:string,
    rowData: DataItem[],
    colData:any
} 
type Series = {
    label: string,
    data: DataItem[]
}

function MyChart(props:ChartData){
    const data: Series[] = [
        {
            label: props.label,
            data: props.rowData
        }
    ]

    //creating the chart
    const primaryAxis = useMemo( 
        (): AxisOptions<DataItem> => ({
            getValue: (datum: DataItem) => datum.Date
        }),
        []
    )
    const secondaryAxes = useMemo(
        (): AxisOptions<DataItem>[] => [
        {
            getValue: (datum: DataItem) => datum.AccountValue
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