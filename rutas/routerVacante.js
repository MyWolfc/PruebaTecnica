const express = require('express')
const { getVacante,getUnaVacante,postVacante,putVacante,deleteVacante } = require('../Controladores/controladorVacante')

const router = express.Router()

/**
 * @swagger
 * /vacante/:
 *   get:
 *     tags:
 *       - Vacante
 *     summary: Obtener todas las vacantes
 *     description: Ruta para consultar todas las vacantes
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
router.get('/',getVacante)

/**
 * @swagger
 * /vacante/{id}:
 *   get:
 *     tags:
 *       - Vacante
 *     summary: Obtener la información de una vacante por su id
 *     description: Ruta para consultar toda la información de una vacante atravez de su id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la vacante
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Respuesta existosa
 *       '404':
 *         description: No encontrado
 */
router.get('/:id',getUnaVacante)

/**
 * @swagger
 * /vacante:
 *   post:
 *     tags:
 *       - Vacante
 *     summary: Dar de alta una vacante
 *     description: Ruta para dar de alta una nueva vacante a travez de los datos mandados en el body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               area:
 *                 type: string
 *               sueldo:
 *                 type: number
 *                 format: float
 *               activo:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: Respuesta exitosa
 *       '500':
 *         description: Error al dar de alta 
 */

router.post('/',postVacante)

/**
 * @swagger
 * /vacante/{id}:
 *   put:
 *     tags:
 *       - Vacante
 *     summary: Actualizar información de una vacante por su id
 *     description: Ruta oara actualizar la información de un usuario existente basado en su id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la vacante
 *         schema:
 *           type: integer
  *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               area:
 *                 type: string
 *               sueldo:
 *                 type: number
 *                 format: float
 *               activo:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Se han guadrado las modificaciones
 *       '404':
 *         description: No se han encontrado la vacante con ese id
 *       '500':
 *         description: Error al modificar los datos de la vacante
 */
router.put('/:id',putVacante)

/**
 * @swagger
 * /vacante/{id}:
 *   delete:
 *     tags:
 *       - Vacante
 *     summary: Elimna la información de una vacante por su id
 *     description: Ruta para elminar toda la información de una entrevista atravez de su id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la vacante
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Respuesta existosa
 *       '404':
 *         description: No encontrado
 */
router.delete('/:id',deleteVacante)

module.exports = router