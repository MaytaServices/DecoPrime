// routes/contacto.js
const express = require('express');
const router = express.Router();

const Contacto = require('../models/Contacto');

// Route to handle contact form submissions
router.post('/', async (req, res) => {
    try {
        const { nombre, email, telefono, mensaje } = req.body;

        const newContacto = new Contacto({
            nombre,
            email,
            telefono,
            mensaje
        });

        await newContacto.save();
        res.status(201).json({ message: 'Formulario enviado exitosamente' });
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        res.status(500).json({ message: 'Error al enviar el formulario' });
    }
});

module.exports = router;
