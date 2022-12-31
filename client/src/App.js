import logo from "./logo.svg";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Productpage } from "./product_page/productpage.js";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import Navbar2 from "./Components/Navbar2";
import Contact from "./Contact/Contact";
import Cart from "./cart-Component/cart";
import ProductDetails from "./ProductDetails/ProductDetails";
import Checkout from "./Components/Checkout";
import OrderPaced from "./Components/OrderPaced";

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Productpage />}></Route>
        <Route path="/products?cat=Men" element={<Productpage />}></Route>
        <Route path="/products?cat=Women" element={<Productpage />}></Route>
        {/* <Route path="/kids" element={<Productpage />}></Route>
        <Route path="/indie" element={<Productpage />}></Route>
        <Route path="/kitchen" element={<Productpage />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/productdetails" element={<ProductDetails />}></Route>
        <Route path="/payment" element={<Checkout />}></Route>
        <Route path="/confirmation" element={<OrderPaced />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
