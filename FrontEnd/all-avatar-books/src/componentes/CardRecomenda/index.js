import './estilo.css'

const CardRecomenda = ({ titulo, subtitulo, descricao, img }) => {
    return (
        <div className="card">
            <div>
                <h3>{titulo}</h3>
                <h4 className="subtitulo" >{subtitulo}</h4>
                <p className="descricao" >{descricao}</p>
            </div>
            <div>
                <img className="imgHQ" src={img} alt={titulo} />
                <button className="botao" >Saiba mais</button>
            </div>
        </div>
    )
}

export default CardRecomenda
