import Home from "./components/routes/home/home.component";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Fragment } from "react";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/Authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
