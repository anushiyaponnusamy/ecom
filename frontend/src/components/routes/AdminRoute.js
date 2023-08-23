import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import Spinner from "../Spinner";

const AdminRoute = () => {
    const [ok, setOk] = useState(false);
    const [apiExecuted, setApiExecuted] = useState(false);
    const [auth] = useAuth(); // Avoid setting state directly from useAuth
    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get(config.REACT_APP_API + '/auth/admin-auth', { headers: { "Authorization": auth?.token } });

                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.log("error", error);
            } finally {
                setApiExecuted(true);
            }
        };

        if (auth?.token) {
            authCheck();
        } else {
            setApiExecuted(true);
        }
    }, [auth?.token]);

    if (!apiExecuted) {
        return null;
    }

    return ok ? <Outlet /> : <Spinner path="/" />;
};

export default AdminRoute;
