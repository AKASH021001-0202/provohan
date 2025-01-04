import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SliderComponent from "../Component/Slider.jsx";
import TabContent from "../Component/TabContent.jsx";
import Buysell from "../Component/Buysell.jsx";
import Clients from "../Component/Clients.jsx";
import Faq from "../Component/Faq.jsx";
import Bottombar from "../Component/Bottombar.jsx";


 const Home = () => {
  return (
    <div>
      <Header />
      <SliderComponent />
      <TabContent />
      <Buysell />
      <Clients />
      <Faq />
      <Bottombar />
      <Footer />
    </div>
  );
};
export default Home; 