import { Text } from "./"

export const InputText = ({ placeholder="no placeholder", label="no label" }) => {
    return (
        <span className="flex flex-col gap-2 w-full">
            <label>
                <Text className="font-semibold">
                    {label}
                </Text>
            </label>
            <input type="text" placeholder={placeholder}
                className="h-9.5 outline-none border border-[var(--border-color)] rounded-md px-4 focus:border-[var(--secondary-color)] transition-all text-[var(--text-color)]"
            />
        </span>
    )
}