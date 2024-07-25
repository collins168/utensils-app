// import './App.css'
import {BrowserRouter, Route , Routes}from"react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Cart from "./component/Cart"
import { CartProvider } from "react-use-cart";
import Footer from "./component/Footer";

function App() {

  return (
    <CartProvider>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="*" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
     </Routes>
     <Footer/>
     </BrowserRouter> 
    </CartProvider>
  )
}

export default App
