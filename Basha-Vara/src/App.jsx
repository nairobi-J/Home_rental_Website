import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import AboutUs from './components/AboutUs';
import Host from './components/Host';
import WishList from './components/WishList';
import CreateList from './components/CreateList';
import ListingDetails from './components/ListingDetails';
import Listings from './components/Listings';
import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';

function AppContent(){

  const location = useLocation();
  const hideNavbarPaths = ['/signUp', '/signIn', '/about'];

  return(
    <>
     {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
          <Route index element={<MainPage />} />
          <Route path='/' element={<MainPage />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/homePage' element={<HomePage />} />
          <Route path='/accountsetting' element={<AccountSetting />} />
          <Route path='/passwordReset' element={<PasswordReset />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/getOtp' element={<GetOtp />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/host' element={<Host />} />
          <Route path='/wish' element={<WishList />} />
          <Route path='/createList' element={<CreateList />} />
          <Route path='/listings/:listingId' element={<ListingDetails />} />
          <Route path='/listings' element={<Listings />} />
          <Route path='/listings/search/:search' element={<SearchBar />} />
          <Route path = '/propertyList' element = {<PropertyList />} />
         
        
        </Routes>

    </>
  );

}

function App() {

  return (
    <div>
      <BrowserRouter>
      <AppContent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
