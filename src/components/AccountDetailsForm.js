import { useState } from "react";
import { ButtonSecondary } from "../styles/shared/buttons/ButtonSecondary";
import { DetailsTextArea } from "../styles/account-details/DetailsTextArea";
import { DetailsInput } from "../styles/account-details/DetailsInput";
import { DetailsLabel } from "../styles/account-details/DetailsLabel.js";
import { DetailsSection } from "../styles/account-details/DetailsSection";
import { ButtonContainer } from "../styles/account-details/ButtonContainer";
import { DetailsContainer } from "../styles/account-details/DetailsContainer";
import { db } from "../firebaseConfig";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const AccountDetailsForm = () => {
    const auth = getAuth()

    const [data, setData] = useState({
        fname: "",
        lname: "",
        bio: "",
        city: "",
        zipcode: "",
        street: "",
        suite: ""
    })

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await setDoc(doc(db, "users", auth.currentUser.uid), {
                ...data,
            });
            setData({
                fname: "",
                lname: "",
                bio: "",
                city: "",
                zipcode: "",
                street: "",
                suite: ""
            });
        } catch (err) {
            console.log(err)
        }
    }

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value }
        
        setData({ ...data, ...inputs })
    };

    return(          
        <form action="">
            <DetailsSection>
                <DetailsContainer>
                    <DetailsLabel>First name</DetailsLabel>
                    <DetailsInput 
                        name="fname"
                        type="text"
                        onChange={handleInputs}
                        value={data.fname}
                    />
                </DetailsContainer>
                <DetailsContainer>
                    <DetailsLabel>Last name</DetailsLabel>
                    <DetailsInput 
                        name="lname"
                        type="text"
                        onChange={handleInputs}
                        value={data.lname}
                    />
                </DetailsContainer>
            </DetailsSection>
            <DetailsSection>
                <DetailsContainer>
                    <DetailsLabel>Bio</DetailsLabel>
                    <DetailsTextArea 
                        name="bio"
                        type="text"
                        onChange={handleInputs}
                        value={data.bio}
                    />
                </DetailsContainer>
            </DetailsSection>
            <DetailsSection>
                <DetailsContainer>
                    <DetailsLabel>City</DetailsLabel>
                    <DetailsInput 
                        name="city"
                        type="text"
                        onChange={handleInputs}
                        value={data.city}
                    />
                </DetailsContainer>
                <DetailsContainer>
                    <DetailsLabel>ZIP code</DetailsLabel>
                    <DetailsInput 
                        name="zipcode"
                        type="text"
                        onChange={handleInputs}
                        value={data.zipcode}
                    />
                </DetailsContainer>
            </DetailsSection>
            <DetailsSection>
                <DetailsContainer>
                    <DetailsLabel>Street adress</DetailsLabel>
                    <DetailsInput 
                        name="street" 
                        type="text" 
                        onChange={handleInputs}
                        value={data.street}
                    />
                </DetailsContainer>
                <DetailsContainer>
                    <DetailsLabel>Apt/Suite</DetailsLabel>
                    <DetailsInput 
                        name="suite" 
                        type="text" 
                        onChange={handleInputs}
                        value={data.suite}
                    />
                </DetailsContainer>
            </DetailsSection>
            <ButtonContainer>
                <ButtonSecondary type="submit" onClick={handleAdd}>SAVE</ButtonSecondary>
            </ButtonContainer>
        </form>
    )
}

export default AccountDetailsForm;