import { AutentifButton } from '../components/buttons';

const Register = () => {


    return (
        <>
            <div className="login">
                <div className="headerLogo">
                    <img src="/media/Logo/LOGO_GAMES.png" alt="" />
                </div>
                <div className="loginWrapper">
                    <div className="login-wrapper-form">
                        <h1>Register</h1>
                        <form action="">
                            <input type="text" placeholder="Username" />
                            <input type="text" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Repeat password" />
                            <p>Login if you already have an account</p>
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

export default Register;