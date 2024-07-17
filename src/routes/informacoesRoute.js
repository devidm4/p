const express = require('express');

const informacoesControllers = require('../controllers/informacoesControllers');

const router = express.Router();

router.get('/1', informacoesControllers.getInformacoes);
router.post('/', informacoesControllers.createInformacao);
router.put('/1', informacoesControllers.updateInformacao);
router.delete('/1', informacoesControllers.deleteInformacao);

module.exports = router;