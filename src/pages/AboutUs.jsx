

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="py-10 bg-white">
      {/* ------------------- Simple About Us Section ------------------- */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-gray-600 mb-4 text-lg text-center">
          Welcome to GTasterix! We are dedicated to creating innovative designs
          and delivering future-ready technology solutions for our clients. Our
          mission is to streamline industries, enhance productivity, and
          provide a competitive edge.
        </p>
      </section>

      {/* ------------------- Parallax Sections ------------------- */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
        subheading="Collaborate"
        heading="We Create Designs and Technology"
        title=" We are dedicated to streamlining and improving the industry here at GTAsteriX."
        title1=" Emphasizing innovation to provide optimum solutions for your clients and give them a competitive edge in the market is a commendable approach."
      />

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop"
        subheading="Never compromise."
        heading="Our Mission"
        title=" To bring the future technology excellence for our customers, colleagues and shareholders."
        title1="To empower businesses with scalable, secure, and cost-effective cloud solutions, enabling seamless digital transformation, and sustainable growth."
      />

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop"
        subheading="Quality"
        heading="Our Vision"
        title=" To build quality solutions, boost productivity and reduce 10x time to market at minimal cost."
        title1="Building quality solutions, boosting productivity, and significantly reducing time to market while keeping costs minimal is a challenging but achievable goal."
      />

      {/* ------------------- Stats Section ------------------- */}
      <StatsSection />

      {/* ------------------- Company Overview Section ------------------- */}
      <section>
        <motion.section
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
        >
          <div className="h-130 bg-[url('https://plus.unsplash.com/premium_photo-1661281307045-edb4d54e313f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8business%20background')] bg-center bg-cover"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="bg-black/60 p-10 rounded text-center max-w-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl text-white font-semibold mb-4">
                Company Overview
              </h3>
              <p className="text-gray-200 mb-6">
                At GTasterix Pvt Ltd, we deliver innovative tech solutions that
                empower businesses worldwide. From custom software and web/mobile
                apps to e-commerce and enterprise systems, we transform
                challenges into opportunities with efficiency and agility.
              </p>

              <button
                onClick={() => (window.location.href = "/contact")}
                className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </motion.section>
      </section>
    </div>
  );
};

// ------------------- Stats Section with Animated Numbers -------------------
const AnimatedStat = ({ value, label }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 50);
      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 50);

      return () => clearInterval(counter);
    }
  }, [isInView, value]);

  return (
    <div ref={ref}>
      <h3 className="text-3xl font-bold text-blue-600">{count}</h3>
      <p className="mt-2 text-gray-700">{label}</p>
    </div>
  );
};

const StatsSection = () => (
  <section className="bg-gray-50 py-16 px-6 text-center">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <AnimatedStat value={188} label="Happy Clients" />
      <AnimatedStat value={192} label="Projects Completed" />
      <AnimatedStat value={166} label="Positive Feedback" />
      <AnimatedStat value={950} label="Hours of Support" />
    </div>
  </section>
);

// ------------------- Parallax Components -------------------
const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, title, title1 }) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy
          heading={heading}
          subheading={subheading}
          title={title}
          title1={title1}
        />
      </div>
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
    >
      <motion.div className="absolute inset-0 bg-neutral-950/70" style={{ opacity }} />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading, title, title1 }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white px-4"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      <p className="space-y-8 text-xl mb:mb-8">{title}</p>
      <p className="space-y-8 text-xl mb:mb-8">{title1}</p>
    </motion.div>
  );
};

export default AboutUs;
