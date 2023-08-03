const fs = require("fs")

function getTodasHQs() {
    return JSON.parse( fs.readFileSync("HQs.json") )
}

function getHQPorId(id) {
    const hqs = JSON.parse( fs.readFileSync("HQs.json") )

    const hqsFiltradas = hqs.filter(hq => hq.id === id)[0]
    return hqsFiltradas
}

function insereHQ(hqNova) {
    const hqs = JSON.parse( fs.readFileSync("HQs.json") )

    const listaNovaHQs = [ ...hqs, hqNova ]

    fs.writeFileSync("HQs.json", JSON.stringify(listaNovaHQs))
}

function modificaHQ(modficacoes, id) {
    let hqsAtuais = JSON.parse( fs.readFileSync("HQs.json") )

    const indiceModificado = hqsAtuais.findIndex(hq => hq.id === id)

    const conteudoMudado = { ...hqsAtuais[indiceModificado], ...modficacoes }

    hqsAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("HQs.json", JSON.stringify(hqsAtuais))
}

function deletarHQPorId(id) {
    const hqs = JSON.parse( fs.readFileSync("HQs.json") )

    const hqsFiltradas = hqs.filter( hq => hq.id !== id)

    fs.writeFileSync("HQs.json", JSON.stringify(hqsFiltradas))
}

module.exports =  {
    getTodasHQs,
    getHQPorId,
    insereHQ,
    modificaHQ,
    deletarHQPorId
}