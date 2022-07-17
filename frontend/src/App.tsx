import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import GenericGrid from './Common/GenericGrid';
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
     fetch("http://localhost:8000/api/stonksdata")
     .then((res) =>
     res.json()
     .then((data) => {
       setRowData(data)
     })
     );
   }, [rowData]);

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
