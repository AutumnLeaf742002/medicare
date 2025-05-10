import { Text } from "./"

export const SelectText = ({ label = "no label", items = [] }) => {
    return (
        <span className="flex flex-col gap-2 w-full">
            <label>
                <Text className="font-semibold">
                    {label}
                </Text>
            </label>
            <select
                className="h-9.5 outline-none border border-[var(--border-color)] rounded-md pl-4 focus:border-[var(--secondary-color)] transition-all text-sm"
            >
                <option className="text-[var(--text-color)]" value={0}>
                    Seleccionar Paciente...
                </option>

                {
                    items.map(option => (
                        <option key={option.value} className="text-[var(--text-color)]" value={option.value}>
                            {option.text}
                        </option>
                    ))
                }

            </select>
        </span>
    )
}