import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Substitua pelo caminho correto do AuthProvider

interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useAuth();

  return user ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;