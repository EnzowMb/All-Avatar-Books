const fs = require("fs")

function getTodasHQs() {
    return JSON.parse( fs.readFileSync("HQs.json") )
}

function getHQPorId(id) {
    const hqs = JSON.parse( fs.readFileSync("HQs.json") )

    const hqsFiltradas = hqs.filter(hq => hq.id === id)[0]
    return hqsFiltradas
}

module.exports =  {
    getTodasHQs,
    getHQPorId
}