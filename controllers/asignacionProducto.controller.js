const AsignacionProductoService = require("../services/asignacionProducto.service");

class AsignacionProductoController {
    async getAllAsignacionesActivas(req, res) {
        try {
            const asignacionesActivas = await AsignacionProductoService.getAllAsignacionesActivas();
            res.status(200).json(asignacionesActivas);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async inactiveStatusAsignacionProducto(req, res) {
        try {
            const asignacionProductoId = req.params.id;
            
            if (!asignacionProductoId || asignacionProductoId === "" || asignacionProductoId === undefined || asignacionProductoId === null) {
                throw new Error("El id de la asignación de producto es requerido");
            }
            await AsignacionProductoService.inactiveStatusAsignacionProducto(asignacionProductoId);
            res.status(200).json({ message: 'AsignacionProducto Inactivado' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAllAsignacionesProductosByPersona(req, res) {
        try {
            const personaId = req.params.personaId;
            if (!personaId || personaId === "" || personaId === undefined || personaId === null) {
                throw new Error("El id de la persona es requerido");
            }
            const asignaciones = await AsignacionProductoService.getAllAsignacionesProductosByPersona(personaId);
            res.status(200).json(asignaciones);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async createAsignacionProducto(req, res) {
        try {

            const personaId = req.body.persona;
            const productoId = req.body.producto;

            if (!personaId || personaId === "" || personaId === undefined || personaId === null) {
                throw new Error("El id de la persona es requerido");
            }
            if (!productoId || productoId === "" || productoId === undefined || productoId === null) {
                throw new Error("El id del producto es requerido");
            }

            const asignacionCreada = await AsignacionProductoService.createAsignacionProducto(personaId, productoId);
            res.status(200).json(asignacionCreada);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }


    
    async createAsignacionProductos(req, res) {
        try {
            const personaId = req.body.persona;
            const productos = req.body.producto;

            

            if (!personaId || personaId === "" || personaId === undefined || personaId === null) {
                throw new Error("El id de la persona es requerido");
            }

            if (!productos || productos.length == 0 || productos === undefined || productos === null) {
                throw new Error("El id del producto es requerido");
            }

            const asignacionCreada = await AsignacionProductoService.createAsignacionProductos(personaId, productos);
            res.status(200).json(asignacionCreada);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAsignacionProductoById(req, res) {
        try {
            const asignacionProductoId = req.params.id;
            if (!asignacionProductoId || asignacionProductoId === "" || asignacionProductoId === undefined || asignacionProductoId === null) {
                throw new Error("El id de la asignación de producto es requerido");
            }
            const asignacion = await AsignacionProductoService.getAsignacionProductoById(asignacionProductoId);
            res.status(200).json(asignacion);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async inactiveStatusAsignacionProducto(req, res) {  
        try {
            const asignacionProductoId = req.params.id;
            if (!asignacionProductoId || asignacionProductoId === "" || asignacionProductoId === undefined || asignacionProductoId === null) {
                throw new Error("El id de la asignación de producto es requerido");
            }
            await AsignacionProductoService.inactiveStatusAsignacionProducto(asignacionProductoId);
            res.status(200).json({ message: 'AsignacionProducto Inactivado' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAllAsignacionesProductosByPersona(req, res) {
        try {
            const personaId = req.params.personaId;
            if (!personaId || personaId === "" || personaId === undefined || personaId === null) {
                throw new Error("El id de la persona es requerido");
            }
            const asignaciones = await AsignacionProductoService.getAllAsignacionesProductosByPersona(personaId);
            res.status(200).json(asignaciones);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }    

    async getAsignacionProductoById(req, res) {
        try {
            const asignacionProductoId = req.params.id;
            if (!asignacionProductoId || asignacionProductoId === "" || asignacionProductoId === undefined || asignacionProductoId === null) {
                throw new Error("El id de la asignación de producto es requerido");
            }
            const asignacion = await AsignacionProductoService.getAsignacionProductoById(asignacionProductoId);
            res.status(200).json(asignacion);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

}

module.exports = new AsignacionProductoController();