


import { motion } from "framer-motion";
 
export default function Contact() {
  return (
    <section className="bg-gray-50 py-30">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center text-gray-800 mb-12"
        >
          Contact Us
        </motion.h1>
 
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              We would love to <span className="text-sky-600">connect</span> with you!
            </h2>
            <p className="text-gray-600">
              Please fill out the form or email us directly at{" "}
              <a href="mailto:info@gtasterix.com" className="text-sky-600 font-semibold">
                info@gtasterix.com
              </a>
            </p>
 
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>📍 Address:</strong>
                <br />
                   Office No.818,819 Suratwala Mark Plazzo, Hinjewadi-Wakad Rd,
                <br />
                Hinjewadi, Pimpri-Chinchwad, Pune, Maharashtra 411057
              </p>
              <p>
                <strong>📞 Phone:</strong>{" "}
                <a href="tel:+919209257944" className="text-sky-600">
                  +91-9209257944
                </a>
              </p>
              <p>
                <strong>📧 Email:</strong>{" "}
                <a href="mailto:info@gtasterix.com" className="text-sky-600">
                  info@gtasterix.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <strong>🔗 LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/company/gtasterix-it-services-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-sky-600"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.75-2 3.6-2 3.85 0 4.55 2.5 4.55 5.75V24h-4v-8.25c0-2-.05-4.6-2.8-4.6-2.8 0-3.25 2.2-3.25 4.45V24h-4V8z" />
                  </svg>
                  GTasterix IT Services Pvt Ltd.
                </a>
              </p>
            </div>
 
            {/* Map Box */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-6 bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.038916474696!2d73.74064417519315!3d18.606982982507576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b92e70e48d2b%3A0x92f5cc2f0cfdd0f7!2sSuratwala%20Mark%20Plaza!5e0!3m2!1sen!2sin!4v1695654231248!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </motion.div>
          </motion.div>
 
          {/* Right Side - Sticky Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-2xl p-8 sticky top-20 self-start"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-3 rounded-lg font-semibold hover:bg-sky-700 transition duration-300"
              >
                Send Message
              </button>
              
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
 
 