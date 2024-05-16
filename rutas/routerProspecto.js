const express = require('express')
const {getProspecto,getUnProspecto,postProspecto,putProspecto,deleteProspecto} = require('../Controladores/contraladorProspecto')

const router = express.Router()

router.get('/',getProspecto)
router.get('/:id',getUnProspecto)
router.post('/',postProspecto)
router.put('/:id',putProspecto)
router.delete('/:id',deleteProspecto)

module.exports = router