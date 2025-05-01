export const Button = ({ children, className="" }) => {
    return (
        <button className={`text-white px-2 rounded-sm cursor-pointer transition-all hover:brightness-95 max-w-44 ${className}`}>
            <span className="h-full justify-between flex items-center gap-4 truncate text-base">
                {children}
            </span>
        </button>
    )
}