const express = require('express')
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')
const swaggerSpecs = require('./swagger');
const routerE = require('./rutas/routerEntrevista');
const routerP = require('./rutas/routerProspecto')
const routerV = require('./rutas/routerVacante')

const app = express();

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use(express.json());
app.use('/entrevista',routerE)
app.use('/prospecto',routerP)
app.use('/vacante',routerV)

app.listen(8081 ,()=>{
    console.log("escuchando en el puerto 8081")
})