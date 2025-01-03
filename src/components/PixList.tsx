import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getPixList } from '../services/api';  // Importe a função que faz a requisição para a API

interface Pix {
  clientId: number;
  value: number;
  description: string;
  createdAt: string;
}

const PixList: React.FC = () => {
  const { user, token } = useAuth();
  const [pixList, setPixList] = useState<Pix[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {

    if (user && token) {
      // Chama a função para buscar os PIX assim que o componente for montado
      const fetchPixList = async () => {
        try {
          const data = await getPixList(user.id, token);
          console.log(data.pix)
          setPixList(data.pix);
        } catch (err) {
          setError('Erro ao carregar os pagamentos PIX.');
        }
      };

      fetchPixList();
    }
  }, [user, token]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (pixList.length === 0) {
    return <div>Não há pagamentos PIX registrados.</div>;
  }

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Histórico de Pagamentos PIX</h3>
      <ul className="mt-2 space-y-4">
        {pixList.map((pix, val) => (
          <li key={val} className="p-4 border rounded-md shadow-sm">
            <div>
              <strong>Valor:</strong> R$ {pix.value.toFixed(2)}
            </div>
            <div>
              <strong>Descrição:</strong> {pix.description}
            </div>
            <div>
              <strong>Data:</strong> {new Date(pix.createdAt).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PixList;