import { AppContainerPersonagens } from "../../componentes/AppContainerPersonagens"
import CardPersonagens from "../../componentes/CardPersonagens"
import kataraImg from "../../imagens/Katara.png"

const Katara = () => {

    const nome = "Katara 卡塔拉"
    const subtitulo = "'Mestre na dominação da água'"
    const descricao = "Katara é um mestre dominação de água, nascida na Tribo da Água do Sul, filha do Chefe Hakoda e sua esposa Kya. Durante sua infância, ela foi a única dobradora de água que vivia na Tribo da Água do Sul. Depois de perder sua mãe em um ataque da Nação do Fogo e seu pai partir para lutar contra a Nação do Fogo na Guerra dos Cem Anos, ela foi criada por ela avó paterna Kanna ao lado de seu irmão mais velho Sokka. Quando adolescente, Katara e seu irmão descobriram o jovem Nômade do Ar Avatar, Aang, que havia sido congelado em um iceberg com seu bisão voador, Appa, por um século.[1] Precisando de um mestre dobrador de água, os irmãos e Aang deixaram o Pólo Sul em uma jornada em direção à Tribo da Água do Norte."

    return (
        <AppContainerPersonagens>
            <CardPersonagens 
                nome={nome}
                subtitulo={subtitulo}
                descricao={descricao}
                img={kataraImg}
            />
        </AppContainerPersonagens>
    )
}

export default Katara