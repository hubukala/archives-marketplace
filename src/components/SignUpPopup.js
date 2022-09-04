import { useState } from "react";
import { ButtonSecondary } from "../styles/ButtonSecondary";
import { ButtonPrimary } from "../styles/ButtonPrimary";
import { BackgroundContainer } from "../styles/Login-Signup/BackgroundContainer";
import { LoginContainer } from "../styles/Login-Signup/LoginContainer";
import { LoginWrapper } from "../styles/Login-Signup/LoginWrapper";
import { LoginForm } from "../styles/Login-Signup/LoginForm";
import { LoginLabel } from "../styles/Login-Signup/LoginLabel";
import { LoginInput } from "../styles/Login-Signup/LoginInput";
import { Description } from "../styles/Login-Signup/Description";
import { app } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPopup = ({ showSignUp, setShowSignUp }) => {
    let auth = getAuth();
    const [data, setData] = useState({});

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value }

        setData({ ...data, ...inputs })
    };

    const submitData = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((response) => {
                console.log(response.user)
                setShowSignUp (prev => !prev)
            })
            .catch((err) => {
                alert(err.message)
            });
    };
    return (
        <div>
            { showSignUp ?
                <BackgroundContainer>
                    <LoginContainer>
                        <LoginWrapper>
                            <LoginForm action="javascript:void(0);">
                                <h1>Sign up</h1>
                                <Description>Create account to get full access to buying and selling.</Description>
                                <LoginLabel htmlFor="">E-mail adress (Username)</LoginLabel> <br />
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
                                {/* <LoginLabel htmlFor="">Confirm Password</LoginLabel> <br />
                                <LoginInput type="text" name="password" /> <br /> */}
                                <ButtonSecondary onClick={submitData}>SIGN UP</ButtonSecondary>
                                <ButtonPrimary onClick={() => setShowSignUp (prev => !prev)}>CLOSE</ButtonPrimary>
                            </LoginForm>
                        </LoginWrapper>
                    </LoginContainer>
                </BackgroundContainer>
            : null }
        </div>
    );
}

export default SignUpPopup;