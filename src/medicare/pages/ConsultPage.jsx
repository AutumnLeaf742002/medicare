import { MedicareLayout } from "../layout"

import { ExpandMenu, HeaderContainer, HeaderTitle } from "../components/"

export const ConsultPage = () => {
    return (
        <>
            <MedicareLayout>
                <HeaderContainer>
                    <ExpandMenu />

                    <HeaderTitle>
                        <i className="bi bi-file-earmark-plus-fill"></i>
                        Nueva Consulta Médica
                    </HeaderTitle>
                </HeaderContainer>
            </MedicareLayout>
        </>
    )
}