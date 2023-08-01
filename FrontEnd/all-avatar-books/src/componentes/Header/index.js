import IconesHeader from '../IconesHeader'
import Logo from '../Logo'
import OpcaoHeader from '../OpcoesHeader'
import './estilo.css'

const Header = () => {
    return (
        <header className='App-header' >
            <Logo />
            <OpcaoHeader />
            <IconesHeader />
        </header>
    )
}

export default Header