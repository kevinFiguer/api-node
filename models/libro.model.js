const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    isbn: { type: String, required: true },
    autor: { type: String, required: true },
    año: { type: Number, required: true },
    sinopsis: { type: String },
    género: { type: String, required: true }
});

module.exports = mongoose.model('Libro', libroSchema);