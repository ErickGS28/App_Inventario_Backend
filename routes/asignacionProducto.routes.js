const express = require("express");
const AsignacionProductoController = require("../controllers/asignacionProducto.controller");
const router = express.Router();


router.get("/", AsignacionProductoController.getAllAsignacionesActivas);


router.get("/:id", AsignacionProductoController.getAsignacionProductoById);


router.post("/", AsignacionProductoController.createAsignacionProducto);


router.put("/inactive/:id", AsignacionProductoController.inactiveStatusAsignacionProducto);


router.get("/persona/:personaId", AsignacionProductoController.getAllAsignacionesProductosByPersona);

module.exports = router;
