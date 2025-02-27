const mongoose = require("mongoose");

const AsignacionProducto = mongoose.Schema({
    persona: {type: mongoose.Schema.Types.ObjectId, ref: "Persona", required: true},
    producto: {type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true},
    fechaAsignacion: {type: Date, required: true},
    estado: {type: String, required: true},
});

module.exports = mongoose.model("Persona", PersonaSchema);