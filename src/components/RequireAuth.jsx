import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const RequireAuth = () =>{
    const {user} = useContext(AuthContext)
    const location = useLocation()

    return(
        user!==null 
            ? <Outlet/>
            : <Navigate to='/login' state={{from: location}} replace/>
    )
}

export default RequireAuth;