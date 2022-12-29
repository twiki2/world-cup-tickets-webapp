import "./App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import * as ROUTES from "./constants/routes";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import ForgetPassword from "./components/forget-password";
import BalancePage from "./components/BalancePage";
import Search from "./components/Search"

import Signup from './components/Signup';
import Login from './components/login';
import Reset from "./components/reset-password";

function App() {
  return (
    <div className="App">
      <BrowserRouter></BrowserRouter>
      <ShopContextProvider>
        <Router>
          <Navbar /> <Search/>
          <Routes> 
            <Route exact path={ROUTES.LANDING} element={<Shop />} />
            <Route path={ROUTES.FORGET_PASSWORD} element={<ForgetPassword/>}/>
            <Route  path={ROUTES.BALANCE} element={<BalancePage/>}/>
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.SIGN_UP} element={<Signup/>} />
            <Route path={ROUTES.LOG_IN} element={<Login/>} />
            <Route path={ROUTES.RESET_PASSWORD} element={<Reset/>} />

          </Routes>
        </Router>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
