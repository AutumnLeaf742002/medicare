import { HeaderContainer } from "../components/HeaderContainer"
import { HeaderTitle, Search, Notification, QuickAccessCard, NextAppointment } from "../components"

export const Home = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderTitle>
                    <i className="bi bi-house-door-fill"></i>
                    Dashboard
                </HeaderTitle>
                <span className="flex items-center gap-3 text-lg">
                    <Search />
                    <Notification />
                </span>
            </HeaderContainer>

            <div className="mt-5">
                <span className="flex gap-4 justify-around">
                    <QuickAccessCard path="/consult" type="consult" text="Nueva Consulta" />
                    <QuickAccessCard path="/patients" type="patient" text="Agregar Paciente" />
                    <QuickAccessCard path="/appointments" type="appointment" text="Agendar Cita" />
                    <QuickAccessCard path="/home" type="report" text="Generar Reporte" />
                </span>
            </div>

            <div className="mt-5 w-full p-4 bg-white rounded-lg shadow-lg">
                <h1 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    <span>
                        <i className="bi bi-calendar-check-fill"></i>
                    </span>
                    <span>
                        Próximas Citas
                    </span>
                </h1>

                <div className="w-full px-2 py-5 flex flex-col gap-3">
                    <NextAppointment type="success" name="María González López" description="Control de presión arterial" time="10:00 AM" />
                    <NextAppointment type="success" name="Carlos Méndez Ruiz" description="" time="11:30 AM" />
                    <NextAppointment type="warning" name="Ana Torres García" description="Revisión anual" time="2:15 PM" />
                </div>
            </div>
        </>
    )
}