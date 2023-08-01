import axios from "axios";

//É só uma referencia para api, não é ela de verdade
const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"})

//async é o conceito de assincronismo, codigos que vão trabalhar em tempos diferentes!!
async function getLivros() {
    const response = await livrosAPI.get('/')
    // o = livrosAPI.get faz o request QUE DEVOLVE UMA response!
    //Esse get('/') seria para retornar todos os gets da API livros!!

    //await significa ESPERAR - Então para o codigo fica claro que ele deve esperar o
    //resultado chegar para depois seguir adiante
    //async significa assincronismo

    return response.data
}

export {
    getLivros
}