const express = require("express");
const AsignacionProductoController = require("../controllers/asignacionProducto.controller");
const router = express.Router();


router.get("/active", AsignacionProductoController.getAllAsignacionesActivas);

router.get("/idPersona/:id", AsignacionProductoController.getAllAsignacionesProductosByPersona);

router.post("/", AsignacionProductoController.createAsignacionProducto);
router.post("/asignacionProductos", AsignacionProductoController.createAsignacionProductos);

router.get("/:id", AsignacionProductoController.getAsignacionProductoById);


router.put("/inactive/:id", AsignacionProductoController.inactiveStatusAsignacionProducto);


router.get("/persona/:personaId", AsignacionProductoController.getAllAsignacionesProductosByPersona);

module.exports = router;
