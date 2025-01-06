import { useState } from "react";

const useCurrencyMask = () => {
  const [value, setValue] = useState("");

  const formatCurrency = (rawValue: string) => {
    // Remove tudo que não for número
    const numericValue = rawValue.replace(/\D/g, "");

    // Converte para um número decimal e aplica a formatação
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(parseFloat(numericValue) / 100);

    return formattedValue;
  };

  const handleChange = (rawValue: string) => {
    setValue(formatCurrency(rawValue));
  };

  return { value, setValue: handleChange };
};

export default useCurrencyMask;