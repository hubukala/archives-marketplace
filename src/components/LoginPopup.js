import { ButtonSecondary } from "../styles/ButtonSecondary";
import { ButtonPrimary } from "../styles/ButtonPrimary";
import { BackgroundContainer } from "../styles/Login-Signup/BackgroundContainer";
import { LoginContainer } from "../styles/Login-Signup/LoginContainer";
import { LoginWrapper } from "../styles/Login-Signup/LoginWrapper";
import { LoginForm } from "../styles/Login-Signup/LoginForm";
import { LoginLabel } from "../styles/Login-Signup/LoginLabel";
import { LoginInput } from "../styles/Login-Signup/LoginInput";
import { Description } from "../styles/Login-Signup/Description";

const LoginPopup = ({ showLogin, setShowLogin }) => {
    return (
        <div>
            { showLogin ?
                <BackgroundContainer>
                    <LoginContainer showLogin={showLogin}>
                        <LoginWrapper>
                            <LoginForm action="">
                                <h1>Sign in</h1>
                                <Description>To post your item for sale or make a purchase.</Description>
                                <LoginLabel htmlFor="">Username</LoginLabel> <br />
                                <LoginInput type="email" name="username" /> <br />
                                <LoginLabel htmlFor="">Password</LoginLabel> <br />
                                <LoginInput type="password" name="password" /> <br />
                                <ButtonSecondary>LOGIN</ButtonSecondary>
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