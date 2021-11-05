import React from "react";
import Blue from "../Components/BlueSection/Blue";
import Deals from "../Components/Deals section/Deals";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero section/Hero";
import Infos from "../Components/Our info/Infos";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Deals />
      <Blue />
      <Infos />
    </div>
  );
};

export default Homepage;
