export const Input = ({label, name, type = 'text', onChange, required = false, value = ''}) => {
    return (
        <>
            {label && (
                <label htmlFor={name}
                       className="block mb-2 text-sm font-medium text-purple-900">Your
                    email
                </label>
            )}
            <input type={type} name={name} id={name}
                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
                   placeholder={name.toUpperCase()}
                   value={value}
                   onChange={onChange}
                   required={required}
            />
        </>
    );
}