import axios from "axios"

const hqsAPI = axios.create({baseURL: "http://localhost:8000/hqs"})

const getHQS = () => {
    const response = hqsAPI.get('/')

    return response.data
}

export {
    getHQS
}