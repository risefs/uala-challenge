import React, { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as AuthService from "../../services/auth";

interface IUser {
  user: string | null;
  status: number;
}
interface AuthContextType {
  user?: IUser | null;
  loading: boolean;
  error?: any;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Export the provider as we need to wrap the entire app with it
export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  let navigate = useNavigate();

  function login(email: string, password: string) {
    setLoading(true);
    const res: any = AuthService.login(email, password);
    if (res.error) {
      setError(res.error);
      return;
    }
    setUser(res.user);
    navigate("/home");
    setLoading(false);
  }

  function logout() {
    setUser(null);
    navigate("/login");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
