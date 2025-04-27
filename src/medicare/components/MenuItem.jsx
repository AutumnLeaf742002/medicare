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
        <NavLink to={path} className={({isActive})=>`flex items-center gap-4 text-base pl-5 h-12.5 transition hover:bg-white/10 ${isActive ? "bg-[var(--secondary-color)]":""}`}>
            <span className="text-lg">
                <i className={icon}></i>
            </span>
            {text}
        </NavLink>
    )
}