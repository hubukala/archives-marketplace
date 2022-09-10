import { Navbar } from "../styles/Navbar";
import { Links } from "../styles/Links";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import SignUpPopup from "./SignUpPopup";
import { ButtonPrimary } from "../styles/shared/buttons/ButtonPrimary";
import { ButtonSecondary } from "../styles/shared/buttons/ButtonSecondary";

const StyledNavbar = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const openLogin = () => {
    setShowLogin(prev => !prev);
  };

  const openSignUp = () => {
    setShowSignUp(prev => !prev);
  };

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
          <div>
            <ButtonPrimary onClick={openLogin}>
              LOGIN
            </ButtonPrimary>
            <ButtonSecondary onClick={openSignUp}>
              SIGN UP
            </ButtonSecondary> 
          </div>
        : <div>
            <ButtonPrimary onClick={() => navigate("/profile")}>
              PROFILE
            </ButtonPrimary>
            <ButtonSecondary onClick={() => {setIsSignedIn(false)}}>
              SIGN OUT
            </ButtonSecondary>
          </div>
        }
      </Navbar>
      <LoginPopup showLogin={showLogin} setShowLogin={setShowLogin} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <SignUpPopup showSignUp={showSignUp} setShowSignUp={setShowSignUp} setShowLogin={setShowLogin} />
    </div>
  )
};

export default StyledNavbar;