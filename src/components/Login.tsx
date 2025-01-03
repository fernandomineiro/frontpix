import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import "./Login.css";

const Login: React.FC = () => {
  const [cpf, setCpf] = useState('');

  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginUser(cpf);
      console.log(data)
      setError('');
      login(data.client, data.token);
      navigate('/');
    } catch (err) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white shadow-xl rounded-xl border border-gray-200 custom-form">
    <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Login</h2>

    {error && <div className="text-red-500 text-center mb-4">{error}</div>}

    <div className="mb-6">
      <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-2">CPF</label>
      <input
        id="cpf"
        type="cpf"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none text-gray-800 placeholder-gray-400 bg-gray-50 hover:border-indigo-500 transition duration-200 custom-input"
        placeholder="Digite seu CPF"
      />
    </div>

    <button
      onClick={handleLogin}
      className="w-full p-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 custom-btn"
    >
      Entrar
    </button>

    <div className="mt-6 text-center">
      <span className="text-gray-700 text-sm">Ainda não tem uma conta? <a href="#" className="text-indigo-600 hover:underline">Criar conta</a></span>
    </div>
  </div>

  );
};

export default Login;