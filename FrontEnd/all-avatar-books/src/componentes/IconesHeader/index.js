import toph from '../../imagens/Toph.png'
import katara from '../../imagens/Katara.png'
import aang from '../../imagens/Aang.png'
import sokka from '../../imagens/Sokka.png'

const icones = [toph, katara, aang, sokka]

const IconesHeader = () => {
    return (
        <ul className="icones">
            {icones.map( (icone) => (
                <li className="icone"><img src={icone}></img></li>
            ) )}
        </ul>
    )
}

export default IconesHeader