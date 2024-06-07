import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './components/MainPage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import HomePage from './components/HomePage'
import PasswordReset from './components/PasswordReset'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <MainPage/>
       <SignUp/>
       <SignIn/>
       <HomePage/>
       <PasswordReset/>
       
    </div>
  


  )
}

export default App
