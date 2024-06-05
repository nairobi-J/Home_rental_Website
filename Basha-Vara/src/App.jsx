import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './components/MainPage'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <MainPage/>
       <SignUp/>
       
    </div>
  


  )
}

export default App
