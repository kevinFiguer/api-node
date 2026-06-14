const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libro.controller');

router.get('/', libroController.list);
router.post('/', libroController.save);

module.exports = router;