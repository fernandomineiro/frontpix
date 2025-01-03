import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import './App.css'
import { AuthProvider } from './contexts/AuthContext';
import TransferPixPage from './pages/TransferPixPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AuthProvider>
     <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/transfer" element={<TransferPixPage />} />
      </Routes>

    </Router>
      </AuthProvider>
    </>
  )
}

export default App
