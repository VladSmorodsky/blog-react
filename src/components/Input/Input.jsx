export const Input = ({label, name, type = 'text', onChange, required = false, value = '', className = ''}) => {
    return (
        <>
            {label && (
                <label htmlFor={name}
                       className="mb-2 text-sm hidden sm:block font-medium text-purple-900">
                    {name}
                </label>
            )}
            <input type={type} name={name} id={name}
                   className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5 ${className}`}
                   placeholder={name.toUpperCase()}
                   value={value}
                   onChange={onChange}
                   required={required}
            />
        </>
    );
}