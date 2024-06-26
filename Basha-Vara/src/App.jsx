import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import PasswordReset from './components/PasswordReset';
import AccountSetting from './components/AccountSetting';
import ForgotPassword from './components/ForgotPassword';
import GetOtp from './components/GetOtp';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs'
import Host from './components/Host'
import WishList from './components/WishList';
import CreateList from './components/CreateList';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='/mainPage' element={<MainPage />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/homePage' element={<HomePage />} />
          <Route path='/accountsetting' element={<AccountSetting />} />
          <Route path='/passwordReset' element={<PasswordReset />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/getOtp' element={<GetOtp />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/host' element = {<Host/>} />
          <Route path='/wish' element = {<WishList/>}/>
          <Route path='/createList' element = {<CreateList/>}/>

          {/* <Route path = '/category' element = {<Categories/>}/> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
