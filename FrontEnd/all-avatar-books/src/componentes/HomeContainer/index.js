import InfoHQ from '../InfoHQ'
import { Titulo } from '../Titulo'
import './estiloHome.css'
import teamAvatar from '../../imagens/Team Avatar Tales.jpg'

const HomeContainer = () => {

    const descricaoTeamAvatarTales = "É uma graphic novel bem curta. Com apenas 80 páginas, sua narrativa é fluida e fácil. Está HQ apresenta 7 histórias curtas do time Avatar"

    return (
        <div>
        <Titulo>Por onde começar?</Titulo>
        <h3>Esta lista irá mostrar as HQs e a ordem de leitura!</h3>
        <InfoHQ nomeHQ={"Team Avatar Tales"} imgHQ={teamAvatar} descricao={descricaoTeamAvatarTales}/>
        </div>
    )
}

export default HomeContainer