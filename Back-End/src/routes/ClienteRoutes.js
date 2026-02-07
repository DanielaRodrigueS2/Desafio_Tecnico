const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

router.get('/clientes', ClienteController.getClientes);
router.get('/clientes:id', ClienteController.getClienteById);
router.post('/clientes', ClienteController.createCliente);
router.put('/cliente/:id', ClienteController.editCliente);
router.delete('/cliente/:id', ClienteController.deleteCliente);

module.exports = router;