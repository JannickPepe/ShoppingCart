import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Checkout from './pages/checkout';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </div>
  );
}

export default App;
