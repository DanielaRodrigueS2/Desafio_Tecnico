import { useState } from "react";
import './EditCliente.css'
import axios from "axios";

function EditCliente(props){

    const dados = props.dadosCliente;

    const [nome, setNome] = useState(dados.nome);
    const [email, setEmail] = useState(dados.email);
    const [telefone, setTelefone] = useState(dados.telefone);
    const [cidade, setCidade] = useState(dados.cidade);
    const [erro, setErro] = useState('')


    const editarCliente = (e) =>{
        e.preventDefault();
        const clienteModificado = {
            nome: nome,
            email: email,
            telefone: telefone,
            cidade: cidade,
        }
        
        axios
            .put(`http://localhost:3000/clientes/${dados.id_num}`, clienteModificado)
            .then((response) =>{
                console.log(response.data);
                props.fecharMenu();
                props.buscar();
            })
            .catch((err) =>{
                if(err.response.data.erro) setErro(err.response.data.erro);
            })

    }

    const deletarCliente = () =>{
        axios
            .delete(`http://localhost:3000/clientes/${dados.id_num}`)
            .then(()=>{
                console.log('Cliente deletado');
                props.fecharMenu();
                props.buscar();
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return(
        <form className="EditCliente" onSubmit={editarCliente}>
            
            <div className="tituloMenu">
                <h2>Menu Editar Cliente</h2>

                <button className="fechar" onClick={props.fecharMenu}>X</button>
            </div>
            
            <div className="editNome">
                <label>Nome</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
            </div>
            <div className="editEmail">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="editTelefone">
                <label>Telefone</label>
                <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)}></input>
            </div>
            <div className="editCidade">
                <label>Cidade</label>
                <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}></input>
            </div>

            <p className="msgErroEdicao">{erro}</p>

            <div className="botoesEditar">

                <button className ='botaoEditarCliente' type="submit">Editar Cliente</button>
                <button type="button" className="botaoDeletarCliente" onClick={deletarCliente}>Deletar Cliente</button>

            </div>

        </form>
    );

}

export default EditCliente