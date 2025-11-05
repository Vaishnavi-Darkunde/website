 
import { motion } from "framer-motion";
 
export default function Remote() {
  const steps = [
    "Share Your Requirements",
    "We Source the Best Talent",
    "Screening & Interviews",
    "Onboarding & Training",
    "Ongoing Support & Management",
  ];
 
  return (
    <section className="bg-gray-50">
      {/* Hero Section with Image + Overlay Info */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="https://cdn.pixabay.com/photo/2020/11/13/08/37/pc-5737958_1280.jpg"
          alt="Remote Staffing"
          className="w-full h-full object-cover rounded-b-2xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Remote Staffing Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Hire the best talent from anywhere in the world. We provide skilled
              professionals to help your business scale efficiently, without the
              hassle of local recruitment.
            </motion.p>
          </div>
        </div>
      </div>
 
      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-10">
          Why Choose Our Remote Staffing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-500 mb-3">
              👩‍💻 Skilled Professionals
            </h3>
            <p className="text-gray-600">
              Access a curated pool of remote experts tailored to your project needs.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-500 mb-3">
              ⚡ Flexible Engagement
            </h3>
            <p className="text-gray-600">
              Hire full-time, part-time, or hourly staff depending on your
              business demand.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-500 mb-3">
              🔒 Secure & Reliable
            </h3>
            <p className="text-gray-600">
              We ensure proper onboarding, management, and compliance for seamless
              operations.
            </p>
          </div>
        </div>
      </div>
 
      {/* Process Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-10 text-center">
            How Our Remote Staffing Works
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Process Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2020/11/13/08/37/pc-5737958_1280.jpg"
                alt="Remote Work Process"
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
 
      {/* Industries Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-10">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6">
              🌐 IT & Software
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              📊 Finance & Accounting
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              🛍️ E-Commerce
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              📞 Customer Support
            </div>
          </div>
        </div>
      </section>
 
      {/* Call to Action */}
      <div className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Scale Your Business with Remote Talent?
        </h2>
        <p className="mb-6 text-lg">
          Let’s connect and find the perfect professionals for your team.
        </p>
        {/* <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get Remote Staffing Support
        </a> */}
      </div>
    </section>
  );
}
 
 