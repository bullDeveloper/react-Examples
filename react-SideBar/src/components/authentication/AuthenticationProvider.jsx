import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext(null);

export function useAuthenticationContext(){
    return useContext(AuthenticationContext);
}

export function AuthenticationProvider({children}){
    const [isAuthtenticated, setAuthtenticated] = useState(false);
    const [user, setUser] = useState(null);

    const authenticationHandler = ({authtenticated, user}) =>{
        setAuthtenticated(authtenticated);
        setUser(user);
    }

    return (
        <AuthenticationContext.Provider value={{isAuthtenticated, user, authenticationHandler}} >
            {children}
        </AuthenticationContext.Provider>
    );

}