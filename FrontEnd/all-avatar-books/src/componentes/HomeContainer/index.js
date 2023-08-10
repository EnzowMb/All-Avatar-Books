import InfoHQ from '../InfoHQ'
import './estiloHome.css'
import teamAvatar from '../../imagens/Team Avatar Tales.jpg'
import { Titulo } from '../Titulo'

const HomeContainer = () => {

    const descricaoTeamAvatarTales = "É uma graphic novel bem curta. Com apenas 80 páginas, sua narrativa é fluida e fácil. Está HQ apresenta 7 histórias curtas do time Avatar"

    return (
        <div>
        <Titulo cor='#fcdc7b' tamanhoFonte='36px'>Por onde começar?</Titulo>
        <h3>Esta lista irá mostrar as HQs e a ordem de leitura!</h3>
        <div id='livro4' className='lista'>
        <InfoHQ nomeHQ={"Team Avatar Tales"} imgHQ={teamAvatar} descricao={descricaoTeamAvatarTales}/>
        </div>
        </div>
    )
}

export default HomeContainer