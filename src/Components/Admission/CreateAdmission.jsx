import React, { useState } from "react";
import Layout from "../Layout/Layout";

function CreateAdmission() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    course: "",
    education: "",
    dob: "",
    gender: "",
    description: "",
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Admission submitted successfully!");
        setFormData({
          name: "",
          address: "",
          phone: "",
          email: "",
          course: "",
          education: "",
          dob: "",
          gender: "",
          description: "",
          agreeToTerms: false
        });
      } else {
        alert("Failed to submit admission.");
      }
    } catch (error) {
      alert("Error submitting admission.");
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Start Your <span className="text-blue-600">Educational Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the admission form to begin your transformation with our courses
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 text-center">
              <h2 className="text-3xl font-bold mb-2">Admission Form</h2>
              <p className="text-blue-100">Join hundreds of successful students who started their journey here</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                {/* Education Level */}
                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                    Highest Education <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="education"
                    id="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="">Select Education Level</option>
                    <option value="high-school">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Course Selection */}
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Course <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="course"
                    id="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="">Select a Course</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="business-management">Business Management</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Enter your complete address"
                ></textarea>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Tell us about your background, interests, and why you want to join this course..."
                ></textarea>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-8">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 mr-3 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a> and 
                    acknowledge that my personal data will be processed in accordance with the 
                    <a href="#" className="text-blue-600 hover:underline"> privacy policy</a>.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md text-lg"
              >
                Submit Application
              </button>
            </form>

            {/* Additional Information */}
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
              <p className="text-gray-600 text-sm">
                Contact our admission team at <span className="text-blue-600">admissions@psbacademy.com</span> or 
                call us at <span className="text-blue-600">+1 (555) 123-ADMIT</span> for assistance with your application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateAdmission;