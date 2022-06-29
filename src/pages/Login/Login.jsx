import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Login.css'
// import img from '../../images/BestReads.png';

const Login = () => {
  const dummyData = [
    {
      username: 'test',
      password: 'test'
    }
  ]
  const handleSubmit = (e) => {
    // prevents page from reloading
    e.preventDefault();
    // find user login information
    const userLogin = database.find((user) => user.username === uname.value)
    // if username exists in database
    if (userLogin) {
      // if password doesn't match up
      if (userLogin.password !== pass.value) {
        console.log('invalid username/password input')
      }
      // if password does match up
      else {
        console.log('')
      }
    }
    // if username doesn't exist in database
    else {
      console.log('invalid username/password input')
    }
  }
    return (
      <div id='outerBox'>
        <form onSubmit={handleSubmit}>
          <div id='loginBox'>
            <label><strong>Log In</strong><br/><br/></label>
            <input type="text" placeholder="Username" name="uname" required></input> 
            <input type="password" placeholder="Password" name="pass" required></input>
            <Link to='/app'>
            <button type="submit">Login</button>
            </Link>
            <Link to='/signup' id='signuplink'>
            <p>Sign up?</p>
            </Link>
        </div>
        </form>
      </div>
      
    );
}

export default Login;