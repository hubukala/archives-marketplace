import styled from "styled-components";
import { ButtonSecondary } from "../styles/shared/buttons/ButtonSecondary";

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 100%;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: left;
    margin-right: 20px;
    width: 100%;
    padding-top: 10px;
`

const DetailsSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const DetailsLabel = styled.label`
    display: block;
    color: #4a4a4a;
    text-indent: 5px;
    font-size: 12px;
    margin-bottom: 5px;
`

const DetailsInput = styled.input`
    display: block;
    width: 100%;
    border: 1px solid grey;
    height: 2rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    text-indent: 5px;
    border-radius: 5px;
    color: black;
    font-family: 'Helvetica';
`

const DetailsTextArea = styled.textarea`
    display: block;
    width: 100%;
    border: 1px solid grey;
    height: 10rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    font-family: 'Helvetica';
    font-style: italic;
    text-indent: 5px;
`

const AccountDetailsForm = () => {
    return(          
        <form action="">
            <DetailsSection>
                <DetailsContainer>
                    <DetailsLabel for="fname">First name</DetailsLabel>
                    <DetailsInput name="fname" type="text" />
                </DetailsContainer>
                <DetailsContainer>
                    <DetailsLabel>Last name</DetailsLabel>
                    <DetailsInput type="text" />
                </DetailsContainer>
            </DetailsSection>
            <DetailsSection>
                <DetailsContainer>
                    <DetailsLabel>Bio</DetailsLabel>
                    <DetailsTextArea type="text" />
                </DetailsContainer>
            </DetailsSection>
            <DetailsSection>
                <DetailsContainer>
                    <DetailsLabel for="city">City</DetailsLabel>
                    <DetailsInput name="city" type="text" />
                </DetailsContainer>
                <DetailsContainer>
                    <DetailsLabel for="zipcode">ZIP code</DetailsLabel>
                    <DetailsInput name="zipcode" type="text" />
                </DetailsContainer>
            </DetailsSection>
            <DetailsSection>
                <DetailsContainer>
                    <DetailsLabel for="zipcode">Street adress</DetailsLabel>
                    <DetailsInput name="zipcode" type="text" />
                </DetailsContainer>
                <DetailsContainer>
                    <DetailsLabel for="suite">Apt/Suite</DetailsLabel>
                    <DetailsInput name="suite" type="text" />
                </DetailsContainer>
            </DetailsSection>
            <ButtonContainer>
                <ButtonSecondary>SAVE</ButtonSecondary>
            </ButtonContainer>
        </form>
    )
}

export default AccountDetailsForm;