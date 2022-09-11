import styled from "styled-components";
import { SideBarButton } from "../styles/sidebar/SideBarButton";
import { getAuth } from "firebase/auth";
import Avatar from "../assets/images/168732.png"
import AccountDetailsForm from "../components/AccountDetailsForm";
import { useState } from "react";

const ProfileContainer = styled.div`
    margin: 4rem;
`

const ProfileHead = styled.div`
    display: flex;
    padding: 0 2rem 2rem 2rem;
    border-bottom: 1px solid grey;
`

const ProfileSideBar = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 20%;
`

const ProfileMain = styled.div`
    margin: 0 2rem 0 2rem;
    padding-top: 2rem;
    width: 80%;
`

const MainContainer = styled.div`
    display: flex;
`

const AvatarStyling = styled.img`
    width: 100px;
    border-radius: 50px;
    margin-right: 2rem;
`

const ProfilePage = () => {
    const auth = getAuth();
    const userEmail = auth.currentUser.email;
    const userSince = ((auth.currentUser.metadata.creationTime).slice(12, 17));

    const [displayMain, setDisplayMain] = useState("account")

    const changeMain = (btn) => {
        setDisplayMain(btn)
    };

    return (
        <ProfileContainer>
            <ProfileHead>
                <AvatarStyling src={Avatar} alt="AV" /> <br />
                {userEmail} <br />
                Joined in: {userSince}
            </ProfileHead>
            <MainContainer>
                <ProfileSideBar>
                    <SideBarButton onClick={() => changeMain("account")}>ACCOUNT</SideBarButton>
                    <SideBarButton onClia   ck={() => changeMain("about")}>ABOUT</SideBarButton>
                    <SideBarButton onClick={() => changeMain("orders")}>ORDERS</SideBarButton>
                    <SideBarButton onClick={() => changeMain("my-items")}>MY ITEMS</SideBarButton>
                    <p>{displayMain}</p>
                </ProfileSideBar>
                <ProfileMain>
                    <AccountDetailsForm />
                </ProfileMain>
            </MainContainer>
        </ProfileContainer>
    )
}

export default ProfilePage;