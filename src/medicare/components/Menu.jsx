import { MenuItem } from "./MenuItem"

export const Menu = () => {
    return (
        <aside className="w-64 bg-[var(--primary-color)] text-[var(--light-color)]">
            <header className="w-full h-20 border-b border-gray-600">
                <span className="flex items-center h-full gap-2 pl-5">
                    <img src="/medicare/logo.svg" alt="MediCare logo"
                        className="w-10 h-10"
                    />
                    <h1 className="font-bold text-xl">
                        MediCare
                    </h1>
                </span>
            </header>

            <nav className="flex flex-col gap-1 mt-5">
                <MenuItem text="Dashboard" type="dashboard" path="/home" />
                <MenuItem text="Pacientes" type="patients" path="/patients" />
                <MenuItem text="Nueva Consulta" type="consult" path="/consult" />
                <MenuItem text="Citas" type="appointments" path="/appointments" />
                <MenuItem text="Recetas" type="medications" path="/medications" />
                <MenuItem text="Configuracion" type="settings" path="/settings" />
            </nav>
        </aside>
    )
}