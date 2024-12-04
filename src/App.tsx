import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PasswordRecovery from './pages/PasswordRecovery';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Expenses from './pages/Expenses';
import Ads from './pages/Ads';
import Integrations from './pages/Integrations';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recuperar-senha" element={<PasswordRecovery />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <div className="min-h-screen bg-[#13111b] text-white">
                  <Sidebar />
                  <div className="ml-16">
                    <Header />
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/expenses" element={<Expenses />} />
                      <Route path="/ads" element={<Ads />} />
                      <Route path="/integrations" element={<Integrations />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </div>
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;