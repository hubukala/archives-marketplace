import { Navbar, ButtonsContainer } from "../styles/Navbar";
import { Links } from "../styles/Links";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import SignUpPopup from "./SignUpPopup";
import { ButtonPrimary } from "../styles/shared/buttons/ButtonPrimary";
import { ButtonSecondary } from "../styles/shared/buttons/ButtonSecondary";

const StyledNavbar = ({ showLogin, setShowLogin, showSignUp, setShowSignUp, isSignedIn, setIsSignedIn }) => {
  const navigate = useNavigate();

  const openLogin = () => {
    setShowLogin(prev => !prev);
    setShowSignUp(false)
  };

  const openSignUp = () => {
    setShowSignUp(prev => !prev);
    setShowLogin(false)
  };

  const signOut = () => {
    setIsSignedIn(false)
    navigate("/")
  }

  return (
    <div>
      <Navbar>
        <Links
          to="/"
        >
          ARCHIVES MARKETPLACE
        </Links>
        <SearchBar />
        <Links
          to="/sell"
        >
          SELL
        </Links>
        <Links
          to="/shop"
        >
          SHOP
        </Links>
        { !isSignedIn ?
          <ButtonsContainer>
            <ButtonPrimary onClick={openLogin}>
              LOGIN
            </ButtonPrimary>
            <ButtonSecondary onClick={openSignUp}>
              SIGN UP
            </ButtonSecondary> 
          </ButtonsContainer>
        : <ButtonsContainer>
            <ButtonPrimary onClick={() => navigate("/profile")}>
              PROFILE
            </ButtonPrimary>
            <ButtonSecondary onClick={signOut}>
              SIGN OUT
            </ButtonSecondary>
          </ButtonsContainer>
        }
      </Navbar>
      <LoginPopup showLogin={showLogin} setShowLogin={setShowLogin} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <SignUpPopup showSignUp={showSignUp} setShowSignUp={setShowSignUp} setShowLogin={setShowLogin} />
    </div>
  )
};

export default StyledNavbar;