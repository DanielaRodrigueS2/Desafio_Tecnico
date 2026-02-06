import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='principal'>
      <header className='header'>
          <h1>Gerenciamento de Clientes</h1>
      </header>
      <main className='main'>
        <div className='busca'></div>
        <div className='lista'></div>
      </main>

      <footer className='footer'>
        <div className='informacoes'></div>
      </footer>
    </div>
  )
}

export default App
