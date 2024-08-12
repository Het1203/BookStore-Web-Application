import React from 'react'

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem('users');
    const [authUser, setAuthUser] = React.useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined);

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => React.useContext(AuthContext);

