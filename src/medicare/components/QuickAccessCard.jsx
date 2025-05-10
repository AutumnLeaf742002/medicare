import { NavLink } from "react-router"

import { Title, Text } from "./"

export const QuickAccessCard = ({ text = "", type, path = "/home" }) => {

    let style = ""

    switch (type) {
        case "consult":
            style = "bi bi-file-earmark-plus-fill"
            break
        case "patient":
            style = "bi bi-person-lines-fill"
            break
        case "appointment":
            style = "bi bi-calendar-check-fill"
            break
        case "report":
            style = "bi bi-file-earmark-pdf-fill"
            break
    }

    return (
        <NavLink to={path} className="bg-white rounded-lg nextAppointment w-full min-w-30 h-26 flex flex-col justify-center items-center gap-2 cursor-pointer border border-transparent hover:border-blue-300 transition-all hover:-translate-y-1">
            <span className="text-3xl text-blue-500">
                <i className={style}></i>
            </span>
            <span title={text}>
                <Title className="text-sm font-semibold truncate w-full text-center px-2">
                    {text}
                </Title>
            </span>
        </NavLink>
    )
}