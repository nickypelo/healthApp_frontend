import { createContext, useState } from "react";


const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null);
    const [authTokens, setAuthTokens] = useState(null);
    const [access, setAccess] = useState('line-through')

    const userData = {
        user, 
        access,
        
        setUser,
        setAccess,

    }

    return(
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;