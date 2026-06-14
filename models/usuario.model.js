const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true, maxlength: 20 },
    apellido: { type: String, required: true, maxlength: 20 },
    email: { type: String, required: true, unique: true },
    estado: { type: String, required: true, maxlength: 2 },
    created_at: { type: Date, default: Date.now }
}, {
    versionKey: false
});

module.exports = mongoose.model('Usuario', UsuarioSchema);