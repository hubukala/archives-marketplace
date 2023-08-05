import StyledNavbar from '../components/StyledNavbar';
import { Outlet } from 'react-router-dom';

const SharedLayout = ({
    showLogin,
    setShowLogin,
    showSignUp,
    setShowSignUp,
    isSignedIn,
    setIsSignedIn,
}) => {
    return (
        <div>
            <StyledNavbar
                showLogin={showLogin}
                setShowLogin={setShowLogin}
                showSignUp={showSignUp}
                setShowSignUp={setShowSignUp}
                isSignedIn={isSignedIn}
                setIsSignedIn={setIsSignedIn}
            />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default SharedLayout;
