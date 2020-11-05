import React, { useContext } from "react";
import {Link} from 'react-router-dom'; 

function Nav(props) {


  return (
    <div className="text-center">
        <Link className="" to="/">Home</Link>
        <Link className="" to="/register">Register</Link>
        <Link className="" to="/secret_page">Secret Page</Link>
    </div>
  );
}

export default Nav;