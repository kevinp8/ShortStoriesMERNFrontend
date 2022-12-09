import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwtDecode from 'jwt-decode'

type Props = {};

const Navbar = (props: Props) => {

  const [auth, setAuth] = useState<boolean>(false)

  useEffect(() => {
    if (localStorage.getItem('token')) setAuth(true)
  }, [])

  function logOut(){
    localStorage.removeItem('token')
    setAuth(false)
    window.location.assign('/login')
  }

  return (
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo left">ShortStories</a>
      <ul id="nav-mobile" className="right">
        <li><Link to="/publicStories">Public Stories</Link></li>
        {auth ? <><li><Link to="/dashboard">My Dashboard</Link></li><li onClick={logOut}><Link to='/publicStories'>Log Out</Link></li></> : <><li><Link to='/login'>Log In</Link></li>
        <li><Link to='/register'>Register</Link></li></>}
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
