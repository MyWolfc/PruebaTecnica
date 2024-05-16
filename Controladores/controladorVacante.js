const Vacante = require('../modelos/modeloVacante')

const getVacante = async (req,res) =>{
    try{
        const VacanteConsul = await Vacante.findAll()
        res.json(VacanteConsul)
    } catch(error){
        res.status(500).json({ message: error });
    }
}

const getUnaVacante = async (req,res) =>{
    try{
        const idV = req.params.id
        const VacanteConsultaEspecif = await Vacante.findByPk(idV)
        if(VacanteConsultaEspecif){
            res.json(VacanteConsultaEspecif)
        }
        else{
            res.status(400).json({ message: 'No se ha encontrado la vacante con ese id' })
        }
    } catch(error){
        res.status(500).json({ message: error });
    }
}

const postVacante = async (req,res) =>{
    try{
        const areaV = req.body.area
        const sueldoV = req.body.sueldo
        const activoV = req.body.activo
        const VacanteNueva = await Vacante.create({area: areaV,sueldo:sueldoV,activo:activoV})
        res.json(VacanteNueva)
    } catch(error){
        res.status(500).json({ message: error });
    }
}

const putVacante = async (req,res) =>{
    try{
        const idV = req.params.id
        const VacanteModif = await Vacante.findByPk(idV)
        if(VacanteModif){
            const areaV = req.body.area
            const sueldoV = req.body.sueldo
            const activoV = req.body.activo
            VacanteModif.area = areaV
            VacanteModif.sueldo = sueldoV
            VacanteModif.activo = activoV
            await VacanteModif.save()
            res.json({ message: 'Se han guadrado las modificaciones' })
        }
        else{
            res.status(404).json({ message: 'No se han encontrado la vacante con ese ID' })
        }
    } catch(error){
        res.status(500).json({ message: error });
    }
}

const deleteVacante = async (req,res) =>{
    try{
        const idV = req.params.id
        const VacanteElimin = await Vacante.findByPk(idV)
        if(VacanteElimin){
            VacanteElimin.destroy()
            res.json({ message: 'Se ha eliminado la vacante' })
        }
        else{
            res.status(404).json({ message: 'No se han encontrado la vacante con ese ID' })
        }
    } catch(error){
        res.status(500).json({ message: error });
    }
}

module.exports = { getVacante,getUnaVacante,postVacante,putVacante,deleteVacante }