import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminMenu.css';

const AdminMenu = ({ handleMenuClick }) => {
    return (
        <div className="admin-menu">
            <NavLink
                // to="/dashboard/admin/create-category"
                onClick={() => handleMenuClick("category")}
                activeClassName="active">
                Create a Category
            </NavLink>
            <NavLink
                // to="/dashboard/admin/create-product"
                onClick={() => handleMenuClick("product")}
                activeClassName="active">
                Create a Product
            </NavLink>
            <NavLink
                //  to="/dashboard/admin/users" 
                onClick={() => handleMenuClick("users")}
                activeClassName="active">
                Users
            </NavLink>

        </div>
    );
}

export default AdminMenu;
