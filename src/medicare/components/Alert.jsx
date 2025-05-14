import { useContext, useEffect } from "react"
import { motion } from "framer-motion"

import { AlertsContext } from "../context/Alerts"

import { Title, Text } from "./"

export const Alert = ({ id = 0, type, text = "no text" }) => {

    const { deleteAlert } = useContext(AlertsContext)

    useEffect(() => {

        setTimeout(() => {
            deleteAlert(id)
        }, 3000)
    }, [])


    const onDeleteAlert = () => {
        deleteAlert(id)
    }

    let icon
    let alertColor
    let title

    switch (type) {
        case "success":
            icon = "bi bi-check-all"
            alertColor = "bg-[var(--success-color)]"
            title = "Hecho"
            break
        case "danger":
            icon = "bi bi-radioactive"
            alertColor = "bg-[var(--danger-color)]"
            title = "Error"
            break
        case "warning":
            icon = "bi bi-info-circle"
            alertColor = "bg-[var(--warning-color)] text-black"
            title = "Aviso"
            break
    }

    return (
        <motion.li className={`${alertColor} text-white p-2 rounded-lg shadow-lg shadow-black/50 flex justify-between relative`}
            key={id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
            <span className="flex flex-col justify-between">
                <Title className="text-white text-sm flex gap-1">
                    <i className={`${icon}`}></i>
                    {title}
                </Title>
                <Text className="text-white text-sm truncate w-70">
                    {text}
                </Text>
            </span>
            <i
                className="bi bi-x cursor-pointer hover:scale-110 transition-all text-lg"
                onClick={onDeleteAlert}
            ></i>
        </motion.li>
    )
}