 
import { motion } from "framer-motion";
 
export default function SAP() {
  const steps = [
    "SAP Requirement Analysis & Planning",
    "System Configuration & Implementation",
    "Module Integration & Customization",
    "Testing & Quality Assurance",
    "Deployment & Go-Live Support",
    "Ongoing Support & Optimization",
  ];
 
  return (
    <section className="bg-gray-50">
      {/* Hero Banner with Image + Info */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593378_1280.jpg"
          alt="SAP Services Banner"
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
              SAP Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            >
              We provide end-to-end SAP solutions, including implementation,
              optimization, and support, to streamline enterprise processes and
              enhance business efficiency.
            </motion.p>
          </div>
        </div>
      </div>
 
      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-purple-600 mb-10 text-center">
          Our SAP Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              🛠 Implementation
            </h3>
            <p className="text-gray-600">
              Complete SAP system setup and configuration tailored to your
              business requirements.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              ⚡ Integration
            </h3>
            <p className="text-gray-600">
              Seamless integration of SAP modules with your existing systems
              to ensure smooth workflows.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              📊 Support & Optimization
            </h3>
            <p className="text-gray-600">
              Continuous monitoring, optimization, and support to maximize the
              efficiency of your SAP environment.
            </p>
          </div>
        </div>
      </div>
 
      {/* SAP Process */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-purple-600 mb-10 text-center">
            Our SAP Implementation Process
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Process Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
                alt="SAP Process"
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
            <div className="bg-white shadow-md rounded-xl p-6">🏭 Manufacturing</div>
          </div>
        </div>
      </section>
 
      {/* Why Choose SAP */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-purple-600 mb-8">
            Why Choose Our SAP Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With expertise in SAP modules and enterprise solutions, we ensure
            seamless integration, optimized business processes, and continuous
            support to empower your organization.
          </p>
        </div>
      </section>
 
      {/* Call to Action */}
      <div className="bg-purple-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Transform Your Business with SAP?
        </h2>
        <p className="mb-6 text-lg">
          Let’s collaborate and implement SAP solutions to streamline your
          operations and maximize efficiency.
        </p>
        {/* <a
          href="/contact"
          className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get SAP Consultation
        </a> */}
      </div>
    </section>
  );
}
 
 
 