import { DataItem } from "./model";

export async function loadData(
    onDataLoad: (rows: DataItem[]) => void,
    onLoadingFailed: () => void
){
    try {
        fetch("http://localhost:8000/api/stonksdata/lookup")
        //fetch("http://localhost:8000/api/stonksdata/test")
        .then((res) =>
        res.json()
        .then((data) => onDataLoad(data))
        );
    }
    catch(e) {
        console.log(e)
        onLoadingFailed()
    } 
}