import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Breadcrumbs from "./components/Breadcrumbs"

import CartPage from './pages/СartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import NullPage from './pages/NullPage';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [itemsPerRow, setItemsPerRow] = useState(4);

  return (
    <div className='App bg-[rgb(78,92,137)] min-h-screen'>
      <ProductProvider>
        <CartProvider>
          <Router>
          <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          <div className="app-container mx-auto max-w-[1280px] px-4 min-h-[800px]">
            <Breadcrumbs selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Routes className="main">
              <Route path="/" exact element={<HomePage selectedCategory={null} itemsPerRow={itemsPerRow} setItemsPerRow={setItemsPerRow} />} />
              <Route path="/social-media" element={<NullPage />} />
              <Route path="/about" element={<NullPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/category/:id" element={<HomePage selectedCategory={selectedCategory} itemsPerRow={itemsPerRow} setItemsPerRow={setItemsPerRow} />} />
            </Routes>
          </div>
          <Footer className="footer"/>
          </Router>
        </CartProvider>
      </ProductProvider>
    </div>
  );
};

export default App;
