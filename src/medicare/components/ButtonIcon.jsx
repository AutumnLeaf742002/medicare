export const ButtonIcon = ({ children, className, callback=()=>{} }) => {
    return (
        <button className={`text-[var(--secondary-color)] cursor-pointer transition-all flex gap-1 items-center hover:text-blue-400 ${className}`}
            onClick={callback}
        >
            {children}
        </button>
    )
}