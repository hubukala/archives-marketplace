import './App.css';
//import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './shared/SharedLayout';
import Home from './pages/Home';
import Sell from './pages/Sell';
import SignUp from './pages/Signup';
import Shop from './pages/Shop';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';
import ScrollToTop from './components/ScrollToTop';
import SearchBar from './components/SearchBar';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path="/sell" element={<Sell />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/shop/:productId" element={<SingleProduct />}/>
            <Route path="/shop/search/:inputId" element={<SearchResults/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
