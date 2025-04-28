export const HeaderContainer = ({ children }) => {
    return (
        <header className="border-b border-gray-300 h-20 flex justify-between items-center">
            {children}
        </header>
    )
}