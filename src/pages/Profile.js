import { useEffect, useState, useRef } from "react";
import { auth, db, storage } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
import { FileUploadInput } from "../styles/FileUpload";
import Loader from "../components/Loader";
import { uuidv4 } from "@firebase/util";

const ProfilePage = () => {
    const uniqueId = uuidv4()
    const [signedInUser, setSignedInUser] = useState("")
    const [displayMain, setDisplayMain] = useState("account")
    const [avatar, setAvatar] = useState({avatar: ""})
    const fileInputRef = useRef(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSignedInUser(user)
            }
        })
    })

    useEffect(() => {
        const fetchData = async () => {
            const userId = auth.currentUser.uid
            const docRef = doc(db, "users", userId)
            const docSnap = await getDoc(docRef);
            setAvatar({
                avatar: docSnap.data().avatar,
            })
        }
        fetchData()
    },[avatar])

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

    const handleAvatarClick = () => {
        fileInputRef.current.click()
    }

    const handleAvatarUpload = (event) => {
        const file = event.target.files[0]
        const userId = auth.currentUser.uid
        const docRef = doc(db, "users", userId)
        const imageRef = ref(storage, `avatars/${event.target.files[0].name + uniqueId}`)
        // todo: add delete prevoius avatar from firebase storage
        uploadBytes(imageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const data = {avatar: url}
                setAvatar({avatar: url})
                updateDoc(docRef, data)
            })

        })
    }

    return (
        <>        
            {!signedInUser ? <Loader/> : 
            <ProfileContainer>
                <ProfileHead>
                    <FileUploadInput type="file" id="file" name="file" ref={fileInputRef} onChange={(event) => handleAvatarUpload(event)}/>
                    <AvatarStyling width={100} height={100} src={avatar.avatar} alt="AV" onClick={handleAvatarClick}/> <br />
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