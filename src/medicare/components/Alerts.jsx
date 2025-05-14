import { useContext } from "react"

import { AlertsContext } from "../context/Alerts"

import { Alert } from "./"
import { AnimatePresence } from "framer-motion"

export const Alerts = () => {

    const { alerts } = useContext(AlertsContext)

    return (
        <ul className="fixed top-2 right-2 z-10 flex flex-col gap-3">
            <AnimatePresence>
                {
                    alerts.map(alert => (
                        <Alert key={alert.id} id={alert.id} type={alert.type} text={alert.text} />
                    ))
                }
            </AnimatePresence>
        </ul>
    )
}