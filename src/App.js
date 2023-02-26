import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import SharedLayout from './shared/SharedLayout';
import Home from './pages/Home';
import Sell from './pages/Sell';
import SignUp from './pages/Signup';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import SearchResults from './pages/SearchResults';
import ProfilePage from './pages/Profile';
import NotFound from './pages/NotFound';
import Orders from './pages/Orders';
import CompletePurchase from './pages/CompletePurchase';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true)
      }
    })
  })
  
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element=
            {<SharedLayout
              showLogin={showLogin}
              setShowLogin={setShowLogin}
              showSignUp={showSignUp}
              setShowSignUp={setShowSignUp}
              isSignedIn={isSignedIn}
              setIsSignedIn={setIsSignedIn}
            />}>
            <Route index element={<Home />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/shop/:productId" element={<SingleProduct />}/>
            <Route path="/shop/:productId/complete" element={<CompletePurchase />}/>
            <Route path="/shop/search/:inputId" element={<SearchResults/>}/>
            <Route path="/signup" element=
              {<SignUp
                showSignUp={showSignUp}
                setShowSignUp={setShowSignUp}
                setShowLogin={setShowLogin}
              />}/>
            <Route element={<ProtectedRoute setShowSignUp={setShowSignUp} isLoggedIn={isSignedIn} />}>
              <Route path="/profile" element={<ProfilePage />}/>
              <Route path="/profile/orders" element={<Orders />}/>
              <Route path="/profile/my-items" element={<ProfilePage />}/>
              <Route path="/sell" element={<Sell />}/>
            </Route>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
