const mongoose = require('mongoose');

const ContadorSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    seq: {type: Number, default: 0}
});

// Model responsável por gerar IDs numericos sequenciais
module.exports = mongoose.model('Contador', ContadorSchema);