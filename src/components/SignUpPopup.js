import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { db } from '../firebaseConfig';
import { collection, doc, setDoc } from "firebase/firestore";
import { ButtonSecondary } from "../styles/shared/buttons/ButtonSecondary";
import { ButtonPrimary } from "../styles/shared/buttons/ButtonPrimary";
import { BackgroundContainer } from "../styles/login-signup/BackgroundContainer";
import { LoginContainer } from "../styles/login-signup/LoginContainer";
import { LoginWrapper } from "../styles/login-signup/LoginWrapper";
import { LoginForm } from "../styles/login-signup/LoginForm";
import { LoginLabel } from "../styles/login-signup/LoginLabel";
import { LoginInput } from "../styles/login-signup/LoginInput";
import { Description } from "../styles/login-signup/Description";
import { ButtonLoginSmall } from "../styles/login-signup/ButtonLoginSmall";
import { ButtonsContainer } from "../styles/shared/containers/ButtonsContainer";

const SignUpPopup = ({ showSignUp, setShowSignUp, setShowLogin }) => {
    const userRef = collection(db, 'users');
    const [data, setData] = useState({});

    const toggleModal = (callback) => {
        callback(prev => !prev)
    }

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value }
        setData({ ...data, ...inputs })
    };

    const submitData = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((response) => {
                console.log(response.user)
                setDoc(doc(userRef, auth.currentUser.uid), {
                    user_id: auth.currentUser.uid,
                    email: data.email
                })
                setShowSignUp (prev => !prev)
            })
            .catch((err) => {
                alert(err.message)
                setShowSignUp (prev => !prev)
            });
    };
    return (
        <div>
            { showSignUp ?
                <BackgroundContainer>
                    <LoginContainer>
                        <LoginWrapper>
                            <LoginForm>
                                <h1>Sign up</h1>
                                <Description>Create account to get full access to buying and selling.</Description>
                                <LoginLabel htmlFor="EMAIL">E-mail adress (username)</LoginLabel> <br />
                                <LoginInput 
                                    type="email" 
                                    name="email"
                                    onChange={event => handleInputs(event)}
                                /> <br />
                                <LoginLabel htmlFor="PASSWORD">Password</LoginLabel> <br />
                                <LoginInput 
                                    type="password" 
                                    name="password"
                                    onChange={event => handleInputs(event)}
                                /> <br />
                                <p>Already have an account? <ButtonLoginSmall onClick={() => {toggleModal(setShowSignUp); toggleModal(setShowLogin)}}>Log in</ButtonLoginSmall> </p>
                                <ButtonsContainer>
                                    <ButtonSecondary onClick={(e) => submitData(e)}>SIGN UP</ButtonSecondary>
                                    <ButtonPrimary onClick={() => toggleModal(setShowSignUp)}>CLOSE</ButtonPrimary>
                                </ButtonsContainer>
                            </LoginForm>
                        </LoginWrapper>
                    </LoginContainer>
                </BackgroundContainer>
            : null }
        </div>
    );
}

export default SignUpPopup;