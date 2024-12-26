import React, { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Faq from "../Component/Faq";
import Sellcards from "../Component/Sell-page/Sellcards";
import Sellform from "../Component/Sell-page/Sellform";

const Sell = () => {
 
  return (
    <>
   
<Header/>

<Sellform />
<Sellcards />
<Faq />
<Footer />
    </>
  );
};

export default Sell;
