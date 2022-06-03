import {useEffect, useState} from "react";
import axios from 'axios';
import {DataGrid} from '@mui/x-data-grid';

const url = 'http://127.0.0.1:8000/patient'

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'first_name', headerName: 'First Name', width: 130},
    {field: 'last_name', headerName: 'Last Name', width: 130},
    {field: 'birthdate', headerName: 'Date Of Birth', width: 130},
    {field: 'address', headerName: 'Address', width: 130},
    {field: 'city', headerName: 'City', width: 130},
    {field: 'zip_code', headerName: 'Zipcode', width: 130},
    {field: 'landline', headerName: 'Landline', width: 130},
    {field: 'cell_phone', headerName: 'CellPhone', width: 130},
    {
        field: 'been_infected',
        headerName: 'Had Covid Before',
        width: 130,
    },
    {field: 'conditions', headerName: 'Other Conditions', width: 130}
]

export default function CitizenData(props) {

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            const result = await axios(url);
            setData(result.data);
        } catch (error) {
            setIsError(true)
        }
        setIsLoading(false)
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (<>
        <a href='http://localhost:8000/Excel' className='btn btn-primary'>export to Excel</a>
        {isError && <div>Something went wrong please check your internet connection...</div>}
        {isLoading ? (
            <div className="alert alert-warning">Loading ...</div>
        ) : (
            <div style={{height: 400, width: "auto"}}>
                <DataGrid rows={Object.values(data)} getRowId={(row) => row.id} columns={columns}
                          disableSelectionOnClick/>
            </div>
        )}
    </>)
}