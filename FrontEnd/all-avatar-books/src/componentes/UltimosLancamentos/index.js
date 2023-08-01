import { HQS } from "./dadosUltimosLancamentos"
import './estilo.css'

const UltimosLancamentos = () => {
    return (
        <section className="ultimos">
            <h2 className="titulo" >Ultimos Lancamentos</h2>
            <div className="novos" >
            {HQS.map(hq => (
                <img src={hq.src} />
            ))}
            </div>
        </section>
    )
}

export default UltimosLancamentos