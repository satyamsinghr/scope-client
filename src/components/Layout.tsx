import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login';
// import Signup from './components/Signup';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import Header from './Header';
import Dashboard from './Dashboard';
const Layout = () => {
    const userData = ''
    // const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userData');
        navigate('/');
    }

    return (
        <>
                {userData? (
                <section className="dashboardPage">
                    <div className="PageRow">
                        <Sidebar />
                        <div className="pageBody">
                            <Header />
                            <Routes >
                                <Route path="/" element={<Login />} />
                                <Route element={<ProtectedRoutes />}>
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    {/* <Route path="/bi-weekly" element={<BiWeekly />} /> */}
                                </Route>
                                {/* Add a default route or 404 page */}
                            </Routes>
                        </div>
                    </div>
                </section>
            ) : (
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    {/* Add any public routes here */}
                </Routes>
            )}
          
        </>
    )
}

export default Layout