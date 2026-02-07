const mongoose = require('mongoose');
const incrementador = require('mongoose-sequence')(mongoose);

const ClienteSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    telefone: {type: String, required: true},
    cidade: {type: String, required: true},
})

ClienteSchema.plugin(incrementador, {inc_field: 'id_Num'});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;