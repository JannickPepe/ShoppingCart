import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Checkout from './pages/checkout';
import Contact from './pages/Contact';
import About from './pages/About';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from "./components/Navbar";



// every page goes into the Routes
// ofc navbar top and footer bottom, what else :P
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
