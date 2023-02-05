import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebaseConfig";

const ProtectedRoute = ({ setShowSignUp }) => {
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