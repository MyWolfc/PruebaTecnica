const express = require('express')
const {getProspecto,getUnProspecto,postProspecto,putProspecto,deleteProspecto} = require('../Controladores/contraladorProspecto')

const router = express.Router()

/**
 * @swagger
 * /prospecto/:
 *   get:
 *     tags:
 *       - Prospecto
 *     summary: Obtener todas los prospectos
 *     description: Ruta para consultar todos los prospectos
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
router.get('/',getProspecto)

/**
 * @swagger
 * /prospecto/{id}:
 *   get:
 *     tags:
 *       - Prospecto
 *     summary: Obtener la información de un prospecto por su id
 *     description: Ruta para consultar toda la información de un prospecto atravez de su id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del prospecto
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Respuesta existosa
 *       '404':
 *         description: No encontrado
 */
router.get('/:id',getUnProspecto)

/**
 * @swagger
 * /prospecto:
 *   post:
 *     tags:
 *       - Prospecto
 *     summary: Dar de alta un prospecto
 *     description: Ruta para dar de alta un nuevo prospecto a travez de los datos mandados en el body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               correo:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Respuesta exitosa
 *       '500':
 *         description: Error al dar de alta 
 */
router.post('/',postProspecto)

/**
 * @swagger
 * /prospecto/{id}:
 *   put:
 *     tags:
 *       - Prospecto
 *     summary: Actualizar información de un prospecto por su ID
 *     description: Ruta para actualizar la información de un prospecto existente basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del prospecto
 *         schema:
 *           type: integer
  *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               correo:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Se han guadrado las modificaciones
 *       '404':
 *         description: No se han encontrado la entrevista con ese ID
 *       '500':
 *         description: Error al modificar los datos de la entrevista
 */
router.put('/:id',putProspecto)

/**
 * @swagger
 * /prospecto/{id}:
 *   delete:
 *     tags:
 *       - Prospecto
 *     summary: Elimna la información de una entrevista por su id
 *     description: Ruta para elminar toda la información de una entrevista atravez de su id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del prospecto
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Respuesta existosa
 *       '404':
 *         description: No encontrado
 */

router.delete('/:id',deleteProspecto)

module.exports = router