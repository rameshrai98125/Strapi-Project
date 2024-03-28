import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Category from "./components/Categeory/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { Cart } from "./components/cart/Cart";
import AppContext from "./utils/Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </AppContext>
    </>
  );
}

export default App;
