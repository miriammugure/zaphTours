import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trips from "./pages/Trips/Trips";
import Destinations from "./pages/Destinations/Destinations";
import Contacts from "./pages/Contacts/Contacts";
import Header from "./components/Header/Header";
import "./global.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destinations />} />
          <Route path="/Trips" element={<Trips />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
