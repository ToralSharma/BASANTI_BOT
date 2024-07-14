import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar';
import {Home} from './Components/Home';
import {Products} from './Components/Product'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProductDetails } from './Components/ProductDetails';
import { Cart } from './Components/Cart';
import { Login } from './Components/login';
import Done, { BodyTypeResult }  from './Components/BodyTypeResult';
import { Basanti } from './Components/Basanti';
import { SwipeComponent } from './Components/SwipeComponent';
import { AestheticResult } from './Components/AestheticResult';

function App() {

  // const location = useNavigate();
  return (
 <>
      {<Navbar/>  }
      {/* {location.pathname === '/done' ? null : <Navbar />} */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>

        <Route path="/cart/:id" element={<Basanti />}></Route>
        <Route path="/done" element={< BodyTypeResult/>}></Route>
        <Route path="/style" element={<SwipeComponent/>}></Route>
        <Route path="/result" element={<AestheticResult/>}></Route>
         {/* {this.state.isAlertOpen ? <alert /> : null} */}

      </Routes>
    </>
  );
}

export default App;


