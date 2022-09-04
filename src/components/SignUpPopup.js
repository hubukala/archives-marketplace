import { ButtonSecondary } from "../styles/ButtonSecondary";
import { ButtonPrimary } from "../styles/ButtonPrimary";
import { BackgroundContainer } from "../styles/Login-Signup/BackgroundContainer";
import { LoginContainer } from "../styles/Login-Signup/LoginContainer";
import { LoginWrapper } from "../styles/Login-Signup/LoginWrapper";
import { LoginForm } from "../styles/Login-Signup/LoginForm";
import { LoginLabel } from "../styles/Login-Signup/LoginLabel";
import { LoginInput } from "../styles/Login-Signup/LoginInput";
import { Description } from "../styles/Login-Signup/Description";

const SignUpPopup = ({ showSignUp, setShowSignUp }) => {
    return (
        <div>
            { showSignUp ?
                <BackgroundContainer>
                    <LoginContainer>
                        <LoginWrapper>
                            <LoginForm action="">
                                <h1>Sign up</h1>
                                <Description>Create account to get full access to buying and selling.</Description>
                                <LoginLabel htmlFor="">E-mail adress (Username)</LoginLabel> <br />
                                <LoginInput type="text" name="username" /> <br />
                                <LoginLabel htmlFor="">Password</LoginLabel> <br />
                                <LoginInput type="text" name="password" /> <br />
                                <LoginLabel htmlFor="">Confirm Password</LoginLabel> <br />
                                <LoginInput type="text" name="password" /> <br />
                                <ButtonSecondary>SIGN UP</ButtonSecondary>
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