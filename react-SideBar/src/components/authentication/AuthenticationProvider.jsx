import { Children, createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export function useAuthenticationContext(){
    return useContext(AuthenticationContext);
}

export function AuthenticationProvider({Children}){
    const [isAuthtenticated, setAuthtenticated] = useState(false);

    const loginHandler = () =>{
        setAuthtenticated(true);
    }

    const logoutHandler = () =>{
        setAuthtenticated(false);
    }

    return (
        <AuthenticationContext.Provider value={{isAuthtenticated, loginHandler, logoutHandler}} >
            {Children}
        </AuthenticationContext.Provider>
    );

}