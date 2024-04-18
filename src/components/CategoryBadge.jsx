export const CategoryBadge = ({category, onClick, className}) => {
    return <div onClick={onClick}>
        <span
            className={`bg-purple-100 text-purple-800 font-medium 
                me-2 px-2.5 py-0.5 rounded ${onClick ? 'cursor-pointer' : ''} ${className}`}
        >
            {category.title}
        </span>
    </div>
}