import { Navbar } from "../styles/Navbar";
import { Links } from "../styles/Links";
import SearchBar from "./SearchBar";

const StyledNavbar = () => {
  return (
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
      <Links
        to="/login"
      >
        LOGIN
      </Links>
      <Links
        to="/signup"
      >
        SIGN UP
      </Links>
    </Navbar>
  )
};

export default StyledNavbar;