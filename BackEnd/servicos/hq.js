const fs = require("fs")

function getTodasHQs() {
    return JSON.parse( fs.readFileSync("HQs.json") )
}

module.exports =  {
    getTodasHQs
}