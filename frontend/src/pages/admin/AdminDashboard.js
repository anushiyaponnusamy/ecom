import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdViewSidebar } from 'react-icons/md';
import AdminMenu from './AdminMenu';
import CreateCategory from './CreateCategory';
import CreateProduct from './CreateProduct';
import UserList from './UserList';
import Grid from '@mui/material/Grid';
import './Admindashboard.css';
import Layout from '../../components/layout/layout';

const AdminDashboard = () => {
    const [selectedMenu, setSelectedMenu] = useState('category');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <Layout>
            <Grid container className="layout-container">
                <Grid item xs={2} className='sidebar sidebar-open'>
                    <AdminMenu handleMenuClick={handleMenuClick} />
                </Grid>
                <Grid item xs={10} className="content">
                    <div className="content-inner">
                        {selectedMenu === 'category' && <CreateCategory />}
                        {selectedMenu === 'product' && <CreateProduct />}
                        {selectedMenu === 'users' && <UserList />}

                    </div>
                </Grid>
            </Grid></Layout>
    );
}

export default AdminDashboard;
