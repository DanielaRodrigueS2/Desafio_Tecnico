import { useState } from "react";
import './EditCliente.css'

function EditCliente(props){

     dados = props.dadosCliente;

    const [nome, setNome] = useState(dados.nome);
    const [email, setEmail] = useState(dados.email);
    const [telefone, setTelefone] = useState(dados.telefone);
    const [cidade, setCidade] = useState(dados.cidade);
    const [erro, setErro] = useState('Abacate')


    const editarCliente = (e) =>{
        e.preventDefault();
        // Aplicação do fetch para o back end

    }

    return(
        <form className="EditCliente" onSubmit={editarCliente}>
            
            <div className="tituloMenu">
                <h2>Menu Editar Cliente</h2>

                <button className="fechar" onClick={props.fecharMenu}>X</button>
            </div>
            
            <div className="EditNome">
                <label>Nome</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
            </div>
            <div className="EditEmail">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="EditTelefone">
                <label>Telefone</label>
                <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)}></input>
            </div>
            <div className="EditCidade">
                <label>Cidade</label>
                <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}></input>
            </div>

            <p className="msgErroEdicao">*{erro}*</p>

            <div className="botoesEditar">

                <button className ='botaoEditarCliente' type="submit">Editar Cliente</button>
                <button className="botaoDeletarCliente">Deletar Cliente</button>
                
            </div>



        </form>
    );

}

export default EditCliente