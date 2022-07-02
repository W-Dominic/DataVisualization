import { AgGridReact } from 'ag-grid-react/lib/agGridReact';

interface GridData {
    rowData: any 
    colData: any
    //TODO: Specify better types
}

function GenericGrid(props: GridData) {

    return(
        <div className="ag-theme-alpine-dark" 
             style={{width: '100%', 
                    height: 500} }>
           <AgGridReact
               rowData={props.rowData}
               columnDefs={props.colData}>
            </AgGridReact>  
       </div>
    );

}

export default GenericGrid;