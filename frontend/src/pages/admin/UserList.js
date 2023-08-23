import React, { useEffect, useState } from 'react'
import { getAllUsers } from './service'
import { Grid } from '@mui/material'
import './UserList.css'
const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getAllUsers().then((response) => {
            setUsers(response.data);
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <Grid container spacing={2} >
            {users?.length &&
                users.map((user, index) => (
                    <Grid item xs={6} key={index}>
                        <div className="user-item">
                            <div>Name: {user?.userName} </div>
                            <div>email: {user?.email}</div>
                            <div>mobile: {user?.mobile}</div>
                        </div>

                    </Grid>
                ))}
        </Grid>
    )
}

export default UserList