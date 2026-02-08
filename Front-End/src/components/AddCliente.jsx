import { useState } from "react";
import './AddCliente.css';
import axios from 'axios';

function AddCliente(props){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [erro, setErro] = useState('')

    const cadastrarCliente = (event) =>{
        event.preventDefault();

        if(!nome || !email || !telefone ||  !cidade){
            setErro('Campos incompletos');
            return;
        }
        
        const novoCliente = {
            nome: nome,
            email: email,
            telefone: telefone,
            cidade: cidade,
        }

        axios
            .post(`http://localhost:3000/clientes`, novoCliente)
            .then((response) => {
                console.log(response.data);
                props.fecharMenu();
                props.buscar();
            })
            .catch((err)=>{
                setErro(err.response.data.erro);
            })
    }

    return(
        <form className="addCliente" onSubmit={cadastrarCliente}>
            
            <div className="tituloMenu">
                <h2>Menu Adicionar Cliente</h2>

                <button className="fechar" onClick={props.fecharMenu}>X</button>
            </div>
            
            <div className="addNome">
                <label>Nome</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
            </div>
            <div className="addEmail">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="addTelefone">
                <label>Telefone</label>
                <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)}></input>
            </div>
            <div className="addCidade">
                <label>Cidade</label>
                <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}></input>
            </div>

            <p className="msgErroCadastro">{erro}</p>

            <button className ='botaoCadastrarCliente' type="submit">Cadastrar Cliente</button>


        </form>
    );

}

export default AddCliente