import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login-Signup/Login";
import Signup from "./Login-Signup/Signup";
import OTPVerification from "./Login-Signup/OTPVerification";
import { ToastContainer } from "react-toastify";
import { Home } from "./Pages/Home";
import Footer from "./Component/Footer";
import Dummy from "./Component/Dummy";
import Shop from "./Pages/Shop";
import Carsgrid from "./Component/Shop/Carsgrid";
import Singlepage from "./Component/Single-page/Singlepage";
import Carcarousel from "./Component/Shop/Carcarousel";
import Sell from "./Pages/Sell";
import Sellcards from "./Component/Sell-page/Sellcards";
import Sellform from "./Component/Sell-page/Sellform";
import NotFoundPage from "./Pages/NotFoundPage";



function App() {
  return (
    <>
     <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Signup />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/singlepage" element={<Singlepage />} />
        <Route path="/dummy" element={<Sellform />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/cards" element={<Sellcards />} />
        <Route path="*" element={<NotFoundPage />} />
       
       
      </Routes>
    </BrowserRouter>
  
     
      
    </>
  );
}

export default App;
