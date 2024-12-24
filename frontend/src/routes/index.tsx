import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/pages/Login/Login.tsx';
import Register from '../components/pages/Register/Register.tsx';
import Payment from '../components/pages/Payments/Payment.tsx';
import Dashboard from '../components/pages/Dashboard/Dashboard.tsx';

const AppRoutes: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
);

export default AppRoutes;
