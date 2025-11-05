import { motion } from "framer-motion";

const steps = [
  "Requirement Analysis & Planning",
  "UI/UX Design",
  "Prototyping & Feedback",
  "Development",
  "Testing & Quality Assurance",
  "Deployment",
  "Support & Maintenance",
];

export default function Mobileapp() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section with Image + Info */}
      <div className="relative w-full h-[70vh]">
        <img
          src="https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_1280.jpg"
          alt="Mobile App Development Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content Inside Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Mobile Apps Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl"
          >
            Transforming businesses with cutting-edge mobile applications —
            from startups to enterprises, we deliver innovative solutions
            that enhance accessibility, engagement, and growth.
          </motion.p>
        </div>
      </div>

      {/* Intro Section with Text + Image */}
      <div className="max-w-6xl mx-auto py-20 px-6 space-y-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-gray-700 space-y-4">
            <p>
              Since their inception, mobile devices & apps are transfiguring the ways of our lives and changing the digital world.
            </p>
            <p>
              Every day, countless apps are developed to simplify various processes in multifarious industries and this has made mobile-based applications the single point of attention for individuals and businesses around the globe.
            </p>
            <p>
              From startups to large scale businesses, everyone is dependent on mobile apps for reinforcing their brand, increasing visibility, accessibility, and seamless scheduling.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_1280.jpg"
              alt="App Development"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="bg-white py-16 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-12">
            Why Choose GTasterix for Mobile App Development?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048947.png"
                alt="Expert Developers"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Expert Developers</h3>
              <p className="text-gray-600">
                Our experienced team builds scalable, secure, and high-performance apps.
              </p>
            </div>
            <div className="p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="User Centric Design"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">User-Centric Design</h3>
              <p className="text-gray-600">
                We focus on creating engaging, intuitive, and user-friendly interfaces.
              </p>
            </div>
            <div className="p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                alt="End to End Support"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
              <p className="text-gray-600">
                From planning to post-launch maintenance, we are with you at every step.
              </p>
            </div>
          </div>
        </section>

        {/* 7-Step Approach Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-blue-500 mb-10 text-center">
              Our Approach to Mobile App Development in 7 Easy Steps
            </h2>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="http://www.winnersoft.co.in/all_img/mobile-apps.png"
                  alt="Mobile App Development Process"
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Steps with Animation */}
              <motion.ul
                className="space-y-4 text-gray-700 list-decimal list-inside"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.3 },
                  },
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

        {/* Technologies Section */}
        <section className="py-16 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-12">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="Java"
              className="w-20 mx-auto"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919852.png"
              alt="React Native"
              className="w-20 mx-auto"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
              alt="Android"
              className="w-20 mx-auto"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919854.png"
              alt="iOS"
              className="w-20 mx-auto"
            />
          </div>
        </section>

        {/* Call to Action */}
        {/* <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Explore Mobile App Development
          </a>
        </div> */}
      </div>
    </section>
  );
}




// import { motion } from "framer-motion";


// export default function Mobileapp() {
//   return (
//     <>
//       <section className="bg-gray-50">
//         {/* Hero Section with Image + Info */}
//         <div className="relative w-full h-[70vh]">
//           <img
//             src="https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_1280.jpg"
//             alt="Mobile App Development Banner"
//             className="w-full h-full object-cover"
//           />

//           {/* Dark Overlay */}
//           <div className="absolute inset-0 bg-black/50"></div>

//           {/* Text Content Inside Image */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//             <motion.h1
//               initial={{ opacity: 0, y: -20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
//             >
//               Mobile Apps Development
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl"
//             >
//               Transforming businesses with cutting-edge mobile applications —
//               from startups to enterprises, we deliver innovative solutions
//               that enhance accessibility, engagement, and growth.
//             </motion.p>
//           </div>
//         </div>

//       </section>


//       <section>

//         <div className="max-w-5xl mx-auto p-6">
//   {/* Heading */}
//   <h2 className="text-3xl font-bold text-center mb-6">
//     Custom Mobile App Development Services
//   </h2>
//  <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
//       {/* Paragraph 1 */}
//       <motion.p
//         className="text-gray-700 text-lg leading-relaxed text-justify"
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         With our profound experience, methodologies, and development process, we provide top-notch app solutions utilizing cutting-edge technologies. You may hire Mobile App Developers from our astute, skilled team that makes us quite unique among the crowd of other app development companies.
//       </motion.p>

//       {/* Paragraph 2 */}
//       <motion.p
//         className="text-gray-700 text-lg leading-relaxed text-justify"
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1.2, delay: 0.2 }}
//       >
//         We create outstanding mobile apps to allow our users to exactly decipher the ideations of innovation in order to make their enterprises truly distinctive. Experience a dignified quality in custom mobile app development and grasp a seamless and robust mobility ecosystem with highly interactive displays and reaffirmed quality. As a leading mobile apps development company, the development team builds scalable and engaging mobile apps as per your business requirements that are highly sophisticated and extremely functional.
//       </motion.p>
//     </div>
 
//  <div className="max-w-6xl mx-auto px-6 py-10">
//   <h2 className="text-3xl font-bold text-center mb-10">
//     Mobile App Development Services
//   </h2>

//   <div className="grid md:grid-cols-3 gap-6">
//   {/* iPhone Card */}
//   <div className="bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:bg-blue-50 hover:shadow-2xl">
//     <h3 className="text-xl font-semibold mb-4 text-blue-600 hover:text-blue-800">IPHONE</h3>
//     <p className="text-gray-700 leading-relaxed">
//       GTasterix Pvt Ltd delivers bespoke iPhone app development services across the globe that ensure startups & businesses gain consistent growth and maximum return on their IT investments.
//     </p>
//   </div>

//   {/* Android Card */}
//   <div className="bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:bg-green-50 hover:shadow-2xl">
//     <h3 className="text-xl font-semibold mb-4 text-green-600 hover:text-green-800">ANDROID</h3>
//     <p className="text-gray-700 leading-relaxed">
//       GTasterix Pvt Ltd is a renowned Android Application Development Company in India offering offshore Android App Development Services & Android Mobile Application Development.
//     </p>
//   </div>

//   {/* Hybrid Card */}
//   <div className="bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:bg-purple-50 hover:shadow-2xl">
//     <h3 className="text-xl font-semibold mb-4 text-purple-600 hover:text-purple-800">HYBRID</h3>
//     <p className="text-gray-700 leading-relaxed">
//       Hybrid Mobile App Development Company offers Cross-Platform Mobile Application development services for all hybrid platforms with optimum quality standards.
//     </p>
//   </div>
// </div>

// </div>


// </div>

//       </section>




//     </>


//   );
// }

