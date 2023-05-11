// import {useState} from 'react';
// import { Header } from '../components';
// import { ButtonHeader } from '../components/buttons';
// import { MySwiper } from '../components/Carousel';
import { AutentifButton } from '../components/buttons';

const Login = () => {


    return (
        <>
            <div className="login">
                <div className="headerLogo">
                    <img src="/media/Logo/LOGO_GAMES.png" alt="" />
                </div>
                <div className="loginWrapper">
                    <div className="login-wrapper-form">
                        <h1>Log in</h1>
                        <form action="">
                            <input type="text" placeholder="Email or username" />
                            <input type="password" placeholder="Password" />
                            <p>Register here if you dont have an account</p>
                            <AutentifButton text="Login"/>
                        </form>
                    </div>
                    <div className="login-wrapper-icons">
                        <p>Or</p>
                        <div className="login-wrapper-icons-el elGoogle">
                            <div className="elIcon">
                                <img src="./media/icons/google.png" alt="" srcset="" />
                            </div>
                                <p>Sign Up with Google</p>
                        </div>
                        <div className="login-wrapper-icons-el elFacebook">
                        <div className="elIcon ">
                                <img src="./media/icons/facebook.png" alt="" srcset="" />
                            </div>
                                <p>Sign Up with Facebook</p>
                        </div>
                        <div className="login-wrapper-icons-el elSteam">
                        <div className="elIcon ">
                                <img src="./media/icons/steam.png" alt="" srcset="" />
                            </div>
                                <p>Sign Up with Steam</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;