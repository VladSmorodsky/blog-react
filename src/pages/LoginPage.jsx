import {Logo} from "../components/Logo";
import {useAuthContext} from "../context/AuthContext";
import {LoginForm} from "../components/LoginForm";
import {login} from "../api/auth";
import {useState} from "react";
import {Alert} from "../components/Alert/Alert";
import {useNavigate} from "react-router-dom";
import {ADMIN_PAGE} from "../router";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState(null);
    const {setUser} = useAuthContext();

    const handleLogin = async (email, password) => {
        try {
            const userData = await login(email, password);
            setUser(userData);
            navigate(ADMIN_PAGE);
        } catch (err) {
            setErrorText(err.response.data.message)
            console.log(err)
        }
    }

    return (
        <section className="">
            {errorText && <Alert close={() => setErrorText(null)}>{errorText}</Alert>}
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className={'flex md:w-6/12 w-fit justify-center items-center mb-2'}>
                    <Logo size={'size-16'} />
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-purple-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <LoginForm handleLogin={handleLogin}/>
                    </div>
                </div>
            </div>
        </section>
    )
}