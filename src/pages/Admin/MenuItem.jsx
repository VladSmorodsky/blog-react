import {NavLink} from "react-router-dom";

export const MenuItem = ({className, children, path}) => {
    return (
        <NavLink to={path}
                 className={({isActive}) => isActive ? "bg-indigo-500 text-white" : ""
                 }>
            <div className={`px-2 py-3 font-semibold tracking-wide ${className}`}>
                {children}
            </div>
        </NavLink>
    )
}