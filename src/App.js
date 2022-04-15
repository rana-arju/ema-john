import { Route, Routes } from 'react-router-dom';
import './App.css';
import Orders from './Components/Orders/Orders';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import About from "./Components/About/About";
import Inventory from "./Components/Inventory/Inventory"
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import RedirectAuth from './Components/RedirectAuth/RedirectAuth';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div>
    <Header />
    
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/inventory' element = {<Inventory />} />
      <Route path='/about' element={<About />} />
      <Route path='/order' element={<RedirectAuth>
        <Orders />
      </RedirectAuth>
      } />
      <Route path='/shipping' element={<RedirectAuth>
        <Shipping />
      </RedirectAuth>
      } />
      <Route path='/login' element= {<Login />} />
      <Route path='/signup' element= {<SignUp />} />
    </Routes>
     
    </div>
  );
}

export default App;
