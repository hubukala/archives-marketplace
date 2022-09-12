import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './shared/SharedLayout';
import Home from './pages/Home';
import Sell from './pages/Sell';
import SignUp from './pages/Signup';
import Shop from './pages/Shop';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';
import ScrollToTop from './components/ScrollToTop';
import SearchResults from './pages/SearchResults';
import ProfilePage from './pages/Profile';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  
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
            <Route path="/shop/search/:inputId" element={<SearchResults/>}/>
            <Route path="/signup" element=
              {<SignUp
                showSignUp={showSignUp}
                setShowSignUp={setShowSignUp}
                setShowLogin={setShowLogin}
              />}/>
            <Route element={<ProtectedRoute setShowSignUp={setShowSignUp} />}>
              <Route path="/profile" element={<ProfilePage />}/>
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
