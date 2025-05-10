export const Text = ({ children, className }) => {
    return (
        <p className={`text-base text-[var(--text-color)] ${className}`}>
            {children}
        </p>
    )
}