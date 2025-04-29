import { useState } from "react"

import { ExpandContext } from "./ExpandContext"

export const ExpandProvider = ({ children }) => {

    const [expand, setExpand] = useState(window.innerWidth<=648?false:true)

    const expandStyle = expand===true?"w-screen h-screen absolute z-60 sm:w-64 sm:static":"w-0"

    return (
        <ExpandContext.Provider value={{ expandStyle, setExpand }}>
            {children}
        </ExpandContext.Provider>
    )
}