import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  useEffect(() => {
    console.log(user)
  }, []);



  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl">MyBank</Link>
        {user ? (
          <div>
            <span className="text-white">Olá, {user.name}</span>
            <button onClick={logout} className="ml-4 text-white">Sair</button>
          </div>
        ) : (
          <Link to="/login" className="text-white">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;