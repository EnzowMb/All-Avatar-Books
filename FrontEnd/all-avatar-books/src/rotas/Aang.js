import aangImg from "../imagens/Aang.png"
import CardPersonagens from "../componentes/CardPersonagens"
import { AppContainerPersonagens } from "../componentes/AppContainerPersonagens"

const Aang = () => {

    const nome = "Aang 安昂"
    const subtitulo = "'Ultimo dominador de ar'"
    const descricao = "Aang foi um Nômade do Ar nascido em 12 AG e o Avatar durante o conflito conhecido como Guerra dos Cem Anos. Seu antecessor imediato foi o Avatar Roku, e sua sucessora foi a Avatar Korra. Como o Avatar de seu tempo, foi o único capaz de realizar a dobra dos quatro elementos. Ele também foi um dos poucos Avatares, e o primeiro em vários ciclos, a aprender a antiga arte da Dobra de Energia, e o primeiro Avatar a utilizar a técnica."

    return (
        <AppContainerPersonagens >
            <CardPersonagens
                nome={nome} 
                img={aangImg}
                subtitulo={subtitulo}
                descricao={descricao}
            />
        </AppContainerPersonagens>
    )
}

export default Aang