import { useEffect, useState } from 'react'

function App() {
  const [state, setstate] = useState(null)

  useEffect(() => {
    fetch(`/rest/test`)
      .then((res) => res.text())
      .then((text) => setstate(text))
  }, [])
  return <div className="App">{state}</div>
}

export default App
