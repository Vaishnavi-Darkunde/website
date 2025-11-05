import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Navbar from "./componets/Navbar";
import ScrollToTop from "./pages/ScrollToTop";



import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";



import Services from "./pages/Services";

import Careers from "./pages/Careers";
import Applyinfo from "./pages/Applyinfo";

import Contact from "./pages/Contact";
import OfferSection from "./pages/Offersection";



import Webdevelopment from "./servicespage/Webdevlopment";
import Cloud from "./servicespage/Cloud";
import Custom from "./servicespage/Custom";
import Dbms from "./servicespage/Dbms";
import Ecomm from "./servicespage/Ecomm";
import Mobileapp from "./servicespage/Mobileapp";
import Software from "./servicespage/Software";
import Remote from "./servicespage/Remote";
import Sap from "./servicespage/Sap";


import Floatingactionbutton from "./componets/Footingactionbutton";
import Footer from "./componets/Footer";



function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen ">
        <Navbar />
        <main className="">
      <ScrollToTop></ScrollToTop>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact></Contact>} />

            


            <Route path="/services" element={<Services></Services>} />

            <Route path="/webdev" element={<Webdevelopment></Webdevelopment>} />
            <Route path="/cloud" element={<Cloud></Cloud>} />
            <Route path="/custom" element={<Custom></Custom>} />
            <Route path="/dbms" element={<Dbms></Dbms>} />
            <Route path="/ecomm" element={<Ecomm></Ecomm>} />
            <Route path="/mobileapp" element={<Mobileapp></Mobileapp>} />
            <Route path="/software" element={<Software></Software>} />
            <Route path="/sap" element={<Sap></Sap>} />
            <Route path="/remote" element={<Remote></Remote>} />



            <Route path="/careers" element={<Careers></Careers>} />
            <Route path="/applyinfo" element={<Applyinfo></Applyinfo>} />

            <Route path="/offersection" element={<OfferSection></OfferSection>} />


          </Routes>
        </main>
        <Floatingactionbutton />
        <Footer />

      </div>
    </BrowserRouter>
  );
}
export default App;
