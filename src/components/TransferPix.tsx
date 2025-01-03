import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { transferPix } from '../services/api';  // Função para chamar a API para fazer o pagamento PIX

const TransferPix: React.FC = () => {
  const { user, token } = useAuth();
  const [value, setValue] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value || !description) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
        if (user && token) {
      await transferPix(user.id, value, description, token);
      setSuccessMessage('Pagamento PIX realizado com sucesso!');
      setValue(0);
      setDescription('');
        }
    } catch (err) {
      setError('Erro ao realizar o pagamento PIX.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h3 className="text-xl font-semibold">Realizar Transferência PIX</h3>

      {error && <div className="text-red-500 mt-2">{error}</div>}
      {successMessage && <div className="text-green-500 mt-2">{successMessage}</div>}

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label htmlFor="value" className="block font-medium">Valor</label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="mt-1 block w-full border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium">Descrição</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md"
        >
          {loading ? 'Processando...' : 'Realizar Pagamento'}
        </button>
      </form>
    </div>
  );
};

export default TransferPix;
