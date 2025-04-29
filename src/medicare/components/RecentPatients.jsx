import { NavLink } from "react-router"

export const RecentPatients = ({ name = "no name", age = "no age", lastVisit = "no last visit" }) => {
    return (
        <NavLink className="nextAppointment w-full h-56 rounded-lg flex flex-col items-center justify-between py-7 hover:-translate-y-1 transition-all">
            <img src="/medicare/placeholder-user.png" alt="placeholder-user"
                className="w-20 h-20 border-4 border-gray-100 rounded-full"
            />
            <span className="flex flex-col gap-2 items-center w-full px-2">
                <h1 className="text-base font-bold truncate w-full text-center">
                    {name}
                </h1>
                <p className="text-sm text-gray-400 text-center">
                    {age}
                </p>
                <p className="text-xs text-blue-400 italic text-center">
                    Última visita: {lastVisit}
                </p>
            </span>
        </NavLink>
    )
}