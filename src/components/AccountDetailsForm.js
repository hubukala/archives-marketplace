import styled from "styled-components";
import { ButtonSecondary } from "../styles/shared/buttons/ButtonSecondary";
import { DetailsTextArea } from "../styles/account-details/DetailsTextArea";
import { DetailsInput } from "../styles/account-details/DetailsInput";
import { DetailsLabel } from "../styles/account-details/DetailsLabel.js";
import { DetailsSection } from "../styles/account-details/DetailsSection";
import { ButtonContainer } from "../styles/account-details/ButtonContainer";
import { DetailsContainer } from "../styles/account-details/DetailsContainer";

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