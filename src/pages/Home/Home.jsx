import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
    </div>
  );
}

export default Home;
