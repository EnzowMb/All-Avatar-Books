import axios from "axios"

const hqsKorraAPI = axios.create({baseURL: "http://localhost:8000/hqskorra"}) //Mesa

//Cardapio

async function getHqsKorra() {
    const response = await hqsKorraAPI.get('/')

    return response.data
}

export {
    getHqsKorra
}