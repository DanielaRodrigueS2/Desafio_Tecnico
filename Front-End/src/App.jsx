import { useState } from 'react'
import './App.css'

function App() {

  const [busca, setBusca] = useState('')

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
        <div className='lista'></div>
      </main>

      <footer className='footer'>
        <div className='informacoes'></div>
      </footer>
    </div>
  )
}

export default App
