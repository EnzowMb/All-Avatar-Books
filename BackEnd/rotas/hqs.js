const { Router } = require("express")
const { getHQS, getHQ, postHQ, patchHQ, deleteHQ } = require("../controladores/hqs")

const router = Router()

router.get('/', getHQS)

router.get('/:id', getHQ)

router.post('/', postHQ)

router.patch('/:id', patchHQ)

router.delete('/:id', deleteHQ)

module.exports = router