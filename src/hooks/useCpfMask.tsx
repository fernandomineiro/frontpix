import { useState } from "react";

const useCpfMask = () => {
  const [cpf, setCpf] = useState("");

  const formatCpf = (value: string) => {
    value = value.replace(/\D/g, "");

    if (value.length <= 11) {
      return value
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    return value.slice(0, 14); 
  };

  const handleCpfChange = (value: string) => {
    const formatted = formatCpf(value);
    setCpf(formatted);
  };

  return { cpf, setCpf: handleCpfChange };
};

export default useCpfMask;