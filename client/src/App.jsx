import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Texteditor from './Texteditor.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
			<Texteditor />
    </>
  )
}

export default App
