


import React from "react";
import { motion } from "framer-motion";


export default function OfferSection() {
  const offers = [
    { title: "Application Development",      
      bgImage: "https://cdn.prod.website-files.com/6448bf6f0640203c982ca15f/6448bf6f064020ae452ca445_Application%20Development.webp" },

    { title: "Marketing Ideas",
       bgImage: "https://www.salesforce.com/ca/blog/wp-content/uploads/sites/12/2023/10/creative-marketing-ideas-og.png?w=768&h=402" },
   
       { title: "Mail Support",
       bgImage: "https://cdn.pixabay.com/photo/2021/07/25/18/02/api-6492491_1280.jpg" },
   
       { title: "Secure System", 
      bgImage: "https://cdn.pixabay.com/photo/2021/07/25/18/02/api-6492491_1280.jpg" },
   
      { title: "Cloud Computing",
       bgImage: "https://cdn.prod.website-files.com/6448bf6f0640203c982ca15f/6448bf6f0640209af42ca447_Cloud.webp" },
    
       { title: "Big Data",
       bgImage: "https://cdn.prod.website-files.com/6448bf6f0640203c982ca15f/6448bf6f064020432d2ca43d_Big%20Data.webp" },
 
      ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What Do We Offer</h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          At <strong>GTasterix Pvt Ltd</strong>, we provide innovative IT solutions that empower businesses to succeed.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden text-center h-64 faint-neon-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `url(${offer.bgImage})` }}
              ></div>

              <div className="absolute inset-0 bg-black/20"></div>

              <div className="relative z-10 flex flex-col justify-center h-full px-6">
                <h3 className="text-xl font-bold mb-2 text-white">{offer.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Faint Blue Neon Effect */}
      <style jsx>{`
      .faint-neon-card:hover {
  border-color: rgba(121, 209, 244, 0.5); /* Sky blue faint */
  box-shadow: 
    0 0 6px rgba(135, 206, 235, 0.5),
    0 0 12px rgba(109, 208, 247, 0.4),
    0 0 24px rgba(95, 200, 241, 0.3);
}

      `}</style>
    </section>
  );
}
