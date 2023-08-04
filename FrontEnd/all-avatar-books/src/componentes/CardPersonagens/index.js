import './estiloPersonagens.css'

const CardPersonagens = ({nome, img, subtitulo, descricao}) => {
    return (
        <div className="card">
            <div>
                <h3 className="titulo">{nome}</h3>
                <h4 className="subtitulo" >{subtitulo}</h4>
                <div className="cardDescricao">
                    <p className="descricao">{descricao}</p>
                </div>
            </div>
            <div>
                <img className="imgHQ" src={img} alt={nome} />
            </div>
        </div>
    )
}

export default CardPersonagens