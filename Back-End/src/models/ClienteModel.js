const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ClienteSchema = new mongoose.Schema({
    id_num: {type: Number, unique: true},
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    telefone: {type: String, required: true},
    cidade: {type: String, required: true},
})


const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;