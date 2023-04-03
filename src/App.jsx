import { useState } from 'react'

import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <main>
        <NavBar />
        <ItemListContainer />
        </main>
        
    </div>
  )
}

export default App
