import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';


const RegisterInterest = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/contactsales', { replace: true });
    }, []);
}

export default RegisterInterest;