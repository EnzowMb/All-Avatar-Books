const express = require("express")
const rotaHQ = require("./rotas/hqs")
const cors = require("cors")
const rotaHqKorra = require("./rotas/hqskorra")

const index = express()
index.use(express.json())
index.use(cors({origin: "*"}))

index.use('/hqs', rotaHQ)
index.use('/hqskorra', rotaHqKorra)

const port = 8000

index.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})