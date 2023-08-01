import Input from '../Input'
import './estilo.css'

const Pesquisa = () => {
    return (
        <section className='PesquisaContainer'>
            <h2 className='Titulo'>Pesquisar HQ</h2>
            <Input
                placeholder='Encontre sua HQ'
            />
        </section>
    )
}

export default Pesquisa