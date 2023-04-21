import { ButtonSecondary } from "../styles/shared/buttons/ButtonSecondary";
import { ButtonPrimary } from "../styles/shared/buttons/ButtonPrimary";
import { BackgroundContainer } from "../styles/login-signup/BackgroundContainer";
import { LoginContainer } from "../styles/login-signup/LoginContainer";
import { LoginWrapper } from "../styles/login-signup/LoginWrapper";
import { LoginForm } from "../styles/login-signup/LoginForm";
import { LoginLabel } from "../styles/login-signup/LoginLabel";
import { LoginInput } from "../styles/login-signup/LoginInput";
import { Description } from "../styles/login-signup/Description";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

const LoginPopup = ({ showLogin, setShowLogin, isSignedIn, setIsSignedIn }) => {
    const [data, setData] = useState({
        email: '',
        password:''
    });

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value }
        
        setData({ ...data, ...inputs })
    };

    const submitData = () => {
        signInWithEmailAndPassword(auth, data.email, data.password)
    };

    const handleLogout = () => {
        signOut(auth);
    };

    if (isSignedIn === false) {
        handleLogout();
    }

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if(data) {
                setIsSignedIn(true)
                setShowLogin(false)
            } else {
                setIsSignedIn(false)
                setShowLogin(false)
            }
        })
    }, []);
    return (
        <div>
            { showLogin ?
                <BackgroundContainer>
                    <LoginContainer showLogin={showLogin}>
                        <LoginWrapper>
                            <LoginForm action="javascript:void(0);">
                                <h1>Sign in</h1>
                                <Description>To post your item for sale or make a purchase.</Description>
                                <LoginLabel htmlFor="">Username</LoginLabel> <br />
                                <LoginInput 
                                    type="email" 
                                    name="email"
                                    onChange={event => handleInputs(event)}
                                /> <br />
                                <LoginLabel htmlFor="">Password</LoginLabel> <br />
                                <LoginInput 
                                    type="password" 
                                    name="password"
                                    onChange={event => handleInputs(event)}
                                /> <br />
                                <ButtonSecondary onClick={submitData}>LOGIN</ButtonSecondary>
                                <ButtonPrimary onClick={() => setShowLogin (prev => !prev)}>CLOSE</ButtonPrimary>
                            </LoginForm>
                        </LoginWrapper>
                    </LoginContainer>
                </BackgroundContainer>
            : null }
        </div>
    );
}

export default LoginPopup;