const Contador = require('../models/ContadorModel');

async function getProximo(nome) {
    const contador = await Contador.findOneAndUpdate(
        {_id: nome}, // procura um documento com nome cliente (referente a sequencia atual)
        {$inc: {seq: 1}}, // incrementa o valor em 1
        {new: true, upsert: true} // devolve documento atualizado, e cria se não existir
    );

    return contador.seq;
}

module.exports = getProximo;