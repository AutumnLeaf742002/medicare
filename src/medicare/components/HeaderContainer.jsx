export const HeaderContainer = ({ children }) => {
    return (
        <header className="border-b border-gray-300 py-7 gap-5 md:py-5.5 flex md:flex-row flex-col justify-between items-center relative">
            {children}
        </header>
    )
}