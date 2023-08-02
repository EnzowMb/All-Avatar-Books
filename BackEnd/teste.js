const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("HQs.json"))
const novoDado = {id: '3', nome: 'HQ'}

fs.writeFileSync("HQs.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync("HQs.json")))