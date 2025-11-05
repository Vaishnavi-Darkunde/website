export default function Ecomm() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section with Image + Overlay Info */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8182.jpg"
          alt="E-Commerce Solutions"
          className="w-full h-full object-cover rounded-b-2xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              E-Commerce Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              We build powerful, scalable, and secure e-commerce platforms
              that help businesses sell online with ease. From product
              catalogs to secure payments, we’ve got you covered.
            </p>
           
          </div>
        </div>
      </div>
 
      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              🛒 Online Storefronts
            </h3>
            <p className="text-gray-600">
              Customized storefronts designed for seamless shopping
              experiences across devices.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              💳 Secure Payments
            </h3>
            <p className="text-gray-600">
              Integration with trusted payment gateways ensuring safe
              and reliable transactions.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-500 mb-3">
              📦 Order Management
            </h3>
            <p className="text-gray-600">
              Streamlined tools to track inventory, process orders,
              and handle deliveries efficiently.
            </p>
          </div>
        </div>
        {/* <div className="mt-6 text-center">
              <a
                href="/contact"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
              >
                Get Your Online Store
              </a>
            </div> */}
      </div>
    </section>
  );
}
 
 
 