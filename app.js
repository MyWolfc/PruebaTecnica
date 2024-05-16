const express = require('express')
const app = express();
const routerE = require('./rutas/routerEntrevista');
const routerP = require('./rutas/routerProspecto')
const routerV = require('./rutas/routerVacante')

app.use(express.json());
app.use('/entrevista',routerE)
app.use('/prospecto',routerP)
app.use('/vacante',routerV)

app.listen(8081 ,()=>{
    console.log("escuchando en el puerto 8081")
})