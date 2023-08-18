import React, { useEffect, useMemo, useState } from 'react';
import { registerUser } from './Signinservice';
import './signin.css';
import { FaExclamationCircle } from 'react-icons/fa';
import Layout from '../../components/layout/layout';
import { useAuth } from '../../context/auth';
import { useNavigate, useLocation } from 'react-router-dom';
const RegisterPage = () => {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [question, setQuestion] = useState('');
    const [passwordValid, setIsPasswordValid] = useState(false)
    const canRegister = useMemo(() => {
        return passwordValid && username !== '' && email !== '' && mobileNumber !== '' && question !== '';
    }, [passwordValid, username, email, mobileNumber, question]);
    const clearErrorMessage = () => {
        setErrorMessage('');
    };
    const handleRegister = async () => {
        try {
            const response = await registerUser(email, password, username, mobileNumber, question);
            if (response.data === "invalid credentials") {
                setErrorMessage(response);
            } else if (response.data === 'email already exists') {
                setErrorMessage('email already exists');
            } else if (response.data === 'mobileNumber already exists') {
                setErrorMessage('mobileNumber already exists')
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
                navigate('/')
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };
    const isPasswordValid = () => {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        setIsPasswordValid(passwordPattern.test(password))
        return passwordPattern.test(password);
    };
    useEffect(() => {
        isPasswordValid()
    }, [password])
    return (
        <Layout title="Sign Up | shoppingg">
            <div className="register-page-container">
                <div className="register-form">
                    <h1>Sign Up</h1>
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
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => { clearErrorMessage(); setUsername(e.target.value) }}
                        required
                    />
                    <input
                        type="text"
                        placeholder="whats your pet peeve?"
                        value={question}
                        onChange={(e) => { clearErrorMessage(); setQuestion(e.target.value) }}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => {
                            clearErrorMessage();
                            const value = e.target.value;
                            if (/^\d{0,10}$/.test(value)) {
                                setMobileNumber(value);
                            }
                        }}
                        required
                    />
                    {!passwordValid && (
                        <div className="error-message" style={{ fontSize: "10px" }}>
                            <FaExclamationCircle className="error-icon" />
                            <p>Password must be at least 8 characters including(A-Z,a-z,0-9,@#$%^&*...)</p>
                        </div>
                    )}
                    {errorMessage && <div className="error-message"><p ><FaExclamationCircle className='error-icon' />{errorMessage}</p></div>}

                    <button onClick={handleRegister} disabled={!canRegister} >Register</button>
                </div>
            </div>
        </Layout>
    );
};

export default RegisterPage;
