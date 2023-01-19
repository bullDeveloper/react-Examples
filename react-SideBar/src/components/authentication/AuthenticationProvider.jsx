import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext(null);

export function useAuthenticationContext(){
    return useContext(AuthenticationContext);
}

export function AuthenticationProvider({children}){
    const [isAuthtenticated, setAuthtenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [userImage, setUserImage] = useState(null);

    const authenticationHandler = ({authtenticated, user, userImage}) =>{
        setAuthtenticated(authtenticated);
        setUser(user);
        setUserImage(userImage)
    }

    return (
        <AuthenticationContext.Provider value={{isAuthtenticated, user, userImage, authenticationHandler}} >
            {children}
        </AuthenticationContext.Provider>
    );

}