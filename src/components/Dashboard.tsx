import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import PixList from './PixList';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();


  const navi = () =>{
navigate('/transfer');
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div>
        <h3 className="mt-4">Cliente: {user?.name}</h3>
        <p>ID do Cliente: {user?.id}</p>
      </div>
      <div className="mt-6">
        <h4 className="text-xl font-medium">Pagamentos via PIX</h4>
        <PixList />
        <h4 style={{ cursor: 'pointer', color: 'black', border: '1px solid black', backgroundColor: 'ligth-gray',}} onClick={() =>navi()} className="text-xl font-medium">Fazer transferncia</h4>
        {/* <Link to="/transfer-pix">
        <button className="mt-4 p-2 bg-blue-500 text-white rounded-md">
          Realizar Transferência PIX
        </button>
      </Link> */}
      </div>
    </div>
  );
};

export default Dashboard;