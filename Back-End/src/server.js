require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: ture
})
.then(()=>{
    console.log('Conexao com Mongo foi feita com sucesso :p');
    app.listen(3000, () =>{
        console.log('Servidor foi ligado na porta 3000 ');
    })
})
.catch((err)=>{
    console.error('Houve algum erro ao tentar se conectar ao mongo', err.message);
})