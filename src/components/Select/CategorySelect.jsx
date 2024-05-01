import {Select} from "./Select";

export const CategorySelect = ({categories, onChange, value = 0}) => {
    const generateItems = () => {
        return categories.map(item => ({
            id: item.id,
            label: item.title
        }))
    }

    return (
        <Select items={generateItems()} onChange={onChange} value={value}/>
    );
}