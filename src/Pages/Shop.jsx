import React from 'react'
import Header from '../Component/Header'
import Bottombar from '../Component/Bottombar'
import Footer from '../Component/Footer'
import Shopsidebar from '../Component/Shop/Shopsidebar.jsx'
import Faq from '../Component/Faq.jsx'


const Shop = () => {
  return (
    <>
     <Header />
  <Shopsidebar />
  <Faq />
     <Bottombar />
     <Footer />
    </>
  )
}

export default Shop