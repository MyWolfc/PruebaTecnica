const express = require('express')
const { getVacante,getUnaVacante,postVacante,putVacante,deleteVacante } = require('../Controladores/controladorVacante')

const router = express.Router()

router.get('/',getVacante)
router.get('/:id',getUnaVacante)
router.post('/',postVacante)
router.put('/:id',putVacante)
router.delete('/:id',deleteVacante)

module.exports = router