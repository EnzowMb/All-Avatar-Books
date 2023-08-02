const { Router } = require("express")
const { getHQS, getHQ, postHQ } = require("../controladores/hqs")

const router = Router()

router.get('/', getHQS)

router.get('/:id', getHQ)

router.post('/', postHQ)

router.patch('/', (req, res) => {
    res.send('PATCH')
})

router.delete('/', (req, res) => {
    res.send('Delete')
})

module.exports = router