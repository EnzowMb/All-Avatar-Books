import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { getHqsKorra } from "../servicos/hqsKorra"

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #7094b7 35%, #c6b3b0);
`

const HqKorra = () => {

    const [hqsKorra, setHqsKorra] = useState([])

    async function fetchHqsKorra() {
        const hqsKorraDaAPI = await getHqsKorra()
        setHqsKorra(hqsKorraDaAPI)
    }

    useEffect(() => {
        fetchHqsKorra()
    }, [])

    return (
        <AppContainer>
            {hqsKorra.map( hq => (
                <p>{hq.nome}</p>
            ) )}
        </AppContainer>
    )
}

export default HqKorra