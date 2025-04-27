import { Routes, Route, Navigate } from "react-router"

import { Home } from "../pages"
import { NotFound } from "../../ui/pages"

export const MedicareRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={ <NotFound /> } />
            <Route path="/" element={ <Navigate to="/home" /> } />
            <Route path="/home" element={ <Home /> } />
        </Routes>
    )
}