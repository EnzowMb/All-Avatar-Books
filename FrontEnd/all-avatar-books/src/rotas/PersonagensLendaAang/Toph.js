import { AppContainerPersonagens } from "../../componentes/AppContainerPersonagens"
import CardPersonagens from "../../componentes/CardPersonagens"
import tophImg from '../../imagens/Toph.png'

const Toph = () => {

    const nome = "Toph 北方拓芙"
    const subtitulo = "'Melhor dominadora de Terra do mundo! :)'"
    const descricao = "Toph Beifong, também conhecida como Toph, é uma mestre de Dobra de Terra, uma das mais poderosas de seu tempo, e a descobridora da Dobra de Metal. Cega desde o nascimento, Toph foi tratada constantemente de maneira condescendente por causa de sua inabilidade, particularmente por seus pais ultra protetores, Lao e Poppy Beifong. Ao descobrir Toupeiras-Texugo, animais que dominavam a Terra e que também eram cegos, ela aprendeu a usar a dobra de terra como uma extensão de seus sentidos. Isso lhe deu a habilidade de ver todas as vibrações que passam pelo chão."

    return (
        <AppContainerPersonagens>
            <CardPersonagens 
                nome={nome}
                subtitulo={subtitulo}
                descricao={descricao}
                img={tophImg}
            />
        </AppContainerPersonagens>
    )
}

export default Toph