
import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Chekout from './components/pages/Chekout';
import About from './components/pages/About';


function App() {
  return (
    <div className="App" style={{ height: '100vh'}}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chekout" element={<Chekout />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
