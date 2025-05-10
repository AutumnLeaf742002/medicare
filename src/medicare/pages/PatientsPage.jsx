import { MedicareLayout } from "../layout"
import { Button, Container, ExpandMenu, HeaderContainer, HeaderTitle, Search, Select } from "../components"
import { PatientsTable } from "../components/PatientsTable"

export const PatientsPage = () => {

    return (
        <>
            <MedicareLayout>
                <HeaderContainer>
                    <ExpandMenu />

                    <HeaderTitle>
                        <i className="bi bi-person-lines-fill"></i>
                        Gestión de pacientes
                    </HeaderTitle>

                    <span className="flex flex-wrap justify-center items-center gap-3 text-lg">
                        <form>
                            <Search />
                        </form>
                        <Button className="bg-[var(--secondary-color)]">
                            <i className="bi bi-person-plus-fill text-lg"></i>
                            Nuevo Paciente
                        </Button>
                    </span>
                </HeaderContainer>

                {/* filter */}
                <Container className="flex gap-5 flex-wrap">
                    <Select label="Estado" options={[{ value: "all", text: "Todos" }, { value: "active", text: "Activos" }, { value: "inactive", text: "Inactivos" }]} />

                    <Select label="Última visita" options={[{ value: "anydate", text: "Cualquier fecha" }, { value: "lastweek", text: "Última semana" }, { value: "lastmonth", text: "Último mes" }, { value: "lastyear", text: "Último año" }]} />

                    <Button className="bg-[var(--secondary-color)]">
                        <i className="bi bi-funnel-fill text-lg"></i>
                        Aplicar Filtros
                    </Button>

                    <Button className="bg-[var(--secondary-color)]">
                        <i className="bi bi-arrow-clockwise text-lg"></i>
                        Reiniciar
                    </Button>
                </Container>
                {/* filter */}

                {/* patients list */}
                <Container className="flex justify-center">
                    <PatientsTable />
                </Container>
                {/* patients list */}
            </MedicareLayout>
        </>
    )
}