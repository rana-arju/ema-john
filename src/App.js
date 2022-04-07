import { Route, Routes } from 'react-router-dom';
import './App.css';
import Orders from './Components/Orders/Orders';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import About from "./Components/About/About";
import Inventory from "./Components/Inventory/Inventory"

function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='shop' element ={<Shop />} />
      <Route path='inventory' element = {<Inventory />} />
      <Route path='about' element={<About />} />
      <Route path='order' element={<Orders />} />
    </Routes>
     
    </div>
  );
}

export default App;
