import React, { useEffect, useMemo, useState } from 'react';
import { loginAPi } from './Signinservice';
import './signin.css';
import { FaExclamationCircle } from 'react-icons/fa';
import Layout from '../../components/layout/layout';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const canLogin = useMemo(() => {
        return email !== '' && password !== '';
    }, [password, email]);
    const clearErrorMessage = () => {
        setErrorMessage('');
    };
    const handleLogin = async () => {
        try {
            const response = await loginAPi(email, password);
            if (response.data === "invalid credentials") {
                setErrorMessage(response.data);
            } else {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userName', response.data.userName);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('mobile', response.data.mobile);
                localStorage.setItem('userId', response.data._id);
                setAuth({
                    ...auth,
                    user: {
                        userId: response.data._id,
                        userName: response.data.userName,
                        email: response.data.email,
                        mobile: response.data.mobile,
                    }, token: response.data.token
                })
                navigate("/")
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <Layout title="Login | shoppingg">
            <div className="register-page-container">
                <div className="register-form">
                    <h1>Sign In</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => { clearErrorMessage(); setEmail(e.target.value) }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { clearErrorMessage(); setPassword(e.target.value) }}
                        required
                    />

                    {errorMessage && <div className="error-message"><p ><FaExclamationCircle className='error-icon' />{errorMessage}</p></div>}

                    <div onClick={() => navigate('/forget-password')} style={{ color: "blue" }} >forgot password?</div>
                    <button onClick={handleLogin} disabled={!canLogin} >Login</button>
                </div>
            </div>
        </Layout >
    );
};
export default LoginPage;
