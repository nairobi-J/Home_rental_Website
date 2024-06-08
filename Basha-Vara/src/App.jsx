import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './components/MainPage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import HomePage from './components/HomePage'
import PasswordReset from './components/PasswordReset'
import AccountSetting from './components/AccountSetting'


//import react-router-dom
import {
  BrowserRouter as router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <MainPage/>
       <SignUp/>
       <SignIn/>
       <HomePage/>
       <PasswordReset/>
       <AccountSetting/>

       
    </div>
  


  )
}

export default App
