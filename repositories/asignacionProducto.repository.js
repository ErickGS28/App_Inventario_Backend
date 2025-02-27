const AsignacionProducto = require("../models/asignacionProducto.model");

class AsignacionProductoRepository {

    async getAllAsignacionesActivas() {
        
        const asignaciones = await AsignacionProducto.find({ estado: 'Activo' })
            .populate('persona')
            .populate('producto');
        return asignaciones;
    }
    inactiveStatusAsignacionProducto(asignacionProductoId) {
        return AsignacionProducto.findByIdAndUpdate(asignacionProductoId, { estado: 'Inactivo' });
        
    }

    async getAllAsignacionesProductosByPersona(personaId) {
        const asignaciones = await AsignacionProducto.find({ persona: personaId })
            .populate('persona')
            .populate('producto');
        return asignaciones;
    }
    async createAsignacionProducto(asignacionProducto) {
        return await AsignacionProducto.create(asignacionProducto);
    }
    
    async getAsignacionProductoById(asignacionProductoId) {
        return await AsignacionProducto.findById(asignacionProductoId)
            .populate('persona')
            .populate('producto');
    }

}

module.exports = new AsignacionProductoRepository();
