import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import GenericGrid from './Common/GenericGrid/GenericGrid';
import MyChart from './Chart/MyChart';

function App() {
  const [rowData, setRowData] = useState([
       {Day: 0, AccountValue: 0.0, NetProfit: 0},
   ]);
   
   const [columnDefs] = useState([
       { field: 'Day' },
       { field: 'AccountValue' },
       { field: 'NetProfit' }
   ])
   useEffect(() => {
     fetch("http://127.0.0.1:5000/api/stonksdata").then((res) =>
     res.json()
     .then((data) => {
       setRowData(data)
     })
     ); 
   }, []);
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
