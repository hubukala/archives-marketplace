import { ButtonSecondary } from "../styles/ButtonSecondary";
import { ButtonPrimary } from "../styles/ButtonPrimary";
import { BackgroundContainer } from "../styles/Login-Signup/BackgroundContainer";
import { LoginContainer } from "../styles/Login-Signup/LoginContainer";
import { LoginWrapper } from "../styles/Login-Signup/LoginWrapper";
import { LoginForm } from "../styles/Login-Signup/LoginForm";
import { LoginLabel } from "../styles/Login-Signup/LoginLabel";
import { LoginInput } from "../styles/Login-Signup/LoginInput";
import { Description } from "../styles/Login-Signup/Description";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const LoginPopup = ({ showLogin, setShowLogin, isSignedIn, setIsSignedIn }) => {
    const auth = getAuth();
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
                console.log("Logged In")
                setIsSignedIn(true)
                setShowLogin(false)
            } else {
                console.log("Logged out")
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