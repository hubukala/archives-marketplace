import { Navigate, Outlet, useLocation  } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedRoute = () => {
    const auth = getAuth();
    const location = useLocation()
    console.log(auth.currentUser);
    
    if (auth.currentUser === null) {
        return (<Navigate to="/" />)
    } else {
        return (<Outlet />)
    }
};

export default ProtectedRoute;