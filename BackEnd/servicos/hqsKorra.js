const fs = require("fs")

function getTodasHqsKorra() {
    return JSON.parse(fs.readFileSync("hqsKorra.json"))
}

function deletaHqsKorra(id) {
    const hqsKorra = JSON.parse(fs.readFileSync("hqsKorra.json"))

    const hqsFiltradas = hqsKorra.filter( hq => hq.id !== id )

    fs.writeFileSync("hqsKorra.json", JSON.stringify(hqsFiltradas))
}

function inserirHqsKorra(id) {
    const hqsKorra = JSON.parse(fs.readFileSync("hqsKorra.json"))
    const hqs = JSON.parse(fs.readFileSync("HQs.json"))

    const hqInserido = hqs.find( hq => hq.id === id )
    const novaListaHqKorra = [...hqsKorra, hqInserido]
    fs.writeFileSync("hqsKorra.json", JSON.stringify(novaListaHqKorra))
}

module.exports = {
    getTodasHqsKorra,
    deletaHqsKorra
}