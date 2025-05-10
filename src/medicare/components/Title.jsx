export const Title = ({ children, className }) => {
    return (
        <h1 className={`text-lg font-bold text-[var(--text-header)] ${className}`}>
            {children}
        </h1>
    )
}