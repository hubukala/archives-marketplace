import { useEffect, useState } from 'react';
import { ButtonSecondary } from '../styles/shared/buttons/ButtonSecondary';
import { DetailsTextArea } from '../styles/account-details/DetailsTextArea';
import { DetailsInput } from '../styles/account-details/DetailsInput';
import { DetailsLabel } from '../styles/account-details/DetailsLabel.js';
import { DetailsSection } from '../styles/account-details/DetailsSection';
import { ButtonContainer } from '../styles/account-details/ButtonContainer';
import { DetailsContainer } from '../styles/account-details/DetailsContainer';
import { db } from '../firebaseConfig';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { auth } from '../firebaseConfig';

const AccountDetailsForm = () => {
    const [data, setData] = useState({
        fname: '',
        lname: '',
        bio: '',
        city: '',
        zipcode: '',
        street: '',
        suite: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const userId = auth.currentUser.uid;
            const docRef = doc(db, 'users', userId);
            const docSnap = await getDoc(docRef);
            console.log('Document data:', docSnap.data());
            setData({
                fname: docSnap.data().fname ?? '',
                lname: docSnap.data().lname ?? '',
                bio: docSnap.data().bio ?? '',
                city: docSnap.data().city ?? '',
                zipcode: docSnap.data().zipcode ?? '',
                street: docSnap.data().street ?? '',
                suite: docSnap.data().suite ?? '',
            });
        };
        fetchData();
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await setDoc(doc(db, 'users', auth.currentUser.uid), {
                ...data,
            });
            alert('dane zaaktualizowane pomyślnie');
        } catch (err) {
            console.log(err);
        }
    };

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value };

        setData({ ...data, ...inputs });
    };

    return (
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
                <ButtonSecondary type="submit" onClick={handleAdd}>
                    SAVE
                </ButtonSecondary>
            </ButtonContainer>
        </form>
    );
};

export default AccountDetailsForm;
