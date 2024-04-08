import {Alert} from "./Alert";

export const ErrorAlert = ({children}) => {
    return <Alert className='text-red-800 bg-red-50'>
        {children}
    </Alert>
}