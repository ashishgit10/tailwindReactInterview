import {
    BrowserRouter , Route, Routes,
  } from "react-router-dom";

import React from 'react'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordSuccess from "./pages/ResetPasswordSuccess";
import Home from "./pages/Home";
import { LandingPageAfterLogin } from "./pages/LandingPageAfterLogin";

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget" element={<ForgetPassword />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/reset/success" element={<ResetPasswordSuccess />} />
            <Route path="/LandingAfterLogin" element={<LandingPageAfterLogin />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers