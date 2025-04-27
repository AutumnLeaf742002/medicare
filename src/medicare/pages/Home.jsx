import { HeaderContainer } from "../components/HeaderContainer"
import { HeaderTitle } from "../components/HeaderTitle"

export const Home = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderTitle>
                    <i className="bi bi-house-door-fill"></i>
                    Dashboard
                </HeaderTitle>
            </HeaderContainer>
        </>
    )
}