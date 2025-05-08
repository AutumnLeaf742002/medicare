import { Menu } from "../components"
import { ExpandProvider } from "../context/expand"

export const MedicareLayout = ({ children }) => {
    return (
        <ExpandProvider>
            <div className="flex w-screen h-screen">
                <Menu />
                <main className="flex-1 bg-[var(--background-color)] px-5 pb-4 overflow-y-auto overflow-x-hidden">
                    {children}
                </main>
            </div>
        </ExpandProvider>
    )
}