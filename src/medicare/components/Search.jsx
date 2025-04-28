export const Search = () => {
    return (
        <span className="flex items-center bg-white shadow-sm shadow-black/20 w-56 h-9 px-4 rounded-sm">
            <span className="flex-1">
                <input type="text"
                    className="w-full outline-none text-sm"
                    placeholder="Buscar..."
                />
            </span>
            <span className="cursor-pointer font-bold">
                <i className="bi bi-search text-gray-600"></i>
            </span>
        </span>
    )
}