export const PaginationButton = ({onClick, active, children}) => {
    return (
        <button className={`p-2 border border-black-100 mx-2 ${active ? 'border-blue-500 text-blue-500' : ''}`}
                disabled={false}
                onClick={() => onClick()}
        >
            {children}
        </button>
    );
}