import React from "react";
import { AutentifButton } from "../components/buttons";
import { AutentifInput } from "../components/autentification/forms";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorAlert from "../components/materialui/error";
import SuccessAlert from "../components/materialui/succes";
import autentificationData from "../api/autentification";
// import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";

function Login() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const toggleLogin = () => {
  //   setIsLoggedIn((prevState) => !prevState);
  // };

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleReset = () => {
    setSuccess(false);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleReset();

    const checkTokenInLocalStorage = () => {
      return localStorage.getItem("token") !== null;
    };

    const user = autentificationData.find((user) => user.name === username);
    if (user) {
      if (user.password === password && user.name === username) {
        setSuccess(true);
        const token = uuid();
        localStorage.setItem("token", token);
        navigate("/");
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className="login">
      <div className="headerLogo">
        <Link to="/">
          <img src="/media/Logo/LOGO_GAMES.png" alt="" />
        </Link>
        {success && <SuccessAlert message="Login successful" />}
        {error && <ErrorAlert message="Invalid username or password" />}
      </div>
      <div className="loginWrapper">
        <div className="login-wrapper-form">
          <h1>Log in</h1>
          <form action="">
            <AutentifInput
              type="text"
              placeholder="Email or username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              onKeyPress={onKeyPress}
            />
            <AutentifInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onKeyPress={onKeyPress}
            />
            {!success && (
              <Link to="/register">
                <p>Register here if you don't have an account</p>
              </Link>
            )}
            {!success && <AutentifButton text="Login" onClick={handleSubmit} />}
          </form>
        </div>
        <div className="login-wrapper-icons">
          <p>Or</p>
          <div className="login-wrapper-icons-el elGoogle">
            <div className="elIcon">
              <img src="./media/icons/google.png" alt="" />
            </div>
            <p>Sign Up with Google</p>
          </div>
          <div className="login-wrapper-icons-el elFacebook">
            <div className="elIcon">
              <img src="./media/icons/facebook.png" alt="" />
            </div>
            <p>Sign Up with Facebook</p>
          </div>
          <div className="login-wrapper-icons-el elSteam">
            <div className="elIcon">
              <img src="./media/icons/steam.png" alt="" />
            </div>
            <p>Sign Up with Steam</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
