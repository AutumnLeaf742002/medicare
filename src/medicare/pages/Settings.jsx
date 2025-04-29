import { ExpandMenu, HeaderContainer, HeaderTitle } from "../components";

export const Settings = () => {
    return (
        <>
            <HeaderContainer>
                <ExpandMenu />

                <HeaderTitle>
                    <i className="bi bi-gear-fill"></i>
                    Configuración
                </HeaderTitle>
            </HeaderContainer>
        </>
    )
}