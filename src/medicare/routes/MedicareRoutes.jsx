import { Routes, Route, Navigate } from "react-router"

import { AppointmentsPage, ConsultPage, HomePage, MedicationsPage, PatientsPage, SettingsPage } from "../pages"
import { NotFound } from "../../ui/pages"

export const MedicareRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="/notfound" />} />
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/notfound" element={<NotFound />} />

            <Route path="/home" element={<HomePage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/consult" element={<ConsultPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/medications" element={<MedicationsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
        </Routes>
    )
}