


import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Users,
  Code2,
  CheckCircle,
  Cloud,
  ShoppingCart,
  Database,
  PackageCheck,

} from "lucide-react";

const horizontalImages = [
  "https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/11/13/08/37/pc-5737958_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593378_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/03/04/12/20/server-1235959_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/08/29/17/07/ecommerce-3640321_1280.jpg",

];

const services = [
  {
    title: "Web Development",
    path: "/webdev",
    description:
      "Our website developers work with you to bring your unique vision to life - No relevant knowledge of coding needed.",
    bgImage:
      "https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg",
    icon: <Globe className="w-10 h-10 text-blue-300" />,
  },
  {
    title: "Mobile App Development",
    path: "/mobileapp",
    description:
      "GTasterix Pvt Ltd is a leading mobile app development company, offering comprehensive services in mobile application development.",
    bgImage:
      "https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_1280.jpg",
    icon: <Smartphone className="w-10 h-10 text-purple-300" />,
  }, 
  {
    title: "Remote Staffing",
    path: "/remote",
    description:
      "Empower Your Business with Our Skilled Remote Team, Extending Your Capabilities and Driving Success.",
    bgImage:
      "https://cdn.pixabay.com/photo/2020/11/13/08/37/pc-5737958_1280.jpg",
    icon: <Users className="w-10 h-10 text-green-300" />,
  },

  {
    title: "Custom Software",
    path: "/custom",
    description:
      "Outsource GTasterix makes custom software development easy, cost-effective, and inventive.",
    bgImage:
      "https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg",
    icon: <Code2 className="w-10 h-10 text-orange-300" />,
  },
  {
    title: "Software Testing",
    path: "/software",
    description:
      "GTasterix Pvt Ltd provides global software testing services using manual and automated testing techniques.",
    bgImage:
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    icon: <CheckCircle className="w-10 h-10 text-teal-300" />,
  },
  {
    title: "Cloud Computing",
    path: "/cloud",
    description:
      "Our company provides expert guidance and support in leveraging cloud computing and cloud services.",
    bgImage:
      "https://cdn.pixabay.com/photo/2024/02/26/17/05/cloud-8598424_1280.jpg",
    icon: <Cloud className="w-10 h-10 text-sky-300" />,
  },
  {
    title: "E-Commerce",
    path: "/ecomm",
    description:
      "E-Commerce Digital Marketplace: Empowering Commerce in the Digital Age.",
    bgImage:
      "https://cdn.pixabay.com/photo/2018/08/29/17/07/ecommerce-3640321_1280.jpg",
    icon: <ShoppingCart className="w-10 h-10 text-pink-300" />,
  },
  {
    title: "DBMS",
    path: "/dbms",
    description:
      "GTasterix Pvt Ltd provides expert assistance in managing relational databases and database management systems efficiently.",
    bgImage:
      "https://cdn.pixabay.com/photo/2016/03/04/12/20/server-1235959_1280.jpg",
    icon: <Database className="w-10 h-10 text-indigo-300" />,
  },
  {
    title: "SAP",
    path: "/sap",
    description:
      "We provide not just software but a comprehensive understanding of optical arc solutions.",
    bgImage:
      "https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593378_1280.jpg",
    icon: <PackageCheck className="w-10 h-10 text-red-300" />,
  },
];

const Services = () => {
  return (
    <>

      {/* Horizontal Scrolling Images */}
      <section>
        <div className="py-10 overflow-hidden w-full h-[500px]"> {/* choose height */}
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-300%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {horizontalImages.concat(horizontalImages).map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] h-[500px] relative"
              >
                <img
                  src={img}
                  alt={`scroll-img-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-gray-50 py-20  px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}

          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Empowered by exceptional talent, GTasterix Pvt Ltd elevates your
            digital landscape by converging innovation and technology to craft
            bespoke software solutions that drive business success.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl shadow-md h-52 flex items-center justify-center text-center overflow-hidden group cursor-pointer"
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => (window.location.href = service.path)}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

                {/* Content */}
                <div className="relative z-10 px-4">
                  <div className="flex justify-center mb-2">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm mt-1">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Services;
