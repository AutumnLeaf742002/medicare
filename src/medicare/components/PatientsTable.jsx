import { useState } from "react"
import { NavLink } from "react-router"

export const PatientsTable = () => {

    const [page, setPage] = useState(1)

    const onNextPage = () => {
        setPage(page+1)
    }
    const onBackPage = () => {
        if(page <= 1) return
        setPage(page-1)
    }

    const list = [
        {
            name: "María Gómez",
            age: 34,
            contact: "809-555-1234",
            lastVisit: "20 de abril de 2025"
        },
        {
            name: "Luis Martínez",
            age: 45,
            contact: "829-555-9876",
            lastVisit: "15 de marzo de 2025"
        },
        {
            name: "Ana Rivera",
            age: 29,
            contact: "849-555-6543",
            lastVisit: "2 de abril de 2025"
        }
    ]

    return (
        <div className="w-full">
            <table className="overflow-hidden rounded-sm border-collapse w-full text-left bg-white">
                <thead>
                    <tr className="text-left">
                        <th className="font-semibold bg-gray-200 p-3">
                            Paciente
                        </th>
                        <th className="font-semibold bg-gray-200 p-3">
                            Edad
                        </th>
                        <th className="font-semibold bg-gray-200 p-3">
                            Contacto
                        </th>
                        <th className="font-semibold bg-gray-200 p-3">
                            Última visita
                        </th>
                        <th className="font-semibold bg-gray-200 p-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((patient, index) => (
                            <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
                                <td className="p-3 flex items-center gap-2">
                                    <img src="/medicare/placeholder-user.png" alt="placeholder-user"
                                        className="w-9"
                                    />
                                    {patient.name}
                                </td>
                                <td>
                                    {patient.age}
                                    <span className="ml-2">
                                        años
                                    </span>
                                </td>
                                <td>
                                    {patient.contact}
                                </td>
                                <td>
                                    {patient.lastVisit}
                                </td>
                                <td>
                                    <div className="flex gap-2">
                                        <NavLink className="flex items-center  h-full gap-1 text-blue-500 cursor-pointer hover:underline">
                                            <span>
                                                <i className="bi bi-eye-fill"></i>
                                            </span>
                                            <p className="text-sm mb-1">
                                                Ver
                                            </p>
                                        </NavLink>
                                        <NavLink className="flex items-center  h-full gap-1 text-blue-500 cursor-pointer hover:underline">
                                            <span>
                                                <i className="bi bi-pencil-square"></i>
                                            </span>
                                            <p className="text-sm mb-1">
                                                Editar
                                            </p>
                                        </NavLink>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="w-full flex gap-5 items-center justify-center h-16">
                <span className="flex gap-2 text-base text-blue-500 cursor-pointer hover:underline underline-offset-2 select-none"
                    onClick={onBackPage}
                >
                    <i className="bi bi-caret-left-fill"></i>
                    Anterior
                </span>
                <span className="text-gray-400 text-sm">
                    Página {page} de 5
                </span>
                <span className="flex gap-2 text-base text-blue-500 cursor-pointer hover:underline underline-offset-2 select-none"
                    onClick={onNextPage}
                >
                    Siguiente
                    <i className="bi bi-caret-right-fill"></i>
                </span>
            </div>
        </div>
    )
}