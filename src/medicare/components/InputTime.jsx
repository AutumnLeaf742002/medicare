export const InputTime = ({ label="no label" }) => {
    return (
        <span className="flex flex-col gap-2 w-full">
            <label className="text-[var(--text-color)] font-semibold">
                {label}
            </label>
            <input type="time"
                className="h-9.5 outline-none border border-[var(--border-color)] rounded-md px-4 focus:border-[var(--secondary-color)] transition-all text-[var(--text-color)]"
            />
        </span>
    )
}