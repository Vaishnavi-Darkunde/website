import { motion } from "framer-motion";
import { ShieldCheck, Bug, Cpu } from "lucide-react";
 
export default function Software() {
  const steps = [
    "Requirement Analysis & Test Planning",
    "Manual Testing",
    "Automated Testing",
    "Performance & Security Testing",
    "Reporting & Feedback",
  ];
 
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
          alt="Software Testing Services"
          className="w-full h-full object-cover rounded-b-2xl shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            >
              Software Testing Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Ensure your product’s quality, performance, and reliability with
              our end-to-end testing services—from manual checks to automation
              and advanced security testing.
            </motion.p>
          </div>
        </div>
      </div>
 
      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-10">
          Why Choose Our Software Testing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-500 mb-3">
              🐞 Manual Testing
            </h3>
            <p className="text-gray-600">
              Our QA team ensures your application behaves flawlessly in
              real-world scenarios.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-500 mb-3">
              ⚡ Automated Testing
            </h3>
            <p className="text-gray-600">
              Save time and improve accuracy with repeatable automated test scripts.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-500 mb-3">
              🔒 Security & Performance
            </h3>
            <p className="text-gray-600">
              We test for vulnerabilities, speed, and scalability to ensure a secure experience.
            </p>
          </div>
        </div>
      </div>
 
      {/* Steps Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-10 text-center">
            Our Software Testing Process
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                alt="Testing Process"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
 
            <motion.ul
              className="space-y-4 text-gray-700 list-decimal list-inside"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              {steps.map((step, index) => (
                <motion.li
                  key={index}
                  className="text-lg"
                  variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                >
                  {step}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
 
      {/* Industries Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-10">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6">🌐 IT & Software</div>
            <div className="bg-white shadow-md rounded-xl p-6">📊 Finance & Accounting</div>
            <div className="bg-white shadow-md rounded-xl p-6">🛍️ E-Commerce</div>
            <div className="bg-white shadow-md rounded-xl p-6">📞 Customer Support</div>
          </div>
        </div>
      </section>
 
      {/* Call to Action */}
      <div className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Ensure Your Software Quality?
        </h2>
        <p className="mb-6 text-lg">
          Connect with us to test, optimize, and secure your applications.
        </p>
        {/* <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get Started with Software Testing
        </a> */}
      </div>
    </section>
  );
}
 
 