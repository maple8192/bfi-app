import { useEffect } from 'react'
import init from '../wasm/pkg/wasm'

function App() {
  useEffect(() => { init() }, [])

  return (
    <h1>Hello World</h1>
  )
}

export default App
