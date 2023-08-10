const InfoHQ = ({nomeHQ, imgHQ, descricao}) => {
    return (
        <div>
            <h3>{nomeHQ}</h3>
            <img className="imagem" src={imgHQ} alt={nomeHQ}/>
            <p>{descricao}</p>
        </div>
    )
}

export default InfoHQ