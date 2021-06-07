import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [state, setState] = useState(null)

  useEffect(() => {
    fetch('/rest/test')
      .then((res) => res.text())
      .then((text) => setState(text))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{state}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
