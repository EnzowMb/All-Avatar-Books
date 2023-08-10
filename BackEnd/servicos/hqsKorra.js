const fs = require("fs")

function getTodasHqsKorra() {
    return JSON.parse(fs.readFileSync("./JSONs/hqsKorra.json"))
}

function deletaHqsKorra(id) {
    const hqsKorra = JSON.parse(fs.readFileSync("./JSONs/hqsKorra.json"))

    const hqsFiltradas = hqsKorra.filter( hq => hq.id !== id )

    fs.writeFileSync("./JSONs/hqsKorra.json", JSON.stringify(hqsFiltradas))
}

function inserirHqsKorra(id) {
    const hqsKorra = JSON.parse(fs.readFileSync("./JSONs/hqsKorra.json"))
    const hqs = JSON.parse(fs.readFileSync("./JSONs/HQs.json"))

    const hqInserido = hqs.find( hq => hq.id === id )
    const novaListaHqKorra = [...hqsKorra, hqInserido]
    fs.writeFileSync("./JSONs/hqsKorra.json", JSON.stringify(novaListaHqKorra))
}

module.exports = {
    getTodasHqsKorra,
    deletaHqsKorra,
    inserirHqsKorra
}