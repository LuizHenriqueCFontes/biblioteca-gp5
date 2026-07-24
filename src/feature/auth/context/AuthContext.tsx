import { createContext, useState } from "react";

type AuthContextData = {
    isAuthenticated: boolean,
    loginUse: () => void,
    logout: () => void
}

interface AuthProvider {
    children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData | null>(null);

export function AuthProvider(props: AuthProvider) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginUse = () => setIsAuthenticated(true);

    const logout = () => setIsAuthenticated(false);

    return(
        <AuthContext value={{
            isAuthenticated, 
            loginUse, 
            logout}}>
            {props.children}
        </AuthContext>
    );
}