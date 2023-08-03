const fs = require("fs")
const { getTodasHQs, getHQPorId, insereHQ, modificaHQ, deletarHQPorId} = require("../servicos/hq")

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

        if(req.body.nome) {
            insereHQ(hqNova)
            res.status(201)
            res.send("HQ inserida com sucesso!")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatorio!")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchHQ(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            modificaHQ(body, id)
            res.send("Item modificado com sucesso!")
        } else {
            res.status(422)
            res.send("Id inválido") 
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteHQ(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletarHQPorId(id)
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
    getHQS,
    getHQ,
    postHQ,
    patchHQ,
    deleteHQ
}