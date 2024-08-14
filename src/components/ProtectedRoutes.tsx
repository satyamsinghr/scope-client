import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Assuming you store your token in localStorage
const useAuth = () => {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
