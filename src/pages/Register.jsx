import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AutentifButton } from "../components/buttons";
import { AutentifInput } from "../components/autentification/forms";
import ErrorAlert from "../components/materialui/error";
import SuccessAlert from "../components/materialui/succes";
import { useTranslation } from "react-i18next";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation();

  const users = localStorage.getItem("users");
  const usersArray = users ? JSON.parse(users) : [];

  useEffect(() => {
    setError(false);
    setSuccess(false);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the password is too short
    if (password.length < 8) {
      setError("Password is too short");
      setSuccess(false);
      return;
    }

    // Check if the password is easy to guess
    const commonPasswords = ["123456", "password", "qwerty"]; // Add more common passwords if needed
    if (commonPasswords.includes(password.toLowerCase())) {
      setError("Password is easy to guess");
      setSuccess(false);
      return;
    }

    if (password !== repeatPassword) {
      setError("Passwords don't match");
      setSuccess(false);
      return;
    }

    const existingUser = usersArray.find(
      (user) => user.name === username || user.email === email
    );

    if (existingUser) {
      setError("Username or email already exists");
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

      usersArray.push(newUser);
      localStorage.setItem("users", JSON.stringify(usersArray));
    }
  };

  return (
    <div className="login">
      <div className="headerLogo">
        <Link to="/">
          <img src="/media/Logo/LOGO_GAMES.png" alt="" />
        </Link>
        {error && <ErrorAlert message={error} />}
        {success && <SuccessAlert message={t("Success_User")} />}
      </div>
      <div className="loginWrapper">
        <div className="login-wrapper-form">
          <h1>{t("REGISTER")}</h1>
          <form action="">
            <AutentifInput
              type="text"
              placeholder={t("Username")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <AutentifInput
              type="text"
              placeholder={t("Email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AutentifInput
              type="password"
              placeholder={t("Password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <AutentifInput
              type="password"
              placeholder={t("Repeat_Password")}
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <Link to="/login">
              <p>{t("Login_Here")}</p>
            </Link>
            <AutentifButton text={t("REGISTER")} onClick={handleSubmit} />
          </form>
        </div>
        <div className="login-wrapper-icons">
          <p>{t("Or")}</p>
          <div className="login-wrapper-icons-el elGoogle">
            <div className="elIcon">
              <img src="./media/icons/google.png" alt="" srcSet="" />
            </div>
            <p>{t("Register_With")} Google</p>
          </div>
          <div className="login-wrapper-icons-el elFacebook">
            <div className="elIcon ">
              <img src="./media/icons/facebook.png" alt="" srcSet="" />
            </div>
            <p>{t("Register_With")} Facebook</p>
          </div>
          <div className="login-wrapper-icons-el elSteam">
            <div className="elIcon ">
              <img src="./media/icons/steam.png" alt="" srcSet="" />
            </div>
            <p>{t("Register_With")} Steam</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
