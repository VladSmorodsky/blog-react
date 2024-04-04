export const CategoryBadge = ({category, onClick, className}) => {
    return <div onClick={onClick}>
        <span
            className={`bg-purple-100 text-purple-800 font-medium 
                me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ${className}`}
        >
            {category.title}
        </span>
    </div>
}