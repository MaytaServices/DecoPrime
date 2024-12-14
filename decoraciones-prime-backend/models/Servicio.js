const mongoose = require('mongoose');

const ServicioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Servicio', ServicioSchema)
