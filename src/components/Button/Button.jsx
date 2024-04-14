export const Button = ({className, onClick, children}) => {
    return (
        <div className={`cursor-pointer rounded p-1 ${className}`} onClick={onClick}>{children}</div>
    );
}