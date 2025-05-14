import { useContext } from "react"
import { AlertsContext } from "../context/Alerts"

import { MedicareLayout } from "../layout"

import { Button, Container, ExpandMenu, HeaderContainer, HeaderTitle, NewConsultForm } from "../components/"

export const ConsultPage = () => {

    const { newAlert } = useContext(AlertsContext)

    const onSaveConsult = ()=>{
        newAlert("success", "Nueva consulta guardada")
    }

    return (
        <>
            <MedicareLayout>
                <HeaderContainer>
                    <ExpandMenu />

                    <HeaderTitle>
                        <i className="bi bi-file-earmark-plus-fill"></i>
                        Nueva Consulta Médica
                    </HeaderTitle>

                    <span className="flex gap-4">
                        <Button className="bg-[var(--secondary-color)]">
                            <i className="bi bi-x-circle-fill text-lg"></i>
                            Cancelar
                        </Button>
                        <Button className="bg-[var(--secondary-color)]"
                            callback={onSaveConsult}
                        >
                            <i className="bi bi-floppy-fill"></i>
                            Guardar
                        </Button>
                    </span>
                </HeaderContainer>

                <Container>
                    <NewConsultForm />
                </Container>
            </MedicareLayout>
        </>
    )
}