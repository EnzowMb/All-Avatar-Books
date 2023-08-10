import { AppContainerPersonagens } from "../../componentes/AppContainerPersonagens"
import CardPersonagens from "../../componentes/CardPersonagens"
import sokkaImg from "../../imagens/Sokka.png"

const Sokka = () => {

    const nome = "Sokka 索卡"
    const subtitulo = "'Muito sarcástico...'"
    const descricao = "Sokka é um guerreiro que nasceu e cresceu na Tribo da Água do Sul criado por sua avó Kanna, ele viveu uma vida de um adolescente normal em sua tribo até que ele e sua irmã Katara navegam pelo mar e encontram um iceberg e lá havia um garoto Nômade do Ar congelado, que permaneceu incubado durante um período de 100 anos que, inclusive, é o Avatar, que tem esperança de que pode aprender a controlar os elementos e acabar com a guerra entre as quatro nações. Logo após isso ele e sua irmã Katara deixam sua tribo para viajar ao lado de Aang e ajudá-lo em sua jornada, e também é um membro da Equipe Avatar."

    return (
        <AppContainerPersonagens>
            <CardPersonagens 
                nome={nome}
                subtitulo={subtitulo}
                descricao={descricao}
                img={sokkaImg}
            />
        </AppContainerPersonagens>
    )
}

export default Sokka