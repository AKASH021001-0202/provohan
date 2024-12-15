import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SliderComponent from "../Component/Slider.jsx";
import TabContent from "../Component/TabContent.jsx";
import Buysell from "../Component/Buysell.jsx";


export const Home = () => {
  return (
    <div>
      <Header />
      <SliderComponent />
      <TabContent />
      <Buysell />
      <Footer />
    </div>
  );
};
