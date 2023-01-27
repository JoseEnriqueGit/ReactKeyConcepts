import { useState } from 'react'
// Components
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card></Card>
    </div>
  )
}

export default App
