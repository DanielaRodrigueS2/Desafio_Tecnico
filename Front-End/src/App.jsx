import { useState } from 'react'
import './App.css'
import Cliente from './components/Cliente'
import AddCliente from './components/AddCliente'

function App() {

  const [busca, setBusca] = useState('')
  const [menuCadastro, setMenuCadastro] = useState(false);

  // Funcões para abrir e fechar o menu de Cadastro de clientes
  const fecharMenuCadastro = () => setMenuCadastro(false);
  const abrirMenuCadastro = () => setMenuCadastro(true);

  const dadosTeste = [
    {id: 1, nome: 'Dan Abacaxi', email: 'daniela@abacaxi', telefone: '0028922',cidade: 'Bom despacho'},
    {id: 2, nome: 'Daisy Abacaxi', email: 'daniela@abacaxi', telefone: '0028922',cidade: 'Bdespacho'},
    {id: 3, nome: 'Dan Abacaxi', email: 'daniela@abacaxi', telefone: '0028922',cidade: 'Bom despacho'},
    {id: 4, nome: 'Daisy Abacaxi', email: 'daniela@abacaxi', telefone: '0028922',cidade: 'Bdespacho'},
    {id: 5, nome: 'Dan Abacaxi', email: 'daniela@abacaxi', telefone: '0028922',cidade: 'Bom despacho'},
    {id: 6, nome: 'Daisy Abacaxi', email: 'daniela@abacaxi', telefone: '0028922',cidade: 'Bdespacho'},
    {id: 7, nome: 'Dan Abacaxi', email: 'daniela@abacaxi', telefone: '0028922',cidade: 'Bom despacho'},
    {id: 8, nome: 'Daisy Abacaxi', email: 'daniela@abacaxi', telefone: '0028922',cidade: 'Bdespacho'},
    
  ]

  return (
    <div className='principal'>
      <header className='header'>
          <h1>Gerenciamento de Clientes</h1>
      </header>

      <main className='main'>

        <div className='busca'>

          <input value={busca} onChange={(e) => setBusca(e.target.value)} className='barraDeBusca'></input>

          <select className='dropDown'>
            <option value='nome'>Nome</option>
            <option value='email'>Email</option>
            <option value='cidade'>Cidade</option>
          </select>

        </div>

        <div className='lista'>
          
          {dadosTeste.map((item) =>(
            <Cliente data={item}></Cliente>
          ))}

        </div>

        <button className='adicionarCliente' onClick={abrirMenuCadastro}>Adicionar Cliente</button>

        {menuCadastro && <AddCliente fecharMenu={fecharMenuCadastro}></AddCliente>}

      </main>

      <footer className='footer'>
        <div className='informacoes'></div>
      </footer>
    </div>
  )
}

export default App
