import styled from "styled-components";
import { ButtonSecondary } from "../styles/ButtonSecondary";

const BackgroundContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
`

const LoginContainer = styled.div`
    background-color: #e8e8e8;
    border-radius: 15px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -200px;
    min-width: 280px;
`

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginForm = styled.form`
    display: block;
    text-align:center;
    margin: auto;
    padding-bottom: 1.5rem;
`

const LoginLabel = styled.label`
    padding-bottom: 25px;
`

const LoginInput = styled.input`
    margin-bottom: 15px;
    margin-top: 5px;
    height: 2rem;
    width: 75%;
`

const Paragraph = styled.p`
    padding: 1rem;
    padding-top: 0;
    margin: 1rem;
    border-bottom: 1px solid black;
`

const LoginPopup = ({ showLogin, setShowLogin }) => {
    return (
        <div>
            { showLogin ?
                <BackgroundContainer>
                    <LoginContainer>
                        <LoginWrapper>
                            <LoginForm action="">
                                <h1>Sign in</h1>
                                <Paragraph>To post your item for sale or make a purchase</Paragraph>
                                <LoginLabel htmlFor="">Username</LoginLabel> <br />
                                <LoginInput type="text" name="username" /> <br />
                                <LoginLabel htmlFor="">Password</LoginLabel> <br />
                                <LoginInput type="text" name="password" /> <br />
                                <ButtonSecondary>LOGIN</ButtonSecondary>
                            </LoginForm>
                        </LoginWrapper>
                    </LoginContainer>
                </BackgroundContainer>
            : null }
        </div>
    );
}

export default LoginPopup;