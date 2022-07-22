import { DataItem } from "./model";

export async function loadData(
    onDataLoad: (rows: DataItem[]) => void,
    onLoadingFailed: () => void
){
    try {
        fetch("http://localhost:5000/api/stonksdata")
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