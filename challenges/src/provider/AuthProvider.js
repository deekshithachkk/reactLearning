import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/profile";
  const [user, setUser] = useState({
    name: " ",
    permissions: []
  });
  const login = (user) => {
 
    if (user === "admin") {
      setUser({ name: user, permissions: ["view_extra"] });
    } else {
      setUser({ name: user, permissions: ["view_about"] });
    }
    navigate(redirectPath, { replace: true });
  };
  const logout = () => {
    setUser({ name: "", permissions: [] });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
