// export default function Cloud() {
//   return (
//     <section className="bg-gray-50">
     
//       {/* Hero Section with Image + Info */}
//       <div className="relative w-full h-[70vh]">
//         <img
//           src="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fi…
//           alt= "Cloud Computing Banner"
//           className="w-full h-full object-cover"
//         />
 
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>
 
//         {/* Text Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//           <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
//             Cloud Computing
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
//             Empower your business with scalable, secure, and cost-effective
//             cloud solutions. From migration to management, we ensure seamless
//             adoption and maximum efficiency.
//           </p>
//         </div>
//       </div>
 
//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto text-center py-20 px-6">
//         {/* Page Intro */}
//         <p className="text-lg text-gray-600 mb-12">
//           We help organizations migrate, deploy, and manage applications on the
//           cloud with ease, improving flexibility and reducing IT costs.
//         </p>
 
//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
//             <h3 className="text-xl font-semibold text-indigo-500 mb-3">
//               ☁️ Cloud Migration
//             </h3>
//             <p className="text-gray-600">
//               Seamlessly move your applications and infrastructure to the cloud
//               with minimal downtime.
//             </p>
//           </div>
 
//           <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
//             <h3 className="text-xl font-semibold text-indigo-500 mb-3">
//               🔒 Secure Infrastructure
//             </h3>
//             <p className="text-gray-600">
//               Enterprise-grade security to safeguard your data and
//               ensure compliance at all levels.
//             </p>
//           </div>
 
//           <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
//             <h3 className="text-xl font-semibold text-indigo-500 mb-3">
//               ⚡ Scalability & Flexibility
//             </h3>
//             <p className="text-gray-600">
//               Scale resources up or down as per business demand, ensuring
//               cost optimization and efficiency.
//             </p>
//           </div>
//         </div>
 
       
//       </div>
//       {/* Call to Action */}
//         <div className="mt-12">
//           <a
//             href="/contact"
//             className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
//           >
//             Explore Cloud Solutions
//           </a>
//         </div>
//     </section>
//   );
// }
 
import React from "react";
 
export default function Cloud() {
  return (
    <section className="bg-gray-50">
      {/* Full Width Hero Section with Image + Text */}
      <div className="relative w-full h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fi…"
          alt="Cloud Computing Banner"
          className="w-full h-full object-cover"
        />
 
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
 
        {/* Centered Text on Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Cloud Computing Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Empower your business with scalable, secure, and cost-effective
            cloud solutions. From migration to management, we ensure seamless
            adoption and maximum efficiency.
          </p>
        </div>
      </div>
 
      {/* Section with Image + Text */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src="https://cdn.pixabay.com/photo/2024/02/26/17/05/cloud-8598424_1280.jpg"
              alt="Cloud Services"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
 
          {/* Right Side - Text */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-indigo-600 mb-6">
              Why Choose Our Cloud Solutions?
            </h2>
 
            <p className="text-gray-700 text-lg">
              Cloud computing transforms the way businesses operate by reducing
              infrastructure costs and enabling secure, on-demand scalability.
            </p>
            <p className="text-gray-700 text-lg">
              Our services cover cloud migration, management, security, and
              optimization, allowing your business to focus on growth.
            </p>
            <p className="text-gray-700 text-lg">
              With proven expertise and partnerships with major providers, we
              help you harness the full potential of the cloud.
            </p>
          </div>
        </div>
      </section>
 
      {/* Services Offered */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-indigo-600 mt-8">We Offer:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
          <li>Seamless cloud migration with minimal downtime.</li>
          <li>Secure, enterprise-grade infrastructure protection.</li>
          <li>Scalable resources to meet business demands.</li>
          <li>Cost-optimized solutions with maximum ROI.</li>
          <li>24/7 monitoring and cloud management support.</li>
          <li>Hybrid and multi-cloud deployment expertise.</li>
          <li>Disaster recovery and data backup services.</li>
          <li>Performance tuning and workload optimization.</li>
        </ul>
 
        {/* Additional Info */}
        <p className="text-gray-700 text-lg mt-6">
          Whether you're moving to the cloud for the first time or optimizing
          your existing setup, we deliver solutions tailored to your needs.
          Our goal is to make your business smarter, faster, and future-ready.
        </p>
      </section>
 
     
    </section>
  );
}
 
 