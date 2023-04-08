import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import AccountDetailsForm from "../components/AccountDetailsForm";
import AccountMyItems from "../components/AccountMyItems";
import AccountOrders from "../components/AccountOrders";
import { SideBarButton } from "../styles/sidebar/SideBarButton";
import { ProfileContainer } from "../styles/profile/ProfileContainer";
import { ProfileHead } from "../styles/profile/ProfileHead";
import { ProfileSideBar } from "../styles/profile/ProfileSideBar";
import { ProfileMain } from "../styles/profile/ProfileMain";
import { MainContainer } from "../styles/profile/MainContainer";
import { AvatarStyling } from "../styles/profile/AvatarStyling";
import Avatar from "../assets/images/168732.png"
import Loader from "../components/Loader";

const ProfilePage = () => {
    const [signedInUser, setSignedInUser] = useState("")
    const [displayMain, setDisplayMain] = useState("account")

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSignedInUser(user)
            }
        })
    })

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
        <>        
            {!signedInUser ? <Loader/> : 
            <ProfileContainer>
                <ProfileHead>
                    <AvatarStyling src={Avatar} alt="AV"/> <br />
                    {signedInUser.email} <br />
                    Joined in: {(signedInUser.metadata.creationTime).slice(12, 17)}
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
            }
        </>
    )
}

export default ProfilePage;