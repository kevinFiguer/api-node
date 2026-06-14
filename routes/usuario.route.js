const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

router.get('/', usuarioController.list);
router.get('/:id', usuarioController.show);
router.post('/', usuarioController.save);
router.put('/:id', usuarioController.edit);
router.delete('/:id', usuarioController.remove);

module.exports = router;