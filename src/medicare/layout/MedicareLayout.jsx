import { useLocation } from "react-router"
import { AnimatePresence, motion } from "framer-motion"

import { Menu, Alerts } from "../components"
import { ExpandProvider } from "../context/expand"

export const MedicareLayout = ({ children }) => {

    const location = useLocation()

    return (

        <ExpandProvider>
            <div className="flex w-screen h-screen">
                <Menu />
                <AnimatePresence mode="wait">
                    <motion.main
                    key={location.pathname}
                    className="flex-1 bg-[var(--background-color)] px-5 pb-4 overflow-y-auto overflow-x-hidden relative"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.4}}
                    >
                        <Alerts />
                        {children}
                    </motion.main>
                </AnimatePresence>
            </div>
        </ExpandProvider>
    )
}