function getHQS(req, res) {
    try {
        res.send("Olá Pele, King of Futbal")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getHQS
}