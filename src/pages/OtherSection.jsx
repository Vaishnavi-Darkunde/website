import React from "react";

import { Database, Monitor, Sql, Smartphone, ShoppingCart, CheckCircle } from "lucide-react";

export default function TechStacks() {
  const stacks = [
    {
      icon: <Database className="w-10 h-10 text-blue-500" />,
      title: "DBMS",
      
      description: "Our expertise in database management systems (DBMS) ensures secure, efficient, and reliable data management for your business.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-purple-500" />,
      title: "Web Development",
      description: "We build dynamic web applications using a range of cutting-edge technologies.",
    },
    {
      icon: <Sql className="w-10 h-10 text-green-500" />,
      title: "SQL",
      description: "The power of data with our expert SQL services, designed to help you store, manage, and retrieve data efficiently and effectively.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-orange-500" />,
      title: "Mobile Application",
      description: "We develop mobile applications that deliver smooth performance and excellent user experience.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-pink-500" />,
      title: "E-Commerce",
      description: "Creating robust e-commerce platforms that empower your digital marketplace and boost sales.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-teal-500" />,
      title: "Software Testing",
      description: "Comprehensive software testing services to ensure your products are reliable, secure, and bug-free.",
    },
  ];

  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Tech Stacks
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We harness the power of cutting-edge technologies to craft innovative solutions that drive business success. Our expertise spans a wide range of tech stacks.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {stacks.map((stack, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{stack.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{stack.title}</h3>
            <p className="text-gray-600 text-sm">{stack.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
