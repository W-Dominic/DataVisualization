import React, { useEffect, useState } from "react";
import { DataItem } from "./model";
import { loadData } from "./service";
import { Button } from "@mui/material";
import MyChart from "./MyChart";
import GenericGrid from "../Common/GenericGrid";

export function StonksLookup(props: any){
    const [rowData, setRowData] = useState([
      {Day: 0, AccountValue: 0.0, NetProfit: 0},
    ])
    const [columnDefs] = useState([
       { field: 'Day' },
       { field: 'AccountValue' },
       { field: 'NetProfit' }
    ])
    
    function onDataLoad(d : DataItem[]) : void {
        setRowData(d)
    }
    function onLoadingFailed() : void {
        console.log("loading failed")
    }

    useEffect(() => {
        loadData(onDataLoad, onLoadingFailed)
    }, [])
    
    return (
        <>
            <Button variant="text">Testing</Button>
            <div style={{width:'100%', height:500}}>
                <MyChart label="testing" rowData={rowData}/>
            </div>
            <GenericGrid rowData={rowData} colData={columnDefs}/>
        </>
    )
}
export default StonksLookup;