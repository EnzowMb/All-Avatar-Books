const { getTodasHqsKorra, inserirHqsKorra, deletaHqsKorra } = require("../servicos/hqsKorra")

function getHqsKorra(req, res) {
    try {
        const hqs = getTodasHqsKorra()
        res.send(hqs)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postHqKorra(req, res) {
    try {
        const id = req.params.id
        inserirHqsKorra(id)
        res.status(201)
        res.send("HQ inserida com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteHqKorra(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletaHqsKorra(id)
            res.send("Item deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getHqsKorra,
    postHqKorra,
    deleteHqKorra
}