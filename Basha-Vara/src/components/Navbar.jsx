// import React from 'react';
// import Header from './Header';
// import {IconButton} from '@mui/material'
// import {Search, Menu, Person} from '@mui/icons-material'
// import styles from './Navbar.module.css'
// import {useState} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
// import { setLogOut } from '../redux/state';
// import {Link} from 'react-router-dom'
// const Navbar = () => {
//   const [dropdownMenu, setDropdownMenu] = useState(false)
//   const user = useSelector((state) => state.user)
//   const dispatch = useDispatch()


//   return (
//     <>
//     <Header/>
// <div className = {styles.navbar }>
//   <a href = "/"><img src = "images/Logo.jpg"/></a>
    
//  <div className="navbar-search">
//       <input type= "text" placeholder='Search...'/>
//           <IconButton>
//            <Search sx= {{}}/>
//           </IconButton>
//         </div>
        
//           <div className="navbar-right">
//             {user ? (<a href = '/createList'>Be the Host</a>)
//             : (
//               <a href = '/logIn'>Become a host</a>
//             )}
//             <button className='navbar-right-acc' onClick = {()=>setDropdownMenu(!dropdownMenu)}>
//               <Menu sx = {{}}/>
//               {!user ?
//               <Person sx = {{}}/>
//               : (<img src = {`http://localhost:3000/${user.profileImagePath.replace("public", "")}`} 
//               alt = "profilePhoto" 
//                style = {{objectFit: "cover", borderRadius: "50%"}}/>)
//               }

//             </button>
//              {dropdownMenu && !user &&(
//               <div className="navbar_accMenu">
//                  {/* <Link to = '/signIn' >Sign In</Link>
//                  <Link to = "/signUp">Sign Up</Link> */}
//               </div>
//              )}
//              {dropdownMenu && user &&(

//               <div className="navbar_accMenu">
                
//                  <Link to = '/wishList' >Wish List</Link>
//                  <Link to = '/propertyList' >property List</Link>
//                  <Link to = '/about' >AboutUs</Link>
//                  <Link to = '/host' >become a host</Link>
//                  <Link to = '/signIn' onClick = {()=>{
//                   dispatch(setLogOut())
//                  }}>Log Out</Link>
//               </div>
//               )
//              }
//             </div> 
        
//         {/* <div>
//           {user ? <a  href="/cretae-list">Become A host</a> : 
//           <a href = "/signIn">become a host</a>}

//             <li><a href = "/homePage">Home</a></li>
//                 <li><a href = "/about">About</a></li>
//                 <li><a href = "/host">Become a Host</a></li>
//                 <li><a href = "/wish">WishList</a></li>
//                 <li><a href = "/accountSetting" >Settings</a></li>
          
//         </div> */}

       
     
//       </div>
//     </>
   
//   );
// }

// export default Navbar;




// import React, { useState } from 'react';
// import Header from './Header';
// import { IconButton } from '@mui/material';
// import { Search, Menu, Person } from '@mui/icons-material';
// import styles from './Navbar.module.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { setLogOut } from '../redux/state';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [dropdownMenu, setDropdownMenu] = useState(false);
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <Header />
//       <div className={styles.navbar}>
//         <div className={styles.logo}>
//           <a href="/">
//             <img src="images/Logo.jpg" alt="Logo" />
//           </a>
//         </div>

//         <div className={styles.searchContainer}>
//           <input
//             type="text"
//             placeholder="Search..."
//             className={styles.searchInput}
//            />
         
//           <IconButton className={styles.searchButton}>
//             <Search />
//           </IconButton>
//         </div>

