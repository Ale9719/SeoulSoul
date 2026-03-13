import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import CombinedFooter from './components/Newsletter-Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Store from './pages/Store';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Forum from './pages/Forum';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path='/Contact' element={<ContactMe />} />
          <Route path='/Store' element={<Store/>}/>
          <Route path="/store/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>

        <CombinedFooter />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;