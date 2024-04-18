export const Button = ({className, onClick, children, type= 'button'}) => {
    return (
        <button type={type} className={`cursor-pointer rounded p-1 ${className}`} onClick={onClick}>{children}</button>
    );
}