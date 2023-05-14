import React from "react"
import { AutentifButton } from "../components/buttons"
import { AutentifInput } from "../components/autentification/forms"
import { useState } from "react"
import { Link } from "react-router-dom"
// import {useState} from 'react';
// import { Header } from '../components';
// import { ButtonHeader } from '../components/buttons';
// import { MySwiper } from '../components/Carousel';

const autentificationData = [
  {
      "id": "101",
      "name": "admin",
      "password": "admin"
  },
  {
      "id": "102",
      "name": "user",
      "password": "user"
  }
]

function Login() {

  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  // const [error, setError] = useState('')

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value)
  // }

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value)
  //   console.log(username)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username, password);
  }


  return (
    <div className="login">
      <div className="headerLogo">
        <Link to="/">
          <img src="/media/Logo/LOGO_GAMES.png" alt="" />
        </Link>
      </div>
      <div className="loginWrapper">
        <div className="login-wrapper-form">
          <h1>Log in</h1>
          <form action="">
            <AutentifInput type="text" placeholder="Email or username" 
              value={username}
              onChange={(event) => setUsername(event.target.value)}    
            />
            <AutentifInput type="password" placeholder="Password" 
              value={password}
              onChange={(event) => setPassword(event.target.value)}
          />
            <Link to="/register">
              {" "}
              <p>Register here if you dont have an account</p>{" "}
            </Link>
            <AutentifButton text="Login" 
              onClick={handleSubmit}
            />
          </form>
        </div>
        <div className="login-wrapper-icons">
          <p>Or</p>
          <div className="login-wrapper-icons-el elGoogle">
            <div className="elIcon">
              <img src="./media/icons/google.png" alt="" srcSet="" />
            </div>
            <p>Sign Up with Google</p>
          </div>
          <div className="login-wrapper-icons-el elFacebook">
            <div className="elIcon ">
              <img src="./media/icons/facebook.png" alt="" srcSet="" />
            </div>
            <p>Sign Up with Facebook</p>
          </div>
          <div className="login-wrapper-icons-el elSteam">
            <div className="elIcon ">
              <img src="./media/icons/steam.png" alt="" srcSet="" />
            </div>
            <p>Sign Up with Steam</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login