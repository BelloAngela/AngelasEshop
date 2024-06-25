import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Register from './pages/Register'; 
import Login from './pages/Login'; 
import Profile from './pages/Profile'; 
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductList from './components/ProductList';
//import CartProvider from './components/CartProvider'; 
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Router>
            <NavBar />
            <div className='overflow-hidden'>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path='/product/:id' element={<ProductDetails />} />
                <Route path='/products' element={<ProductList />} />
              </Routes>
              <Sidebar />
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
