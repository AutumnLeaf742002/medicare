import { MedicareLayout } from "../layout"
import { HeaderTitle, Title, Search, Notification, QuickAccessCard, NextAppointment, RecentPatients, ExpandMenu, HeaderContainer, Container } from "../components"

export const HomePage = () => {
    return (
        <MedicareLayout>
            <HeaderContainer>

                <ExpandMenu />

                <HeaderTitle>
                    <i className="bi bi-house-door-fill"></i>
                    Dashboard
                </HeaderTitle>
                <span className="flex items-center gap-3 text-lg">
                    <form>
                        <Search />
                    </form>
                    <Notification />
                </span>
            </HeaderContainer>

            <Container>
                <span className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-around">
                    <QuickAccessCard path="/consult" type="consult" text="Nueva Consulta" />
                    <QuickAccessCard path="/patients" type="patient" text="Agregar Paciente" />
                    <QuickAccessCard path="/appointments" type="appointment" text="Agendar Cita" />
                    <QuickAccessCard path="/home" type="report" text="Generar Reporte" />
                </span>
            </Container>

            <Container>
                <Title className="flex items-center gap-2">
                    <span>
                        <i className="bi bi-calendar-check-fill"></i>
                    </span>
                    <span>
                        Próximas Citas
                    </span>
                </Title>

                <div className="w-full px-2 py-5 flex flex-col gap-3">
                    <NextAppointment type="success" name="María González López" description="Control de presión arterial" time="10:00 AM" />
                    <NextAppointment type="success" name="Carlos Méndez Ruiz" description="Dolor de espalda" time="11:30 AM" />
                    <NextAppointment type="warning" name="Ana Torres García" description="Revisión anual" time="2:15 PM" />
                </div>
            </Container>

            <Container>
                <Title className="flex items-center gap-2">
                    <span className="text-2xl">
                        <i className="bi bi-person-lines-fill"></i>
                    </span>
                    <span>
                        Pacientes Recientes
                    </span>
                </Title>

                <div className="w-full px-2 py-5 grid gap-3 grid-cols-1 lg:grid-cols-4 xl:grid-cols-5">
                    <RecentPatients name="María González López" age="32 años" lastVisit="ayer" />
                    <RecentPatients name="Carlos Méndez Ruiz" age="45 años" lastVisit="3 días atrás" />
                    <RecentPatients name="Ana Torres García" age="28 años" lastVisit="1 semana atrás" />
                    <RecentPatients name="Javier Sánchez Pérez" age="60 años" lastVisit="2 semanas atrás" />

                    <RecentPatients name="María González López" age="32 años" lastVisit="ayer" />
                    <RecentPatients name="Carlos Méndez Ruiz" age="45 años" lastVisit="3 días atrás" />
                    <RecentPatients name="Ana Torres García" age="28 años" lastVisit="1 semana atrás" />
                    <RecentPatients name="Javier Sánchez Pérez" age="60 años" lastVisit="2 semanas atrás" />
                </div>
            </Container>
        </MedicareLayout>
    )
}