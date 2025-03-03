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
            .populate('producto');
        return asignaciones;
    }
    async createAsignacionProducto(personaId, productoId) {
        const fechaAsignacion = new Date();
        fechaAsignacion.setHours(0,0,0,0);
        return await AsignacionProducto.create({ persona: personaId, producto: productoId, fechaAsignacion, estado: 'Activo' });
    }
    
    async getAsignacionProductoById(asignacionProductoId) {
        return await AsignacionProducto.findById(asignacionProductoId)
            .populate('persona')
            .populate('producto');
    }

}

module.exports = new AsignacionProductoRepository();
