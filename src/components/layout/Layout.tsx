import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from '../auth/Login';
import Sidebar from './Sidebar';
import ProtectedRoutes from '../auth/ProtectedRoutes';
import Header from './Header';
import Dashboard from '../main/Dashboard';

const Layout: React.FC = () => {
    const userData = JSON.parse(localStorage.getItem('userData') || 'null');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        navigate('/');
    };

    return (
        <>
            {userData ? (
                <section className="dashboardPage">
                    <div className="PageRow">
                        <Sidebar />
                        <div className="pageBody">
                            <Header onLogout={handleLogout} />
                            <Routes>
                                <Route path="/" element={<Navigate to="/dashboard" />} />
                                <Route element={<ProtectedRoutes />}>
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    {/* Add more protected routes here */}
                                </Route>
                                <Route path="*" element={<Navigate to="/dashboard" />} />
                            </Routes>
                        </div>
                    </div>
                </section>
            ) : (
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            )}
        </>
    );
};

export default Layout;
