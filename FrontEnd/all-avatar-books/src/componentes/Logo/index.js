import logo from '../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
   display: flex;
   font-size: 30px;
`

const LogoImage = styled.img`
   margin-right: 10px;
   width: 100px;
`

const Logo = () => {
   return (
      <LogoContainer>
         <LogoImage
            src={logo}
            alt='Logo Avatar'
         />
         <p><i>All</i><strong>Avatar</strong><i>Books</i></p>
      </LogoContainer>
   )
}

export default Logo