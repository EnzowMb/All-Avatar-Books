import { useState } from 'react'
import Input from '../Input'
import './estilo.css'
import { HQS } from './dadosPesquisa'
import { styled } from 'styled-components'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #5AACCF 55%, #c6b3b0 110%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: ${props => props.tamanho};
    width: 100%;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
`

const Pesquisa = () => {

    const [HQPesquisadas, setHQPesquisadas] = useState([])
    const [tamanhoPesquisa, setTamanhoPesquisa] = useState('')

    return (
        <PesquisaContainer tamanho={{tamanhoPesquisa} * 30 }>
            <h2 className='Titulo'>Pesquisar HQ</h2>
            <Input
                placeholder='Encontre sua HQ favorita!'
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = HQS.filter(hq => {
                        if(textoDigitado !== '') {
                            return hq.nome.includes(textoDigitado)
                        }
                    })
                    setHQPesquisadas(resultadoPesquisa)
                    setTamanhoPesquisa(resultadoPesquisa.length)
                }}
            />
            {HQPesquisadas.map(hq => (
                <Resultado>
                    <p><strong>{hq.nome}</strong></p>
                    <img src={hq.src} />
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa