import IconesHeader from '../IconesHeader'
import Logo from '../Logo'
import OpcaoHeader from '../OpcoesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #fcdc7b;
    display: flex;
    justify-content: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <OpcaoHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header