import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import CreatePage from './pages/CreatePage'
import './App.css'
import { AuthProvider } from './contexts/AuthContext';
import TransferPixPage from './pages/TransferPixPage';
import PrivateRoute from "./routes/PrivateRoute";
const  App = () => {

  return (
    <>
     <AuthProvider>
     <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route
            path="/"
            element={<PrivateRoute element={<DashboardPage />} />}
          />
              <Route
            path="/transfer"
            element={<PrivateRoute element={<TransferPixPage />} />}
          />
      </Routes>

    </Router>
      </AuthProvider>
    </>
  )
}

export default App
