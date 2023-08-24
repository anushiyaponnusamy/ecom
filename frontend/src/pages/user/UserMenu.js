import React from 'react';
import { NavLink } from 'react-router-dom';
// import './AdminMenu.css';

const UserMenu = ({ handleMenuClick }) => {
    return (
        <div className="admin-menu">
            <NavLink
                // to="/dashboard/admin/create-category"
                onClick={() => handleMenuClick("profile")}
                activeClassName="active">
                Profile
            </NavLink>
            <NavLink
                // to="/dashboard/admin/create-product"
                onClick={() => handleMenuClick("orders")}
                activeClassName="active">
                Orders
            </NavLink>
            {/* <NavLink
                //  to="/dashboard/admin/users" 
                onClick={() => handleMenuClick("users")}
                activeClassName="active">
                Users
            </NavLink> */}

        </div>
    );
}

export default UserMenu;
