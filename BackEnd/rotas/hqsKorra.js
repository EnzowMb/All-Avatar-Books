const { Router } = require("express")
const { getHqsKorra, postHqKorra, deleteHqKorra } = require("../controladores/hqsKorra")

const router = Router()

router.get('/', getHqsKorra)

router.post('/:id', postHqKorra)

router.delete('/:id', deleteHqKorra)

module.exports = router