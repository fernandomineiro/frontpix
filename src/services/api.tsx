import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Ajuste conforme sua API

export const loginUser = async (cpf: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, { cpf });
  return response.data;
};

export const getPixList = async (clientId: number, token: string) => {

    const response = await axios.get(`${API_URL}/pix/pix/${clientId}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  };

  export const transferPix = async (clientId: number, value: number, description: string, token: string) => {
    const response = await axios.post(
      `${API_URL}/pix/pay`,
      { clientId, value, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };