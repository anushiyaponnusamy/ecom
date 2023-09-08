import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AdminMenu.css';
import { Menu, MenuItem } from '@mui/material';

const AdminMenu = ({ handleMenuClick }) => {
    const [productDropdown, setProductDropdown] = useState(false);

    const handleProductMenu = (event) => {
        setProductDropdown(!productDropdown);
    };
    return (
        <div className="admin-menu">
            <NavLink
                // to="/dashboard/admin/create-category"
                onClick={() => handleMenuClick("category")}
                activeClassName="active" className='nav-link'>
                Create a Category
            </NavLink>
            <div className='product-dropdown'>
                <span onClick={handleProductMenu}>Product</span>
                {productDropdown && <ul className="product-options">
                    <li onClick={() => handleMenuClick("product-create")}>
                        <NavLink activeClassName="active">Create</NavLink>
                    </li>
                    <li onClick={() => handleMenuClick("product-view")}>
                        <NavLink activeClassName="active">View</NavLink>
                    </li>
                    <li onClick={() => handleMenuClick("product-edit")}>
                        <NavLink activeClassName="active">Edit</NavLink>
                    </li>
                    {/* Add more products as needed */}
                </ul>}
            </div>
            <NavLink
                className='nav-link' onClick={() => handleMenuClick("users")}
                activeClassName="active">
                Users
            </NavLink>

        </div>
    );
}

export default AdminMenu;
