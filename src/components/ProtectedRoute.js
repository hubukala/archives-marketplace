import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ setShowSignUp, isLoggedIn }) => {
    const toggle = () => {
        setShowSignUp(true)
    };

    if (isLoggedIn === false) {
        toggle();
        return (<Navigate to ="/" />);
    } else {
        return (<Outlet />);
    }
};

export default ProtectedRoute;