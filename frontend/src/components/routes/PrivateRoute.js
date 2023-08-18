import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
//Outlet:its used for nested routing .it enables routing
import { Outlet } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import Spinner from "../Spinner";
const PrivateRoute = () => {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();
    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get(config.REACT_APP_API + '/auth/user-auth', { headers: { "Authorization": auth?.token } });
            if (res.data.ok) {
                console.log("authCheck", res.data.ok)
                setOk(res.data.ok)
            } else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck();
    }, [auth?.token])
    return ok ? <Outlet /> : <Spinner />
}

export default PrivateRoute