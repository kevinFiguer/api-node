const LibroModel = require("../models/libro.model");

const libroController = {
    list: async (req, res) => {
        try {
            const libros = await LibroModel.find();
            res.json(libros);
        } catch (error) { res.status(500).json({ error: error.message }); }
    },
    save: async (req, res) => {
        try {
            const libro = new LibroModel(req.body);
            await libro.save();
            res.status(201).json(libro);
        } catch (error) { res.status(500).json({ error: error.message }); }
    }
    // Puedes agregar show, edit y remove siguiendo la misma lógica del usuario
};

module.exports = libroController;