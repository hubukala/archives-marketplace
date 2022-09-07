import styled from "styled-components";
import { SideBarButton } from "../styles/sidebar/SideBarButton";

const ProfileContainer = styled.div`
    margin: 4rem;
`

const ProfileHead = styled.div`
    padding: 0 2rem 4rem 2rem;
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
`

const MainContainer = styled.div`
    display: flex;
`

const ProfilePage = () => {
    return (
        <ProfileContainer>
            <ProfileHead>
                hubert@lol.pl
            </ProfileHead>
            <MainContainer>
                <ProfileSideBar>
                    <SideBarButton>ACCOUNT</SideBarButton>
                    <SideBarButton>ABOUT</SideBarButton>
                    <SideBarButton>ORDERS</SideBarButton>
                    <SideBarButton>MY ITEMS</SideBarButton>
                </ProfileSideBar>
                <ProfileMain>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis praesentium officiis, quia ab harum labore numquam architecto necessitatibus esse dicta tempore accusamus, illum dolore rerum dolor est! Quod, placeat.
                </ProfileMain>
            </MainContainer>
        </ProfileContainer>
    )
}

export default ProfilePage;