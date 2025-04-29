import {  ExpandMenu, HeaderContainer, HeaderTitle } from "../components"  

export const Patients = () => {
    return (
        <>
            <HeaderContainer>
                <ExpandMenu />
                
                <HeaderTitle>
                    <i className="bi bi-person-lines-fill"></i>
                    Gestión de pacientes
                </HeaderTitle>
            </HeaderContainer>
        </>
    )
}