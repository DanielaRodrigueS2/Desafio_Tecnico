const Cliente = require('../models/ClienteModel');

exports.getClientes = async (req, res)=>{
    try{
        const clientes = await Cliente.findById();
        res.status(200).json(clientes);
    }
    catch(erro){
        res.status(500).json({erro: erro.message});
    }
};

exports.getClienteById = async (req, res) =>{
    const id = req.params.id;
    try{
        const cliente = await Cliente.findOne({id_num: id});
        if(!cliente) return res.status(404).json({erro:'Cliente não encontrado'}); // verifica se o cliente foi retornado ou nao

        res.status(200).json(cliente);
    }
    catch(erro){
        res.status(500).json({erro: erro.message});
    }
};

exports.createCliente = async (req,res) =>{
    const {nome, email, telefone, cidade} = req.body;
    try{
        const clienteExistente = await Cliente.findOne({email});
        if(clienteExistente) return res.status(400).json({erro: 'Email já cadastrado'}); // verifica se um cliente ja possui esse email
        
        const clienteNovo = new Cliente({nome, email, telefone, cidade});
        const clienteCriado = await clienteNovo.save();

        res.status(201).json(clienteCriado);
    }
    catch(erro){
        res.status(500).json({erro: erro.message})
    }

}

exports.editCliente = async (req, res)=>{
    const id = req.params.id;
    const {nome, email, telefone, cidade} = req.body;
    try{
        const cliente = await Cliente.findOne({id_num: id});
        if (!cliente) res.status(400).json({erro: 'Cliente não encontrado'}); //  verifica se o cliente existe

        if(email){
            const clienteExistente = await Cliente.findOne({email: email, id_num: {$ne : id}}) // verifica se outro cliente possui o email novo (tirando o cliente atual)
            if (clienteExistente) return res.status(400).json({erro: 'Um cliente já possui esse email'})
        }

        // Atualiza os dados alterados
        cliente.nome = nome ?? cliente.nome;
        cliente.email = email ?? cliente.email;
        cliente.telefone = telefone ?? cliente.telefone;
        cliente.cidade = cidade ?? cliente.cidade;

        clienteAlterado = await cliente.save();


    }
    catch(erro){
        res.status(500).json({erro: erro.message});
    }   

};

exports.deleteCliente = async (req,res) =>{
    const id = req.params.id;

    try{
        const cliente = await Cliente.findOneAndDelete({id_num: id}); 
        if(!cliente) return res.status(404).json({erro: 'Cliente nao encontrado'});

        res.status(204).json({mensagem: 'cliente deletado com sucesso'});
    }
    catch(erro){
        res.status(500).json({erro: erro.message});
    }
};

