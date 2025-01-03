import React from 'react';
import TransferPix from '../components/TransferPix';

const TransferPixPage: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Realizar Transferência PIX</h2>
      <TransferPix />
    </div>
  );
};

export default TransferPixPage;