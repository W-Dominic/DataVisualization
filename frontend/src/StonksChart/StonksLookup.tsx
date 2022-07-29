import React, { useEffect, useState } from "react";
import { DataItem } from "./model";
import { loadData } from "./service";
import { Button } from "@mui/material";
import MyChart from "./MyChart";
import GenericGrid from "../Common/GenericGrid";

export function StonksLookup(props: any){
    const [rowData, setRowData] = useState([
      {date: 0.0, accountvalue: 0.0, investments: 0.0, rothira: 0.0, netprofit: 0},
    ])
    const [columnDefs] = useState([
       { field: 'date' },
       { field: 'accountvalue' },
       { field: 'investments' },
       { field: 'rothira' },
       { field: 'netprofit' }
    ])
    
    function onDataLoad(d : DataItem[]) : void {
        setRowData(d)
        console.log(d)
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