import { NavLink } from "react-router"

export const MenuItem = ({ text = "no text", type = "dashboard", path="/home" }) => {

    let icon = ""

    switch (type) {
        case "dashboard":
            icon = "bi bi-house-door-fill"
            break
        case "patients":
            icon = "bi bi-person-lines-fill"
            break
        case "consult":
            icon = "bi bi-file-earmark-plus-fill"
            break
        case "appointments":
            icon = "bi bi-calendar-check-fill"
            break
        case "medications":
            icon = "bi bi-capsule"
            break
        case "settings":
            icon = "bi bi-gear-fill"
            break
        default:
            icon = "No text"
    }

    return (
        <NavLink to={path} className={({isActive})=>`flex items-center gap-4 text-base pl-5 h-12.5 transition-all ${isActive ? "bg-[var(--secondary-color)] pl-7 text-white":"hover:bg-white/10 hover:pl-7 text-gray-300"}`}>
            <span className="text-[1.1rem]">
                <i className={icon}></i>
            </span>
            {text}
        </NavLink>
    )
}