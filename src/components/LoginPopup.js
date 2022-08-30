import styled from "styled-components";
import { SearchInput } from "../styles/SearchBarStyles";
import { ButtonSecondary } from "../styles/ButtonSecondary";

const LoginContainer = styled.div`
    background-color: #e8e8e8;
    border: 1px solid black;
    border-radius: 15px;
    display: block;
    margin: auto;
    width: 40%;
    max-width: 400px;
    min-width: 280px;
`

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

const LoginPopup = ({ isShowLogin }) => {
    return (
        <div>
            <LoginContainer>
                <LoginForm action="">
                    <h1>Sign in</h1>
                    <Paragraph>To post your item for sale or make a purchase</Paragraph>
                    <LoginLabel htmlFor="">Username</LoginLabel> <br />
                    <LoginInput type="text" name="username" /> <br />
                    <LoginLabel htmlFor="">Password</LoginLabel> <br />
                    <LoginInput type="text" name="password" /> <br />
                    <ButtonSecondary>LOGIN</ButtonSecondary>
                </LoginForm>
            </LoginContainer>
        </div>
    )
}

export default LoginPopup;