import StyledNavbar from '../components/StyledNavbar';
import { Outlet } from 'react-router-dom';

const SharedLayout = ({ showLogin, setShowLogin, showSignUp, setShowSignUp, isSignedIn, setIsSignedIn }) => {
  return (
    <>
      <StyledNavbar
        showLogin={showLogin} 
        setShowLogin={setShowLogin} 
        showSignUp={showSignUp} 
        setShowSignUp={setShowSignUp} 
        isSignedIn={isSignedIn} 
        setIsSignedIn={setIsSignedIn}
      />
      <Outlet />
    </>
  );
};

export default SharedLayout;