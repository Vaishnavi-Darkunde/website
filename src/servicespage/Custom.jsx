 import { motion } from "framer-motion";
 
export default function Custom() {
  const steps = [
    "Requirement Analysis & Planning",
    "UI/UX Wireframing & Prototyping",
    "Agile Development",
    "Testing & QA",
    "Deployment & Integration",
    "Support & Maintenance",
  ];
 
  return (
    <section className="bg-gray-50">
      {/* Hero Banner with Image + Info */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg"
          alt="Custom Software Development Banner"
          className="w-full h-full object-cover rounded-b-2xl shadow-lg"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Custom Software Development
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Tailored software solutions that empower your business to innovate,
              streamline operations, and scale effortlessly.
            </motion.p>
          </div>
        </div>
      </div>
 
      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-purple-600 mb-10 text-center">
          Our Core Strengths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              🎯 Tailored Solutions
            </h3>
            <p className="text-gray-600">
              Software designed specifically for your unique business requirements
              and workflows.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              ⚡ Scalable Architecture
            </h3>
            <p className="text-gray-600">
              Applications built to grow with your business, ensuring high
              performance and reliability.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              🔒 Secure & Robust
            </h3>
            <p className="text-gray-600">
              Strong security protocols and modern technologies to protect your
              business data.
            </p>
          </div>
        </div>
      </div>
 
      {/* Development Process */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-purple-600 mb-10 text-center">
            Our Software Development Process
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Process Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg"
                alt="Custom Development Process"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
 
            {/* Steps */}
            <motion.ul
              className="space-y-4 text-gray-700 list-decimal list-inside"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
              }}
            >
              {steps.map((step, index) => (
                <motion.li
                  key={index}
                  className="text-lg"
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {step}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
 
      {/* Industries We Serve */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-purple-600 mb-10">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6">🏥 Healthcare</div>
            <div className="bg-white shadow-md rounded-xl p-6">💳 FinTech</div>
            <div className="bg-white shadow-md rounded-xl p-6">🛒 E-Commerce</div>
            <div className="bg-white shadow-md rounded-xl p-6">📱 SaaS</div>
          </div>
        </div>
      </section>
 
      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-purple-600 mb-8">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With years of expertise in building custom solutions, we combine
            cutting-edge technology, agile practices, and business intelligence
            to deliver top-quality software that exceeds expectations.
          </p>
        </div>
      </section>
 
      {/* Call to Action */}
      <div className="bg-purple-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Build Your Custom Software?
        </h2>
        <p className="mb-6 text-lg">
          Let’s collaborate and bring your innovative ideas to life with our
          tailored solutions.
        </p>
        {/* <a
          href="/contact"
          className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get Your Custom Software
        </a> */}
      </div>
    </section>
  );
}
 
 