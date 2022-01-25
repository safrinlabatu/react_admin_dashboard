import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummyData'
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        // setData(data.filter((item) => item.id !== id));
        setData(oldValue => oldValue.filter((item) => item.id !== id));
    }
    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            width: 50 
        },
        { 
            field: 'user', 
            headerName: 'User', 
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={params.row.avatar} alt="avatar" className="userListImg"/>
                        {params.row.username}
                    </div>
                )
            } 
        },
        { 
            field: 'email', 
            headerName: 'Email', 
            width: 160 
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline onClick={() => handleDelete(params.row.id)} className="userListDelete"/>
                    </>
                )
            }
          }
      ];
      
  return (
    <div className="userList">
        <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    </div>
  )
}