//         <div className={styles.navbarRight}>
//           {user ? (
//             <a href="/createList" className={styles.hostLink}>Be the Host</a>
//           ) : (
//             <a href="/logIn" className={styles.hostLink}>Become a host</a>
//           )}
//           <button className={styles.accountButton} onClick={() => setDropdownMenu(!dropdownMenu)}>
//             <Menu />
//             {!user ? (
//               <Person />
//             ) : (
//               <img
//                 src={`http://localhost:3000/${user.profileImagePath.replace("public", "")}`}
//                 alt="Profile"
//                 className={styles.profileImage}
//               />
//             )}
//           </button>
//           {dropdownMenu && (
//             <div className={styles.dropdownMenu}>
//               {user ? (
//                 <>
//                   <Link to="/wishList">Wish List</Link>
//                   <Link to="/propertyList">Property List</Link>
//                   <Link to="/about">About Us</Link>
//                   <Link to="/host">Become a Host</Link>
//                   <Link to="/signIn" onClick={() => dispatch(setLogOut())}>Log Out</Link>
//                 </>
//               ) : (
//                 <>
//                   <Link to="/signIn">Sign In</Link>
//                   <Link to="/signUp">Sign Up</Link>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
        
//           <div className="navbar-right">
//             {user ? (<a href = '/createList'>Be the Host</a>)
//             : (
//               <a href = '/signIn'>Become a host</a>
//             )}
//             <button className='navbar-right-acc' onClick = {()=>setDropdownMenu(!dropdownMenu)}>
//               <Menu sx = {{}}/>
//               {!user ?
//               <Person sx = {{}}/>
//               : (<img src = {`http://localhost:3000/${user.profileImagePath.replace("public", "")}`} 
//               alt = "profilePhoto" 
//                style = {{objectFit: "cover", borderRadius: "50%"}}/>)
//               }

//             </button>
//              {dropdownMenu && !user &&(
//               <div className="navbar_accMenu">
//                  {/* <Link to = '/signIn' >Sign In</Link>
//                  <Link to = "/signUp">Sign Up</Link> */}
//               </div>
//              )}
//              {dropdownMenu && user &&(

//               <div className="navbar_accMenu">
                
//                  <Link to = '/wishList' >Wish List</Link>
//                  <Link to = '/propertyList' >property List</Link>
//                  <Link to = '/about' >AboutUs</Link>
//                  <Link to = '/host' >become a host</Link>
//                  <Link to = '/signIn' onClick = {()=>{
//                   dispatch(setLogOut())
//                  }}>Log Out</Link>
//               </div>
//               )
//              }
//             </div> 
        
//         {/* <div>
//           {user ? <a  href="/cretae-list">Become A host</a> : 
//           <a href = "/signIn">become a host</a>}

//             <li><a href = "/homePage">Home</a></li>
//                 <li><a href = "/about">About</a></li>
//                 <li><a href = "/host">Become a Host</a></li>
//                 <li><a href = "/wish">WishList</a></li>
//                 <li><a href = "/accountSetting" >Settings</a></li>
          
//         </div> */}

       
     
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import Header from './Header';
import { IconButton } from '@mui/material';
import { Search, Menu, Person } from '@mui/icons-material';
import styles from './Navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setLogOut } from '../redux/userSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <img src="images/Logo.jpg" alt="Logo" />
          </a>
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <IconButton className={styles.searchButton}>
            <Search />
          </IconButton>
        </div>
        <div className="beHost">
        {user ? (
            <a href="/createList" className={styles.hostLink}>Be the Host</a>
          ) : (
            <a href="/logIn" className={styles.hostLink}>Become a host</a>
          )}
        </div>
       
        <div className={styles.navbarRight}>
         
          <button className={styles.accountButton} onClick={() => setDropdownMenu(!dropdownMenu)}>
            <Menu />
            {!user ? (
              <Person />
            ) : (
              <img
                src={`http://localhost:3000/${user.profileImagePath.replace("public", "")}`}
                alt="Profile"
                className={styles.profileImage}
              />
            )}
          </button>
          {dropdownMenu && (
            <div className={styles.dropdownMenu}>
              {user ? (
                <>
                  <Link to="/wishList">Wish List</Link>
                  <Link to="/propertyList">Property List</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/host">Become a Host</Link>
                  <Link to="/signIn" onClick={() => dispatch(setLogOut())}>Log Out</Link>
                </>
              ) : (
                <>
                  <Link to="/signIn">Sign In</Link>
                  <Link to="/signUp">Sign Up</Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
