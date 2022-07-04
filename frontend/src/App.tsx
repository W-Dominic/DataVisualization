import { useState } from 'react';
import { Button } from '@mui/material';
import GenericGrid from './Common/GenericGrid/GenericGrid';
import MyChart from './Chart/MyChart';

function App() {
  const [rowData] = useState([
       {Day: 1, AccountValue: 0.0, NetProfit: 0},
       {Day: 2, AccountValue: 100.0, NetProfit: 0},
       {Day: 3, AccountValue: 150.0, NetProfit: 50},
       {Day: 4, AccountValue: 140.0, NetProfit: 40},
       {Day: 5, AccountValue: 80.0, NetProfit: -20},
       {Day: 6, AccountValue: 110.0, NetProfit: 10},
      
   ]);
   
   const [columnDefs] = useState([
       { field: 'Day' },
       { field: 'AccountValue' },
       { field: 'NetProfit' }
   ])
  
  return (
    <div>
      <Button variant="text">Testing</Button>
      <div style={{width:'100%', height:500}}>
        <MyChart label="testing" rowData={rowData}/>
      </div>
      <GenericGrid rowData={rowData} colData={columnDefs}/>
    </div>
  );
}
export default App;
