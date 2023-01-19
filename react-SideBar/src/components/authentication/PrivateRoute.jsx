import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuthenticationContext } from './AuthenticationProvider';


const PrivateRoute = () => {
    const { isAuthtenticated} = useAuthenticationContext();
    return(
        isAuthtenticated ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoute