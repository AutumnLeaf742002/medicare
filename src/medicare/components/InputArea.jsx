export const InputArea = ({ label="no label", defaultValue="no default value" }) => {
    return (
        <span className="flex flex-col gap-2 w-full">
            <label className="text-[var(--text-color)] font-semibold">
                {label}
            </label>
            <textarea
                className="min-h-24 outline-none border border-[var(--border-color)] rounded-md px-4 focus:border-[var(--secondary-color)] transition-all text-[var(--text-color)]"
                defaultValue={defaultValue}
            />
        </span>
    )
}