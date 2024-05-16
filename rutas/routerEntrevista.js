const express = require('express')
const { getEntrevista,getUnoEntrevista,postEntrevista,putEntrevista,deleteEntrevista } = require('../Controladores/controladorEntrevista')

const router = express.Router()

/**
 * @swagger
 * /entrevista/:
 *   get:
 *     tags:
 *       - Entrevista
 *     summary: Obtener todas las entrevistas
 *     description: Ruta para consultar todas las entrevistas
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
router.get('/',getEntrevista)

/**
 * @swagger
 * /entrevista/{id}:
 *   get:
 *     tags:
 *       - Entrevista
 *     summary: Obtener la información de una entrevista por su id
 *     description: Ruta para consultar toda la información de una entrevista atravez de su id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la entrevista
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Respuesta existosa
 *       '404':
 *         description: No encontrado
 */
router.get('/:id',getUnoEntrevista)

/**
 * @swagger
 * /entrevista:
 *   post:
 *     tags:
 *       - Entrevista
 *     summary: Dar de alta una entrevista
 *     description: Ruta para dar de alta una nueva entrevista a travez de los datos mandados en el body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vacante:
 *                 type: integer
 *               prospecto:
 *                 type: integer
 *               notas:
 *                 type: string
 *               reclutado:
 *                 type: integer
 *               fechaentrevista:
 *                 type: string
 *                 format: date
 *     responses:
 *       '201':
 *         description: Respuesta exitosa
 *       '500':
 *         description: Error al dar de alta 
 */
router.post('/',postEntrevista)

/**
 * @swagger
 * /entrevista/{id}:
 *   put:
 *     tags:
 *       - Entrevista
 *     summary: Actualizar información de una entrevista por su ID
 *     description: Ruta para actualizar la información de una entrevista existente basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la entrevista
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vacante:
 *                 type: integer
 *               prospecto:
 *                 type: integer
 *               notas:
 *                 type: string
 *               reclutado:
 *                 type: integer
 *               fechaentrevista:
 *                 type: string
 *                 format: date
 *     responses:
 *       '200':
 *         description: Se han guadrado las modificaciones
 *       '404':
 *         description: No se han encontrado la entrevista con ese ID
 *       '500':
 *         description: Error al modificar los datos de la entrevista
 */
router.put('/:id',putEntrevista)

/**
 * @swagger
 * /entrevista/{id}:
 *   delete:
 *     tags:
 *       - Entrevista
 *     summary: Elimna la información de una entrevista por su id
 *     description: Ruta para elminar toda la información de una entrevista atravez de su id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la entrevista
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Respuesta existosa
 *       '404':
 *         description: No encontrado
 */
router.delete('/:id',deleteEntrevista)

module.exports = router