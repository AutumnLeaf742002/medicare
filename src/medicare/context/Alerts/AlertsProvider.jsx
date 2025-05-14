import { useState } from "react"

import { AlertsContext } from "./"

export const AlertsProvider = ({ children }) => {

    const [alerts, setAlerts] = useState([])

    const newAlert = (type, text)=>{
        const id = Date.now() + Math.random();

        setAlerts(prevAlerts => [...prevAlerts, {id, type, text}])
    }

    const deleteAlert = (id)=>{
        setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id))
    }

    return (
        <AlertsContext.Provider value={{ alerts, newAlert, deleteAlert }}>
            {children}
        </AlertsContext.Provider>
    )
}