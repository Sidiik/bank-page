import React, { useEffect } from "react";
import Blue from "../Components/BlueSection/Blue";
import Deals from "../Components/Deals section/Deals";
import Handoff from "../Components/HandOff section/Handoff";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero section/Hero";
import Infos from "../Components/Our info/Infos";
import ScrollToTop from "../Components/ScrollTop/ScrollToTop";
import Aos from "aos";
import Subscribe from "../Components/Subscribtion/Subscribe";

const Homepage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Hero />
      <Deals />
      <Blue />
      <Infos />
      <Handoff />
      <Subscribe />
    </div>
  );
};

export default Homepage;
