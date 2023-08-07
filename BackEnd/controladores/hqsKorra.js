const { getTodasHqsKorra } = require("../servicos/hqsKorra")

function getHqsKorra(req, res) {
    try {
        const hqs = getTodasHqsKorra
        res.send(hqs)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postHqKorra(req, res) {
    
}

module.exports = {
    getHqsKorra
}