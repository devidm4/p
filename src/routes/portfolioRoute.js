const express = require('express');

const portfolioControllers = require('../controllers/portfolioControllers');

const router = express.Router();

router.get('/', portfolioControllers.getPortfolio);
router.get('/:id', portfolioControllers.getProjetoById);
router.post('/', portfolioControllers.createProjeto);
router.put('/:id', portfolioControllers.updateProjeto);
router.delete('/:id', portfolioControllers.deleteProjeto);

module.exports = router;