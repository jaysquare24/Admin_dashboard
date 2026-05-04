export const Button = ({ onClick, children, disabled, className }) => {
    return (
        <button className={`btn ${className || ''}`} onClick={onClick} disabled={disabled} role="button">
            {children}
        </button>
    );
}