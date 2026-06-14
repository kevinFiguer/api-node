const UsuarioModel = require("../models/usuario.model");

const usuarioController = {
    list: async (req, res) => { // Listar todos
        try {
            const usuarios = await UsuarioModel.find();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    show: async (req, res) => { // Obtener uno por ID
        try {
            const usuario = await UsuarioModel.findById(req.params.id);
            if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    save: async (req, res) => { // Crear
        try {
            const usuario = new UsuarioModel(req.body);
            await usuario.save();
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    edit: async (req, res) => { // Actualizar
        try {
            const usuario = await UsuarioModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    remove: async (req, res) => { // Eliminar
        try {
            const usuario = await UsuarioModel.findByIdAndDelete(req.params.id);
            if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            res.json({ mensaje: 'Usuario eliminado' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = usuarioController;