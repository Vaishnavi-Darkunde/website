import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ApplyInfo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    college: "",
    passingYear: "",
    percentage: "",
    skills: "",
    experience: "",
    resumeLink: "",
    github: "",
    linkedin: "",
    additionalInfo: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all required fields manually (optional)
    const requiredFields = ["fullName", "email", "phone", "qualification", "college", "passingYear", "percentage", "skills", "resumeLink"];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill the required field: ${field}`);
        return;
      }
    }

    // Save to localStorage
    localStorage.setItem("jobApplication", JSON.stringify(formData));
    setSubmitted(true);

    // Redirect after 5 sec
    setTimeout(() => navigate("/careers"), 5000);
  };

  return (
    <AnimatePresence>
      {submitted ? (
        <motion.div
          className=" flex flex-col items-center justify-center min-h-screen bg-green-50 text-center p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-green-700">🎉 Application Submitted!</h2>
          <p className="text-gray-600 mt-3">
            Thank you, <strong>{formData.fullName}</strong>!<br />
            Your application has been received successfully.
          </p>
          <p className="text-sm mt-4 text-gray-500">
            Redirecting you back to careers page...
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-25 px-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className=" bg-white shadow-2xl rounded-3xl w-full max-w-4xl p-8 border border-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className=" text-4xl font-bold text-center text-indigo-700 mb-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Job Application Form
            </motion.h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Personal Info */}
              <motion.h3
                className="text-xl font-semibold text-gray-700 border-b pb-2"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Personal Information
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-4">
                {["fullName", "email", "phone", "address"].map((field, idx) => (
                  <motion.input
                    key={field}
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    name={field}
                    placeholder={
                      field === "fullName"
                        ? "Full Name*"
                        : field === "email"
                        ? "Email ID*"
                        : field === "phone"
                        ? "Phone Number*"
                        : "Address"
                    }
                    value={formData[field]}
                    onChange={handleChange}
                    className="border p-3 rounded-xl w-full focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 hover:shadow-lg transition-shadow duration-200"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    required={field !== "address"}
                  />
                ))}
              </div>

              {/* Education Info */}
              <motion.h3
                className="text-xl font-semibold text-gray-700 border-b pb-2 mt-6"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Education Information
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-4">
                {["qualification", "college", "passingYear", "percentage"].map((field, idx) => (
                  <motion.input
                    key={field}
                    type={field === "passingYear" ? "number" : "text"}
                    name={field}
                    placeholder={
                      field === "qualification"
                        ? "Qualification*"
                        : field === "college"
                        ? "College/University*"
                        : field === "passingYear"
                        ? "Passing Year*"
                        : "Percentage / CGPA*"
                    }
                    value={formData[field]}
                    onChange={handleChange}
                    className="border p-3 rounded-xl w-full focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 hover:shadow-lg transition-shadow duration-200"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    required
                  />
                ))}
              </div>

              {/* Professional Info */}
              <motion.h3
                className="text-xl font-semibold text-gray-700 border-b pb-2 mt-6"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Professional Information
              </motion.h3>
              {["skills", "experience"].map((field, idx) => (
                <motion.textarea
                  key={field}
                  name={field}
                  placeholder={field === "skills" ? "Technical Skills*" : "Work Experience"}
                  value={formData[field]}
                  onChange={handleChange}
                  className="border p-3 rounded-xl w-full focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 hover:shadow-lg transition-shadow duration-200"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * idx }}
                  required={field === "skills"}
                />
              ))}

              {/* Resume Upload */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-gray-700 font-medium mb-1">
                  Upload Resume (PDF/DOC)*
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData((prev) => ({ ...prev, resumeLink: reader.result }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="border p-3 rounded-xl w-full focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 hover:shadow-lg transition-shadow duration-200"
                  required
                />
                {formData.resumeLink && (
                  <p className="text-sm mt-1 text-green-600">Resume selected ✅</p>
                )}
              </motion.div>

              

              {/* Additional Info */}
              <motion.textarea
                name="additionalInfo"
                placeholder="Any additional information"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="border p-3 rounded-xl w-full focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 hover:shadow-lg transition-shadow duration-200"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              />

              {/* Submit Button */}
              <motion.div
                className="pt-6"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 hover:scale-105 transition-transform shadow-lg"
                  whileHover={{ scale: 0.99 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Submit Application
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
