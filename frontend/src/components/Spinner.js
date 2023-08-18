import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Spinner = () => {
    const navigate = useNavigate();
    const [remainingSeconds, setRemainingSeconds] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        if (remainingSeconds === 0) {
            clearInterval(timer);
            navigate('/login');
        }

        return () => {
            clearInterval(timer);
        };
    }, [navigate, remainingSeconds]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="spinner-border text-danger" role="status">{remainingSeconds}</div>
            {/* <p></p> */}
        </div>
    );
};

export default Spinner;
