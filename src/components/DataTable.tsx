import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'breed', headerName: 'Breed', flex: 1},
    {field: 'age', headerName: 'Age', flex: 1},
    {field: 'gender', headerName: 'Gender', flex: 1}
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { DogData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([]);


    const handleOpen = () => {
        setOpen(true)
    } 

    const handleClose = () => {
        setOpen(false)
    }

    const handleDelete = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        
    }


  return (
    <>
        <div className='pt-40'>
            <Modal 
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="flex flex-row justify-center">
                <div>
                    <button
                        className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                        onClick={() => handleOpen()}
                    >
                        Add New Dog
                    </button>
                </div> 
                <Button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
                <Button onClick={handleDelete} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
            </div>
            <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                style={{ height: 400, width: '100%'}}
            >
                <h2 className="p-3 bg-slate-300 my-2 rounded">My Dogs</h2>
                <DataGrid  
                rows={DogData} 
                columns={columns}
                checkboxSelection={true}
                onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item);}}
                componentsProps={{
                    pagination: {
                        rowsPerPageOptions: [5, 10, 20, 100]
                    }
                }}
                />
            </div>
        </div>
        
        
    </>
  )
}

export default DataTable