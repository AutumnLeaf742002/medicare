import { MedicareLayout } from "../layout"
import { ExpandMenu, HeaderContainer, HeaderTitle } from "../components";

export const SettingsPage = () => {
    return (
        <>
            <MedicareLayout>
                <HeaderContainer>
                    <ExpandMenu />

                    <HeaderTitle>
                        <i className="bi bi-gear-fill"></i>
                        Configuración
                    </HeaderTitle>
                </HeaderContainer>
            </MedicareLayout>
        </>
    )
}