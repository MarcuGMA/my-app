import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AutentifButton } from "../components/buttons";
import { AutentifInput } from "../components/autentification/forms";
import autentificationData from "../api/autentification";
import ErrorAlert from "../components/materialui/error";
import SuccessAlert from "../components/materialui/succes";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      setError(true);
      setSuccess(false);
      return;
    }

    const user = autentificationData.find(
      (user) => user.name === username || user.email === email
    );
    if (user) {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);

      const newUser = {
        id: Date.now().toString(),
        name: username,
        email: email,
        password: password,
      };
      autentificationData.push(newUser);
    }
  };

  return (
    <div className="login">
      <div className="headerLogo">
        <Link to="/">
          <img src="/media/Logo/LOGO_GAMES.png" alt="" />
        </Link>
        {error && (
          <ErrorAlert message="Error: Username or email already exists." />
        )}
        {success && (
          <SuccessAlert message="Success: Registration completed successfully." />
        )}
      </div>
      <div className="loginWrapper">
        <div className="login-wrapper-form">
          <h1>Register</h1>
          <form action="">
            <AutentifInput
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <AutentifInput
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AutentifInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <AutentifInput
              type="password"
              placeholder="Repeat password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <Link to="/login">
              <p>Login if you already have an account</p>
            </Link>
            <AutentifButton text="Register" onClick={handleSubmit} />
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
  );
}

export default Register;
