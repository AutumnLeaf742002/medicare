export const TextMuted = ({ children, className }) => {
    return (
        <p className={`text-[var(--text-muted)] ${className}`}>
            {children}
        </p>
    )
}