import { Navbar } from "../styles/Navbar";
import { Links } from "../styles/Links";
import SearchBar from "./SearchBar";
import { useState } from "react";
import LoginPopup from "./LoginPopup";
import SignUpPopup from "./SignUpPopup";
import { ButtonPrimary } from "../styles/ButtonPrimary";
import { ButtonSecondary } from "../styles/ButtonSecondary";

const StyledNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false)

  const openLogin = () => {
    setShowLogin(prev => !prev);
  }

  const openSignUp = () => {
    setShowSignUp(prev => !prev);
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
          <div>
            <ButtonPrimary onClick={openLogin}>
              LOGIN
            </ButtonPrimary>
            <ButtonSecondary onClick={openSignUp}>
              SIGN UP
            </ButtonSecondary> 
          </div>
        : <div>
            <ButtonPrimary>
              PROFILE
            </ButtonPrimary>
            <ButtonSecondary onClick={() => {setIsSignedIn(false)}}>
              SIGN OUT
            </ButtonSecondary>
          </div>
        }
      </Navbar>
      <LoginPopup showLogin={showLogin} setShowLogin={setShowLogin} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
      <SignUpPopup showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>
    </div>
  )
};

export default StyledNavbar;