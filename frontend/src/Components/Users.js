import React, { useCallback, useEffect, useRef, useState } from 'react'
import axios from "axios";
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

const Users = () => {
  const [users, setUsers] = useState([])
  const tableRef = useRef()
  const tableName = "users";
  const fetchUsers = useCallback(()=>{
    
  })

  useEffect(() => {
    axios.get('http://localhost:8000/api/users').then((response)=>{
        // var usersGet = JSON.stringify(response.data.Users);
        setUsers(response.data.Users);
        setTimeout(function(){
          $('#users').DataTable();
        } ,1000);
    }).catch((e) => {
        console.log(e);
    });
    // fetchUsers();
  }, [fetchUsers])
  
  return (
    <div className='my-5'>
      <table id="users" class="table table-hover table-bordered">
        <thead>
          <tr>
              <th>Name</th>
              <th>Age/Sex</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>GOVT ID</th>
              <th>Guardian Detais</th>
              <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
            {
              users?.map((user) => {
                return(
                  <tr>
                      <td> {user.name} </td>
                      <td> {user.age+'/'+user.sex}</td>
                      <td> {user.mobile?user.mobile:'N/A'}</td>
                      <td> {user.address?user.address:'N/A'}</td>
                      <td> {user.govt_id?user.govt_id:'N/A'}</td>
                      <td> {user.guardian_details?user.guardian_details:'N/A'}</td>
                      <td> {user.nationality?user.nationality:'N/A'}</td>
                  </tr>
                )
              })
            }
        </tbody>

      </table>
    </div>
  )
}

export default Users