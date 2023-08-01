import './estilo.css'

const textoOpcoes = ['FAVORITOS', 'HQS AANG', 'HQS KORRA']

const OpcaoHeader = () => {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map( (texto) => (
                <li className='opcao' ><p>{texto}</p></li>
            ) )}
        </ul>
    )
}

export default OpcaoHeader