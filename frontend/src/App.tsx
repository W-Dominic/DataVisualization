import React, { useState } from 'react';
import { Box, Container, Button } from '@mui/material';
import GenericGrid from './Common/GenericGrid/GenericGrid';
import { DataItem } from './Common/DataItem/model';
import MyChart from './Chart/MyChart';
function App() {
  const [rowData] = useState([
       {Date: "6/30/22", AccountValue: 0.0, NetProfit: 0},
       {Date: "7/1/22", AccountValue: 10400.56, NetProfit: 100},
       {Date: "7/2/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/3/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/4/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/5/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/6/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/7/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/8/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/9/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/10/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/11/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/12/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/13/22", AccountValue: 11400.56, NetProfit: 1100},
       {Date: "7/14/22", AccountValue: 11400.56, NetProfit: 1100},
   ]);
   
   const [columnDefs] = useState([
       { field: 'Date' },
       { field: 'AccountValue' },
       { field: 'NetProfit' }
   ])
  
  return (
    <div>
      <div>
        <MyChart label="testing" rowData={rowData} colData={columnDefs}/>
      </div>
      <Button variant="text">Testing</Button>
      <GenericGrid rowData={rowData} colData={columnDefs}/>
    </div>
  );
}
export default App;
