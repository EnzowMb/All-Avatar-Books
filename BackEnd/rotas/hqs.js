const { Router } = require("express")
const { getHQS, getHQ, postHQ, patchHQ } = require("../controladores/hqs")

const router = Router()

router.get('/', getHQS)

router.get('/:id', getHQ)

router.post('/', postHQ)

router.patch('/:id', patchHQ)

router.delete('/', (req, res) => {
    res.send('Delete')
})

module.exports = router