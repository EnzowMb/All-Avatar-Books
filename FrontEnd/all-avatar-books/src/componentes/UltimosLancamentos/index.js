import CardRecomenda from "../CardRecomenda"
import { Titulo } from "../Titulo"
import { HQS } from "./dadosUltimosLancamentos"
import './estilo.css'
import imagemHQNova from '../../imagens/Noticia.png'
import { styled } from "styled-components"

const NovasHQsContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    img {
        width: 200px;
    }
`

const UltimosLancamentos = () => {
    return (
        <section className="ultimos">
            <Titulo
                cor={"#000"}
                tamanhoFonte={"36px"}
            >Ultimos Lançamentos</Titulo>
            <NovasHQsContainer>
                {HQS.map(hq => (
                    <img src={hq.src} />
                ))}
            </NovasHQsContainer>
            <CardRecomenda
                titulo="Ultimas notícias!"
                subtitulo='"A Caçadora de Recompensas e o Produtor de Chá"'
                descricao="Nova HQ de Avatar!"
                img={imagemHQNova}
            />
        </section>
    )
}

export default UltimosLancamentos