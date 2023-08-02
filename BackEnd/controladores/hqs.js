const fs = require("fs")
const { getTodasHQs } = require("../servicos/hq")

function getHQS(req, res) {
    try {
        const hqs = getTodasHQs()
        res.send(hqs)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getHQS
}