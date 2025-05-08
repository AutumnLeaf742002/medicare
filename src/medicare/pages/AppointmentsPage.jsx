import { MedicareLayout } from "../layout"

import { ExpandMenu, HeaderContainer, HeaderTitle } from "../components";

export const AppointmentsPage = () => {
    return (
        <>
            <MedicareLayout>
                <HeaderContainer>
                    <ExpandMenu />

                    <HeaderTitle>
                        <i className="bi bi-calendar-check-fill"></i>
                        Agenda de citas
                    </HeaderTitle>
                </HeaderContainer>
            </MedicareLayout>
        </>
    )
}