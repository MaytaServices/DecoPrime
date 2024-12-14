const express = require('express');
const router = express.Router();

// Importar rutas
const Servicio = require('../models/Servicio');

// Crear un nuevo servicio
router.post('/', async (req, res) => {
    const { nombre, descripcion, precio } = req.body;
    const nuevoServicio = new Servicio({ nombre, descripcion, precio });

    try {
        const servicioGuardado = await nuevoServicio.save();
        res.status(201).json(servicioGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todos los servicios
router.get('/', async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un servicio
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio } = req.body;

    try {
        const servicioActualizado = await Servicio.findByIdAndUpdate(id, { nombre, descripcion, precio }, { new: true });
        res.json(servicioActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un servicio
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Servicio.findByIdAndDelete(id);
        res.json({ message: 'Servicio eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
