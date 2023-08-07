const express = require("express")
const rotaHQ = require("./rotas/hqs")
const cors = require("cors")

const index = express()
index.use(express.json())
index.use(cors({origin: "*"}))

index.use('/hqs', rotaHQ)

const port = 8000

index.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})