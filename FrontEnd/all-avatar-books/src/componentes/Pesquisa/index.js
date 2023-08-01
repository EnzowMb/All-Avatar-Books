import { useState } from 'react'
import Input from '../Input'
import './estilo.css'
import { HQS } from './dadosPesquisa'

const Pesquisa = () => {

    const [HQPesquisadas, setHQPesquisadas] = useState([])

    return (
        <section className='PesquisaContainer'>
            <h2 className='Titulo'>Pesquisar HQ</h2>
            <Input
                placeholder='Encontre sua HQ favorita!'
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = HQS.filter(hq => {
                        if (textoDigitado !== '') {
                            return hq.nome.includes(textoDigitado)
                        }
                        })
                setHQPesquisadas(resultadoPesquisa)
                }}
            />
            {HQPesquisadas.map(hq => (
                <div className='resultado'>
                    <p><strong>{hq.nome}</strong></p>
                    <img src={hq.src} />
                </div>
            ))}
        </section>
    )
}

export default Pesquisa