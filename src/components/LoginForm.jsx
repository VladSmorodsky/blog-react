import {useState} from "react";

export const LoginForm = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await handleLogin(email, password);
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
            <div>
                <label htmlFor="email"
                       className="block mb-2 text-sm font-medium text-purple-900">Your
                    email</label>
                <input type="email" name="email" id="email"
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
                       placeholder="name@company.com"
                       onChange={(event) => setEmail(event.target.value)}
                       required
                />
            </div>
            <div>
                <label htmlFor="password"
                       className="block mb-2 text-sm font-medium text-purple-900">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••"
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
                       onChange={(event) => setPassword(event.target.value)}
                       required
                />
            </div>
            <button type="submit"
                    className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Sign in
            </button>
        </form>
    );
}