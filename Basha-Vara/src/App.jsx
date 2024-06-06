import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './components/MainPage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <MainPage/>
       <SignUp/>
       <SignIn/>
       
    </div>
  


  )
}

export default App
