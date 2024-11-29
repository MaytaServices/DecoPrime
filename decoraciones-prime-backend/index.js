const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const servicioRoutes = require('./routes/servicios');
const contactoRoutes = require('./routes/contacto');

dotenv.config();

const app = express(); // Mueve la inicialización aquí

const PORT = process.env.PORT || 3000;

// Configuración de CORS para aceptar solicitudes desde cualquier origen
app.use(cors({
    origin: 'http://localhost:3000', // Asegúrate de que sea el dominio correcto
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para parsear JSON
app.use(express.json()); // Solo mantener una instancia

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Rutas de la API
app.use('/api/servicios', servicioRoutes);
app.use('/api/contacto', contactoRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Hello World! Dan');
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        error: 'Ocurrió un error en el servidor',
        message: err.message
    });
});

// Inicialización del servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
