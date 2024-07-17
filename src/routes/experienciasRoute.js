const express = require('express');

const experienciasControllers = require('../controllers/experienciasControllers');

const router = express.Router();

router.get('/', experienciasControllers.getAllExperiencias);
router.get('/:id', experienciasControllers.getExperienciaById);
router.post('/', experienciasControllers.createExperiencia);
router.put('/:id', experienciasControllers.upadateExperiencia);
router.delete('/:id', experienciasControllers.deleteExperiencia);

module.exports = router;