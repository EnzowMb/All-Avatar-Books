import toph from '../../imagens/Toph.png'
import katara from '../../imagens/Katara.png'
import aang from '../../imagens/Aang.png'
import sokka from '../../imagens/Sokka.png'
import './estilo.css'

const icones = [toph, katara, aang, sokka]

const IconesHeader = () => {
    return (
        <ul className="icones">
            {icones.map( (icone) => (
                <li><img className="icone" src={icone}></img></li>
            ) )}
        </ul>
    )
}

export default IconesHeader