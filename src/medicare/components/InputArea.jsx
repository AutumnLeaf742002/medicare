export const InputArea = ({ label="no label", defaultValue="no default value", name="", value="", onInputChange = ()=>{} }) => {
    return (
        <span className="flex flex-col gap-2 w-full">
            <label className="text-[var(--text-color)] font-semibold">
                {label}
            </label>
            <textarea
                className="min-h-24 outline-none border border-[var(--border-color)] rounded-md p-4 focus:border-[var(--secondary-color)] transition-all text-[var(--text-color)]"
                placeholder={defaultValue}
                name={name}
                value={value}
                onChange={onInputChange}
            />
        </span>
    )
}