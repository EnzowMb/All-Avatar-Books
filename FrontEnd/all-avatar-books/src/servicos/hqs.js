import axios from "axios"

const hqsAPI = axios.create({baseURL: "http://localhost:8000/hqs"})

async function getHQS()  {
    const response = await hqsAPI.get('/')

    return response.data
}

export {
    getHQS
}