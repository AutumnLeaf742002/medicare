import { Routes, Route } from "react-router"

import { MedicareRoutes } from "../medicare/routes/MedicareRoutes"
import { Login, Register } from "../auth/pages"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={ <MedicareRoutes /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
        </Routes>
    )
}