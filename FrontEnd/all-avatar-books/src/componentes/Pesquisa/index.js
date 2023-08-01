import { useState } from 'react'
import Input from '../Input'
import './estilo.css'

const Pesquisa = () => {

    const [textoDigitado, setTextoDigitado] = useState('')

    return (
        <section className='PesquisaContainer'>
            <h2 className='Titulo'>Pesquisar HQ</h2>
            <Input
                placeholder='Encontre sua HQ favorita!'
                onBlur={evento => setTextoDigitado(evento.target.value)}
            />
            <p>{textoDigitado}</p>
        </section>
    )
}

export default Pesquisa