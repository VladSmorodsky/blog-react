export const Select = ({items, value, onChange}) => {
    return <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
        onChange={(event) => onChange(parseInt(event.target.value))}
        value={value}
    >
        <option value={0}>Select option</option>
        {items.map((item) => (
            <option key={item.id} value={item.id}>{item.label}</option>
        ))}
    </select>
}