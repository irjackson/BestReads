import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
import './Signup.css'
// import img from '../../images/BestReads.png';

// const [firstName, setFirstName] = useState(null);
// const [lastName, setLastName] = useState(null);
// const [username, setUsername] = useState(null);
// const [password, setPassword] = useState(null);

const Signup = () => {
  
  return (
    <center>
      <div id='outerBox'>
        <div id='signupBox'>
          <label>Create Account</label>
          <form method='POST' action='/api/signup'>
            <input type="text" placeholder="First Name" name="firstname" required></input>
            <input type="text" placeholder="Last Name" name="lastname" required></input>
            <input type="text" placeholder="Username" name="username" required></input> 
            <input type="password" placeholder="Password" name="password" required></input>
            <button type="submit">Sign up</button>
          </form>
          {/* <Link to='/app'>
              <button>Login</button>
            </Link> */}
         
          <Link to='/' id='loginlink'>
              <p>Already Have an Account?</p>
          </Link>
        </div>
      </div>
      </center>
    );
  }
  
  export default Signup;
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch('/signup', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({username: username, password: password, firstname: first_name, last_name: last_name})
  //   })
  //     .then(data => data.json())
  //     .then(data => {
  //       window.alert('Hello')
  //     })
  // }