import toph from '../../imagens/Toph.png'
import katara from '../../imagens/Katara.png'
import aang from '../../imagens/Aang.png'
import sokka from '../../imagens/Sokka.png'
import styled from 'styled-components'

const icones = [toph, katara, aang, sokka]

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.img`
    margin-right: 25px;
    width: 80px;
    border-radius: 30px;
`

const IconesHeader = () => {
    return (
        <Icones>
            {icones.map((icone) => (
                <li><Icone className="icone" src={icone}></Icone></li>
            ))}
        </Icones>
    )
}

export default IconesHeader