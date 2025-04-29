import { Routes, Route, Navigate } from "react-router"

import { Appointments, Consult, Home, Medications, Patients, Settings } from "../pages"
import { NotFound } from "../../ui/pages"
import { ExpandProvider } from "../context/expand"

import { Menu } from "../components"

export const MedicareRoutes = () => {
    return (
        <ExpandProvider>
            <main className="flex w-screen h-screen">
                <Menu />
                <div className="flex-1 bg-[var(--background-color)] px-5 pb-4 overflow-y-auto overflow-x-hidden">
                    <Routes>
                        <Route path="/*" element={<Navigate to="/notfound" />} />
                        <Route path="/notfound" element={<NotFound />} />
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/patients" element={<Patients />} />
                        <Route path="/consult" element={<Consult />} />
                        <Route path="/appointments" element={<Appointments />} />
                        <Route path="/medications" element={<Medications />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </main>
        </ExpandProvider>
    )
}