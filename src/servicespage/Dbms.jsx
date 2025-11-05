export default function Dbms() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section with Image + Overlay Info */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/04/12/20/server-1235959_1280.jpg"
          alt="Database Management Systems"
          className="w-full h-full object-cover rounded-b-2xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Database Management Systems (DBMS)
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Our expertise in database management ensures secure, efficient,
              and scalable solutions. We help businesses organize, store, and
              manage their critical data with modern DBMS technologies.
            </p>
           
          </div>
        </div>
      </div>
 
      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-500 mb-3">
              🗄️ Efficient Data Storage
            </h3>
            <p className="text-gray-600">
              Structured storage solutions that optimize data retrieval and
              management.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-500 mb-3">
              ⚡ High Performance
            </h3>
            <p className="text-gray-600">
              Database tuning and optimization for fast queries and real-time
              processing.
            </p>
          </div>
 
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-500 mb-3">
              🔒 Data Security
            </h3>
            <p className="text-gray-600">
              Advanced security protocols, encryption, and access controls to
              safeguard sensitive information.
            </p>
          </div>
        </div>
        {/* <div className="mt-6">
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Explore DBMS Solutions
              </a>
            </div> */}
      </div>
    </section>
  );
}
 