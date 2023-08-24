import React, { useState } from 'react'
import Layout from '../../components/layout/layout'
import { Grid } from '@mui/material'
import UserMenu from './UserMenu'
import Orders from './Orders'
import Profile from './Profile'

const Dashboard = () => {
    const [selectedMenu, setSelectedMenu] = useState('category');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };
    return (
        <Layout>
            <Grid container className="layout-container">
                <Grid item xs={2} className='sidebar sidebar-open'>
                    <UserMenu handleMenuClick={handleMenuClick} />
                </Grid>
                <Grid item xs={10} className="content">
                    <div className="content-inner">
                        {selectedMenu === 'orders' && <Orders />}
                        {selectedMenu === 'profile' && <Profile />}
                        {/* {selectedMenu === 'users' && <UserList />} */}

                    </div>
                </Grid>
            </Grid></Layout>

    )
}

export default Dashboard