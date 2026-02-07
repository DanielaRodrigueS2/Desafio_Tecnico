const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    telefone: {type: String, required: true},
    cidade: {type: String, required: true},
})

const Cliente = mongoose.model('Cliente', ClienteSchema);