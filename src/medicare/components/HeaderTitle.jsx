export const HeaderTitle = ({ children }) => {
    return (
        <h1 className="text-2xl font-bold flex gap-1 items-center h-full text-[var(--primary-color)]">
            {children}
        </h1>
    )
}