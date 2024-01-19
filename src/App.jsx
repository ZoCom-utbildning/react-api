import { useState } from 'react'
import { FetchComponent } from './components/fetch-component'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <FetchComponent />
  )
}

export default App
