import { Routes, Route } from "react-router"

import { MedicareRoutes } from "../medicare/routes/MedicareRoutes"
import { Login, Register } from "../auth/pages"
import { AlertsProvider } from "../medicare/context/Alerts"

export const AppRouter = () => {
    return (
        <AlertsProvider>
            <Routes>
                <Route path="/*" element={<MedicareRoutes />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </AlertsProvider>
    )
}