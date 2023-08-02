const fs = require("fs")
const { getTodasHQs, getHQPorId, insereHQ} = require("../servicos/hq")

function getHQS(req, res) {
    try {
        const hqs = getTodasHQs()
        res.send(hqs)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getHQ(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const hq = getHQPorId(id)
            res.send(hq)
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postHQ(req, res) {
    try {
        const hqNova = req.body
        insereHQ(hqNova)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getHQS,
    getHQ,
    postHQ
}