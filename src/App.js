
import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/pages/Home';
import { Routes, Route } from "react-router-dom";
import Chekout from './components/pages/Chekout';
import About from './components/pages/About';
import ProductPage from './components/pages/ProductPage';
import Thankyou from './components/pages/Thankyou';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chekout" element={<Chekout />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="thankyou" element={<Thankyou />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
