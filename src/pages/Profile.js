import { SideBarButton } from "../styles/sidebar/SideBarButton";
import { ProfileContainer } from "../styles/profile/ProfileContainer";
import { ProfileHead } from "../styles/profile/ProfileHead";
import { ProfileSideBar } from "../styles/profile/ProfileSideBar";
import { ProfileMain } from "../styles/profile/ProfileMain";
import { MainContainer } from "../styles/profile/MainContainer";
import { AvatarStyling } from "../styles/profile/AvatarStyling";
import { getAuth } from "firebase/auth";
import Avatar from "../assets/images/168732.png"
import AccountDetailsForm from "../components/AccountDetailsForm";
import AccountMyItems from "../components/AccountMyItems";
import AccountOrders from "../components/AccountOrders";
import { useState } from "react";

const ProfilePage = () => {
    const auth = getAuth();
    const userEmail = auth.currentUser.email;
    const userSince = ((auth.currentUser.metadata.creationTime).slice(12, 17));

    const [displayMain, setDisplayMain] = useState("account")

    const changeMain = (btn) => {
        setDisplayMain(btn)
    };

    const renderMain = () => {
        if (displayMain === 'account') {
            return <AccountDetailsForm />
        } else if (displayMain === 'orders') {
            return <AccountOrders />
        } else if (displayMain === 'my-items') {
            return <AccountMyItems />
        }
    }

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
                    <SideBarButton onClick={() => changeMain("orders")}>ORDERS</SideBarButton>
                    <SideBarButton onClick={() => changeMain("my-items")}>MY ITEMS</SideBarButton>
                </ProfileSideBar>
                <ProfileMain>
                    {renderMain()}
                </ProfileMain>
            </MainContainer>
        </ProfileContainer>
    )
}

export default ProfilePage;