import { Titulo } from "../Titulo"
import { HQS } from "./dadosUltimosLancamentos"
import './estilo.css'

const UltimosLancamentos = () => {
    return (
        <section className="ultimos">
            <Titulo 
            cor={"#000"}
            tamanhoFonte={"36px"}
            >Ultimos Lancamentos</Titulo>
            <div className="novos" >
            {HQS.map(hq => (
                <img src={hq.src} />
            ))}
            </div>
        </section>
    )
}

export default UltimosLancamentos