// src/components/AppRoutes.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register'; // Página de cadastro
import Dashboard from './pages/Dashboard/Dashboard'; // Página do dashboard
import Login from './pages/Login/Login'; // Página de login
import Payment from "./pages/Payments/Payment"; // Página de login

// Outros imports de páginas que você criar, como recuperação de senha, etc.

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Página de Login */}
                <Route path="/" element={<Login />} />

                {/* Página de Cadastro */}
                <Route path="/register" element={<Register />} />

                {/* Página do Dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Página Payment */}
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
