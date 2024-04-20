import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // This includes both Bootstrap's JavaScript and Popper.js

import HomeComponent from "./component/home/HomeComponent";
import Navbar from "./component/navbar/Navbar";
import Cart from "./component/cart/Cart";
import Order from "./component/order/Order";
import Footer from "./component/Footer/Footer";
import Signin from "./component/signin/Signin";
import Signup from "./component/signup/Signup";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [userName, setUserName] = useState(sessionStorage.getItem("USER_NAME"));

  const userToken = sessionStorage.getItem("USER_TOKEN");

  const logoutHandler = () => {
    setUserName("");
    sessionStorage.removeItem("USER_TOKEN");
    sessionStorage.removeItem("USER_NAME");
    setShowModal(true);
  };

  useEffect(() => {
    console.log("userToken" , userToken)
    if (!userToken) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [JSON.stringify(userToken)]);

  useEffect(()=>{
    console.log( "showModel - " , showModal);
  },[showModal])  


  return (
    <>
      <Navbar logoutHandler={logoutHandler} />
      <Routes>

        <Route element={<PrivateRoutes userToken={showModal} />}>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Route>

        <Route path="/signin"  element={<Signin setShowModal={setShowModal} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
