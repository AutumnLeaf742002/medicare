import { ExpandMenu, HeaderContainer, HeaderTitle } from "../components";

export const Medications = () => {
    return (
        <>
            <HeaderContainer>
                <ExpandMenu />

                <HeaderTitle>
                    <i className="bi bi-capsule"></i>
                    Gestión de Recetas
                </HeaderTitle>
            </HeaderContainer>
        </>
    )
}