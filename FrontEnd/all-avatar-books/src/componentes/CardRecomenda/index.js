import './estilo.css'
import styled from 'styled-components'

const Card = styled.div`
    align-items: center;
    background-image: linear-gradient(90deg, #e0c675 35%, #c6b3b0);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Descricao = styled.div`
    p {
        max-width: 300px;
    }
`

const Imagem = styled.img`
    width: 150px;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const CardRecomenda = ({ titulo, subtitulo, descricao, img }) => {
    return (
        <Card>
            <Descricao>
                <h3>{titulo}</h3>
                <Subtitulo>{subtitulo}</Subtitulo>
                <p>{descricao}</p>
            </Descricao>
            <div>
                <Imagem src={img} alt={titulo} />
                <button className="botao" >Saiba mais</button>
            </div>
        </Card>
    )
}

export default CardRecomenda
