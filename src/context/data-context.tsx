import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import AuthService from "../services/authService";

// Define the shape of your user data
export interface User {
  id: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  authenticating: boolean;
  setAuthenticating: (status: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
  { user: null,
    setUser:() => {},
    authenticating: true,
    setAuthenticating:() =>{}
  });

const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [authenticating, setAuthenticating] = useState<boolean>(true);

  useEffect( () => {
    const checkLoginStatus = async () => {

      const result = await AuthService.isUserLoggedIn();
      setUser(result);
      setAuthenticating(false)
    };

    checkLoginStatus();
  }, []);

 return (
   <AuthContext.Provider value={{ user, setUser, setAuthenticating, authenticating}}>
     {children}
   </AuthContext.Provider>
 );
}

export { AuthContext, DataContextProvider };