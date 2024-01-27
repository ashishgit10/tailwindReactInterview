import {
    BrowserRouter , Route, Routes,
  } from "react-router-dom";

import React from 'react'
import { LandingPageAfterLogin } from "./pages/LandingPageAfterLogin";
import LandingPage from "./pages/LandingPage";

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/LandingAfterLogin" element={<LandingPageAfterLogin />} />
            <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers