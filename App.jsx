import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main'>
      <div className='mobile'></div>
    </div>
    </>
  )
}

export default App
