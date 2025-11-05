import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";

// ✅ Combined Job Data
const JOBS = [
  {
    id: "1",
    title: "Full Stack Lead",
    location: "Pune, MH",
    type: "Full-time",
    team: "Engineering",
    exp: "3 to 8 Years",
    qualification: "Any Bachelor's Degree or Above",
    posted: "2025-09-01",
    skills:
      "Java8 or above, Spring, SQL, NoSQL, DSA, React, Node.js, TypeScript",
    tags: ["Java8+", "Spring", "SQL", "NoSQL", "DSA", "React", "Node.js"],
  },
  {
    id: "2",
    title: "Sr. Mobile App Developer",
    location: "Pune",
    type: "Full-time",
    team: "Mobile",
    exp: "6 to 8 Years",
    qualification: "Any Graduate or Above",
    posted: "2025-09-01",
    skills: "Flutter, React Native, iOS, Android",
    tags: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    id: "3",
    title: "Sr. Data Engineer",
    location: "Pune",
    type: "Full-time",
    team: "Data",
    exp: "3 to 8 Years",
    qualification: "Any Graduation or Above",
    posted: "2025-09-01",
    skills:
      "Spark, Big Data, PySpark, SQL, Python, R/Scala, AWS/Azure/GCP, AI & ML",
    tags: ["Spark", "Big Data", "PySpark", "SQL", "Python", "AWS", "GCP"],
  },
  {
    id: "4",
    title: "Sr. Java Microservices Developer",
    location: "Pune",
    type: "Full-time",
    team: "Platform",
    exp: "3 to 8 Years",
    qualification: "Any Graduate or Above",
    posted: "2025-09-01",
    skills: "Lucene, Solr, Kafka, ElasticSearch, Scala, Linux, TDD, Junit",
    tags: ["Lucene", "Solr", "Kafka", "ElasticSearch", "Scala", "Linux"],
  },
  {
    id: "5",
    title: "HR Admin Intern",
    location: "Pune",
    type: "Internship",
    team: "HR",
    exp: "0 to 1 Year",
    qualification: "BBA/BMS, BCom or related field",
    posted: "2025-09-01",
    skills:
      "Communication, Organization, Confidentiality, Adaptability, Teamwork",
    tags: ["Communication", "Organization", "Teamwork", "Confidentiality"],
  },
  {
    id: "6",
    title: "Java Developer Trainee",
    location: "Pune",
    type: "Internship",
    team: "Engineering",
    exp: "0 to 1 Year",
    qualification: "Any Graduate or Above",
    posted: "2025-09-01",
    skills: "Java8+, Spring, SQL, NoSQL, React, Node.js, TypeScript",
    tags: ["Java8+", "Spring", "SQL", "NoSQL", "React", "Node.js"],
  },
  {
    id: "7",
    title: "Full Stack Developer Intern",
    location: "Pune",
    type: "Internship",
    team: "Engineering",
    exp: "0 to 1 Year",
    qualification: "Any Graduate",
    posted: "2025-09-01",
    skills: "Java, Angular, React, Vue, Node.js, SQL, NoSQL, Python",
    tags: ["Java", "Angular", "React", "Vue", "Node.js", "SQL", "NoSQL"],
  },
  {
    id: "8",
    title: "Jr. Java Developer",
    location: "Pune",
    type: "Full-time",
    team: "Engineering",
    exp: "0 to 1 Year",
    qualification: "Any Graduate",
    posted: "2025-09-01",
    skills: "Java, Python, AWS, DevOps",
    tags: ["Java", "Python", "AWS", "DevOps"],
  },
  {
    id: "9",
    title: "QA Engineer",
    location: "Pune, MH",
    type: "Full-time",
    team: "QA",
    exp: "1 to 4 Years",
    qualification: "Any Graduate",
    posted: "2025-09-01",
    skills: "Java, Python, Selenium, API Automation, Appium, Postman",
    tags: ["Java", "Python", "Selenium", "API Automation", "Appium", "Postman"],
  },
];

export default function Careers() {
  const [filters, setFilters] = useState({
    fresher: false,
    internship: false,
    fulltime: false,
  });
  const [query, setQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const toggleFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ✅ Filtering Logic
  const filtered = useMemo(() => {
    return JOBS.filter((job) => {
      // Sidebar filters
      if (filters.fresher && job.exp !== "0 to 1 Year") return false;
      if (filters.internship && job.type !== "Internship") return false;
      if (filters.fulltime && job.type !== "Full-time") return false;

      // Search filter
      const text = [job.title, job.location, job.skills, job.tags.join(" ")].join(" ").toLowerCase();
      if (!text.includes(query.toLowerCase())) return false;

      return true;
    });
  }, [filters, query]);

  return (
    <div className="pt-10">
      {/* Header */}
      <header className="bg-gradient-to-r from-sky-500 to-indigo-900 text-white py-15 px-8 shadow-md text-center">
        <h1 className="text-3xl font-bold">Are you looking for a Dream Job?</h1>
        <p className="mt-2 text-md">Browse & apply for opportunities at GTasterix</p>
      </header>





{/* Layout */}
     <div className="max-w-10x1 mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside className="bg-white rounded-xl shadow p-4 h-[80vh] overflow-y-auto sticky top-6">
          <h2 className="font-semibold text-lg mb-4">Filter Jobs</h2>
           <div className="space-y-3">
             {[
              { label: "Freshers (0-1)", key: "fresher" },
              { label: "Internship", key: "internship" },
              { label: "Full Time", key: "fulltime" },
            ].map((item, idx) => (
              <label key={idx} className="flex justify-between items-center py-2 border-b cursor-pointer">
                 {item.label}
                 <input
                   type="checkbox"
                  checked={filters[item.key]}
                  onChange={() => toggleFilter(item.key)}
                  className="ml-2"
                 />
             </label>
             ))}
           </div>
         </aside>







     
        {/* Job Listings */}
        <main className="md:col-span-3 h-[80vh] overflow-y-auto pr-2">
          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by role, skill or location"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Jobs */}
          <AnimatePresence>
            {filtered.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-xl shadow mb-4 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600 text-sm mt-1">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Experience:</strong> {job.exp}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full border text-gray-600">
                      {tag}
                    </span>
                  ))}


                  
                </div>
                <div className="mt-3 flex justify-between">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    View Details
                  </button>



                   <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        to="/applyinfo"
        className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-colors"
      >
        Apply Now
      </Link>
    </motion.div>
    


                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </main>
      </div>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold">{selectedJob.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {selectedJob.team} • {selectedJob.location}
                  </p>
                  <p className="mt-2 text-gray-700">
                    <strong>Experience:</strong> {selectedJob.exp}
                  </p>
                  <p className="mt-1 text-gray-700">
                    <strong>Qualification:</strong> {selectedJob.qualification}
                  </p>
                  <p className="mt-1 text-gray-700">
                    <strong>Skills:</strong> {selectedJob.skills}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-sm text-gray-500"
                >
                  ✕ Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      
      </AnimatePresence>
  </div>
  );
}



 