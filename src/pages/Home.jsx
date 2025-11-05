

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OfferSection from "./Offersection";
import AboutUs from "./AboutUs";
import OurServices from "./Ourservices";

const Home = () => {
  const slides = [
    {
      title: "Welcome to GTasterix",
      description:
        "Providing quality services since 2019. We deliver cutting-edge IT solutions that transform businesses.",
      video: "https://cdn.pixabay.com/video/2023/11/11/188742-883619742_large.mp4",
    },
    {
      title: "Customized Software Solutions",
      description:
        "Every business is unique and has unique needs. We value diversity in business and build customized solutions to give a competitive edge.",
      video: "https://cdn.pixabay.com/video/2018/10/06/18576-294031685_large.mp4",
    },
    {
      title: "Software Service, Maintenance and Support",
      description:
        "Our experts provide support to offshore teams and help deliver high-quality software using best practices, principles, and the latest tools.",
      video: "https://cdn.pixabay.com/video/2022/08/17/128210-747086064_large.mp4",
    },
    {
      title: "Cloud Computing",
      description:
        "From cloud computing to AI-powered platforms, we help businesses stay ahead in the digital age.",
      video: "https://cdn.pixabay.com/video/2022/09/05/130273-746686709_large.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-screen w-full text-white overflow-hidden bg-gray-800 transition-all duration-700">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 "></div>

        {/* Video Background */}
        <video
          src={slides[currentIndex].video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover top-0 left-0 z-0"
          onError={(e) => console.log("Video failed to load:", e)}
        />

        {/* Animated Slide Content */}
        <div className="relative z-20 text-left px-8 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg max-w-2xl leading-snug">
                {slides[currentIndex].title}
              </h1>
              <p className="text-lg md:text-xl mb-8 drop-shadow max-w-2xl leading-relaxed">
                {slides[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Other Sections */}
      <OfferSection />
      
        <AboutUs />
      <OurServices />
    
    </motion.div>
  );
};

export default Home;
