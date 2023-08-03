import toph from '../../imagens/Toph.png'
import katara from '../../imagens/Katara.png'
import aang from '../../imagens/Aang.png'
import sokka from '../../imagens/Sokka.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const icones = [
    {img: toph, nome: "toph"},
    {img: katara, nome: "katara"},
    {img: aang, nome: "aang"},
    {img: sokka, nome: "sokka"}]

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
               <Link to={`/${icone.nome}`} ><li><Icone src={icone.img} alt={icone.nome}></Icone></li></Link> 
            ))}
        </Icones>
    )
}

export default IconesHeader