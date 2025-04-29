import { useContext } from "react"

import { ExpandContext } from "../context/expand/ExpandContext"

export const ExpandMenu = () => {

    const { setExpand } = useContext(ExpandContext)

    const onExpand = () => {
        setExpand(prev => !prev)
    }

    return (
        <span className="md:hidden absolute -left-3 top-0 z-50 cursor-pointer hover:scale-120 transition-all"
            onClick={onExpand}
        >
            <i className="bi bi-list"></i>
        </span>
    )
}