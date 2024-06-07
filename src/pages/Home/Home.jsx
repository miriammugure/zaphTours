import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import HomeDestinations from "./HomeDestinations/HomeDestinations";
import Testimonials from "./Testimonials/Testimonials";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import NewsLetter from "./Newsletter/NewsLetter";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <HomeDestinations />
      <Testimonials />
      <NewsLetter />
    </div>
  );
}

export default Home;
