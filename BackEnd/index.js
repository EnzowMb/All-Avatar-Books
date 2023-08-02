const express = require("express")
const rotaHQ = require("./rotas/hqs")

const index = express()

index.use(express.json())

index.use('/livros', rotaHQ)

const port = 8000

index.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})