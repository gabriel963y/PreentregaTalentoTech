import { createContext, useState } from 'react';
import { user as validUser } from '../utils/consts'
import { generateFakeToken } from '../utils/token'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const token = localStorage.getItem('token');
        return token ? { isAuthenticated: true, token } : { isAuthenticated: false, token: null }
    })

    const login = (email, password) => {
        if (email === validUser.email && password === validUser.password) {
            const userToken = generateFakeToken();
            setAuth({ isAuthenticated: true, token: userToken })
            localStorage.setItem('token', userToken)
            return { success: true }
        } else {
            return { success: false, message: 'Email o contraseña inválida.' }
        }
    }

    const logout = () => {
        setAuth({ isAuthenticated: false, token: null })
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{ ...auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}
