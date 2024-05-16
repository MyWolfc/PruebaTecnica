const Prospecto = require('../modelos/modeloProspecto')

const getProspecto = async (req,res) =>{
    try{
        const ProspectoConsul = await Prospecto.findAll()
        res.json(ProspectoConsul)
    } catch(error){
        res.status(500).json({ message: error });
    }
}

const getUnProspecto = async (req,res) =>{
    try{
        const idProspecto = req.params.id
        const ProspectoConsultaEspecif = await Prospecto.findByPk(idProspecto)
        res.json(ProspectoConsultaEspecif)
    } catch(error){
        res.status(500).json({ message: error})
    }
}

const postProspecto = async (req,res) =>{
    try{
        const nombreP = req.body.nombre
        const correoP = req.body.correo
        const ProspectoNuevo = await Prospecto.create({nombre: nombreP,correo: correoP})
        res.json(ProspectoNuevo)
    } catch(error){
        res.status(500).json({ message: error})
    }
}

const putProspecto = async (req,res) =>{
    try{
        const idP = req.params.id
        const ProspectoModif = await Prospecto.findByPk(idP)
        if(ProspectoModif){
            const nombreP = req.body.nombre
            const correoP = req.body.correo
            ProspectoModif.nombre = nombreP
            ProspectoModif.correo = correoP
            await ProspectoModif.save()
            res.json({ message: 'Se han guadrado las modificaciones' })
        }
        else{
            res.status(404).json({ message:'No se han encontrado el prospecto con ese ID' })
        }
    } catch(error){
        res.status(500).json({ message: error })
    }
}

const deleteProspecto = async (req,res) =>{
    try{
        const idP = req.params.id
        const ProspectoElimin = await Prospecto.findByPk(idP)
        if(ProspectoElimin){
            ProspectoElimin.destroy()
            res.json({ message: 'Se han eliminado el prospecto' })
        }
        else{
            res.status(404).json({ message: 'No se ha encontrado el prospecto con ese ID' })
        }
    }catch(error){
        res.status(500).json({ message: error })
    }
}
module.exports = { getProspecto,getUnProspecto,postProspecto,putProspecto,deleteProspecto }