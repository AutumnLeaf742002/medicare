import { useContext, useState } from "react"

import { ExpandContext } from "../context/expand/ExpandContext"

import { MenuItem } from "./MenuItem"

export const Menu = () => {

    const { expandStyle, setExpand } = useContext(ExpandContext)

    const onExpand = ()=> {
        setExpand(prev => !prev)
    }

    return (
        <aside className={`bg-[var(--primary-color)] text-[var(--light-color)] flex flex-col transition-all ${expandStyle}`}>

            <span className="absolute text-2xl sm:hidden right-1 cursor-pointer hover:scale-120"
                onClick={onExpand}
            >
                <i className="bi bi-x"></i>
            </span>

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

            <footer className="flex-1 flex items-end">
                <div className="border-t border-gray-600 h-26.5 w-full flex pl-5">
                    <div className="flex pt-5 justify-center gap-2.5 cursor-pointer">
                        <span>
                            <img src="/medicare/placeholder-user.png" alt="User icon"
                                className="w-10.5 h-10.5 rounded-full border border-gray-600"
                            />
                        </span>
                        <span className="flex flex-col gap-0.5">
                            <strong>
                                Dr. Juan Pérez
                            </strong>
                            <p className="text-xs text-gray-300">
                                Cardiólogo
                            </p>
                        </span>
                    </div>
                </div>
            </footer>
        </aside>
    )
}