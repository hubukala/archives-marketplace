import { useNavigate } from "react-router-dom"
import { ButtonPrimary } from "../styles/shared/buttons/ButtonPrimary"
import { BackgroundContainer } from "../styles/login-signup/BackgroundContainer"
import { PostedItemContainer, PostedItemWrapper, ContentWrapper } from "../styles/post-item-form/PostItemSuccessPopup"
import Tick from "../assets/images/tick.png"

const ItemPostedPopup = ({ successMessage, setSuccessMessage }) => {
    
    const navigate = useNavigate()
    const closePopup = () => {
        setSuccessMessage(false)
        navigate('/')
    }
    return (
        <div>
                { successMessage ?
                    <BackgroundContainer>
                        <PostedItemContainer>
                            <PostedItemWrapper>
                                <ContentWrapper>
                                    <img src={Tick} alt="tick" width="100" height="100"/>
                                    <h1>Item posted successfully!</h1>
                                    <p>Go to 'My items' tab in your profile page to see your listings.</p>
                                </ContentWrapper>
                                <ButtonPrimary onClick={closePopup}>CLOSE</ButtonPrimary>
                            </PostedItemWrapper>
                        </PostedItemContainer>
                    </BackgroundContainer>
                : null}
        </div>
    )
}

export default ItemPostedPopup;