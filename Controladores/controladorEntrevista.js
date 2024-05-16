
const Entrevista = require('../modelos/modeloEntrevista')

const getEntrevista = async (req,res) =>{
    try{
        const EntrevistaConsul = await Entrevista.findAll()
        res.json(EntrevistaConsul)
    } catch (error){
        res.status(500).json({ message: error });
    }
}

const getUnoEntrevista = async (req,res) => {
    try{
        const idE = req.params.id
        const entrevistaConsultaEspecif = await Entrevista.findByPk(idE)
        res.json(entrevistaConsultaEspecif)
    } catch (error)
    {
        res.status(500).json({ message: error });
    }
}

const postEntrevista = async (req,res) =>{
    try{
        const idV = req.body.vacante
        const idP = req.body.prospecto
        const fechaentrevistaE = req.body.fechaentrevista
        const notasE = req.body.notas
        const reclutadoE = req.body.reclutado
        const EntrevistaNueva = Entrevista.create({vacante:idV,prospecto:idP,fecha_entrevista:fechaentrevistaE,notas:notasE,reclutado:reclutadoE})
        res.json(EntrevistaNueva)
    } catch(error){
        res.status(500).json({ message: error });
    }
}

const putEntrevista = async (req,res) =>{
    try{
        const idE = req.params.id
        const EntrevistaModif = await Entrevista.findByPk(idE)
        if(EntrevistaModif){
            const idV = req.body.vacanteid
            const idP = req.body.prospectoid
            const fechaentrevistaE = req.body.fechaentrevista
            const notasE = req.body.notas
            const reclutadoE = req.body.reclutado
            EntrevistaModif.vacante = idV
            EntrevistaModif.prospecto = idP
            EntrevistaModif.fecha_entrevista = fechaentrevistaE
            EntrevistaModif.notas = notasE
            EntrevistaModif.reclutado = reclutadoE
            await EntrevistaModif.save()
            res.json({ message: 'Se han guadrado las modificaciones' })
        }
        else{
            res.status(404).json({ message:'No se han encontrado la entrevista con ese ID' })
        }
    } catch(error){
        res.status(500).json({ message: error })
    }
}

const deleteEntrevista = async (req,res) => {
    try{
        const idE = req.params.id
        const EntrevistaElimin = await Entrevista.findByPk(idE)
        if(EntrevistaElimin){
            EntrevistaElimin.destroy()
            res.json({ message: 'Se ha elminado la entrevista' })
        }
        else{
            res.status(404).json({ message: 'No se ha encontrado la entrevista con ese ID' })
        }
    } catch(error){

    }
}
module.exports = { getEntrevista, getUnoEntrevista ,postEntrevista,putEntrevista,deleteEntrevista }
