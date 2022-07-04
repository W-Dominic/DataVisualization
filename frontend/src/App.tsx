import React, { useState } from 'react';
import { Box, Container, Button } from '@mui/material';
import GenericGrid from './Common/GenericGrid/GenericGrid';
import { DataItem } from './Common/DataItem/model';
import MyChart from './Chart/MyChart';
function App() {
  const [rowData] = useState([
       {Date: "6/30/22", AccountValue: 10300.56, NetProfit: 0},
       {Date: "7/1/22", AccountValue: 10400.56, NetProfit: 100},
       {Date: "7/2/22", AccountValue: 11400.56, NetProfit: 1100},
   ]);
   
   const [columnDefs] = useState([
       { field: 'Date' },
       { field: 'AccountValue' },
       { field: 'NetProfit' }
   ])
  
  return (
    <div>
      <MyChart label="testing" rowData={rowData} colData={columnDefs}/>
      <Button variant="text">Testing</Button>
      <GenericGrid rowData={rowData} colData={columnDefs}/>
    </div>
  );
}
export default App;
