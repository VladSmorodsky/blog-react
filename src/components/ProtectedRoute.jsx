import {useAuthContext} from "../context/AuthContext";
import {Navigate, Outlet} from "react-router-dom";
import {LOGIN_PAGE} from "../router";

export const ProtectedRoute = () => {
    const {user} = useAuthContext();

    if (!user) {
        return <Navigate to={LOGIN_PAGE} />
    }

    return <Outlet />
}