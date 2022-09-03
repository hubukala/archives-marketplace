import { Navbar } from "../styles/Navbar";
import { Links } from "../styles/Links";
import SearchBar from "./SearchBar";
import { useState } from "react";
import LoginPopup from "./LoginPopup";
import { ButtonPrimary } from "../styles/ButtonPrimary";
import { ButtonSecondary } from "../styles/ButtonSecondary";

const StyledNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin(prev => !prev);
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
        <ButtonPrimary onClick={openLogin}>
          LOGIN
        </ButtonPrimary>
        <ButtonSecondary>
          SIGN UP
        </ButtonSecondary>
      </Navbar>
      <LoginPopup showLogin={showLogin} setShowLogin={setShowLogin}/>
    </div>
  )
};

export default StyledNavbar;