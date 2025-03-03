const AsignacionProductoRepository = require('../repositories/asignacionProducto.repository');
const PersonaRepository = require('../repositories/persona.repository');
const ProductoRepository = require('../repositories/producto.repository');

class AsignacionProductoService {
    async getAllAsignacionesActivas() {
            return await AsignacionProductoRepository.getAllAsignacionesActivas();
    }

    async createAsignacionProducto(personaId, productoId) {
        const persona = await PersonaRepository.getPersonaById(personaId);
        const producto = await ProductoRepository.getProductoById(productoId);
        
        if (!persona) {
            throw new Error("La persona no existe");
        }
        if (!producto) {
            throw new Error("El producto no existe");
        }


        return await AsignacionProductoRepository.createAsignacionProducto(personaId, productoId);
    }
    async createAsignacionProductos(personaId, productos) {
        const persona = await PersonaRepository.getPersonaById(personaId);

        console.log("SERVICE "+productos);
        
        if (!persona) {
            throw new Error("La persona no existe");
        }
        let asignaciones = [];
        for (let i = 0; i < productos.length; i++) {
            const productoId = productos[i];
            try{
                const asignacionCreada = await AsignacionProductoRepository.createAsignacionProducto(personaId, productoId);
                asignaciones.push(asignacionCreada);
            } catch (error) {
                    const asignacionError = {producto: productoId, error: error.message};   
                    asignaciones.push(asignacionError);
            }
        }
    }

    async inactiveStatusAsignacionProducto(asignacionProductoId) {
        if(!asignacionProductoId){
            throw new Error("El id de la asignacion es requerido");
        }
        return await AsignacionProductoRepository.inactiveStatusAsignacionProducto(asignacionProductoId);
    }

    async getAllAsignacionesProductosByPersona(personaId) {
        if(!personaId){
            throw new Error("El id de la persona es requerido");
        }
        return await AsignacionProductoRepository.getAllAsignacionesProductosByPersona(personaId);
    }

    async getAsignacionProductoById(asignacionProductoId) {
        if(!asignacionProductoId){
            throw new Error("El id de la asignacion es requerido");
        }
        return await AsignacionProductoRepository.getAsignacionProductoById(asignacionProductoId);
    }
}

module.exports = new AsignacionProductoService();