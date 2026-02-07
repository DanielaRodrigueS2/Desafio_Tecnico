const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

router.get('/clientes', ClienteController.getClientes);
router.get('/clientes/:id', ClienteController.getClienteById);
router.post('/clientes', ClienteController.createCliente);
router.put('/clientes/:id', ClienteController.editCliente);
router.delete('/clientes/:id', ClienteController.deleteCliente);

module.exports = router;