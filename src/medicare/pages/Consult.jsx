import {  ExpandMenu, HeaderContainer, HeaderTitle } from "../components/"

export const Consult = () => {
    return (
        <>
            <HeaderContainer>
                <ExpandMenu />

                <HeaderTitle>
                    <i className="bi bi-file-earmark-plus-fill"></i>
                    Nueva Consulta Médica
                </HeaderTitle>
            </HeaderContainer>
        </>
    )
}