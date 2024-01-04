import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storetokenInLS = (UserInfo) => {
    return localStorage.setItem("token", UserInfo.token);
  };

  return (
    <AuthContext.Provider value={storetokenInLS}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }

  return authContextValue;
};
