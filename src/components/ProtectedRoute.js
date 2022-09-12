import { Navigate, Outlet } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedRoute = ({ setShowSignUp }) => {
    const auth = getAuth();
    console.log(auth.currentUser);
    const toggle = () => {
        setShowSignUp(true)
    };

    if (auth.currentUser === null) {
        toggle();
        return (<Navigate to ="/" />);
    } else {
        return (<Outlet />);
    }
};

export default ProtectedRoute;