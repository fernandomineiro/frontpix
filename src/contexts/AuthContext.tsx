import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  user: { id: number; name: string } | null;
  token: string | null;
  login: (user: { id: number; name: string }, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<{ id: number; name: string } | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (client: { id: number; name: string }, token: string) => {
    setUser(client);
    setToken(token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
