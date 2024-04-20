import {createContext, useContext, useEffect, useMemo, useState} from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, _setUser] = useState(JSON.parse(localStorage.getItem('user')));

    const setUser = (user) => {
        _setUser(user);
    }

    useEffect(() => {
        if (user) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('user')
        }
    }, [user]);

    const contextValue = useMemo(() => ({
        user,
        setUser
    }), [user]);

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}