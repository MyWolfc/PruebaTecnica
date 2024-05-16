const express = require('express')
const { getEntrevista,getUnoEntrevista,postEntrevista,putEntrevista,deleteEntrevista } = require('../Controladores/rutaEntrevista')

const router = express.Router()

router.get('/',getEntrevista)
router.get('/:id',getUnoEntrevista)
router.post('/',postEntrevista)
router.put('/:id',putEntrevista)
router.delete('/:id',deleteEntrevista)

module.exports = router