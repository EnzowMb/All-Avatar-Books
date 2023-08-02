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

module.exports =  {
    getTodasHQs,
    getHQPorId,
    insereHQ
}