const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware básicos
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/kfigueroa_lab08')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// --- IMPORTACIÓN DE RUTAS ---
const usuariosRouter = require('./routes/usuario.route');
const librosRouter = require('./routes/libro.route');

// --- USO DE RUTAS ---
app.use('/api/usuarios', usuariosRouter);
app.use('/api/libros', librosRouter);

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});