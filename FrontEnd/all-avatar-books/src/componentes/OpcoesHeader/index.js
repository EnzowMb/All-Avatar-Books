import { styled } from 'styled-components'

const textoOpcoes = ['FAVORITOS', 'HQS AANG', 'HQS KORRA']

const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const OpcaoHeader = () => {
    return (
        <Opcoes>
            {textoOpcoes.map( (texto) => (
                <Opcao className='opcao' ><p>{texto}</p></Opcao>
            ) )}
        </Opcoes>
    )
}

export default OpcaoHeader