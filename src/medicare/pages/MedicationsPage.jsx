import { MedicareLayout } from "../layout"
import { ExpandMenu, HeaderContainer, HeaderTitle } from "../components";

export const MedicationsPage = () => {
    return (
        <>
            <MedicareLayout>
                <HeaderContainer>
                    <ExpandMenu />

                    <HeaderTitle>
                        <i className="bi bi-capsule"></i>
                        Gestión de Recetas
                    </HeaderTitle>
                </HeaderContainer>
            </MedicareLayout>
        </>
    )
}