import React, { useState, useContext } from "react";
import AuthContext from '../Context/AuthContext';


const correct_username="Keti";
const correct_password="Keti";
function Register() {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState("username");
const [password, setPassword] = useState("password");
const context = useContext(AuthContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    setUsername(document.getElementById('uname').value);
    setPassword(document.getElementById('psw').value);
    if (username===correct_username &&password===correct_password) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }

  };

  const onLogOut = (event) => {
    setIsAuth(false);
  };

  if (isAuth) {
    return (
      <div className="container text-center">
        <h1>Already logged in.</h1>
        <button onClick={onLogOut}>Logout</button>

      </div>
    );
  }
  
  return (
    <form className="form-signin" onSubmit={onSubmit}>
      <h1 >
        Please Login
      </h1>
    <label htmlFor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" id="uname"required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <button type="submit">Login</button>
    <label/>
    </form>
  );
}



export default Register;