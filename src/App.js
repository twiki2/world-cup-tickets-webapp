import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import ForgetPassword from "./components/forget-password";
import BalancePage from "./components/BalancePage";



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path='/forget-password' element={<ForgetPassword/>}/>
            <Route exact path="/balance" element={<BalancePage/>}/>

          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
