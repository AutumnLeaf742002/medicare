export const Select = ({ label = "no label", options = [] }) => {
    return (
        <span className="flex gap-2 items-center">
            <label className="text-sm text-gray-500">
                {label}:
            </label>
            <select className="py-2 px-3 w-36 text-sm outline-none border border-gray-300 rounded-sm text-left focus:border-blue-400 transition-all">
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.text}
                        </option>
                    ))
                }
            </select>
        </span>
    )
}