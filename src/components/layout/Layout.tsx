import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from '../auth/Login';
import Sidebar from './Sidebar';
import ProtectedRoutes from '../auth/ProtectedRoutes';
import Header from './Header';
import Dashboard from '../main/Dashboard';

const Layout: React.FC = () => {
  const tokenString = localStorage.getItem('token');
  const userData = tokenString ? tokenString : null;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    navigate('/');
  };

  if (!userData) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <section className="DashboardPage">
      <div className="container-fluid">
        <div className="DashboardRow row d-flex flex-lg-row flex-md-row flex-sm-column flex-column">
          <Sidebar />
          <div className="PageBody">
            <Header onLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Add other protected routes here */}
              </Route>
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;